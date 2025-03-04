import connectionDb from "@/app/database";
import Home from "@/app/models/Home";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req){
    try{

        await connectionDb();
        const extractData = await Home.find({});

        if(extractData){
            return NextResponse.json({
                success: true,
                data: extractData,
                message: "Data fetched successfully"
            },{status: 200});
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