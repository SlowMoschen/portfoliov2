import SkillGrid from "./SkillGrid";
import "./styles/Skills.css";
import { frontEndSkills, backEndSkills, otherSkills } from "../../assets/icons/skills";

export default function Skills() {
  return (
    <div className="skills-section">
      <h1 className="underlined">Skills</h1>
      <div className="skills-wrapper">
        <SkillGrid title="Frontend" skills={frontEndSkills} />
        <SkillGrid title="Backend" skills={backEndSkills} />
        <SkillGrid title="Andere" skills={otherSkills} />
      </div>
    </div>
  );
}
