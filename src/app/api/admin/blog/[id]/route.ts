import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";

export async function GET(Request: NextRequest, context: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await context.params;
        const blog = await prisma.blogs.findUnique({
            where: { id }
        })

        return NextResponse.json({ blog }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error fetching course" }, { status: 500 });
    }
}

export async function DELETE(Request: NextRequest, context: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await context.params;
        const blog = await prisma.blogs.delete({
            where: { id }
        })
        return NextResponse.json({ blog }, { status: 200 });
    } catch (error) {
        console.log("Error while deleting blog", error);
    }
}

export async function PUT(Request: NextRequest, context: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await context.params;
        const { title, description, content, image, slug } = await Request.json();

        const updatedSlug = slugify(title, { lower: true, strict: true });

        const blog = await prisma.blogs.update({
            where: { id },
            data: { title, description, content, image ,slug:updatedSlug}
        })

        return NextResponse.json({ message: "Blog Updated Successfully", blog }, { status: 200 });
    } catch (error) {
        console.log("Error while updating blog", error);
    }
}