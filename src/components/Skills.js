import { SectionWrap, SectionHead, FadeIn } from './Section';
import './Skills.css';

export default function Skills({ skills }) {
  return (
    <SectionWrap id="skills">
      <FadeIn>
        <SectionHead num="03" title="Skills" />
      </FadeIn>
      <FadeIn delay={100}>
        <div className="skills-grid">
          {skills.map((group, i) => (
            <div className="skill-group" key={i}>
              <div className="skill-group-title">// {group.label}</div>
              <div className="skill-items">
                {group.items.map((item, j) => (
                  <span className="skill-pill" key={j}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </SectionWrap>
  );
}
