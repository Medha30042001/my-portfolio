import React from "react";

const Footer = () => {
  return (
    <footer className="bg-section py-10 border-t border-gray-700">

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Medha Adepu
        </p>

        <div className="flex gap-6 text-sm text-gray-400">

          <a
            href="mailto:medha.adepucse@gmail.com"
            className="hover:text-secondary transition"
          >
            medha.adepucse@gmail.com
          </a>

          <a
            href="https://github.com/Medha30042001"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/YOUR-LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;