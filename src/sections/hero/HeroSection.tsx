import HeroCanvasBackground from "./HeroCanvasBackground";
import "./styles/HeroSection.css";
import svg from "../../assets/icons/hero.svg";
import Button from "../../common/components/Button";
import { jumpTo } from "../../utils/helper";
import { useObserver } from "../../utils/hooks/useObserver";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { observe } = useObserver();

  useEffect(() => {
    observe(ref);
  }, [observe]);

  return (
    <>
      <section id="home">
        <HeroCanvasBackground />
        <div ref={ref} data-animation={"fade-in from-left"}>
          <h1>
            Hi 👋, ich bin <span className="animated-text">Philipp Millner</span>
          </h1>
          <p>
            Ein angagierter <span className="underlined">Junior Fullstack Developer</span> aus
            Österreich.
          </p>
          <Button variant="contained" styles="primary" size="md" onClick={() => jumpTo("kontakt")}>
            Kontaktieren
          </Button>
          <Button
            variant="outlined"
            styles="secondary"
            size="md"
            onClick={() => jumpTo("projekte")}
          >
            Projekte
          </Button>
        </div>
        <img src={svg} alt="hero" className="hero-img" />
      </section>
    </>
  );
}
