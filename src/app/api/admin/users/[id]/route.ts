import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(Request: NextRequest, context: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await context.params;
        const blog = await prisma.user.delete({
            where: { id }
        })
        return NextResponse.json({ blog }, { status: 200 });
    } catch (error) {
        console.log("Error while deleting blog", error);
    }
}