import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const blogs = await prisma.blogs.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(
      { blogs },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error fetching blogs:", error);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}
