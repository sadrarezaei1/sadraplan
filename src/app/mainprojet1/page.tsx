import Image from "next/image"
import first from "@/app/public/genetic-data-svgrepo-com.svg"
import second from "@/app/public/dashboard-4-svgrepo-com.svg"
import third from "@/app/public/team-teamwork-business-group-svgrepo-com.svg"
import fourth from "@/app/public/goal-2-svgrepo-com.svg"
import fivth from "@/app/public/project-presentation-svgrepo-com.svg"
import sixth from "@/app/public/task-list-clipboard-task-svgrepo-com.svg"
import seventh from "@/app/public/sprint-svgrepo-com.svg"
import eigth from "@/app/public/seminar-scenery-svgrepo-com.svg"
import tenth from "@/app/public/setting-4-svgrepo-com.svg"
import eleventh from "@/app/public/help-svgrepo-com.svg"
import twelveth from "@/app/public/messages-svgrepo-com.svg"
import thirteenth from "@/app/public/notfication-1-svgrepo-com.svg"
import fourteenth from "@/app/public/profile-1341-svgrepo-com.svg"
import fivteenth from "@/app/public/done-svgrepo-com.svg"
import menu from "@/app/public/menu-button.png"








export default function page(){
    return(
        <div className="w-scree lg:h-screen  flex flex-row  justify-center items-center bg-red-50">

            <div className="w-full h-full  max-w-[85rem] flex flex-row  justify-center items-center bg-yellow-200 px-0 lg:px-[10px] space-x-0 lg:space-x-5 pr-0 ">
                <div className="h-[94%] w-0 lg:w-[20%] bg-white lg:visible invisible flex flex-col px-[30px] rounded-[10px] shadow-md shadow-gray-600">
                    <div className="w-full h-[5rem]  flex flex-row items-center" >
                        <div className="bg-gray-300 rounded-[10px] w-[52px] h-[52px]">
                            <Image src={first} alt="ql,s"></Image> 

                        </div>
                        <div className="w-3/4 h-full flex flex-row items-center justify-end">
                            <h1 className="text-blue-500 font-semibold text-[22px]">someThing</h1>
                        </div>

                    </div>
                    <div className="w-full h-[1px] flex flex-row items-center justify-center">
                        <div className=" bg-black h-[2px] w-[90%] mt-[20px]"></div>

                    </div>
                    <h1 className="text-black font-semibold text-[18px] mt-[20px]">managing</h1>
                    <div className="w-full h-[7rem] mt-[5px]  flex flex-col items-center">
                        <div className="h-1/2 w-full bg-blue-400 rounded-[10px] flex flex-row items-center">
                            <div className="bg-gray-200 h-[42px] w-[42px] rounded-[10px] ml-[10px] flex flex-row items-center justify-center">
                                <Image src={second} alt="ql,s"></Image> 

                            </div>
                            <div className="w- h-full flex flex-row items-center justify-center ml-[30px]"><h1 className="text-[17px] font-semibold ">dashboard</h1></div>
                        </div>
                        <div className="h-1/2 w-full flex flex-row items-center">
                            <div className="bg-gray-200 h-[42px] w-[42px] rounded-[10px] ml-[10px] flex flex-row items-center justify-center">
                                <Image src={third} alt="ql,s" className="w-[80%] h-[80%]"></Image> 

                            </div>
                            <div className="w- h-full flex flex-row items-center justify-center ml-[30px]"><h1 className="text-[17px] font-semibold text-black">team</h1></div>

                        </div>

                    </div>
                    <div className="w-full h-[1px] flex flex-row items-center justify-center">
                        <div className=" bg-black h-[2px] w-[90%] mt-[20px]"></div>

                    </div>
                    <h1 className="text-black font-semibold text-[18px] mt-[20px]">timeLine</h1>
                    <div className="w-full h- flex flex-col space-y-2">
                        <div className="w-full flex flex-row items-center">
                                <div className="bg-gray-200 h-[42px] w-[42px] rounded-[10px] ml-[10px] flex flex-row items-center justify-center">
                                    <Image src={fourth} alt="ql,s" className="w-[80%] h-[80%]"></Image> 

                                </div>
                                <div className="w- h-full flex flex-row items-center justify-center ml-[30px]"><h1 className="text-[17px] font-semibold  text-black">goals</h1></div>

                        </div>
                        <div className="w-full flex flex-row items-center">
                                <div className="bg-gray-200 h-[42px] w-[42px] rounded-[10px] ml-[10px] flex flex-row items-center justify-center">
                                <Image src={fivth} alt="ql,s" className="w-[80%] h-[80%]"></Image> 

                                </div>
                                <div className="w- h-full flex flex-row items-center justify-center ml-[30px]"><h1 className="text-[17px] font-semibold  text-black ">projects</h1></div>

                        </div>
                        <div className="w-full flex flex-row items-center">
                                <div className="bg-gray-200 h-[42px] w-[42px] rounded-[10px] ml-[10px] flex flex-row items-center justify-center">
                                    <Image src={sixth} alt="ql,s" className="w-[80%] h-[80%]"></Image> 

                                </div>
                                <div className="w- h-full flex flex-row items-center justify-center ml-[30px]"><h1 className="text-[17px] font-semibold  text-black ">tasks</h1></div>

                        </div>
                        <div className="w-full flex flex-row items-center">
                                <div className="bg-gray-200 h-[42px] w-[42px] rounded-[10px] ml-[10px] flex flex-row items-center justify-center">
                                    <Image src={seventh} alt="ql,s" className="w-[70%] h-[70%]"></Image> 

                                </div>
                                <div className="w- h-full flex flex-row items-center justify-center ml-[30px]"><h1 className="text-[17px] font-semibold  text-black">sprint</h1></div>

                        </div>
                        <div className="w-full flex flex-row items-center">
                                <div className="bg-gray-200 h-[42px] w-[42px] rounded-[10px] ml-[10px] flex flex-row items-center justify-center">
                                <Image src={eigth} alt="ql,s" className="w-[80%] h-[80%]"></Image> 

                                </div>
                            <div     className="w- h-full flex flex-row items-center justify-center ml-[30px]"><h1 className="text-[17px] font-semibold  text-black">class</h1></div>

                        </div>

                    </div>
                    <div className="w-full h-[1px] flex flex-row items-center justify-center">
                        <div className=" bg-black h-[2px] w-[90%] mt-[20px]"></div>

                    </div>
                    <div className=" w-full h-[60px] mt-[15px] flex flex-col items-center">
                        <div className="w-full h-1/2 flex flex-row items-center">
                            <div className="w-1/2 h-full">
                                <Image src={eleventh} alt="ql,s" className="w-[80%] h-[80%]"></Image> 
                            </div>
                            <div className="w-full h-full flex flex-row items-center ml-[5px] ">
                                <h1 className=" font-semibold text-[16px]  text-black">help center</h1>
                            </div>
                            
                        </div>
                        <div className="w-full h-1/2 flex flex-row items-center">
                            <div className="w-1/2 h-full">
                                <Image src={tenth} alt="ql,s" className="w-[90%] h-[90%] pr-[5px]"></Image> 
                            </div>
                            <div className="w-full h-full flex flex-row items-center ml-[5px] ">
                                <h1 className="text-black font-semibold text-[16px]">setting</h1>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[80%] h-[100rem] lg:h-[94%]  flex flex-col space-y-5 px-[10px] lg:px-0"> 

                    <div className=" h-[6rem] lg:h-[20%]  rounded-[10px] flex flex-row items-center bg-white  shadow-md shadow-gray-600 w-[90%] lg:w-full">
                        <Image src={menu} alt="ql,s" className="md:invisible visible w-[15%] md:w-0 ml-[10px] md:ml-0"></Image> 

                        <h1 className="w-[20%] text-[26px] ml-[20px] text-blue-500 font-semibold">Dashboard</h1>
                        <div className="w-[40%] h-full md:w-[30%]"></div>

                        <div className="w-[50%] md:w-[50%] h-full  flex flex-row items-center space-x-8 pr-[15px]">
                            <div className="w-0 h-[5rem] invisible md:visible  md:h-[4rem] md:w-[14rem]  bg-blue-800 rounded-[10px] flex flex-row items-center justify-center">
                                <h1 className="text-[20px]">Upgrade</h1>
                            </div>
                            <div className="w-0 h-[5rem] md:h-[4rem] md:w-[6rem] bg-gray-300 rounded-[10px]  flex flex-row items-center justify-center invisible md:visible ">
                                <Image src={twelveth} alt="ql,s" className="w-[80%]  h-[80%] "></Image> 

                            </div> 
                            <div className=" w-0 h-[5rem] md:h-[4rem] md:w-[6rem] bg-gray-300 rounded-[10px]  flex flex-row items-center justify-center  invisible md:visible">
                                <Image src={thirteenth} alt="ql,s" className="w-[80%]  h-[80%]"></Image> 

                            </div>
                            <div className="w-[5rem] h-[3rem] sm:w-[10rem] sm:h-[4rem] md:h-[4rem] md:w-[6rem] bg-gray-300 rounded-[10px]  flex flex-row items-center justify-center visible">
                                <Image src={fourteenth} alt="ql,s" className="w-[60%] h-[60%] "></Image> 

                            </div>


                        </div>

                    </div>
                <div className="w-[90%] lg:w-full h-full flex flex-row ">
                    <div className="w-0 md:w-1/4 lg:w-0  invisible md:visible lg:invisible h-[45rem] lg:h-0 bg-white rounded-[10px] shadow-md shadow-gray-600  flex flex-col px-0 md:px-[5px] lg:px-0 mr-0 md:mr-[10px] lg:mr-0">
                        <div className="w-full h-[5rem]  flex flex-row items-center" >
                            <div className="bg-gray-300 rounded-[10px] w-[45px] h-[45px]">
                                <Image src={first} alt="ql,s"></Image> 

                            </div>
                            <div className="w-3/4 h-full flex flex-row items-center justify-end">
                                <h1 className="text-blue-500 font-semibold text-[18px]">someThing</h1>
                            </div>

                        </div>


                        <div className="w-full h-[1px] flex flex-row items-center justify-center">
                            <div className=" bg-black h-[2px] w-[90%] mt-[5px]"></div>

                        </div>


                        <h1 className="text-black font-semibold text-[16px] mt-[10px]">managing</h1>
                        <div className="w-full h-[7rem] mt-[5px]  flex flex-col items-center">
                            <div className="h-1/2 w-full bg-blue-400 rounded-[10px] flex flex-row items-center">
                                <div className="bg-gray-200 h-[38px] w-[38px] rounded-[10px] ml-[10px] flex flex-row items-center justify-center">
                                    <Image src={second} alt="ql,s"></Image> 

                                </div>
                                <div className="w- h-full flex flex-row items-center justify-center ml-[30px]"><h1 className="text-[17px] font-semibold ">dashboard</h1></div>
                            </div>
                            <div className="h-1/2 w-full flex flex-row items-center">
                                <div className="bg-gray-200 h-[42px] w-[42px] rounded-[10px] ml-[10px] flex flex-row items-center justify-center">
                                    <Image src={third} alt="ql,s" className="w-[80%] h-[80%]"></Image> 

                                </div>
                                <div className="w- h-full flex flex-row items-center justify-center ml-[30px]"><h1 className="text-[17px] font-semibold text-black">team</h1></div>

                            </div>

                        </div>

                        <div className="w-full h-[1px] flex flex-row items-center justify-center">
                            <div className=" bg-black h-[2px] w-[90%] mt-[15px]"></div>

                        </div>


                        <h1 className="text-black font-semibold text-[18px] mt-[20px]">timeLine</h1>
                        <div className="w-full h- flex flex-col space-y-2">
                            <div className="w-full flex flex-row items-center">
                                    <div className="bg-gray-200 h-[42px] w-[42px] rounded-[10px] ml-[10px] flex flex-row items-center justify-center">
                                        <Image src={fourth} alt="ql,s" className="w-[80%] h-[80%]"></Image> 

                                    </div>
                                    <div className="w- h-full flex flex-row items-center justify-center ml-[30px]"><h1 className="text-[17px] font-semibold  text-black">goals</h1></div>

                            </div>
                            <div className="w-full flex flex-row items-center">
                                    <div className="bg-gray-200 h-[42px] w-[42px] rounded-[10px] ml-[10px] flex flex-row items-center justify-center">
                                    <Image src={fivth} alt="ql,s" className="w-[80%] h-[80%]"></Image> 

                                    </div>
                                    <div className="w- h-full flex flex-row items-center justify-center ml-[30px]"><h1 className="text-[17px] font-semibold  text-black ">projects</h1></div>

                            </div>
                            <div className="w-full flex flex-row items-center">
                                    <div className="bg-gray-200 h-[42px] w-[42px] rounded-[10px] ml-[10px] flex flex-row items-center justify-center">
                                        <Image src={sixth} alt="ql,s" className="w-[80%] h-[80%]"></Image> 

                                    </div>
                                    <div className="w- h-full flex flex-row items-center justify-center ml-[30px]"><h1 className="text-[17px] font-semibold  text-black ">tasks</h1></div>

                            </div>
                            <div className="w-full flex flex-row items-center">
                                    <div className="bg-gray-200 h-[42px] w-[42px] rounded-[10px] ml-[10px] flex flex-row items-center justify-center">
                                        <Image src={seventh} alt="ql,s" className="w-[70%] h-[70%]"></Image> 

                                    </div>
                                    <div className="w- h-full flex flex-row items-center justify-center ml-[30px]"><h1 className="text-[17px] font-semibold  text-black">sprint</h1></div>

                            </div>
                            <div className="w-full flex flex-row items-center">
                                    <div className="bg-gray-200 h-[42px] w-[42px] rounded-[10px] ml-[10px] flex flex-row items-center justify-center">
                                    <Image src={eigth} alt="ql,s" className="w-[80%] h-[80%]"></Image> 

                                    </div>
                                <div     className="w- h-full flex flex-row items-center justify-center ml-[30px]"><h1 className="text-[17px] font-semibold  text-black">class</h1></div>

                            </div>

                        </div>
                        <div className="w-full h-[1px] flex flex-row items-center justify-center">
                            <div className=" bg-black h-[2px] w-[90%] mt-[20px]"></div>

                        </div>
                        <div className=" w-full h-[60px] mt-[15px] flex flex-col items-center">
                            <div className="w-full h-1/2 flex flex-row items-center">
                                <div className="w-1/2 h-full">
                                    <Image src={eleventh} alt="ql,s" className="w-[80%] h-[80%]"></Image> 
                                </div>
                                <div className="w-full h-full flex flex-row items-center ml-[5px] ">
                                    <h1 className=" font-semibold text-[16px]  text-black">help center</h1>
                                </div>
                                
                            </div>
                            <div className="w-full h-1/2 flex flex-row items-center">
                                <div className="w-1/2 h-full">
                                    <Image src={tenth} alt="ql,s" className="w-[90%] h-[90%] pr-[5px]"></Image> 
                                </div>
                                <div className="w-full h-full flex flex-row items-center ml-[5px] ">
                                    <h1 className="text-black font-semibold text-[16px]">setting</h1>
                                </div>
                                
                            </div>
                        </div>




                    </div>

                    <div className="w-full h-full md:w-3/4 lg:w-full flex flex-col">
                        <div className="w-full  h-[60%] md:h-[80%] lg:h-[60%] bg-white py-[1rem] px-[20px] ">
                            <div className=" w-full h-[90%] flex  flex-col lg:flex-row justify-between">
                                <div className="w-full lg:w-[31%] h-full flex flex-col ">
                                    <h1 className="h-[10%] text-black font-semibold text-[18px]">tasks</h1>
                                    <div className="h-[90%] w-full flex flex-row items-center justify-center ">
                                        <div className="h-[90%] w-full mx-[5px] bg-yellow-200 rounded-[10px] px-[1rem] py-[1rem] space-y-2 shadow-md shadow-gray-500">
                                            <div className="w-full h-[31%] bg-white rounded-[10px] flex flex-row px-[10px] space-x-5 shadow-md shadow-gray-500">
                                                <div className="w-[45%] h-full flex flex-col items-center justify-center ">
                                                    <h1 className="text-black font-semibold text-[16px]">someTasks</h1>
                                                    <p className="text-gray-500 text-[12px]">mr.something</p>
                                                </div>
                                                <div className="w-[55%] h-full flex flex-row items-center justify-between space-x-2">
                                                    <div className="w-[65%] h-[70%] bg-yellow-200 rounded-[10px] flex flex-row items-center justify-center">
                                                        <h1 className="text-black font-semibold text-[10px]">3h + 20mins</h1>
                                                    </div>
                                                    <div className="bg-blue-500 w-[35%] h-[70%] rounded-[10px] flex flex-row items-center justify-center">
                                                        <h1 className="text-white font-semibold text-[10px]">5</h1>
                                                    </div>


                                                </div>
                                            </div>
                                            <div className="w-full h-[31%] bg-white rounded-[10px] flex flex-row px-[10px] space-x-5 shadow-md shadow-gray-500">
                                                <div className="w-[45%] h-full flex flex-col items-center justify-center ">
                                                    <h1 className="text-black font-semibold text-[16px]">someTasks</h1>
                                                    <p className="text-gray-500 text-[12px]">mr.something</p>
                                                </div>
                                                <div className="w-[55%] h-full flex flex-row items-center justify-between space-x-2">
                                                    <div className="w-[65%] h-[70%] bg-yellow-200 rounded-[10px] flex flex-row items-center justify-center">
                                                        <h1 className="text-black font-semibold text-[10px]">3h + 20mins</h1>
                                                    </div>
                                                    <div className="bg-blue-500 w-[35%] h-[70%] rounded-[10px] flex flex-row items-center justify-center">
                                                        <h1 className="text-white font-semibold text-[10px]">5</h1>
                                                    </div>


                                                </div>
                                            </div>
                                            <div className="w-full h-[31%] bg-white rounded-[10px] flex flex-row px-[10px] space-x-5 shadow-md shadow-gray-500">
                                                <div className="w-[45%] h-full flex flex-col items-center justify-center ">
                                                    <h1 className="text-black font-semibold text-[16px]">someTasks</h1>
                                                    <p className="text-gray-500 text-[12px]">mr.something</p>
                                                </div>
                                                <div className="w-[55%] h-full flex flex-row items-center justify-between space-x-2">
                                                    <div className="w-[65%] h-[70%] bg-yellow-200 rounded-[10px] flex flex-row items-center justify-center">
                                                        <h1 className="text-black font-semibold text-[10px]">3h + 20mins</h1>
                                                    </div>
                                                    <div className="bg-blue-500 w-[35%] h-[70%] rounded-[10px] flex flex-row items-center justify-center">
                                                        <h1 className="text-white font-semibold text-[10px]">5</h1>
                                                    </div>


                                                </div>
                                            </div>


                                        </div>

                                    </div>

                                </div>
                                <div className="w-full lg:w-[31%]  h-full flex flex-col">
                                <h1 className="h-[10%] text-black font-semibold text-[18px]">project</h1>
                                    <div className="h-[90%] w-full flex lg:flex-row  items-center justify-center 0">
                                        <div className="h-[90%] w-full mx-[5px] bg-yellow-200 rounded-[10px] px-[1rem] py-[1rem] space-y-2 shadow-md shadow-gray-500">
                                            <div className="w-full h-[31%] bg-white rounded-[10px] flex flex-row px-[10px] space-x-5 shadow-md shadow-gray-500">
                                                <div className="w-[45%] h-full flex flex-col items-center justify-center ">
                                                    <h1 className="text-black font-semibold text-[16px]">someProjects</h1>
                                                    <p className="text-gray-500 text-[12px]">teamname</p>
                                                </div>
                                                <div className="w-[55%] h-full flex flex-row items-center justify-between space-x-2">
                                                    <div className="w-[65%] h-[70%] bg-yellow-200 rounded-[10px] flex flex-row items-center justify-center">
                                                        <h1 className="text-black font-semibold text-[10px]">task left 4</h1>
                                                    </div>
                                                    <div className="bg-blue-500 w-[35%] h-[70%] rounded-[10px] flex flex-row items-center justify-center">
                                                        <h1 className="text-white font-semibold text-[10px]">1</h1>
                                                    </div>


                                                </div>
                                            </div>
                                            <div className="w-full h-[31%] bg-white rounded-[10px] flex flex-row px-[10px] space-x-5 shadow-md shadow-gray-500">
                                                <div className="w-[45%] h-full flex flex-col items-center justify-center ">
                                                    <h1 className="text-black font-semibold text-[16px]">someProjects</h1>
                                                    <p className="text-gray-500 text-[12px]">teamname</p>
                                                </div>
                                                <div className="w-[55%] h-full flex flex-row items-center justify-between space-x-2">
                                                    <div className="w-[65%] h-[70%] bg-yellow-200 rounded-[10px] flex flex-row items-center justify-center">
                                                        <h1 className="text-black font-semibold text-[10px]">task left 1</h1>
                                                    </div>
                                                    <div className="bg-blue-500 w-[35%] h-[70%] rounded-[10px] flex flex-row items-center justify-center">
                                                        <h1 className="text-white font-semibold text-[10px]">2</h1>
                                                    </div>


                                                </div>
                                            </div>
                                            <div className="w-full h-[31%] bg-white rounded-[10px] flex flex-row px-[10px] space-x-5 shadow-md shadow-gray-500">
                                                <div className="w-[45%] h-full flex flex-col items-center justify-center ">
                                                    <h1 className="text-black font-semibold text-[16px]">someProjects</h1>
                                                    <p className="text-gray-500 text-[12px]">teamname</p>
                                                </div>
                                                <div className="w-[55%] h-full flex flex-row items-center justify-between space-x-2">
                                                    <div className="w-[65%] h-[70%] bg-yellow-200 rounded-[10px] flex flex-row items-center justify-center">
                                                        <h1 className="text-black font-semibold text-[10px]">task left 12</h1>
                                                    </div>
                                                    <div className="bg-blue-500 w-[35%] h-[70%] rounded-[10px] flex flex-row items-center justify-center">
                                                        <h1 className="text-white font-semibold text-[10px]">3</h1>
                                                    </div>


                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                    
                                    
                                </div>
                                <div className="w-full lg:w-[31%]  h-full flex flex-col">
                                <h1 className="h-[10%] text-black font-semibold text-[18px]">goals</h1>
                                    <div className="h-[90%] w-full flex flex-row items-center justify-center 0">
                                        <div className="h-[90%] w-full mx-[5px] bg-yellow-200 rounded-[10px] px-[1rem] py-[1rem] space-y-2 shadow-md shadow-gray-500">
                                            <div className="w-full h-[31%] bg-white rounded-[10px] flex flex-row px-[10px] space-x-5 shadow-md shadow-gray-500">
                                                <div className="w-[45%] h-full flex flex-col items-center justify-center ">
                                                    <h1 className="text-black font-semibold text-[16px]">someGols</h1>
                                                </div>
                                                <div className="w-[55%] h-full flex flex-row items-center justify-between space-x-2">
                                                    <div className="w-[65%] h-[70%] bg-yellow-200 rounded-[10px] flex flex-row items-center justify-center">
                                                        <h1 className="text-black font-semibold text-[10px]">pj left 3</h1>
                                                    </div>
                                                    <div className="bg-red-500 w-[35%] h-[70%] rounded-[10px] flex flex-row items-center justify-center">
                                                        <Image src={fivteenth} alt="ql,s" className="w-[80%] h-[80%]"></Image> 

                                                    </div>


                                                </div>
                                            </div>
                                            <div className="w-full h-[31%] bg-white rounded-[10px] flex flex-row px-[10px] space-x-5 shadow-md shadow-gray-500">
                                                <div className="w-[45%] h-full flex flex-col items-center justify-center ">
                                                    <h1 className="text-black font-semibold text-[16px]">someGols2</h1>
                                                </div>
                                                <div className="w-[55%] h-full flex flex-row items-center justify-between space-x-2">
                                                    <div className="w-[65%] h-[70%] bg-yellow-200 rounded-[10px] flex flex-row items-center justify-center">
                                                        <h1 className="text-black font-semibold text-[10px]">pj left 3</h1>
                                                    </div>
                                                    <div className="bg-red-500 w-[35%] h-[70%] rounded-[10px] flex flex-row items-center justify-center">
                                                        <Image src={fivteenth} alt="ql,s" className="w-[80%] h-[80%]"></Image> 

                                                    </div>


                                                </div>
                                            </div>
                                            <div className="w-full h-[31%] bg-white rounded-[10px] flex flex-row px-[10px] space-x-5 shadow-md shadow-gray-500">
                                                <div className="w-[45%] h-full flex flex-col items-center justify-center ">
                                                    <h1 className="text-black font-semibold text-[16px]">someGoals3</h1>
                                                </div>
                                                <div className="w-[55%] h-full flex flex-row items-center justify-between space-x-2">
                                                    <div className="w-[65%] h-[70%] bg-yellow-200 rounded-[10px] flex flex-row items-center justify-center">
                                                        <h1 className="text-black font-semibold text-[10px]">pj ledt3</h1>
                                                    </div>
                                                    <div className="bg-red-500 w-[35%] h-[70%] rounded-[10px] flex flex-row items-center justify-center">
                                                        <Image src={fivteenth} alt="ql,s" className="w-[80%] h-[80%]"></Image> 

                                                    </div>


                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                </div>

                    </div>
                    
                        </div>
                    <div className="w-full h-[40%] bg-green-300 flex  flex-col-reverse lg:flex-row items-center lg:justify-between px-[20px] ">
                        <div className="w-[50%] h-full bg-green-500 flex flex-row "></div>

                        <div className="w-full lg:w-[43%] h-full flex flex-col ">
                            <h1 className="text-black font-semibold text-[18px] w-full h-[15%]">Ongoing classes</h1>
                            <div className="w-full lg:w-[95%]  rounded-[10px] h-[80%] bg-yellow-200 flex flex-col  md:flex-row  items-center shadow-md shadow-gray-500 ">
                                <div className="w-full md:w-[30%] h-[60%] flex flex-row items-center justify-center">
                                    <h1 className="text-black text-[15px] font-semibold">13:30 to 15:00</h1>
                                </div>
                                <div className="w-full h-[2px] md:w-[2px] md:h-full flex flex-row items-center justify-center pt-[-50px] md:pt-0">
                                    <div className=" bg-black w-[80%] h-full md:h-[80%] md:w-full"></div>

                                </div>
                                <div className="w-[85%] md:w-[64%] h-full flex flex-row items-center justify-center ml-[10px] ">
                                    <div className="w-full h-[80%] flex flex-col space-y-3">
                                            <div className="w-full h-[45%] bg-white rounded-[10px] flex flex-row px-[10px] space-x-5 shadow-md shadow-gray-500">
                                                <div className="w-[35%] md:w-[42%] h-full flex flex-col items-center justify-center ">
                                                    <h1 className="text-black font-semibold  text-[13px] md:text-[16px]">teacherName</h1>
                                                    <p className="text-gray-500 text-[9px] md:text-[12px]">classTime</p>
                                                </div>
                                                <div className="w-[55%] h-full flex flex-row items-center justify-between space-x-2">
                                                    <div className="w-[70%] h-[70%] bg-yellow-200 rounded-[10px] flex flex-row items-center justify-center">
                                                        <h1 className="text-black font-semibold text-[9px]">time left 35mins</h1>
                                                    </div>
                                                    <div className="bg-blue-500 w-[30%] h-[65%] rounded-[10px] flex flex-row items-center justify-center">
                                                        <h1 className="text-white font-semibold text-[10px]">3456</h1>
                                                    </div>


                                                </div>
                                            </div>
                                            <div className="w-full h-[45%] bg-white rounded-[10px] flex flex-row px-[10px] space-x-5 shadow-md shadow-gray-500">
                                                <div className="w-[35%] h-full flex flex-col items-center justify-center ">
                                                    <h1 className="text-black font-semibold text-[13px] md:text-[16px]">teacherName</h1>
                                                    <p className="text-gray-500 text-[9px] md:text-[12px]">classTime</p>
                                                </div>
                                                <div className="w-[55%] h-full flex flex-row items-center justify-between space-x-2">
                                                    <div className="w-[70%] h-[70%] bg-yellow-200 rounded-[10px] flex flex-row items-center justify-center">
                                                        <h1 className="text-black font-semibold text-[9px]">time left 33mins</h1>
                                                    </div>
                                                    <div className="bg-blue-500 w-[30%] h-[65%] rounded-[10px] flex flex-row items-center justify-center">
                                                        <h1 className="text-white font-semibold text-[10px]">3456</h1>
                                                    </div>


                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                </div>
                

                </div>

            </div>

        </div>
    
)}

    
        
    
