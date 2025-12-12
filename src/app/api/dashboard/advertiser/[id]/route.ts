import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, context: { params: Promise<{id:string}>}){
    try {
        const {id} = await context.params;
        const lead = await prisma.leads.findUnique({
            where:{
                id: id
            }
        })

        return NextResponse.json({message:"Lead fetched successfully", lead}, {status: 200});
    } catch (error) {
        console.log("Error getting while fetching lead by id:", error);
    }
}

export async function DELETE(request:NextRequest, context : {params : Promise<{id:string}>}){
    try {
        const {id} = await context.params;
        const deleteLeadById = await prisma.leads.delete({
            where:{
                id: id
            }
        })

        return NextResponse.json({message:"Lead deleted successfully",deleteLeadById}, {status: 200});
    } catch (error) {
        console.log("Error getting while deleting lead by id:", error);
    }
}

export async function PUT(request:NextRequest, context : {params:Promise<{id:string}>}){
    try {
        const {id} = await context.params;
        if(!id){
            return NextResponse.json({message:"Invalid lead "},{status:400});
        }

        const body = await request.json();
        
    } catch (error) {
        console.log("Error getting while updating lead by id:", error);
    }
}