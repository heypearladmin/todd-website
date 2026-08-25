import { NextRequest, NextResponse } from "next/server";
import { PDF_GUIDES } from "@/lib/content/pdf-guides";

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

async function addNote(contactId: string, guideLabel: string) {
  await fetch(`${GHL_BASE}/contacts/${contactId}/notes`, {
    method: "POST",
    headers: ghlHeaders(),
    body: JSON.stringify({
      body: `PDF guide download from todd-spencer.com\n\nGuide requested: ${guideLabel}`,
    }),
  }).catch((e) => console.error("GHL add note failed:", e));
}

async function addTag(contactId: string, guideSlug: string) {
  await fetch(`${GHL_BASE}/contacts/${contactId}/tags`, {
    method: "POST",
    headers: ghlHeaders(),
    body: JSON.stringify({ tags: ["heypearl", "pdf-lead-magnet", `pdf-${guideSlug}`] }),
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

  const { firstName, email, phone, guideSlug } = body as {
    firstName?: string;
    email?: string;
    phone?: string;
    guideSlug?: string;
  };

  if (!firstName || !email || !guideSlug) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const guide = PDF_GUIDES[guideSlug];
  if (!guide) {
    return NextResponse.json({ error: "Unknown guide" }, { status: 400 });
  }

  // Step 1: Create contact WITHOUT tag so GHL registers the "Contact Created" event cleanly
  const createRes = await fetch(`${GHL_BASE}/contacts/`, {
    method: "POST",
    headers: ghlHeaders(),
    body: JSON.stringify({
      firstName,
      email,
      ...(phone ? { phone } : {}),
      locationId: GHL_LOCATION_ID,
      source: guide.source,
    }),
  });

  const createData = (await createRes.json()) as {
    contact?: { id: string };
    meta?: { contactId?: string };
  };

  // Duplicate contact — add note to existing contact and still add tag to re-trigger
  if (!createRes.ok) {
    if (createRes.status === 400 && createData.meta?.contactId) {
      const contactId = createData.meta.contactId;
      await Promise.all([addNote(contactId, guide.label), addTag(contactId, guideSlug)]);
      return NextResponse.json({ success: true, downloadUrl: guide.pdfSrc });
    }
    console.error("GHL create contact failed:", createRes.status, createData);
    return NextResponse.json({ error: "Failed to create contact" }, { status: 502 });
  }

  const contactId = createData.contact?.id;
  if (!contactId) {
    return NextResponse.json({ error: "No contact ID returned" }, { status: 502 });
  }

  // Step 2: Add note and tag separately — tag addition triggers the GHL workflow
  await Promise.all([addNote(contactId, guide.label), addTag(contactId, guideSlug)]);

  return NextResponse.json({ success: true, downloadUrl: guide.pdfSrc });
}
