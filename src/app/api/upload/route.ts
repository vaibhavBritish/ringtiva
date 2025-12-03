import { PutObjectCommand, S3, S3Client } from "@aws-sdk/client-s3";
import { NextRequest, NextResponse } from "next/server";

export async function POST(Request: NextRequest) {
    try {
        const formData = await Request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ message: "No file found" }, { status: 400 })
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const client = new S3Client({
            region: process.env.AWS_REGION,
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
            },
        });

        const fileName = `${Date.now()}-${file.name}`;

        const command = new PutObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME!,
            Key: fileName,
            Body: buffer,
            ContentType: file.type,
        });

        await client.send(command);
        const imageUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;

        return NextResponse.json({ message: "File uploaded successfully", url:imageUrl }, { status: 200 })

    } catch (error) {
        console.log("Error occurs in uploading blog Image",error)
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
    }
}