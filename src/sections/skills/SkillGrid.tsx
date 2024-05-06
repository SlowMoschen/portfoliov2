import "./styles/SkillGrid.css";

interface Skill {
    name: string
    icon: string
}


interface SkillGridProps {
    skills: Skill[]
    title: string
}

export default function SkillGrid({ skills, title} : SkillGridProps) {

    return (
        <div className="skills-box">
            <h2>{title}</h2>
            <div className="skill-grid">
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