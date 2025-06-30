import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-8 w-full ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left - Name */}
        <div className="text-lg font-semibold">
          © {new Date().getFullYear()} Ajay Kumar Harijan
        </div>

        {/* Center - Links */}
        <ul className="flex gap-3 md:gap-6 text-sm text-gray-300 ">
          <li>
            <a href="#home" className="hover:text-white transition">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-white transition">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-white transition">Projects</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-white transition">Skills</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </li>
        </ul>

        {/* Right - Social Icons */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:ajayharijan.dev@gmail.com"
            className="hover:text-blue-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
