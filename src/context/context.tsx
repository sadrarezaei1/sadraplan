"use client"

import { createContext, useState } from "react";
type ContextType = {
    appState:{
        name: any;
    email: any,
    age:number
    }
    setAppState: any
}

export const AppContext = createContext<ContextType>({
    appState:{
        name: "",
        email: "",
        age: 0
    },
    setAppState: () => {}
});

export default function AppContextPro({children}:{children: React.ReactNode}){
    const [appState, setAppState] = useState({
        name: "sadra",
        email: "sadra@gmail.com",
        age: 20
    });
    return (
        <AppContext.Provider value={{appState, setAppState}}>
            {children}
        </AppContext.Provider>
    )
}
