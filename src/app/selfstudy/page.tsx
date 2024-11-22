"use client"
import { useState } from "react"
import plus from "@/app/public/plus.png"
import gmail from "@/app/public/gmail (1).png"
import facebook from "@/app/public/facebook.png"
import Image from "next/image"
import search from "@/app/public/search.png"
import filter from "@/app/public/setting.png"
import bookmark from "@/app/public/bookmark.png"
import download from "@/app/public/download.png"
import next from "@/app/public/next-arrow.png"
import after from "@/app/public/next.png"
import before from "@/app/public/back.png"
import menu from "@/app/public/menu-button.png"


export default function page(){
    return(
        <div className="w-screen h-screen flex flex-row">



            <div className=" w-0 md:w-[20%] h-full bg-red-400 invisible md:visible "></div>


            <div className="bg-gray-100 w-full  md:w-[60%]  ">
                <div className="w-full h-[15rem] px-[50px] mt-[10px] flex flex-row">

                    <div className="w-[30%] lg:w-[10%] h-full flex flex-row items-center justify-center">
                        <Image src={menu} alt="samad" className="w-6 h-6 lg:invisible visible"></Image> 

                        <div className="bg-yellow-500 flex flex-row items-center justify-center w-[65%] h-[60%] rounded-[5px]">
                            

                            <h1 className="text-bold text-black text-xl ">MR</h1>
                        </div>
                    </div>

                    <div className=" w-0 lg:w-[50%] h-full flex flex-row items-center space-x-5 pl-[13px] invisible lg:visible ">
                            <h1 className="text-gray-400 text-[13px]">Vectors</h1>
                            <h1 className="text-gray-400 text-[13px]">Photos</h1>
                            <h1 className="text-gray-400 text-[13px]">PSD</h1>
                            <h1 className="text-gray-400 text-[13px]">Vidoes</h1>
                            <div className="flex flex-row justify-center items-center">
                                <h1 className="text-black text-[13px]">More</h1>
                                <div className="w-0 h-0 ml-[1px]
                                    border-l-[5px] border-l-transparent
                                    border-t-[7px] border-t-black
                                    border-r-[5px] border-r-transparent">
                                </div>
                            </div>
                    </div>

                    <div className=" w-[70%] h-full flex flex-row pl-[50px] justify-end lg:justify-normal">
                        <div className=" w-[60%] h-full flex flex-row items-center justify-center">
                            <div className="bg-transparent border-[1px] border-gray-400 w-[60%] h-[50%] rounded-lg flex flex-row items-center justify-center lg:visible invisible">
                                <Image src={plus} alt="samad" className="w-2 h-2 "></Image> 
                                <h1 className="text-gray-400 text-[12px] pl-[5px] ">Submit</h1>
                            </div>
                        </div>
                        <div className=" w-[40%] h-full flex flex-row justify-center items-center space-x-4"> 
                        <Image src={gmail} alt="samad" className="w-6 h-6 shadow-2xl"></Image> 
                        <Image src={facebook} alt="samad" className="w-6 h-6 "></Image> 
                        </div>
                    </div>
                </div>
                <div className=" w-[70%] h-[30rem]  ml-[15%] flex flex-col">
                    <div className=" w-full h-[60%]  flex flex-col items-center justify-center">
                        <h1 className="text-[32px] text-black">Populer Pro Stack Vectors</h1>
                        
                        <p className="text-[12px] text-gray-400 mt-[10px]   max-w-[300px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className="w- h- flex flex-row items-center justify-center">Lorem ipsum dolor sit. Lorem ipsum dolor sit Lorem</span>  </p>
                        
                    </div>
                    <div className="w-full h-[40%] flex flex-row items-center justify-center">
                        <div className="bg-white border-2 rounded-[10px] lg:w-[70%] h-[50%] flex flex-row  w-[90%]">
                            <div className="w-[20%] h-full  flex flex-row justify-center items-center">
                                <div className="w-0 md:w-[95%] h-[85%] flex flex-row items-center justify-center border-[2px] border-back rounded-[10px] bg-transparent ml-[5px] invisible md:visible ">
                                    <h1 className="text-black text-[13px] ">Vectors</h1>
                                    <div className="w-0 h-0 ml-[1px]
                                    border-l-[5px] border-l-transparent
                                    border-t-[7px] border-t-black
                                    border-r-[5px] border-r-transparent">
                                </div>
                                </div>
                            </div>
                            
                            <div className="w-[90%] md:w-[70%] h-full bg-transparent   flex flex-row items-center justify-start  mb-[200px]">
                                <input type="search" placeholder="Search Vectors..." className="bg-transparent  ml-4 w-full text-gray-700 placeholder-gray-600 outline-none text-[13px]"/>

                            </div>

                            <div className="w-[10%] h-full flex flex-row justify-center items-center">
                                <Image src={search} alt="samad" className="w-4 h-4 "></Image> 

                            </div>

                        </div>
                    </div>
                </div>
                <div className="w-0 md:w-[80%] h-[5rem]  mx-[10%] flex flex-row md:visible invisible  ">

                    <div className=" w-[40%] h-full flex flex-row items-center space-x-4">
                        <h1 className="text-[14px] text-black  text-bold">Latest</h1>
                        <h1 className="text-[14px] text-black text-bold">Populer</h1>
                        <div className="bg-black w-[2px] h-[50%]"></div>
                        <h1 className="text-[14px] text-orange-500 text-bold">Premium</h1>
                        <h1 className="text-[14px] text-blue-400 text-bold">Free</h1>
                    </div>
                    <div className="w-[60%] flex flex-row items-center justify-end ">
                        <Image src={filter} alt="samad" className="w-4 h-4  mr-[20px]"></Image> 
                        <Image src={bookmark} alt="samad" className="w-4 h-4 "></Image> 

                    </div>
                </div>
                <div className="w-full  bg-blue-400 px-[10%] ">
                    <div className="w-full  grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
                        {/* <div className="bg-white h-[8rem] lg:h-[13rem] px-[2%] rounded-[10px] flex flex-col items-center">
                            <div className="h-[70%] w-full bg-gray-200 rounded-[10px]">
                            </div>
                            <h1 className="text-[15px] text-gray-300 mt-[10px]">
                                <span className="text-[25px] text-black">D</span>og illustration
                            </h1>
                            <div className="flex flex-row items-center justify-center mt-[25px]">
                                <h1 className="text-black text-[18px] underline"><a href="#">Download</a></h1>
                                <Image src={download} alt="samad" className="w-4 h-4 ml-[7px]"></Image> 

                            </div>
                        </div>

                        <div className="bg-white  h-[8rem] lg:h-[13rem] px-[2%] rounded-[10px]  flex flex-col items-center">
                            <div className="h-[70%] w-full bg-gray-200 rounded-[10px]">
                            </div>
                            <h1 className="text-[15px] text-gray-300 mt-[10px]">
                                <span className="text-[25px] text-black">R</span>ockstar guitarist
                            </h1>
                            <div className="flex flex-row items-center justify-center mt-[25px]">
                                <h1 className="text-black text-[18px] underline"><a href="#">Download</a></h1>
                                <Image src={download} alt="samad" className="w-4 h-4 ml-[7px]"></Image> 

                            </div>
                        </div>
                        <div className="bg-white h-[8rem] lg:h-[13rem] px-[2%] rounded-[10px] flex flex-col items-center">
                            <div className="h-[70%] w-full bg-gray-200 rounded-[10px]">
                            </div>
                            <h1 className="text-[15px] text-gray-300 mt-[10px]">
                                <span className="text-[25px] text-black">A</span>stronaut riding
                            </h1>
                            <div className="flex flex-row items-center justify-center mt-[25px]">
                                <h1 className="text-black text-[18px] underline"><a href="#">Download</a></h1>
                                <Image src={download} alt="samad" className="w-4 h-4 ml-[7px]"></Image> 

                            </div>
                        </div> */}
                    </div>
                    
                </div>
                <div className=" mt-[15px] w-full h-[12rem] flex flex-row px-[50px]">
                    <div className="w-0n md:w-[30%] h-full flex flex-row items-center invisible lg:visible ">
                        <h1 className="text-black underline text-[16px]">Dicover All <br />Collections</h1>
                        <div className="relative w-full h-full flex flex-row items-center justify end">
                            <div className="w-[45px] h-[95%] bg-gray-200 rounded-[10px] absolute left-[2rem] border-2 border-gray-400"></div>
                            <div className="w-[45px] h-[95%] bg-gray-200 rounded-[10px] absolute left-[3rem] border-2 border-gray-400"></div>
                            <div className="w-[45px] h-[95%] bg-gray-200 rounded-[10px] absolute left-[4rem] border-2 border-gray-400"></div>
                        </div>
                    </div>
                    <div className="w-0 lg:w-[40%] h-full flex flex-row justify-center items-center lg:visible invisible">
                        <div className="bg-white border-[1px] border-black w-[60%] h-[80%] flex flex-row items-center justify-center rounded-[5px]">
                            <h1 className="text-black text-[16px] mr-[0px]">Next page</h1>
                            <Image src={next} alt="samad" className="w-[40px] h-4 ml-[7px] mt-[3px]"></Image> 
                            
                        </div>
                    </div>
                    <div className=" w-[30%] h-full flex flex-row items-center">
                        <h1 className="text-black text-[13px] ml-[15px]">Page</h1>
                        <div className=" w- h-[70%] flex flex-row items-center ml-[10px] lg:pr-0 md:pr-[40%] sm:pr-[70%] ">
                            <div className="bg-gray-200 h-[25px]  w-[30px] flex flex-row justify-center items-center rounded-[5px]">
                                    <Image src={before} alt="samad" className="w-4 h-4 "></Image> 
                                
                            </div>
                            <div  className="bg-white h-[25px]  w-[30px] flex flex-row justify-center items-center ml-[2px] rounded-[5px]">
                                <h1 className="text-black">1</h1>
                            </div>
                            <div className="bg-gray-200 h-[25px]  w-[30px] flex flex-row justify-center items-center ml-[2px] rounded-[5px]">
                                    <Image src={after} alt="samad" className="w-4 h-4 "></Image> 
                                
                            </div>
                            <h1 className="text-black text-[13px] ml-[10px]">of 120</h1>
                        </div>
                    </div>
                </div>

            </div>



            <div className="w-0 md:w-[20%] h-full bg-red-500 invisible md:visible">


            </div>
    </div>

    )

}