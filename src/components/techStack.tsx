
import {
    SiReact,
    SiFirebase,
    SiHtml5,
    SiJavascript,
    SiPhp,
    SiSupabase
} from "react-icons/si";

import { FaWindows, FaCss3Alt } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { Database } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";


function TechStack() {

    const technologies = [
        { name: "React", icon: SiReact, color: "#61DAFB"},
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28"},
        { name: "HTML", icon: SiHtml5, color: "#E34F26"},
          { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
        { name: "Javascript", icon: SiJavascript, color: "#F7DF1E"},
         { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "C#", icon: TbBrandCSharp, color: "#9B4F96" },
    { name: "Windows Forms", icon: FaWindows, color: "#00ADEF" },
    { name: "SQL", icon: Database, color: "#008BFF" },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" }
    ]


    return (
        <div className="min-h-screen flex flex-col">
            <header className="w-full p-3 flex justify-between">
                <div className="gap-4 flex flex-row items-center mb-2">
                    <span className="w-2 h-2 inline-block rounded-full bg-[#21D461]"></span>
                    <h1 className="font-plex text-xs text-[#21D461]">TECH STACKS</h1>

                </div>


                <div className="flex justify-end">
                    <Link to="/">
                        <ArrowUpRight size={24} className="text-[#21D461]" />
                    </Link>
                </div>

            </header>

            <div className="flex-1 flex flex-col items-center p-4">
                <header className="gap-4 flex flex-col items-center ">
                    <h1 className="font-raleway text-white text-8xl font-semibold">My Tech Stacks</h1>
                    <p className="font-plex text-lg text-[#698675]">Tools and Technologies I use to build web, mobile, and desktop applications.</p>

                </header>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
                    {technologies.map((tech) => (
                        <div 
                        key={tech.name}
                        className="flex flex-col items-center justify-center gap-3 rounded-2xl p-6 bg-[#070C09] border border-[#244B30]">

                            <tech.icon size={48} color={tech.color} />

                            <p className="text-white font-plex">{tech.name}</p>
                            </div>
                    ))}
                </div>


            </div>




        </div>
    );

}

export default TechStack;
