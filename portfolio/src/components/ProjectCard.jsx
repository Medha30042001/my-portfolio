import React from "react";

const ProjectCard = ({ image, title, description, demo, github, stack }) => {
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition grid md:grid-cols-5">

      <img
        src={image}
        alt={title}
        className="md:col-span-3 h-full object-cover"
      />

      <div className="md:col-span-2 p-6 flex flex-col justify-between">

        <div>
          <h3 className="text-2xl font-bold text-gray-100">{title}</h3>

          <p className="text-gray-400 mt-2 text-sm">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">

            {stack.map((tech, i) => (
              <span
                key={i}
                className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

        <div className="mt-4 flex gap-4">

          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary px-4 py-2 rounded text-black hover:bg-teal-400 transition"
          >
            Live Demo
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="border px-4 py-2 rounded text-white hover:bg-gray-300 hover:text-black transition"
          >
            GitHub
          </a>

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;