import { SlOptions } from "react-icons/sl";
import HomeContent from "./HomeContent";
import Footer from "./Footer";
import Skills from "./Skills";
import Projects from "./Projects";
import EducationContent from "./EducationContent";
import Contact from "./Contact"
import { useState } from "react";


const Navbar = () => {
  const [toShow, changeToShow] = useState("home");
  return (<>
    <header className="w-full bg-[#f5f5f5] px-10 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        <div className="flex items-center gap-3">


          <h1 className="text-2xl font-semibold  text-[#2d2d2d]">
            Arman Kadian
          </h1>
        </div>


        <nav className="items-center gap-10 lg:flex flex flex-wrap">

          <button
            className={`group flex items-center gap-1 text-md font-medium  transition hover:text-black ${toShow === "home" ? "text-black" : "text-gray-500"
              }`}
            onClick={() => changeToShow("home")}
          >
            Home
          </button>

          <button
            className={`group flex items-center gap-1 text-md font-medium  transition hover:text-black ${toShow === "projects" ? "text-black" : "text-gray-500"
              }`}
            onClick={() => changeToShow("projects")}
          >
            Projects
          </button>

          <button
            className={`group flex items-center gap-1 text-md font-medium  transition hover:text-black ${toShow === "education" ? "text-black" : "text-gray-500"
              }`}
            onClick={() => changeToShow("education")}
          >

            Education
          </button>

          <button
            className={`group flex items-center gap-1 text-md font-medium  transition hover:text-black ${toShow === "skills" ? "text-black" : "text-gray-500"
              }`}
            onClick={() => changeToShow("skills")}
          >
            Skills
          </button>

          <button
            className={`group flex items-center gap-1 text-md font-medium  transition hover:text-black ${toShow === "contact" ? "text-black" : "text-gray-500"
              }`}
            onClick={() => changeToShow("contact")}
          >
            Contact
          </button>





        </nav>



      </div>
    </header >

    {toShow == "skills" && <div className="animate-fadeIn"><Skills /></div>}
    {toShow == "home" && <div className="animate-fadeIn"><HomeContent /></div>}
    {toShow == "education" && <div className="animate-fadeIn"><EducationContent /></div>}
    {toShow == "projects" && <div className="animate-fadeIn"><Projects /></div>}
    {toShow == "contact" && <div className="animate-fadeIn"><Contact /></div>}









  </>)
}

export default Navbar;