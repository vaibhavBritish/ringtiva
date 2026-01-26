import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(Request: NextRequest, context: { params: Promise<{ slug: string }> }) {
    try {
        const { slug } = await context.params;
        const blog = await prisma.blogs.findUnique({
            where: { slug }
        })

        return NextResponse.json({ message: "Fetched blog", blog }, { status: 200 })
    } catch (error) {
        console.log("Error occurs while fetching blog", error);
    }
}