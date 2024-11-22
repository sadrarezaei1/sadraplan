"use client"
import { useEffect,useState } from "react"
import axios from "axios"

export default function online(){
    const [name,setName] = useState("ali")
    const [userList,setUserList] = useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            setUserList(response.data)
        })
        .catch((error) => {

        })
    },[])



    return (
        <div className="grid grid-cols-5 gap-2">
            {
                userList.map( (user) => {
                    return (
                        <div className="bg-gradient-to-t from-red-400 to-blue-400 text-black  m-4 w-[180px] h-[200px] rounded-[10px] hover:rotate-6 duration-500 flex flex-col justify-center items-center space-y-3 max-w-[200px] hover:animate-pulse bg-yellow-400 ">
                            <h1>{user["name"]}</h1>
                            <h1>{user["username"]}</h1>
                            <h1>{user["address"]["street"]}</h1>
                            
                        </div>
                    )
                    
                })

            }
        </div>
    )

}