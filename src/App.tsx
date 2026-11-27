import Navbar from "./components/navBar";
import MainContentPort from "./components/mainContent";
import AboutMe from "./components/aboutMe";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatIDoSection from "./components/whatiDo";
import CaseStudies from "./components/caseStudies";
import TechStack from "./components/techStack";
import Contact from "./components/contact";
import Antigravity from "./components/Antigravity";


export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-[#080808]">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Antigravity
            shape="dot"
            lineColor="#14532D"
            hoverColor="#21D461"
            cellSize={40}
            twinkle={0.5}
            opacity={0.5}
            fade={0}
          />
        </div>
        <div className="relative z-10 min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <MainContentPort />
              </>
            }
          />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/whatiDo" element={<WhatIDoSection />} />
          <Route path="/caseStudies" element={<CaseStudies />} />
          <Route path="/techStack" element={<TechStack />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div className="p-6 text-white">Page not found. <a className="text-[#21D461]" href="/">Back to home</a></div>} />
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
