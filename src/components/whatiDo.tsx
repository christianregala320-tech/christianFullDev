import { PanelTop, Braces, Check, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";


function whatIDo() {
    return (
        <div className="min-h-screen">
            <header className="w-full py-9  flex justify-between px-3">
                <div className="gap-4 flex flex-row items-center mb-2">
                    <span className="w-2 h-2 inline-block rounded-full bg-[#21D461]"></span>
                    <h1 className="font-plex text-xs text-[#21D461]">What I Do</h1>
                    
                </div>

               

                       <div className="flex justify-end">
                         <Link to="/">
                            <ArrowUpRight size={24} className="text-[#21D461]" />
                            </Link>
                        </div>

            </header>


            <div className="flex-1 flex flex-col items-center justify-center md:flex-1 md:flex md:p-9 md:justify-center md:items-center">
                <div className="flex flex-col  md:flex md:flex-row md:justify-between">
                    <div className="flex justify-center flex-col items-center md:flex md:justify-start md:items-start">
                        <h1 className="font-plex text-white text-4xl md:text-6xl md:text-white md:font-plex">Design-minded.</h1>
                        <h1 className="font-plex text-white text-4xl md:text-6xl md:text-white md:font-plex">Development-driven.</h1>
                    </div>

                    <div className="p-3 md:flex md:justify-center md:items-center md:flex-col md:p-4">
                        <p className="text-white font-plex text-sm">I connect the visual and technical sides of a product.</p>
                        <p className="text-white font-plex text-sm">so every interaction is beautiful, fast and usefull.</p>
                    </div>
                </div>




            </div>


            <div className="flex justify-center items-center flex-col gap-7 p-10  md:mb-0 md:flex md:flex-row md:justify-center md:items-center md:gap-4">
                <div className="p-5 w-full max-w-89 bg-[#131413] flex-col rounded-lg border border-[#2A2D2A]">
                    <header className="flex justify-between items-center w-full">
                        <div className="p-4 rounded-full flex justify-center items-center bg-[#1D3525]">
                            <PanelTop size={24} className="text-[#21D461]" />

                        </div>

                        <p className="text-[#698675]">01</p>

                    </header>

                    <main className="w-full">
                        <h1 className="text-white text-3xl mt-4 font-raleway font-semibold">Frontend experiences</h1>

                        <div>
                            <p className="text-[#A2A2A2] font-plex mt-7">Intuitive interfaces built to work
                                <br />
                                beautifully across screens
                            </p>
                        </div>

                        <div className="my-7 h-px bg-[#1D211D]" />

                        <div className="space-y-4 text-xs font-semibold font-plex text-[#9CCBAB]">
                            <p>UI COMPONENTS</p>
                            <p>RESPONSIVE DESIGN</p>
                        </div>


                        <div className="mt-6 flex justify-end">
                            <ArrowUpRight size={24} className="text-[#21D461]" />
                        </div>

                    </main>
                </div>


                <div className="p-5 w-full max-w-89 bg-[#131413] flex-col rounded-lg border border-[#2A2D2A]">
                    <header className="flex justify-between items-center w-full">
                        <div className="p-4 rounded-full flex justify-center items-center bg-[#1D3525]">
                            <Braces size={24} className="text-[#21D461]" />

                        </div>

                        <p className="text-[#698675]">02</p>

                    </header>

                    <main className="w-full">
                        <h1 className="text-white text-3xl mt-4 font-raleway font-semibold">Full-stack applications</h1>

                        <div>
                            <p className="text-[#A2A2A2] font-plex mt-7">From frontend experiences to
                                <br />
                                dependable backend logic
                            </p>
                        </div>

                        <div className="my-7 h-px bg-[#1D211D]" />

                        <div className="space-y-4 text-xs font-semibold font-plex text-[#9CCBAB]">
                            <p>APPLICATION DEVELOPMENT</p>
                            <p>INTEGRATIONS</p>
                        </div>


                        <div className="mt-6 flex justify-end">
                            <ArrowUpRight size={24} className="text-[#21D461]" />
                        </div>

                    </main>
                </div>



                <div className="p-5 w-full max-w-89 bg-[#131413] flex-col rounded-lg border border-[#2A2D2A]">
                    <header className="flex justify-between items-center w-full">
                        <div className="p-4 rounded-full flex justify-center items-center bg-[#1D3525]">
                            <Check size={24} className="text-[#21D461]" />

                        </div>

                        <p className="text-[#698675]">03</p>

                    </header>

                    <main className="w-full">
                        <h1 className="text-white text-3xl mt-4 font-raleway font-semibold">Performance & polish</h1>

                        <div>
                            <p className="text-[#A2A2A2] font-plex mt-7">Accessibility, speed, and thoughtful
                                <br />
                                details throughout.
                            </p>
                        </div>

                        <div className="my-7 h-px bg-[#1D211D]" />

                        <div className="space-y-4 text-xs font-semibold font-plex text-[#9CCBAB]">
                            <p>OPTIMIZATION</p>
                            <p>USER EXPERIENCE</p>
                        </div>


                        <div className="mt-6 flex justify-end">
                            <ArrowUpRight size={24} className="text-[#21D461]" />
                        </div>

                    </main>
                </div>



            </div>
        </div>
    );
}

export default whatIDo;
