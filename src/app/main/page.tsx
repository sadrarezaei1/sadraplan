import { AppContext } from "@/context/context";
import AppContextPro from "@/context/context";
import { useContext } from "react";
export default function page() {
    return
        <AppContextPro>
            <h1>{useContext.name}</h1>
        </AppContextPro>
    
}
