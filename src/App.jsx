
import Navbar from './components/Navbar.jsx'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Home from './sections/Home.jsx'
import Projects from './sections/Projects.jsx'
import Skills from './sections/Skills.jsx'
import Footer from "./components/Footer";

function App() {

  return (
    <>
    <Navbar />
    <main className='bg-primary text-white'>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
      
    </>
  )
}

export default App
