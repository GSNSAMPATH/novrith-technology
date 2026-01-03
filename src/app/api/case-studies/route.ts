import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  const query = `
    *[_type == "caseStudy"] | order(order asc) {
      _id,
      title,
      client,
      description,
      slug,
      "image": image.asset->url
    }
  `;

  const data = await client.fetch(query);
  return NextResponse.json(data);
}
