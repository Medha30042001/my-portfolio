import React from "react";
import pfp from "../assets/pfp.jpeg";
import resume from '../assets/resume.pdf'

const About = () => {
  return (
    <>
      <section id="about" className="py-24 bg-section">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src={pfp}
            alt="profile picture"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-100">About Me</h2>
            <p className="text-gray-300 leading-relaxed">
              I’m a full stack developer with a strong interest in building
              intuitive, performant web applications. I enjoy working across the
              stack, translating ideas into clean UI and reliable backend logic.
              I’m currently looking for opportunities where I can learn, grow,
              and contribute to meaningful products.
            </p>

            <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-accent text-black px-6 py-3 rounded-lg hover:bg-orange-400 transition"
            >
            Download Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
