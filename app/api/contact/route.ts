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

async function addNote(contactId: string, consentTransactional: boolean, consentMarketing: boolean) {
  await fetch(`${GHL_BASE}/contacts/${contactId}/notes`, {
    method: "POST",
    headers: ghlHeaders(),
    body: JSON.stringify({
      body: `Website inquiry from todd-spencer.com\n\nTransactional SMS: ${consentTransactional ? "Yes" : "No"}\nMarketing SMS: ${consentMarketing ? "Yes" : "No"}`,
    }),
  }).catch((e) => console.error("GHL add note failed:", e));
}

async function addTag(contactId: string) {
  await fetch(`${GHL_BASE}/contacts/${contactId}/tags`, {
    method: "POST",
    headers: ghlHeaders(),
    body: JSON.stringify({ tags: ["heypearl"] }),
  }).catch((e) => console.error("GHL add tag failed:", e));
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

  const { firstName, lastName, email, phone, consentTransactional, consentMarketing } = body as {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    consentTransactional?: boolean;
    consentMarketing?: boolean;
  };

  if (!firstName || !lastName || !email || !phone) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Step 1: Create contact WITHOUT tag so GHL registers the "Contact Created" event cleanly
  const createRes = await fetch(`${GHL_BASE}/contacts/`, {
    method: "POST",
    headers: ghlHeaders(),
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      phone,
      locationId: GHL_LOCATION_ID,
      source: "todd-spencer.com",
    }),
  });

  const createData = await createRes.json() as {
    contact?: { id: string };
    meta?: { contactId?: string };
  };

  // Duplicate contact — add note to existing contact and still add tag to re-trigger
  if (!createRes.ok) {
    if (createRes.status === 400 && createData.meta?.contactId) {
      const contactId = createData.meta.contactId;
      await Promise.all([
        addNote(contactId, !!consentTransactional, !!consentMarketing),
        addTag(contactId),
      ]);
      return NextResponse.json({ success: true });
    }
    console.error("GHL create contact failed:", createRes.status, createData);
    return NextResponse.json({ error: "Failed to create contact" }, { status: 502 });
  }

  const contactId = createData.contact?.id;
  if (!contactId) {
    return NextResponse.json({ error: "No contact ID returned" }, { status: 502 });
  }

  // Step 2: Add note and tag separately — tag addition triggers the GHL workflow
  await Promise.all([
    addNote(contactId, !!consentTransactional, !!consentMarketing),
    addTag(contactId),
  ]);

  return NextResponse.json({ success: true });
}
