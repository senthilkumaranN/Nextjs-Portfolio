import { NextResponse } from "next/server";

export function middleware(req) {
    const headers = new Headers();
    headers.set("Access-Control-Allow-Origin", "*"); // Change to specific domain in production
    headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (req.method === "OPTIONS") {
        return new NextResponse(null, { status: 204, headers });
    }

    return NextResponse.next();
}

export const config = {
    matcher: "/api/:path*", // Apply middleware to all API routes
};
