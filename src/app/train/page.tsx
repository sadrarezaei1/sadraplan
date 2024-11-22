"use client"
import { AppContext } from "@/context/context";
import AppContextPro from "@/context/context";
import { useContext } from "react";
export default function page() {
    const {appState , setAppState} = useContext(AppContext)
    return(
        <AppContextPro>
            <h1>{appState.name}</h1>
        </AppContextPro>
    )
    
}
