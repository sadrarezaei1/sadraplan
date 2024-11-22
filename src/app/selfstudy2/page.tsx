import sun from "@/app/public/sun.png"
import sun1 from "@/app/public/sun (2).png"
import sun2 from "@/app/public/sun (1).png"
import Image from "next/image"
import leaf from "@/app/public/leaf (1).png"
import worker from "@/app/public/6c586838-508c-434a-b0e7-920339195a65.png"

export default function page(){


    return(
        <div className="w-screen h-screen flex flex-row bg-green-500">
            <div className="bg-red-500 w-0 lg:w-[20%] h-full lg:visisble invisible "></div>

            <div className="bg-yellow-900 w-full lg:w-[60%] h-full grid lg:grid-cols-2 sm:grid-cols-1">
                <div className= "rounded-[5px] bg-yellow-100  w-full lg:w-[125%] flex flex-col h-[92%] mt-[1rem] mx-[1rem] px-[1rem]">
                    <div className="w-full h-[4rem] flex flex-row">
                        <div className="w-full lg:w-[30%] h-full flex flex-row justify-center items-center ">
                            <Image src={sun} alt="ql,s"></Image> 
                            <h1 className="text-black font-extrabold text-[17px] ml-[5px]">RISENRG</h1>
                        </div>
                        <div className="w-0 lg:w-[70%] h-full flex flex-row items-center space-x-5 ml-[4rem] lg:visible invisible ">
                            <h1 className="text-gray-500 text-[14px]">Product</h1>
                            <h1 className="text-gray-500 text-[14px]">Pricing</h1>
                            <h1 className="text-gray-500 text-[14px]">Guideines</h1>
                            <h1 className="text-gray-500 text-[14px]">About us</h1>
                            
                        </div>

                    </div>
                    <div className=" mt-[2rem] w-full h-[15rem]">
                        <div className="mt-[1rem] w-[50%] h-[4rem] flex flex-row items-center ">
                            <Image src={leaf} alt="ql,s" className="lg:visible invisible"></Image> 
                            <p className="text-black text-[11px] ml-[10px] lg:visible invisible ">Lorem ipsum dolor sit amet consectetur,Lorem Lorem, ipsum. </p>


                        </div>
                        <div className=" w-[55%] h-[8rem] flex flex-col">
                            <h1 className="text-black font-semibold text-[23px]">EMPOWER <br /> THE WORLD </h1>
                            <div className=" bg-green-800 w-[4rem] h-[20px] mt-[8px] rounded-[2px] ">
                                <h1 className="text-yellow-400 font-semibold text-[10px] flex flex-row justify-center items-center mt-[3px] mr-[2px]">Order Now</h1>

                            </div>
                        </div>

                    </div>
                    <div className=" w-full lg:w-[40%] h-[3rem] flex flex-row items-center md:visible sm:invisible">
                        <div className="bg-gray-500 rounded-full w-[2rem] h-[2rem]"></div>
                        <div className="bg-gray-500 rounded-full w-[2rem] h-[2rem] ml-[1rem]"></div>
                        <h1 className="text-black text-[12px] ml-[20px] md:visible sm:invisible">Dedicated to<br />Revolutionzing </h1>


                    </div>

                </div>
                <div className="rounded-[5px] w-[62%] h-[92%] bg-green-700 my-[1rem] ml-[34%] flex flex-row items-center justify-center">
                    <Image src={worker} alt="ql,s" className="h-full w-[150%]"></Image> 
                    
                </div>
                <div className="rounded-[5px] w-[125%] bg-green-800 h-[90%] mx-[1rem] mb-[1rem] flex flex-row items-center justify-center">
                    <Image src={sun1} alt="ql,s" className="w-[20%] h-[40%]"></Image> 

                    <h1 className="font-extrabold text-yellow-400 text-[50px] ml-[20px]">RISENRG</h1>
                </div>
                <div className="rounded-[5px] w-[62%] h-[90%] bg-yellow-600 my-[1rem] flex flex-row items-center justify-center mt-[0]">
                    <Image src={sun2} alt="ql,s" className="w-[70%] h-[70%]"></Image> 
                </div>


            </div>

            <div className="bg-red-500 w-0 lg:w-[20%] h-full lg:visisble invisible"></div>
            
        </div>
    )
}