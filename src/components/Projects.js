import { SectionWrap, SectionHead, FadeIn } from './Section';
import './Projects.css';

export default function Projects({ projects }) {
  return (
    <SectionWrap id="projects">
      <FadeIn>
        <SectionHead num="02" title="Projects" />
      </FadeIn>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <FadeIn key={i} delay={i * 80}>
            <div className="project-card">
              <div
                className="project-icon"
                style={{ background: p.colorBg }}
              >
                {p.icon}
              </div>
              <div className="project-year">{p.year}</div>
              <div className="project-title">{p.title}</div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-tags">
                {p.tags.map((t, j) => (
                  <span
                    key={j}
                    className="project-tag"
                    style={{
                      background: p.colorBg,
                      color: p.color,
                      border: `1px solid ${p.colorBorder}`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrap>
  );
}
