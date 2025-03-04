import connectionDb from "@/app/database";
import Project from "@/app/models/Project";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req){
    try{

        await connectionDb();
        const extractData = await req.json();
        const saveData = await Project.create(extractData);

        if(saveData){
            return NextResponse.json({
                success: true,
                message: "Data saved successfully"
            },{status: 201});
        }else{
            return NextResponse.json({
                success: false,
                message: "something went wrong!"
            },{status: 400})
        }

    }catch(e){
        console.log(e)

        return NextResponse.json({
            success: false,
            message: "Something went wrong on Internal server!"
        },{status: 500})
    }
}