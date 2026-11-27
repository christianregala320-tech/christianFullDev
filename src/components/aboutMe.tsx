import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function AboutMe() {

    return (
        <div className="min-h-screen flex flex-col overflow-hidden">
            <header className=" flex flex-col py-9 px-3 md:w-full md:py-9 md:px-3  md:flex md:flex-row md:justify-between md:items-center">
                <div className=" md:flex md:justify-between md:gap-4">
                    <div className="md:flex  md:flex-col">
                        <div className=" gap-4 w-full   flex flex-row justify-between items-center mb-2 md:gap-4 md:flex md:flex-row md:items-center md:mb-2">
                            <div className="flex flex-row justify-center items-center gap-4">
                                <span className="w-2 h-2 inline-block rounded-full bg-[#21D461] md:w-2 md:h-2 md:inline-block md:rounded-full md:bg-[#21D461]"></span>
                                <h1 className="font-plex text-xs text-[#21D461] md:font-plex md:text-xs md:text-[#21D461]">HOW I BUILD</h1>
                            </div>

                            <div className="flex justify-end md:hidden">

                                <Link to="/">


                                    <ArrowUpRight size={32} className="text-[#21D461]" />
                                </Link>
                            </div>

                        </div>

                        <div>
                            <h1 className="md:font-plex md:text-white md:text-lg">Purposeful interfaces. Powerful functionality</h1>
                        </div>




                    </div>

                    <div className="flex flex-row gap-3">
                        <div className="py-3 px-9 flex justify-center a items-center rounded-lg bg-[#18221B]">
                            <p className="text-white text-xs font-plex">RESPONSIVE U.I</p>
                        </div>

                        <div className="py-3 px-9 flex justify-center a items-center rounded-lg bg-[#18221B]">
                            <p className="text-white text-xs font-plex">FULLSTACK DEVELOPER</p>
                        </div>

                        <div className="py-3 px-9 flex justify-center a items-center rounded-lg bg-[#18221B]">
                            <p className="text-white text-xs font-plex">DESIGN SYSTEMS</p>
                        </div>

                    </div>



                </div>

                <div className="flex justify-end   ">

                    <Link to="/">


                        <ArrowUpRight size={24} className="text-[#21D461] hidden md:block" />
                    </Link>
                </div>
            </header>


            <div className=" flex flex-col justify-center items-center md:flex-1  md:flex md:flex-row md:items-center md:justify-center md:p-8 ">
                <div className="flex">
                    <div className="flex justify-start flex-col">
                        <div className="flex flex-row justify-start items-center gap-4">
                            <span className="w-2 h-2 inline-block rounded-full bg-[#21D461]"></span>
                            <p className="text-[#21D461] text-xs font-plex"> 01 / ABOUT ME</p>
                        </div>

                        <div>
                            <p className="text-5xl font-raleway text-white">
                                I build digital things
                                <br />
                                that feel effortless.

                            </p>

                            <p className="text-[#9C9C9C] text-xs font-plex">
                                I'm Christian, a full-stack developer focused on crafting
                                <br />
                                clean, responsive experiences from interface to infrastructure.
                                <br />
                                From the first sketch to the final detail, I care about how
                                <br />
                                a product looks, works, and feels.
                            </p>


                        </div>

                        <div>
                            <div className=" mt-3 p-3 flex gap-4  max-w-91.75  bg-[#111712] border border-[#1C2C21] rounded-lg">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#164E28]">
                                    <ArrowUpRight
                                        size={20}
                                        strokeWidth={2.5}
                                        className="text-[#21D461]"
                                    />
                                </div>

                                <div className="">
                                    <p className="font-raleway text-sm text-white">Build with Intention</p>
                                    <p className="font-plex text-xs text-[#9C9C9C]">Thoughtful UI. Reliable code. Real Value</p>
                                </div>


                            </div>
                        </div>



                    </div>


                </div>


                <div className=" mt-5 md:mt-0 md:self-start">
                    <div className="bg-[#101511] flex flex-col min-h-95 min-w-90 border rounded-2xl border-[#243729]">
                        <header className="flex justify-between w-full p-4 bg-[#18221B] border rounded-t-2xl">

                            <div className="flex flex-row gap-3">
                                <span className="w-2 h-2 inline-block rounded-full bg-[#FA6F6F]"></span>
                                <span className="w-2 h-2 inline-block rounded-full bg-[#F4C55C]"></span>
                                <span className="w-2 h-2 inline-block rounded-full bg-[#21D461]"></span>
                            </div>

                        </header>

                        <div className="flex-1 p-5">

                            <p className="text-white font-plex text-sm"><span className="text-blue-400">using</span> System;
                                <br />
                                <span className="text-blue-400">namespace</span> Program <br /> {`{`}


                            </p>

                            <p className="text-white font-plex text-sm">
                                <span className="text-blue-400">class</span> Program {'{'}
                            </p>

                            <p className="text-white font-plex text-sm">
                                <span className="text-blue-400">static void Main </span> (string[] args) {'{'}
                            </p>
                            <br />

                            <p className="text-white font-plex text-sm">
                                <span className="text-green-400">Console</span>.<span className="text-yellow-300">WriteLine</span>("Christian Regala");
                                <br />
                                <span className="text-green-400">Console</span>.<span className="text-yellow-300">WriteLine</span>("Full Stack Developer");
                            </p>

                            <p className="text-white font-plex text-sm">
                                {'}'}
                            </p>


                            <p className="text-white font-plex text-sm">
                                {'}'}
                            </p>


                            <p className="text-white font-plex text-sm">
                                {'}'}
                            </p>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    );

}

export default AboutMe;

