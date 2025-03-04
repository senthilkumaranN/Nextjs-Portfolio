"use client"

import { usePathname } from "next/navigation"
import Navbar from "../navbar"

export default function Layout({children}){
    const pathName = usePathname()
    return(
        <>
         {
            pathName !== "/admin" ? <Navbar/> : null
         }
         {children}
        </>
    )
}