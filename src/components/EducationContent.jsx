import { useEffect, useState } from "react";

const EducationContent = () => {
  const [showCards, setShowCards] = useState([false, false, false]);

  const cards = [
    {
      name: "Kurukshetra University, India",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      time: "2020 to 2024",
      description: "Completed a Bachelor of Technology (B.Tech) in Computer Science and Engineering from Kurukshetra University with an overall score of 83%. Built a strong foundation in core computer science concepts through academic coursework and practical projects.",
      image:
        "https://upload.wikimedia.org/wikipedia/en/1/1d/Kurukshetra_University_logo.png",
    },
    {
      name: "Gate CSE 2025 in India",
      degree: "Qualified Gate Exam",
      time: "2025",
      description: "Qualified the GATE CSE 2025 examination and secured a position among the top 5% of candidates nationwide. This achievement reflects my strong understanding of core computer science concepts, problem-solving abilities, and analytical thinking across subjects such as data structures, algorithms, operating systems and computer architechture.",
      image:
        "https://goaps.iitr.ac.in/_next/static/media/gate-logo.cef64d27.png",
    },
    {
      name: "University of Southern Queensland, Australia",
      degree: "Master of Information Technology",
      time: "2025 to 2027",
      description: "Currently pursuingMaster of Information Technology at the University of Southern Queensland (UniSQ), Toowoomba. Expanding expertise in  software development and modern IT practices while gaining international academic exposure.",
      image:
        "https://universitiesaustralia.edu.au/wp-content/uploads/2019/06/USQ-2-300x300.png",
    },

  ];

  useEffect(() => {
    const timers = cards.map((_, index) =>
      setTimeout(() => {
        setShowCards((prev) => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
      }, (index + 1) * 1500)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6">
      <div className="relative max-w-6xl mx-auto">

        {/* Timeline Line */}
        <div className="absolute left-5 md:left-1/2 top-0 md:-translate-x-1/2 w-[3px] h-full overflow-hidden">
          <div className="animate-lineDown w-full bg-gray-700"></div>
        </div>

        <div className="flex flex-col gap-20 md:gap-32">
          {cards.map((card, index) => {
            const isRight = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex items-center 
              ${isRight ? "md:justify-start" : "md:justify-end"} 
              justify-start`}
              >

                {/* Dot */}
                <div
                  className={`absolute left-5 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full  z-20 transition-all duration-500 
                ${showCards[index] ? "bg-gray-700 border-2 border-gray-500" : "bg-white"}`}
                ></div>


                <div
                  className={`ml-14 md:ml-0 w-[85%] sm:w-[80%] md:w-[42%] transition-all duration-1000 transform
                ${showCards[index]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                    }`}
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 bg-white  p-5 sm:p-6">


                    <div className="flex justify-center ">
                      <img
                        src={card.image}
                        alt={card.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 object-contain min-w-[80px]"
                      />
                    </div>


                    <div className="text-center sm:text-left">
                      <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 leading-snug">
                        {card.degree}
                      </h2>

                      <h3 className="text-sm sm:text-md text-gray-600 font-semibold mb-2">
                        {card.name}
                      </h3>

                      <h4 className="text-xs sm:text-sm text-gray-400 font-medium mb-3">
                        {card.time}
                      </h4>

                      <p className="text-gray-600 leading-relaxed text-sm">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
      @keyframes lineDown {
        from {
          height: 0%;
        }
        to {
          height: 88%;
        }
      }

      .animate-lineDown {
        animation: lineDown 5s ease-in-out forwards;
      }
    `}</style>
    </div>
  );
};

export default EducationContent;