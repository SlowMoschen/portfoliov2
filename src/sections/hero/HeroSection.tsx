import HeroCanvasBackground from "./HeroCanvasBackground";
import "./styles/HeroSection.css";
import svg from "../../assets/icons/hero.svg";
import Button from "../../common/components/Button";

export default function HeroSection() {

  const jumpTo = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <section>
        <HeroCanvasBackground />
        <div>
          <h1>
            Hi 👋, ich bin <span className="animated-text">Philipp Millner</span>
          </h1>
          <p>
            Ein angagierter <span className="underlined">Junior Fullstack Developer</span> aus Österreich.
          </p>
          <Button variant="contained" styles="primary" size="md" onClick={() => jumpTo('contact')}>
            Kontaktieren
          </Button>
          <Button variant="outlined" styles="secondary" size="md" onClick={() => jumpTo('projects')}>
            Projekte
          </Button>
        </div>
        <img src={svg} alt="hero" className="hero-img"/>
      </section>
    </>
  );
}
