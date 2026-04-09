import { SectionWrap, SectionHead, FadeIn } from './Section';
import './Experience.css';

export default function Experience({ experience }) {
  return (
    <SectionWrap id="experience">
      <FadeIn>
        <SectionHead num="01" title="Experience" />
      </FadeIn>

      <div className="exp-wrapper">
        <div className="exp-line">
          <div className="exp-line-progress"></div>
        </div>

        <div className="exp-grid">
          {experience.map((exp, i) => (
            <FadeIn key={i} delay={i * 120}>
              <div 
                className={`exp-card ${i % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="card-glow"></div>
                
                <div className="exp-timeline-dot">
                  <div className="exp-dot-inner"></div>
                </div>

                <div className="exp-header">
                  <div className="exp-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    </svg>
                  </div>
                  <div className="exp-meta">
                    <div>
                      <h3 className="exp-role">{exp.role}</h3>
                      <div className="exp-company-wrapper">
                        <span className="exp-company">{exp.company}</span>
                      </div>
                    </div>
                    <div className="exp-date-badge">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                        <path d="M12 8v4l3 3M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span>{exp.date}</span>
                    </div>
                  </div>
                </div>

                <ul className="exp-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>
                      <span className="bullet-marker">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                          <path d="M20 12L8 12M12 16L8 12L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </span>
                      <span className="bullet-text">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="tech-stack">
                  <div className="tech-stack-label">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    </svg>
                    <span>Tech Stack</span>
                  </div>
                  <div className="tech-tags">
                    {exp.stack.map((t, j) => (
                      <span className="tech-tag" key={j}>
                        <span className="tech-tag-dot"></span>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="card-corner"></div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionWrap>
  );
}