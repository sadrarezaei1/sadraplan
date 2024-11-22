"use client"
import { useState} from "react"
 

export default function(){
    const [mouth ,setMouse] = useState(false)
    return(
        <div   onMouseDown={()=>{setMouse(true) }} onMouseUp={()=>{setMouse(false)}} className={`${mouth == true ? "flex flex-row justify-center items-center bg-pink-500 text-white h-[50px] w-[70px] rounded-[30px] m-[50px]":"flex flex-row justify-center items-center bg-green-500 text-blue-500 h-[70px] w-[90px] rounded-[30px] m-[50px]"}`}>
                click me
        </div>
    )

}