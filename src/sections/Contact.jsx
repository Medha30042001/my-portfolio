import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-primary">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Let's build something meaningful
        </h2>

        <p className="text-gray-400 mb-12">
          I'm open to full-time roles, internships, and collaborations.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">

          <a
            href="mailto:medha.adepucse@gmail.com"
            className="border px-6 py-3 rounded-lg hover:bg-secondary hover:text-black transition"
          >
            Email
          </a>

          <a
            href="https://github.com/Medha30042001"
            target="_blank"
            rel="noopener noreferrer"
            className="border px-6 py-3 rounded-lg hover:bg-secondary hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border px-6 py-3 rounded-lg hover:bg-secondary hover:text-black transition"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </section>
  );
};

export default Contact;