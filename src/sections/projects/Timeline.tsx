import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import bbhp from "../../assets/bbhp.png";
import bbLogo from "../../assets/brain-blitz-favicon-color.png";
import CR1 from "../../assets/CR1.png";
import chatio from "../../assets/chatio1.png";
import ProjectElement, { ProjectElementProps } from "./ProjectElement";
import "./styles/Timeline.css";

export default function Timeline() {
  const timelineElements: ProjectElementProps[] = [
    {
      date: "Feb 2024 - Heute (in Arbeit)",
      title: "Brain Blitz",
      description: "Eine webbasierte Quiz-App, mit Fragen zu verschiedenen Themen und Kategorien.",
      icon_src: bbLogo,
      img_src: bbhp,
      chips: ["React", "NestJS", "TypeScript"],
      buttonProps: {
        primary: {
          link: "https://brain-blitz.com/",
          text: "Zur Website",
        },
        secondary: {
          link: "https://github.com/SlowMoschen/Brain_Blitz",
          text: "Zum Code",
        },
      },
    },
    {
      date: "Dez 2023 - Jan 2023",
      title: "Console Crawler",
      description:
        "Ein textbasiertes Spiel, bei dem der Spieler durch einen Dungeon voll von Monstern schlagen muss.",
      icon_initials: "CC",
      img_src: CR1,
      chips: ["C#", "OOP", "Console App"],
      buttonProps: {
        primary: {
          link: "https://www.dropbox.com/scl/fo/juv3ejltom4j7pqrfh8fi/h?rlkey=g583vtdiwwep5b2g6las3azqf&st=h7esjtur&dl=0",
          text: "Zum Download",
        },
        secondary: {
          link: "https://github.com/SlowMoschen/Console_Crawler",
          text: "Zum Code",
        },
      },
    },
    {
      date: "Nov 2023 - Dez 2023",
      title: "Chat.IO",
      description:
        "Ein einfacher Chatroom, bei dem sich Benutzer mit einem Nickname anmelden können.",
      icon_initials: "CI",
      img_src: chatio,
      chips: ["JavaScript", "Express.js", "Socket.IO", "React"],
      buttonProps: {
        primary: {
          link: "https://github.com/SlowMoschen/Chat.IO",
          text: "Zum Code",
        },
      },
    },
  ];

  return (
    <div className="timeline-box">
      <section id="projekte" className="blub"></section>
      <h1 className="underlined header-title">Meine Projekte</h1>
      <VerticalTimeline lineColor="var(--text)">
        {timelineElements.map((element, index) => (
          <ProjectElement
            key={index}
            date={element.date}
            title={element.title}
            description={element.description}
            icon_src={element.icon_src}
            icon_initials={element.icon_initials}
            img_src={element.img_src}
            chips={element.chips}
            buttonProps={element.buttonProps}
          />
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: "var(--primary)", boxShadow: "0 0 0 4px var(--accent)" }}
          icon={<div className="icon-initials"></div>}
        />
      </VerticalTimeline>
    </div>
  );
}
