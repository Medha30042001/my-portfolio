import React from "react";
import ProjectCard from "../components/ProjectCard";
import shopvibe from "../assets/shopvibe.jpg";
import timeflow from "../assets/timeflow.png";

const projects = [
  {
    title: "ShopVibe",
    image: shopvibe,
    description:
      "Full-stack role-based e-commerce platform with authentication, RBAC, product management, orders, reviews and analytics.",
    demo: "https://shopvibemedhaadepu.netlify.app",
    github: "https://github.com/Medha30042001/bright-dash-emporium",
    stack: ["React", "Node.js", "Express", "Supabase", "Tailwind"],
  },
  {
    title: "TimeFlow",
    image: timeflow,
    description:
      "Time tracking platform that logs daily activities and analyzes productivity patterns.",
    demo: "https://medha30042001.github.io/ai-project-evaluation/",
    github: "https://github.com/Medha30042001/ai-project-evaluation",
    stack: ["HTML", "CSS", "JavaScript", "Firebase"],
  },
];

const Projects = () => {
  return (
  <section id="projects" className="py-24 bg-section">

      <div className="max-w-6xl mx-auto px-6 space-y-12">

        <h2 className="text-4xl font-bold text-white">Projects</h2>

        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}

      </div>

    </section>
  );
};

export default Projects;