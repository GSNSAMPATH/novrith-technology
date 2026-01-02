import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  const query = `
    *[_type == "team"] | order(order asc) {
      _id,
      name,
      role,
      description,
      "image": image.asset->url
    }
  `;

  const team = await client.fetch(query);
  return NextResponse.json(team);
}
