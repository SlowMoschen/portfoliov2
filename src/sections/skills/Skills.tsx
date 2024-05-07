import SkillGrid from "./SkillGrid";
import "./styles/Skills.css";
import { frontEndSkills, backEndSkills, otherSkills } from "../../assets/icons/skills";

export default function Skills() {
  return (
    <div className="skills-section" id="skills">
      <h1 className="underlined">Skills</h1>
      <div className="skills-wrapper">
        <SkillGrid title="Frontend" animation="from-left" skills={frontEndSkills} />
        <SkillGrid title="Backend" animation="from-bottom" skills={backEndSkills} />
        <SkillGrid title="Andere" animation="from-right" skills={otherSkills} />
      </div>
    </div>
  );
}
