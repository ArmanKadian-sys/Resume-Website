import { IoLogoJavascript } from "react-icons/io5";
import { FaLaptopCode, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiCplusplus } from "react-icons/si";
import { MdDataArray } from "react-icons/md";
import { TbBinaryTree } from "react-icons/tb";

const Skills = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Skills</h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">


          <div className="bg-white shadow-md rounded-2xl py-6 px-4 flex justify-center gap-2 items-center font-semibold text-gray-700 hover:bg-black hover:text-white transition duration-300 cursor-pointer text-2xl">
            <span>JavaScript</span>
            <span><IoLogoJavascript /></span>
          </div>


          <div className="bg-white shadow-md rounded-2xl py-6 px-4 flex justify-center gap-2 items-center font-semibold text-gray-700 hover:bg-black hover:text-white transition duration-300 cursor-pointer text-2xl">
            <span>C++</span>
            <span><SiCplusplus /></span>
          </div>


          <div className="bg-white shadow-md rounded-2xl py-6 px-4 flex justify-center gap-2 items-center font-semibold text-gray-700 hover:bg-black hover:text-white transition duration-300 cursor-pointer text-2xl">
            <span>Data Structures & Algorithms</span>
            <span><TbBinaryTree /></span>
          </div>


          <div className="bg-white shadow-md rounded-2xl py-6 px-4 flex justify-center gap-2 items-center font-semibold text-gray-700 hover:bg-black hover:text-white transition duration-300 cursor-pointer text-2xl">
            <span>React</span>
            <span><FaReact /></span>
          </div>


          <div className="bg-white shadow-md rounded-2xl py-6 px-4 flex justify-center gap-2 items-center font-semibold text-gray-700 hover:bg-black hover:text-white transition duration-300 cursor-pointer text-2xl">
            <span>Node.js</span>
            <span><FaNodeJs /></span>
          </div>


          <div className="bg-white shadow-md rounded-2xl py-6 px-4 flex justify-center gap-2 items-center font-semibold text-gray-700 hover:bg-black hover:text-white transition duration-300 cursor-pointer text-2xl">
            <span>Express</span>
            <span><SiExpress /></span>
          </div>


          <div className="bg-white shadow-md rounded-2xl py-6 px-4 flex justify-center gap-2 items-center font-semibold text-gray-700 hover:bg-black hover:text-white transition duration-300 cursor-pointer text-2xl">
            <span>MongoDB</span>
            <span><SiMongodb /></span>
          </div>


          <div className="bg-white shadow-md rounded-2xl py-6 px-4 flex justify-center gap-2 items-center font-semibold text-gray-700 hover:bg-black hover:text-white transition duration-300 cursor-pointer text-2xl">
            <span>Tailwind</span>
            <span><SiTailwindcss /></span>
          </div>


          <div className="bg-white shadow-md rounded-2xl py-6 px-4 flex justify-center gap-2 items-center font-semibold text-gray-700 hover:bg-black hover:text-white transition duration-300 cursor-pointer text-2xl">
            <span>GitHub</span>
            <span><FaGitAlt /></span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;