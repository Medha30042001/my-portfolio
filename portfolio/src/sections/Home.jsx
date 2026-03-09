import React from "react";
import webdevGirl from "../assets/webdevGirl.png";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-28 bg-gradient-to-b from-primary via-section to-primary"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm <span className="text-secondary">Medha Adepu</span>
          </h1>

          <p className="mt-6 text-xl text-gray-300">
            Full-stack developer building clean, scalable web apps with
            modern technologies.
          </p>

          <div className="mt-8 flex gap-4">

            <a
              href="#projects"
              className="bg-secondary text-black px-6 py-3 rounded-lg hover:bg-teal-400 transition"
            >
              View Projects
            </a>

            <a
              href="/src/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              Resume
            </a>

          </div>
        </div>

        <div className="hidden md:block">
          <img src={webdevGirl} alt="developer illustration" className="w-96" />
        </div>

      </div>
    </section>
  );
};

export default Home;