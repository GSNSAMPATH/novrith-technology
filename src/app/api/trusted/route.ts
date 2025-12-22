import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  const query = `
    *[_type == "trustedLogo"] | order(order asc) {
      "logo": logo.asset->url
    }
  `;

  const logos = await client.fetch(query);
  return NextResponse.json(logos);
}
