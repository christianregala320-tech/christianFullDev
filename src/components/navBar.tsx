import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";






function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="md:flex md:w-full md:justify-center md:items-center md:px-4">
      <nav className="md:flex md:w-full md:max-w-225 md:items-center md:justify-center md:rounded-b-lg md:bg-[#1B1B1B] md:px-8 md:py-5">
        <div className="md:hidden w-full p-3 flex justify-end bg-[#1B1B1B]">
          <button className="md:hidden transition-all duration-300 ease-in-out"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} className="text-white transition-all" /> : <Menu size={28} className="text-white transition-all" />}
          </button>




        </div>

        {isOpen && (
          <div className="  flex flex-row gap-4 p-2  bg-[#1B1B1B]  md:hidden transition-all duration-300 ease-in-out">
            <Link to="/aboutMe" className="font-plex text-xs text-[#9C9C9C] hover:text-white transition">
              About Me
            </Link>

            <Link to="/whatiDo" className="font-plex text-xs text-[#9C9C9C] hover:text-white transition">
              What I Do
            </Link>

            <Link to="/caseStudies" className="font-plex text-xs text-[#9C9C9C] hover:text-white transition">
              Case Studies
            </Link>

            <Link to="/techStack" className="font-plex text-xs text-[#9C9C9C] hover:text-white transition">
              Tech Stacks
            </Link>

            <Link to="/contact" className="font-plex text-xs text-[#9C9C9C] hover:text-white transition">
              Contact
            </Link>



          </div>

        )}

        <ul className=" hidden md:flex md:items-center md:gap-9">



          <li>

            <Link to="/aboutMe" className="md:font-plex md:text-xs md:text-[#9C9C9C] md:hover:text-white">
              About Me
            </Link>
          </li>

          <li>
            <Link to="/whatiDo" className="md:font-plex md:text-xs md:text-[#9C9C9C] md:hover:text-white">
              What I Do
            </Link>
          </li>

          <li>
            <Link to="/caseStudies" className="md:font-plex md:text-xs md:text-[#9C9C9C] md:hover:text-white">
              Case Studies
            </Link>
          </li>

          <Link to="/techStack" className="font-plex text-xs text-[#9C9C9C] hover:text-white transition">
            Tech Stacks
          </Link>

          <Link to="/contact" className="font-plex text-xs text-[#9C9C9C] hover:text-white transition">
            Contact
          </Link>


        </ul>



      </nav>
    </header>
  );
}

export default Navbar;
