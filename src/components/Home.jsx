import React from "react";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-4 text-center overflow-hidden">

      <h1 className="text-2xl  md:text-5xl font-bold mb-4 z-10">
        Hi, I'm <span className="text-blue-600">Ajay Kumar</span>
      </h1>

      <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-3 z-10">
        A Passionate Full Stack Developer
      </h2>

      <h3 className="text-lg md:text-xl text-gray-600 z-10">
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">
    <Typewriter
      words={[
        "I build modern web applications.",
        "I love the MERN stack.",
        "I solve real-world problems with code.",
      ]}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  </span>
      </h3>

      <p className="mt-6 text-gray-500 max-w-xl z-10">
        I specialize in building responsive, scalable, and secure web applications using the MERN stack. Always eager to learn, build, and grow as a full stack developer.
      </p>

      <div className="mt-8 flex gap-4 z-10 flex-col md:flex-row">
        <a
          href="/Ajay-Resume.pdf"
          target="_blank"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          📄 View Resume
        </a>
        <a
          href="#contact"
          className="bg-gray-200 text-black px-6 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          📬 Contact Me
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
