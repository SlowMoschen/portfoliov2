import HeroCanvasBackground from "./HeroCanvasBackground";
import "./styles/HeroSection.css";
import svg from "../../assets/icons/hero.svg";
import Button from "../../common/components/Button";
import { jumpTo } from "../../utils/helper";

export default function HeroSection() {

  return (
    <>
      <section id="home">
        <HeroCanvasBackground />
        <div>
          <h1>
            Hi 👋, ich bin <span className="animated-text">Philipp Millner</span>
          </h1>
          <p>
            Ein angagierter <span className="underlined">Junior Fullstack Developer</span> aus Österreich.
          </p>
          <Button variant="contained" styles="primary" size="md" onClick={() => jumpTo('kontakt')}>
            Kontaktieren
          </Button>
          <Button variant="outlined" styles="secondary" size="md" onClick={() => jumpTo('projekte')}>
            Projekte
          </Button>
        </div>
        <img src={svg} alt="hero" className="hero-img"/>
      </section>
    </>
  );
}
