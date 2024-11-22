
export default function Lamp(){
    return(
        <body className="bg-gray-400 px-[60px] ml-[50px]">
            <div className="h-12 flex flex-row mt-4">
                <div className="h-full w-[25%]  flex flex-row justify-start items-center ">
                    <h1 className="font-bold text-xl ml-[2px] lg:ml-[-20px]">SADRA</h1>
                    <h1 className="font-bold text-xl text-orange-500">LUX</h1>
                </div>
                <div className="h-full lg:w-[45%]  flex flex-row justify-between px-4 items-center invisible lg:visible w-0">
                    <h1 className="font-bold text-xl"><a href="#" className="hover:underline">Men</a></h1>
                    <h1 className="font-bold text-xl"><a href="#" className="hover:underline">Women</a></h1>
                    <h1 className="font-bold text-xl"><a href="#" className="hover:underline">Categories</a></h1>
                    <h1 className="font-bold text-xl"><a href="#" className="hover:underline">Brands</a></h1>
        </div>
        <div className="h-full lg:w-[35%] w-[80%] py-1 px-2 flex flex-row">
            <div className="border-2 border-gray-500 w-0 sm:w-4/6 h-full  rounded-[60px] flex flex-row justify-end sm:visible invisible">
                <input type="search" placeholder="search..." className="bg-transparent  ml-4 w-full text-gray-700 placeholder-gray-600 outline-none"/>
                <div className=" w-12 h-9 rounded-full mr-[-1px] flex flex-row justify-center items-center">
                </div>
            </div>
            <div className="lg:w-2/6  w-full sm:w-[40%] flex flex-row justify-end items-center">

        <input type="text" />
            </div>
        </div>
    </div>
    <section className="w-full h-[30rem]  mt-16 flex flex-row py-14">
        <div className=" w-1/2 h-full flex flex-col justify-between ">
            <div>
                <h1 className="text-6xl text-black">TRENDY SHOES TO LUXURY</h1>
                <p className="mt-6 text-gray-500 pr-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dicta expedita. Voluptates id corporis obcaecati Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique voluptatem perspiciatis consectetur.</p>
            </div>
            <div className="bg-black lg:w-1/4 lg:h-[50px] mb-10 rounded-[50px] text-white flex flex-row justify-center items-center md:mt-5 lg:mt-0 md:w-[100px] sm:w-[100px] sm:mt-[20px] am:w-[100px] am:mt-[10px]">
                Check Now
            </div>
        </div>
        <div className="h-full w-1/2">
        </div>

    </section>
    <section className="w-1/4 h-[150px]  mt-[-70px] ">
    <div className=" h-1/2 w-full flex flex-row justify-between md:mt-[30px] lg:mt-0 sm:mt-[40px] am:pt-[100px]">
            <h2 className="mt-[5px] font-bold text-4xl">80+</h2>
            <h2 className="mt-[5px] font-bold text-4xl mr-[190px] sm:ml-[20px] md:ml-[40px]">25+</h2>
        </div>
        <div className=" h-1/4 w-full flex flex-row md:mt-[5px] lg:mt-0 am:mt-[10px]">
            <p className="mt-[-30px] text-[12px] text-gray-600">Unique Style</p>
            <p className="mt-[-30px] text-[12px] text-gray-600 ml-[45px]">Brand Trusted</p>
            
        </div>
        <div className="h-[50px] w-full  flex flex-row md:mt-[15px] lg:mt-0 sm:mt-[20px] am:mt-[40px]">
            <div className="bg-blue-800 rounded-full w-[30px] h-[30px] mt-[-35px]"></div>
            <div className="bg-orange-600 rounded-full w-[30px] h-[30px] mt-[-35px] ml-[-10px]"></div>
        </div>
        <div className="h-[20px] w-full md:mt-[5px] lg:mt-0 am:mt-[10px]">
            <p className="mt-[-50px]">Best Shoes Discount <b>30% OFF</b> all Shoes!</p>
        </div>
    </section>
    

    </body>

    )


}
