import { NextRequest, NextResponse } from "next/server";

const GHL_API_KEY = process.env.GHL_API_KEY;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;
const GHL_BASE = "https://services.leadconnectorhq.com";
const GHL_VERSION = "2021-07-28";

function ghlHeaders() {
  return {
    Authorization: `Bearer ${GHL_API_KEY}`,
    Version: GHL_VERSION,
    "Content-Type": "application/json",
  };
}

export async function POST(request: NextRequest) {
  if (!GHL_API_KEY || !GHL_LOCATION_ID) {
    console.error("Missing GHL environment variables");
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { firstName, lastName, email, phone, message, consentTransactional, consentMarketing } = body as {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    message?: string;
    consentTransactional?: boolean;
    consentMarketing?: boolean;
  };

  if (!firstName || !lastName || !email || !phone || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Create contact in GHL with the "heypearl" tag to trigger the workflow
  const createRes = await fetch(`${GHL_BASE}/contacts/`, {
    method: "POST",
    headers: ghlHeaders(),
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      phone,
      locationId: GHL_LOCATION_ID,
      tags: ["heypearl"],
      source: "todd-spencer.com",
    }),
  });

  const createData = await createRes.json() as {
    contact?: { id: string };
    meta?: { contactId?: string };
    message?: string;
  };

  // Duplicate contact — treat as success, grab the existing contact id
  if (!createRes.ok) {
    if (createRes.status === 400 && createData.meta?.contactId) {
      const contact = { id: createData.meta.contactId };
      if (message) {
        await fetch(`${GHL_BASE}/contacts/${contact.id}/notes`, {
          method: "POST",
          headers: ghlHeaders(),
          body: JSON.stringify({
            body: `Website inquiry (returning contact):\n\n${message}\n\n---\nTransactional SMS: ${consentTransactional ? "Yes" : "No"}\nMarketing SMS: ${consentMarketing ? "Yes" : "No"}`,
          }),
        }).catch((e) => console.error("GHL add note failed:", e));
      }
      return NextResponse.json({ success: true });
    }
    console.error("GHL create contact failed:", createRes.status, createData);
    return NextResponse.json({ error: "Failed to create contact" }, { status: 502 });
  }

  const { contact } = createData as { contact: { id: string } };

  // Add the form message + consent flags as a note on the contact
  if (contact?.id) {
    const consentLine = [
      `Transactional SMS consent: ${consentTransactional ? "Yes" : "No"}`,
      `Marketing SMS consent: ${consentMarketing ? "Yes" : "No"}`,
    ].join("\n");

    await fetch(`${GHL_BASE}/contacts/${contact.id}/notes`, {
      method: "POST",
      headers: ghlHeaders(),
      body: JSON.stringify({
        body: `Website inquiry:\n\n${message}\n\n---\n${consentLine}`,
      }),
    }).catch((e) => console.error("GHL add note failed:", e));
  }

  return NextResponse.json({ success: true });
}
