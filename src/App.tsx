import { lazy, useEffect, useState } from "react";
import Navbar from "./common/components/Navbar";
import HeroSection from "./sections/hero/HeroSection";
const Skills = lazy(() => import("./sections/skills/Skills"));
const Timeline = lazy(() => import("./sections/projects/Timeline"));
const Contact = lazy(() => import("./sections/contact/Contact"));
const Footer = lazy(() => import("./common/components/Footer"));

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return isLoading ? (
    <div className="loading-box">
      <span className="loader"></span>
    </div>
  ) : (
    <>
      <Navbar />
      <HeroSection />
      <Timeline />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
