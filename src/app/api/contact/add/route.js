import connectionDb from "@/app/database";
import Contact from "@/app/models/contact";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req){
    try{

        await connectionDb();
        const extractData = await req.json();
        const saveData = await Contact.create(extractData);

        if(saveData){
            return NextResponse.json({
                success: true,
                message: "Contact saved successfully"
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