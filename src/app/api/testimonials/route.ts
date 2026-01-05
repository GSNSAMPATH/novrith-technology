import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  const query = `
    *[_type == "testimonial"] | order(order asc) {
      _id,
      name,
      description
    }
  `;

  const testimonials = await client.fetch(query);
  return NextResponse.json(testimonials);
}
