import StageBook from "../images/stagebook.png";
import { ArrowUpRight } from "lucide-react";
import { SiReact, SiFirebase } from "react-icons/si";
import CliniCare from "../images/clinicare.png";
import { motion } from "motion/react";

import {
    SiHtml5,
    SiCss,
    SiJavascript,
    SiPhp,
    SiMysql,

} from "react-icons/si";

import { Link } from "react-router-dom";


export default function CaseStudies() {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="w-full p-3 flex justify-between">
                <div className="gap-4 flex flex-row items-center mb-2">
                    <span className="w-2 h-2 inline-block rounded-full bg-[#21D461]"></span>
                    <h1 className="font-plex text-xs text-[#21D461]"> 03 / CASE STUDIES</h1>
                </div>

                <div className="flex justify-end">

                    <Link to="/">


                        <ArrowUpRight size={24} className="text-[#21D461]" />
                    </Link>
                </div>
            </header>

            <div className="flex  justify-center flex-col gap-8 p-5 items-center w-full sm:flex-row sm:items-center sm:justify-center sm:gap-8">
                <div>
                    <motion.h1 className="text-white text-6xl font-raleway font-semibold text-center md:text-white md:text-6xl md:font-raleway md:font-semibold "
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >Selected concepts.</motion.h1>
                </div>

                <div>
                    <motion.p 
                      initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    
                    className="font-plex text-sm text-[#9C9C9C]">Explorations in visual direction, product thinking,
                        <br />
                        and clean development-ready layouts.
                    </motion.p>
                </div>
            </div>

            <div className="flex flex-col gap-5 h-full w-full justify-center items-center">
                <div className="rounded-xl p-3 w-full flex-col m:h-128 md:flex-row  items-center  flex max-w-105 md:max-w-188  bg-[#131713] border border-[#253329]">
                    <div className="w-full max-w-90 h-120 rounded-xl">
                        <img src={StageBook} className=" rounded-xl w-full h-full object-cover"></img>

                    </div>


                    <div className="flex flex-col w-full h-full items-center">
                        <div className="rounded-4xl bg-[#111D15] p-3">
                            <p className="text-[#21D461] font-plex">CASE STUDY 01</p>
                        </div>

                        <div className="w-full  p-2 flex justify-center">

                            <h1 className="text-white font-raleway font-semibold text-5xl">StageBook</h1>

                        </div>

                        <div className="px-2 py-10 w-full flex justify-center items-center">
                            <p className=" text-[#9CCBAB] text-sm font-plex">Lyrics setlist organizer for
                                <br />
                                for aspiring band vocalist.
                            </p>
                        </div>

                        <div className="w-80  h-px bg-[#1D211D]"></div>

                        <div className="w-full px-2 flex justify-center items-center">

                            <p className="text-[#21D461] font-plex text-2xl md:text-2xl">APPLICATION DEVELOPMENT</p>
                        </div>


                        <div className="px-2 py-10 w-full flex flex-row gap-2 justify-center">


                            <div className="flex gap-2 flex-row items-center ">
                                <SiReact className="text-3xl text-[#61DAFB]" />
                                <span className="text-[#9CCBAB] text-sm font-plex">React Native</span>
                            </div>

                            <div className="flex gap-2 flex-row items-center">
                                <SiFirebase className="text-3xl text-[#FFCA28]" />
                                <span className="text-[#9CCBAB] text-sm font-plex">Firebase</span>
                            </div>

                        </div>

                        <div className="w-full flex justify-end">
                            <ArrowUpRight size={24} className="text-[#21D461]" />

                        </div>



                    </div>


                </div>


                <div className="rounded-xl mb-10 p-3 w-full flex-col m:h-128 md:flex-row  items-center  flex max-w-105 md:max-w-188  bg-[#131713] border border-[#253329]">
                    <div className="w-full max-w-120 md:max-w-90  rounded-xl">
                        <img src={CliniCare} className=" rounded-xl w-full h-full object-contain"></img>

                    </div>


                    <div className="flex flex-col w-full h-full items-center">
                        <div className="rounded-4xl bg-[#111D15] p-3">
                            <p className="text-[#21D461] font-plex">CASE STUDY 02</p>
                        </div>

                        <div className="w-full  p-2 flex justify-center">

                            <h1 className="text-white font-raleway font-semibold text-5xl">CliniCare</h1>

                        </div>

                        <div className="px-2 py-10 w-full">
                            <p className=" text-[#9CCBAB] text-sm font-plex text-center">An A.I Assisted Web Based Clinic Appointment
                                <br />
                                and Health Care Services Platform in Bogo City Cebu
                            </p>
                        </div>

                        <div className="w-80  h-px bg-[#1D211D]"></div>



                        <div className="w-full mt-5 px-2 flex justify-center">
                            <p className="text-[#21D461] font-plex text-2xl md:text-2xl">WEB APP</p>
                        </div>
                        <div className="px-2 py-10 w-full grid grid-cols-3 gap-2">


                            <div className="flex gap-2 flex-row items-center">
                                <SiHtml5 className="text-4xl text-[#E34F26]" />

                                <span className="text-[#9CCBAB] text-sm font-plex">HTML</span>
                            </div>

                            <div className="flex gap-2 flex-row items-center">
                                <SiCss className="text-4xl text-[#1572B6]" />
                                <span className="text-[#9CCBAB] text-sm font-plex">CSS</span>
                            </div>

                            <div className="flex gap-2 flex-row items-center">
                                <SiJavascript className="text-4xl text-[#F7DF1E]" />
                                <span className="text-[#9CCBAB] text-sm font-plex">JAVASCRIPT</span>
                            </div>

                            <div className="flex gap-2 flex-row items-center">
                                <SiPhp className="text-4xl text-[#777BB4]" />
                                <span className="text-[#9CCBAB] text-sm font-plex">PHP</span>
                            </div>

                            <div className="flex gap-2 flex-row items-center">
                                <SiMysql className="text-4xl text-[#4479A1]" />

                                <span className="text-[#9CCBAB] text-sm font-plex">SQL</span>
                            </div>

                        </div>

                        <div className="w-full flex justify-end">
                            <ArrowUpRight size={24} className="text-[#21D461]" />

                        </div>



                    </div>


                </div>






            </div>
        </div>
    );

}
