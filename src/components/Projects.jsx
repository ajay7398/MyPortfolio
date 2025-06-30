import React from "react";
import notebook from '../assets/notebook.png'
import news from '../assets/news.png'
const projects = [
  {
    title: "MERN News App",
    image: news, // 🖼️ Place your image in public/images/
    description:
      "A full-stack news app with JWT authentication, encrypted passwords, categorized articles, search functionality, and server-side pagination.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Redux", "Tailwind"],
    demo: "https://your-newsapp-demo.netlify.app",
    code: "https://github.com/yourusername/news-app",
  },
  {
    title: "Task Manager",
    image: notebook,
    description:
      "A responsive task manager that allows users to add, edit, and delete tasks with login functionality using JWT and MERN stack.",
    tech: ["React", "Tailwind", "MongoDB", "Node.js"],
    demo: "https://task-manager-demo.netlify.app",
    code: "https://github.com/yourusername/task-manager",
  },
  // Add more projects here...
];

const Projects = () => {
  return (
    <section  id="projects" className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden text-left"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 px-3 py-1 text-sm rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-4 md:flex-row">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    🔗 Live Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
                  >
                    💻 GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
