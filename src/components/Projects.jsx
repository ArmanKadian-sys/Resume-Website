import blogs from "../assets/blogs.gif";
import ecommerce from "../assets/Ecommerce.gif";
import aichat from "../assets/AI CHAT APP.gif";
import { FaCode } from "react-icons/fa";
import { CgMediaLive } from "react-icons/cg";






const Projects = () => {
  const projects = [
    {
      title: "AI Chat Website",
      description:
        "An AI-powered chat application built using the Gemini API, featuring secure user authentication, real-time conversational responses, and a modern responsive interface. The app delivers an intuitive user experience with smooth chat interactions, clean UI design, and personalized access for users.",
      gif: aichat,
      code: "https://github.com/ArmanKadian-sys/AI-Chat-App",
      live: "https://ai-chat-frontend-deploy.vercel.app/",
    },
    {
      title: "E-Commerce Website",
      description:
        "A full-stack MERN eCommerce platform featuring secure authentication, product browsing, add-to-cart functionality, and order management. The application includes separate dashboards for users and sellers, allowing customers to shop seamlessly while sellers can add and manage their products through an intuitive interface. Built with a responsive UI to deliver a smooth and modern shopping experience across all devices.",
      gif: ecommerce,
      code: "https://github.com/ArmanKadian-sys/Ecommerce-Website",
      live: "https://ecommerce-frontend-three-sand.vercel.app/",
    },
    {
      title: "Blogs Website",
      description:
        "A full-stack blog platform featuring secure user authentication, blog creation and publishing, interactive commenting, and like/dislike functionality. The application provides a clean and responsive user interface where users can share ideas, engage with content, and interact with other writers through real-time feedback and discussions. Built to deliver a smooth and engaging blogging experience across all devices.",
      gif: blogs,
      code: "https://github.com/ArmanKadian-sys/Blog-Website",
      live: "https://blogs-frontend-two.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">


        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-800">Projects</h1>
          <p className="text-gray-500 mt-3">
            Some of the projects I have worked on
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 flex flex-col"
            >


              <div className="w-full h-56 overflow-hidden">
                <img
                  src={project.gif}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>


              <div className="flex flex-col flex-grow">

                {/* Content */}
                <div className="p-6 flex-grow">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    {project.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>


                <div className="flex border-t border-gray-200">

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="w-1/2 flex justify-center gap-2 items-center py-4 font-semibold text-sm text-gray-700 hover:bg-black hover:text-white transition duration-300 border-r border-gray-200"
                  >
                    <span><FaCode /></span>
                    <span>Code</span>

                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="w-1/2 flex justify-center gap-2 items-center py-4 font-semibold text-sm text-gray-700 hover:bg-black hover:text-white transition duration-300"
                  >
                    <span><CgMediaLive /></span>
                    <span>Live</span>
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;