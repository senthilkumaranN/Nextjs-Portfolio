import connectionDb from "@/app/database";
import User from "@/app/models/User";
import { compare, hash } from "bcryptjs";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
    try {

        await connectionDb();
        const { username, password } = await req.json();
        const checkuser = await User.findOne({username})

        if (!checkuser) {
            return NextResponse.json({
                success: false,
                message: "username is not present !please try again"
            })
        }

        const hashpassword = await hash(checkuser.password, 12)
        const checkpassword = await compare(password, hashpassword)

        if (!checkpassword) {
            return NextResponse.json({
                success: false,
                message: "Password incorrect! please try again"
            })
        } else {
            return NextResponse.json({
                success: true,
                message: "Login successfully"
            }, { status: 201 });
        }

    } catch (e) {
        console.log(e)

        return NextResponse.json({
            success: false,
            message: "Something went wrong on Internal server!"
        }, { status: 500 })
    }
}