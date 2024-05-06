import Footer from './common/components/Footer'
import Navbar from './common/components/Navbar'
import Contact from './sections/contact/Contact'
import HeroSection from './sections/hero/HeroSection'
import Timeline from './sections/projects/Timeline'
import Skills from './sections/skills/Skills'

function App() {

  return (
    <>
        <Navbar />
        <HeroSection />
        <Timeline />
        <Skills />
        <Contact />
        <Footer />
    </>
  )
}

export default App
