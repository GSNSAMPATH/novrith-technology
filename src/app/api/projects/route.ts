import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  const query = `
    *[_type == "project"] | order(order asc) {
      _id,
      title,
      description,
      link,
      "image": image.asset->url
    }
  `;

  const projects = await client.fetch(query);
  return NextResponse.json(projects);
}
