import { NextRequest, NextResponse } from "next/server";

const GHL_API_KEY = process.env.GHL_API_KEY;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;
const GHL_BASE = "https://services.leadconnectorhq.com";
const GHL_VERSION = "2021-07-28";

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

  const { email } = body as { email?: string };
  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const res = await fetch(`${GHL_BASE}/contacts/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GHL_API_KEY}`,
      Version: GHL_VERSION,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      locationId: GHL_LOCATION_ID,
      tags: ["heypearl"],
      source: "todd-spencer.com newsletter",
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("GHL newsletter signup failed:", res.status, err);
    return NextResponse.json({ error: "Failed to create contact" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
