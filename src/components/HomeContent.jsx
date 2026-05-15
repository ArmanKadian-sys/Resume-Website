import profile from "../assets/profile.jpg";

const HomeContent = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:justify-between">


        <div className="flex justify-center">
          <img
            src={profile}
            alt="Arman Kadian"
            className="h-64 w-64 rounded-full object-cover shadow-xl md:h-80 md:w-80"
          />
        </div>

        <div className="max-w-2xl text-center md:text-left">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
            About Me
          </h1>

          <p className="mb-4 text-lg leading-8 text-gray-600">
            Hi, I’m Arman Kadian, a passionate MERN Stack Developer currently
            pursuing a Master of Information Technology at University of
            Southern Queensland.
          </p>

          <p className="mb-4 text-lg leading-8 text-gray-600">
            I have hands-on experience building full-stack web applications
            using MongoDB, Express.js, React.js, and Node.js, with a strong
            interest in creating scalable, efficient, and user-friendly
            solutions.
          </p>

          <p className="text-lg leading-8 text-gray-600">
            I am actively seeking internship or part-time opportunities where I
            can apply my technical skills, contribute to innovative projects,
            and continue growing as a software developer.
          </p>
        </div>


      </div>
    </section>
  );
};

export default HomeContent;