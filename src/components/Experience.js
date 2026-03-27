import { SectionWrap, SectionHead, FadeIn } from './Section';
import './Experience.css';

export default function Experience({ experience }) {
  return (
    <SectionWrap id="experience">
      <FadeIn>
        <SectionHead num="01" title="Experience" />
      </FadeIn>
      <div className="exp-grid">
        {experience.map((exp, i) => (
          <FadeIn key={i} delay={i * 100}>
            <div className="exp-card">
              <div className="exp-bar" />
              <div className="exp-meta">
                <div>
                  <div className="exp-role">{exp.role}</div>
                  <div className="exp-company">{exp.company}</div>
                </div>
                <div className="exp-date">{exp.date}</div>
              </div>
              <ul className="exp-bullets">
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              <div className="tech-stack">
                {exp.stack.map((t, j) => (
                  <span className="tech-tag" key={j}>{t}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrap>
  );
}
