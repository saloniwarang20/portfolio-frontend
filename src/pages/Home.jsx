import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"

import About from "../components/sections/About"
import Experience from "../components/sections/Experience"
import Hero from "../components/sections/Hero"
import Projects from "../components/sections/Projects"
import Skills from "../components/sections/Skills"
import Contact from "../components/sections/Contact"

const Home = () => {
  return (
    <div className="min-h-screen bg-zinc-950">

        <Navbar />

        <main>
            <Hero/>
            <About/>
            <Skills/>
            <Projects/>
            <Experience />
            <Contact />
        </main>

        <Footer />
      
    </div>
  )
}

export default Home
