import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,        // ✅ correct import
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiVite,
  SiNetlify,
  SiRender,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <SiHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-600" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
  { name: "React.js", icon: <SiReact className="text-sky-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> }, // ✅ correct usage
  { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "Git", icon: <SiGit className="text-red-600" /> },
  { name: "GitHub", icon: <SiGithub className="text-black" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "Vite", icon: <SiVite className="text-purple-400" /> },
  { name: "Netlify", icon: <SiNetlify className="text-teal-500" /> },
  { name: "Render", icon: <SiRender className="text-indigo-500" /> },
];


const Skills = () => {
  return (
    <section id="skills"  className=" w-full bg-white py-16 px-6">
      <div className=" mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-12">My Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
            data-aos="fade-up"
              key={skill.name}
              className="bg-gray-100 hover:shadow-lg rounded-xl p-6 flex flex-col items-center transition"
            >
              <div className="text-5xl mb-3">{skill.icon}</div>
              <p className="text-base font-medium text-gray-800">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
