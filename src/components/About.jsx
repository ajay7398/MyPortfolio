import React from "react";
import profile from '../assets/ajay.pic.jpg'
const About = () => {
  return (
    <section
      id="about"
      data-aos="fade-up"
      className="min-h-screen bg-white flex items-center justify-center px-4 py-16"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Image or Animation */}
        <div className="flex justify-center">
          <img
            src={profile} // Replace with your image or animated SVG
            alt="Ajay Kumar Harijan"
            className="w-64 h-64 object-cover rounded-full shadow-xl"
          />
        </div>

        {/* Right - Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            About Me
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            I’m <span className="font-semibold text-blue-600">Ajay Kumar Harijan</span>, a dedicated full stack developer with a strong passion for building responsive, user-friendly web applications using the MERN stack.
          </p>
          <p className="text-gray-600 text-lg mb-4">
            I enjoy solving real-world problems with clean and efficient code. My portfolio includes projects like a News App with authentication, server-side pagination, and search features. I'm always looking to grow and learn new tools and technologies.
          </p>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2 text-blue-500">Tech Skills:</h3>
            <ul className="flex flex-wrap gap-2 text-sm text-gray-700">
              <li className="bg-blue-100 px-3 py-1 rounded">React</li>
              <li className="bg-blue-100 px-3 py-1 rounded">Node.js</li>
              <li className="bg-blue-100 px-3 py-1 rounded">MongoDB</li>
              <li className="bg-blue-100 px-3 py-1 rounded">Express.js</li>
              <li className="bg-blue-100 px-3 py-1 rounded">Tailwind CSS</li>
              <li className="bg-blue-100 px-3 py-1 rounded">JWT</li>
              <li className="bg-blue-100 px-3 py-1 rounded">Redux</li>
              <li className="bg-blue-100 px-3 py-1 rounded">REST APIs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
