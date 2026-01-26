import { prisma } from "@/lib/prisma";
import ImageKit from "imagekit";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY!,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT!,
});

interface payload {
  id: string,
  email: string,
  isAdmin: boolean,
  userType: string
}


export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as payload;

    if (decoded.userType !== "ADVERTISER") {
      return NextResponse.json({ message: "Only Advertiser can create leads" }, { status: 401 });
    }

    const formData = await request.formData();

    const countryRegion = formData.get("countryRegion") as string;
    const stateProvince = formData.get("stateProvince") as string;
    const city = formData.get("city") as string;
    const postalCode = formData.get("postalCode") as string;
    const category = formData.get("category") as string;
    const subCategory = formData.get("subCategory") as string;
    const fullName = formData.get("fullName") as string;
    const offerType = formData.get("offerType") as string;
    const payouts = Number(formData.get("payouts"));
    const materialModeration = formData.get("materialModeration") as string;
    const tools = formData.get("tools") as string;
    const leadsLimit = Number(formData.get("leadsLimit"));
    const isMerchantAllowedToRefuseLeads =
      formData.get("isMerchantAllowedToRefuseLeads") === "true";

    const imageFile = formData.get("imageFile") as File;

    if (!imageFile || imageFile.size === 0) {
      return NextResponse.json(
        { message: "Image is required" },
        { status: 400 }
      );
    }


    const bytes = await imageFile.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadResponse = await imagekit.upload({
      file: buffer.toString("base64"),
      fileName: `${fullName.replace(/\s+/g, "_")}.jpg`,
      folder: "/leads_images",
    });

    const lead = await prisma.lead.create({
      data: {
        userId: decoded.id,
        countryRegion,
        stateProvince,
        city,
        postalCode,
        category: category,
        subCategory,
        fullName,
        offerType,
        payouts,
        materialModeration,
        tools,
        leadsLimit: leadsLimit,
        isMerchantAllowedToRefuseLeads,
        imageUrl: uploadResponse.url,
      },
    });

    return NextResponse.json(
      { message: "Lead Created Successfully", lead },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

interface JWTPayload {
  id: string;
  email: string;
  isAdmin: boolean;
  userType?: string;
}

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as JWTPayload;

    const leads = await prisma.lead.findMany({
      where: {
        userId: decoded.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ leads }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Authentication failed" },
      { status: 401 }
    );
  }
}
