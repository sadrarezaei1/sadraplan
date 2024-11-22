"use client"
import { useState } from "react"
import basket from "@/app/public/basket.png"
import menu from "@/app/public/menu-button.png"
import search from "@/app/public/search.png"
import lamp from "@/app/public/Untitled-2.png"
import lustre from "@/app/public/lustre.png"
import Image  from "next/image"
import lampstudy from "@/app/public/white-table-lamp-green-background-copy-space.png"
export default function Lamp(){
    const [product,setProductList] = useState([{"title":"lamp1","desc":"dsjnscjddcsidcndicndkcnjdcasda","price":"46.00$"},{"title2":"lamp2","desc2":"dsjnscjddcsidcndicndkcnjdcasda","price2":"47.00$"},{"title3":"lamp3","desc3":"dsjnscjddcsidcndicndkcnjdcasda","price3":"48.00$"},{"title4":"lamp4","desc4":"dsjnscjddcsidcndicndkcnjdcasda","pric4":"49.00$"},{"title5":"lamp5","desc5":"dsjnscjddcsidcndicndkcnjdcasda","price5":"46.00$"},{"title6":"lamp6","desc6":"dsjnscjddcsidcndicndkcnjdcasda","price6":"40.00$"},{"title7":"lamp7","desc7":"dsjnscjddcsidcndicndkcnjdcasda","price7":"43.00$"},{"title8":"lamp8","desc8":"dsjnscjddcsidcndicndkcnjdcasda","price8":"44.00$"}])
    return(
        <div className="w-screen h-screen  flex flex-row">
                <div className="w-[15%] h-full bg ">
                    
                </div>
                <div className="w-[70%] h-full ">
                    <div className=" h-[80rem] bg-gray-300 mx-2 rounded-b-2xl px-4">
                        <div className="w-full h-20  flex flex-row justify-start items-center">
                            <div className="w-[20%] h-full  flex flex-row justify-start items-center">
                                <Image src={menu} alt="samad"></Image> 
                            </div>
                            
                            <div className="w-[60%] h-full  flex flex-row justify-center items-center">
                                <h1 className="font-bold text-3xl">ECLAX</h1>

                            </div>
                            <div className="w-[20%] h-full  flex flex-row justify-end items-center">
                            <Image src={search} alt="samad"></Image>
                            <div className=" relative">
                                <Image src={basket} alt="samad" className="ml-4 w-10 h-10"></Image>
                                <div className="bg-pink-400 rounded-full w-4 h-4 absolute top-[-8px] right-[12px]"></div> 
                            </div> 
                            </div>


                    
                        </div>
                        <div className="w-full h-full mt-[-80px] relative ">
                            <Image src={lamp} alt="lamp"></Image>
                            <div className="w-[25rem] h-[25rem] bg-white rounded-2xl absolute top-[25rem] left-[10rem] px-2 py-2">
                                <div className="bg-sky-400 h-3/5 w-full rounded-2xl flex flex-row justify-center items-center">
                                    <Image src={lustre} alt="lamp" className="w-[15rem] h-[15rem]"></Image>
                                </div>
                                <p className="font-bold text-2xl mt-4">ECLAX LYRCA CONE</p>
                                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiueat quasi doloremque!</p>
                                <div className="flex flex-row justify-end items-center  w-full ">
                                    <p className="font-bold text-2xl mt-4">$32.00</p>

                                </div>
                                

                            </div>

                            <div className=" w-full h-[20rem] absolute bottom-5">
                                <div className="w-full h-full  flex flex-row">
                                    <div className="w-3/4 h-full ">
                                        <h1 className="text-[7rem] font-bold px-2 ">Unlock The Future With Willet</h1>

                                    </div>

                                    <div className="w-1/4 h-full  flex flex-row justify-center items-end px-2 text-gray-500">
                                        <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde dolore placeat libero molestias nam.</p>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className=" w-full  py-4 mt-32 px-8 flex flex-row">
                        <div className="w-3/5 h-full ">
                            <h1 className="text-[5rem] font-bold">POPULAR PRODUCT</h1>
                            <p className="max-w-[50rem] text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente id nobis odio. Sit, sed nemo. Eveniet, ex voluptatem optio sit amet odit velit possimus accusantium rerum cumque aliquid ea libero.</p>
                        </div>
                        <div className="w-2/5  flex flex-row justify-end items-center ">
                            <div className=" w-5/6 h-full  border-2 border-gray-400 rounded-[15rem] py-3 px-4 flex flex-row justify-between">
                                <div className="w-[9rem] h-full rounded-full bg-gray-300 flex flex-row justify-center items-center">
                                </div>
                                <div className="w-[70%] h-full relative ">
                                    <div className="w-[9rem] h-full rounded-full bg-gray-300 absolute right-[0rem]">
                                        <div className="w-full h-full relative">
                                            <Image src={lustre} alt="lustre1" fill className="rounded-full"></Image>
                                        </div>
                                    </div>
                                    <div className="w-[9rem] h-full rounded-full bg-gray-500 absolute right-[4rem]">
                                        <div className="w-full h-full relative">
                                            <Image src={lustre} alt="lustre2" fill className="rounded-full"></Image>
                                        </div>
                                    </div>
                                    <div className="w-[9rem] h-full rounded-full bg-gray-800 absolute right-[8rem]">
                                        <div className="w-full h-full relative">
                                            <Image src={lustre} alt="lustre3" fill className="rounded-full"></Image>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                      
                    </div>

                    <div className="w-full h-auto  mt-20 flex flex-row  justify-between px-4">
                            <div className="w-[20rem] h-[23rem] bg-gray-100 rounded-2xl px-2 py-2">
                                
                                <div className="bg-sky-400 h-3/5 w-full rounded-2xl flex flex-row justify-center items-center">
                                    <Image src={lustre} alt="lamp" className="w-[15rem] h-[15rem]"></Image>
                                </div>
                                                      
                                {
                                product.map((product) => {return(                                    
                                    <p className="font-bold text-2xl mt-4 text-black">{product.title}</p>)})
                                }


                                {
                                product.map((product) => {return( 
                                    <p className="text-gray-600">{product.desc}</p>)})
                                }
                                

                                <div className="flex flex-row justify-end items-center  w-full ">
                                {
                                    product.map((product) => {return( 
                                    <p className="font-bold text-2xl mt-4 text-black">{product.price}</p>)})
                                }

                                </div>
                                

                            </div>
                            <div className="w-[20rem] h-[23rem] bg-gray-100 rounded-2xl px-2 py-2">
                                <div className="bg-sky-400 h-3/5 w-full rounded-2xl flex flex-row justify-center items-center">
                                    <Image src={lustre} alt="lamp" className="w-[15rem] h-[15rem]"></Image>
                                </div>
                                {
                                product.map((product) => {return(                                    
                                    <p className="font-bold text-2xl mt-4 text-black">{product.title2}</p>)})
                                }


                                {
                                product.map((product) => {return( 
                                    <p className="text-gray-600">{product.desc2}</p>)})
                                }
                                

                                <div className="flex flex-row justify-end items-center  w-full ">
                                {
                                    product.map((product) => {return( 
                                    <p className="font-bold text-2xl mt-4 text-black">{product.price2}</p>)})
                                }

                                </div>
                                

                            </div>
                            <div className="w-[20rem] h-[23rem] bg-gray-100 rounded-2xl px-2 py-2">
                                <div className="bg-sky-400 h-3/5 w-full rounded-2xl flex flex-row justify-center items-center">
                                    <Image src={lustre} alt="lamp" className="w-[15rem] h-[15rem]"></Image>
                                </div>
                                {
                                product.map((product) => {return(                                    
                                    <p className="font-bold text-2xl mt-4 text-black">{product.title3}</p>)})
                                }


                                {
                                product.map((product) => {return( 
                                    <p className="text-gray-600">{product.desc3}</p>)})
                                }
                                

                                <div className="flex flex-row justify-end items-center  w-full ">
                                {
                                    product.map((product) => {return( 
                                    <p className="font-bold text-2xl mt-4 text-black">{product.price3}</p>)})
                                }

                                </div>
                                

                            </div>
                            <div className="w-[20rem] h-[23rem] bg-gray-100 rounded-2xl px-2 py-2">
                                <div className="bg-sky-400 h-3/5 w-full rounded-2xl flex flex-row justify-center items-center">
                                    <Image src={lustre} alt="lamp" className="w-[15rem] h-[15rem]"></Image>
                                </div>
                                {
                                product.map((product) => {return(                                    
                                    <p className="font-bold text-2xl mt-4 text-black">{product.title4}</p>)})
                                }


                                {
                                product.map((product) => {return( 
                                    <p className="text-gray-600">{product.desc4}</p>)})
                                }
                                

                                <div className="flex flex-row justify-end items-center  w-full ">
                                {
                                    product.map((product) => {return( 
                                    <p className="font-bold text-2xl mt-4 text-black">{product.pric4}</p>)})
                                }

                                </div>

                            </div>
                    </div>

                    <div className="w-full h-auto  mt-20 flex flex-row  justify-between px-4">
                            <div className="w-[20rem] h-[23rem] bg-gray-100 rounded-2xl px-2 py-2">
                                <div className="bg-sky-400 h-3/5 w-full rounded-2xl flex flex-row justify-center items-center">
                                    <Image src={lustre} alt="lamp" className="w-[15rem] h-[15rem]"></Image>
                                </div>
                                {
                                product.map((product) => {return(                                    
                                    <p className="font-bold text-2xl mt-4 text-black">{product.title5}</p>)})
                                }


                                {
                                product.map((product) => {return( 
                                    <p className="text-gray-600">{product.desc5}</p>)})
                                }
                                

                                <div className="flex flex-row justify-end items-center  w-full ">
                                {
                                    product.map((product) => {return( 
                                    <p className="font-bold text-2xl mt-4 text-black">{product.price5}</p>)})
                                }

                                </div>

                            </div>
                            <div className="w-[20rem] h-[23rem] bg-gray-100 rounded-2xl px-2 py-2">
                                <div className="bg-sky-400 h-3/5 w-full rounded-2xl flex flex-row justify-center items-center">
                                    <Image src={lustre} alt="lamp" className="w-[15rem] h-[15rem]"></Image>
                                </div>
                                {
                                product.map((product) => {return(                                    
                                    <p className="font-bold text-2xl mt-4 text-black">{product.title6}</p>)})
                                }


                                {
                                product.map((product) => {return( 
                                    <p className="text-gray-600">{product.desc6}</p>)})
                                }
                                

                                <div className="flex flex-row justify-end items-center  w-full ">
                                {
                                    product.map((product) => {return( 
                                    <p className="font-bold text-2xl mt-4 text-black">{product.price6}</p>)})
                                }

                                </div>
                                

                            </div>
                            <div className="w-[20rem] h-[23rem] bg-gray-100 rounded-2xl px-2 py-2">
                                <div className="bg-sky-400 h-3/5 w-full rounded-2xl flex flex-row justify-center items-center">
                                    <Image src={lustre} alt="lamp" className="w-[15rem] h-[15rem]"></Image>
                                </div>
                                {
                                product.map((product) => {return(                                    
                                    <p className="font-bold text-2xl mt-4 text-black">{product.title7}</p>)})
                                }


                                {
                                product.map((product) => {return( 
                                    <p className="text-gray-600">{product.desc7}</p>)})
                                }
                                

                                <div className="flex flex-row justify-end items-center  w-full ">
                                {
                                    product.map((product) => {return( 
                                    <p className="font-bold text-2xl mt-4 text-black">{product.price7}</p>)})
                                }

                                </div>
                                

                            </div>
                            <div className="w-[20rem] h-[23rem] bg-gray-100 rounded-2xl px-2 py-2">
                                <div className="bg-sky-400 h-3/5 w-full rounded-2xl flex flex-row justify-center items-center">
                                    <Image src={lustre} alt="lamp" className="w-[15rem] h-[15rem]"></Image>
                                </div>
                                {
                                product.map((product) => {return(                                    
                                    <p className="font-bold text-2xl mt-4 text-black">{product.title8}</p>)})
                                }


                                {
                                product.map((product) => {return( 
                                    <p className="text-gray-600">{product.desc8}</p>)})
                                }
                                

                                <div className="flex flex-row justify-end items-center  w-full ">
                                {
                                    product.map((product) => {return( 
                                    <p className="font-bold text-2xl mt-[33px] text-black">{product.price8}</p>)})
                                }

                                </div>

                            </div>
                    </div>
                    <div className="w-full h-full flex flex-col">
                        <div className="bg-gray-300 w-full h-[90%] rounded-[30px] mt-[15rem] flex flex-row">
                            <div className="w-[35%]  h-full rounded-[30px]">
                                <Image src={lampstudy} alt="lamp" className="w-[130%] h-[1176px] pb-[100px] pl-[100px]"></Image>
                            </div>
                            <div className=" w-[65%] h-full  pl-[25%] flex flex-col pr-[90px]">
                                <h1 className="w-[130%] h-[30%] text-[76px] max-w-[100rem] text-black pt-[80px]">EXPERIENCE <br />BRILLIANCE WITH <br />EXLAX LIGHTING</h1>
                                <p className=" w-full h-[20%] text-xl tex-black max-w-[35rem] pt-[100px] text-black ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur a sequi
                                    error vel voluptate praesentium.</p>
                                <div className="border-4 border-gray-500 rounded-full w-[65%] h-[37%] flex flex-row justify-center items-center text-[190px] text-black"><h1>7</h1></div>
                            </div>

                        
                        </div>
                        <div className="0 w-full h-[20px] rounded-lg mt-[-100px]">
                            <h1 className="text-gray-400 text-[4px] mx-4">njnwj</h1>
                        </div>
                        <div className="w-full h-full flex flex-row">
                            <div className=" w-[30%] h-full mt-[20px] flex flex-row justify-center items-center">
                                <h1 className="text-xl text-black">EXLAX@2023 ALL RIGHT RESERVED</h1>
                            </div>
                            <div className="b w-[35%] h-full mt-[19px] flex flex-row justify-center items-center">
                                <h1 className="text-[28px]  text-black">EXLAX</h1>

                            </div>
                            <div className=" w-[35%] h-full mt-[19px] flex flex-row justify-evenly items-center">
                                <h1 className="text-xl text-black">TERMS & AGREEMENTS</h1>
                                <h1 className="text-xl  text-black">PRIVACY P0LICY</h1>

                            </div>
                            
                        </div>
                    </div>
                    


                </div>
                <div className="w-[15%] h-full ">

                </div>



            

        </div>
    )



}