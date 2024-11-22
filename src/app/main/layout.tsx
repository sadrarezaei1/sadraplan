"use client"
import { useState } from "react"
import Link from "next/link";
export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    const [page, setPage] = useState("main")
    return(
        <div>
            <div className="flex flex-row items-center justify-center space-x-4">
                <Link href={"/main"} onClick={() => setPage("main")} className={`${page === "main" ? "text-red-500" : "text-white"}`}>main</Link>
                <Link href={"/main/social"}  onClick={() => setPage("social")} className={`${page === "social" ? "text-red-500" : "text-white"}`}>social</Link>
                <Link href={"/main/products"} onClick={() => setPage("products")} className={`${page === "products" ? "text-red-500" : "text-white"}`}>products</Link>

            </div>
            <div className="w-screen h-32 bg-blue-500 flex flex-row items-center justify-center mt-4 p-5">
                {children}

            </div>
        </div>
    )
    
  }