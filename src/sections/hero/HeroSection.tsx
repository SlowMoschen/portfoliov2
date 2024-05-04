import Background from "./Background";
import "./styles/HeroSection.css";
import svg from "../../assets/hero.svg";

export default function HeroSection() {
  return (
    <>
      <section>
        <Background />
        <div>
          <h1 className="animated-text">Willkommen</h1>
          <p>
            Ich bin ein Fullstack-Entwickler, der sich auf die Entwicklung von Webanwendungen
            spezialisiert hat.
          </p>
        </div>
        <img src={svg} alt="hero" />
      </section>
    </>
  );
}
