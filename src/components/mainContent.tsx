
import profileImage from "../assets/profile.jpg";



function mainContent() {

  
    return (
        <div className="p-4 flex flex-col md:flex-row justify-center items-center max-h-150 mt-8">
            <div className=" motion-safe:animate-fade-in flex flex-col gap-2 p-2">
                <h1 className=" text-white font-raleway text-4xl font-bold">Christian Regala</h1>
                <p className="inline-block w-0 overflow-hidden whitespace-nowrap border-r-2 border-green-500 font-mono text-sm text-green-500 motion-safe:animate-typing">Full Stack Developer | Turning Ideas Into Powerful Digital Experiences</p>
                <p className=" font-plex text-xs text-[#9C9C9C]">
                    I build modern, responsive, and high-performing websites 
                    <br/>
                    and web applications that help businesses stand out and grow. 
                    <br/>
                    From beautiful, user-friendly interfaces to reliable backend systems, 
                    <br/>
                    I turn your ideas into seamless digital solutions.
                </p>

                <div className="w-full flex justify-center items-center md:justify-start">
                    <button className="rounded-md bg-[#3F8E00] px-10 py-4 font-plex font-bold text-white shadow-[0_0_25px_rgba(63,142,0,0.5)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(63,142,0,0.8)]">Lets get started </button>
                </div>
            </div>

            <div className="motion-safe:animate-fade-in flex flex-col gap-2 p-2">
                <div className="w-55 h-55 rounded-full bg-red-800">
                <img className="w-full h-full rounded-full object-full"
                src={profileImage}
                alt="Christian Regala"
                ></img>
                </div>

                
            </div>


            

            

        </div>
    );

}

export default mainContent;

