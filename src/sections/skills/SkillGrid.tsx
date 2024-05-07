import { useRef, useEffect } from "react";
import { useObserver } from "../../utils/hooks/useObserver";
import "./styles/SkillGrid.css";

interface Skill {
  name: string;
  icon: string;
}

interface SkillGridProps {
  skills: Skill[];
  title: string;
  animation?: string;
}

export default function SkillGrid({ skills, title, animation }: SkillGridProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { observe } = useObserver();

  useEffect(() => {
    observe(ref);
  }, [observe]);

  return (
    <div className="skills-box">
      <h2>{title}</h2>
      <div className="skill-grid" ref={ref} data-animation={animation}>
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-icon">
              <img src={skill.icon} alt={skill.name} />
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
