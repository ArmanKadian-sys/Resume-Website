import { FaPhoneAlt, FaEnvelope, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Contact</h1>
          <p className="text-gray-500 mt-3">
            Feel free to connect with me
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Phone */}
          <div className="bg-white shadow-md rounded-2xl p-8 flex flex-col items-center hover:bg-black hover:text-white transition duration-300">
            <FaPhoneAlt className="text-4xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">Phone</h2>
            <p className="text-center">+61 406920492</p>
          </div>



          <a
            href="mailto:armankadian11@gmail.com?subject=Portfolio Contact"
            className="bg-white shadow-md rounded-2xl p-8 flex flex-col items-center hover:bg-black hover:text-white transition duration-300"
          >
            <FaEnvelope className="text-4xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <span>armankadian11@gmail.com</span>
          </a>



          <a
            href="https://github.com/ArmanKadian-sys"
            target="_blank"
            rel="noreferrer"
            className="bg-white shadow-md rounded-2xl p-8 flex flex-col items-center hover:bg-black hover:text-white transition duration-300"
          >
            <FaGithub className="text-4xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">GitHub</h2>

          </a>


          {/* Address */}
          <div className="bg-white shadow-md rounded-2xl p-8 flex flex-col items-center hover:bg-black hover:text-white transition duration-300">
            <FaMapMarkerAlt className="text-4xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">Address</h2>
            <p className="text-center">
              Toowoomba, Queensland, Australia
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;