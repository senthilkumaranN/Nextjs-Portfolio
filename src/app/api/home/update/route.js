import connectionDb from "@/app/database";
import Home from "@/app/models/Home";
import { NextResponse } from "next/server";


export const dynamic = "force-dynamic"

export async function PUT(req){
     try{
           await connectionDb()

           const extractData = await req.json()
           const { _id,heading,summary} = extractData

           const updateData = await Home.findOneAndUpdate(
            {
                _id:_id,
            },
            {heading,summary},
            {new: true}
           )

           if(updateData){
             return NextResponse.json({
                success: true,
                message: "Update Successfully"
             },{status: 201})
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
            message: "Internal server error"
        },{status: 500})
     }
}