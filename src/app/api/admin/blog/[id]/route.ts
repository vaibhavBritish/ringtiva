import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const blog = await prisma.blogs.findUnique({
      where: { id }
    });

    return NextResponse.json({ blog }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error fetching blog" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
      const { id } = await context.params;

    const blog = await prisma.blogs.delete({
      where: { id }
    });

    return NextResponse.json({ blog }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting blog" }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const { title, description, content, image } = await req.json();

    const updatedSlug = slugify(title, { lower: true, strict: true });

    const blog = await prisma.blogs.update({
      where: { id },
      data: {
        title,
        description,
        content,
        image,
        slug: updatedSlug
      }
    });

    return NextResponse.json({ message: "Blog Updated Successfully", blog }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error updating blog" }, { status: 500 });
  }
}
