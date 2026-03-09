import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="fixed top-0 w-full bg-primary/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">


        <a href="#home" className="font-bold text-xl text-secondary">
          Medha
        </a>
     

        <ul className="hidden md:flex gap-8 text-gray-300">
          <li><a href="#home" className="hover:text-secondary">Home</a></li>
          <li><a href="#about" className="hover:text-secondary">About</a></li>
          <li><a href="#skills" className="hover:text-secondary">Skills</a></li>
          <li><a href="#projects" className="hover:text-secondary">Projects</a></li>
          <li><a href="#contact" className="hover:text-secondary">Contact</a></li>
        </ul>

      </div>
    </nav>
    </>
  )
}

export default Navbar