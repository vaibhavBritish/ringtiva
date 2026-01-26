import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";

export async function POST(Request: NextRequest) {
    try {
        const { title, description, content, image } = await Request.json();

        if (!title || !description || !content) {
            return NextResponse.json(
                { message: "All fields are required" },
                { status: 400 }
            );
        }

        let slug = slugify(title, { lower: true, strict: true });

        const blog = await prisma.blogs.create({
            data: {
                title,
                description,
                content,
                image,          
                slug,
            },
        });

        return NextResponse.json(
            { message: "Blog created successfully", blog },
            { status: 201 }
        );
    } catch (error) {
        console.error("Blog Create Error:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}

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