import { jumpTo } from "../../utils/helper";
import Button from "./Button";
import "./styles/Navbar.css";
import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
import { useEffect, useState } from "react";
import { useScreenSize } from "../../utils/hooks/useScreenSize";

export default function Navbar() {
  const sections = ["home", "projekte", "skills", "kontakt"];
  const [active, setActive] = useState<string>("home");
  const [canvasBottom, setCanvasBottom] = useState<number>(0);
  const [background, setBackground] = useState<"transparent" | "primary">("transparent");
  const [isNavVisible, setIsNavVisible] = useState<boolean>(false);
  const { screenWidth } = useScreenSize();
  const isMobile = screenWidth < 768;

  const changeBackground = (scrollPosition: number) => {
    if (scrollPosition > canvasBottom) {
      setBackground("primary");
    } else {
      setBackground("transparent");
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    changeBackground(scrollPosition);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  });

  useEffect(() => {
    if (!isMobile) setIsNavVisible(true);

    const canvasHeight = document.querySelector("#canvas")?.getBoundingClientRect();
    setCanvasBottom(canvasHeight?.bottom || 0);

    window.addEventListener("scroll", handleScroll);
    sections.forEach((section) => {
      const element = document.querySelector(`#${section}`);
      element && observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => {
        const element = document.querySelector(`#${section}`);
        element && observer.unobserve(element);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navBarStyles = {
    backgroundColor: isMobile
      ? "var(--primary)"
      : background === "transparent"
      ? "transparent"
      : "var(--primary)",
  };

  if (isMobile) {
    return (
      <>
        <nav className="mobile-nav" style={navBarStyles}>
          <span
            className="material-symbols-outlined burger"
            onClick={() => setIsNavVisible(!isNavVisible)}
          >
            menu
          </span>
          {isNavVisible && (
            <div className="mobile-nav-content">
              {sections.map((section) => (
                <Button
                  key={section}
                  onClick={() => {
                    setIsNavVisible(false);
                    setActive(section);
                    jumpTo(section);
                  }}
                  size="lg"
                  styles={active === section ? "accent" : "secondary"}
                  variant="text"
                >
                  {section}
                </Button>
              ))}
              <div>
                <a href="https://www.linkedin.com/in/philipp-millner-4167b5286/" target="_blank">
                  <img src={linkedin} alt="" className="link-img" />
                </a>
                <a href="https://github.com/SlowMoschen" target="_blank">
                  <img src={github} alt="" className="link-img github-icon" />
                </a>
              </div>
            </div>
          )}
        </nav>
      </>
    );
  }

  return (
    <nav className="navbar" style={navBarStyles}>
      <div>
        {sections.map((section) => (
          <Button
            key={section}
            onClick={() => {
              jumpTo(section);
            }}
            size="lg"
            styles={active === section ? "accent" : "secondary"}
            variant="text"
            style={{
              fontWeight: 800,
              letterSpacing: "0.1rem",
              textDecoration: active === section ? "underline" : "none",
              textUnderlineOffset: "0.2rem",
            }}
          >
            {section}
          </Button>
        ))}
      </div>

      <div>
        <a href="https://www.linkedin.com/in/philipp-millner-4167b5286/" target="_blank">
          <img src={linkedin} alt="" className="link-img" />
        </a>
        <a href="https://github.com/SlowMoschen" target="_blank">
          <img src={github} alt="" className="link-img github-icon" />
        </a>
      </div>
    </nav>
  );
}
