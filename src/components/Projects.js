import { SectionWrap, SectionHead, FadeIn } from './Section';
import './Projects.css';

export default function Projects({ projects }) {
  const sortByOrderDesc = (a, b) => (b.order ?? 0) - (a.order ?? 0);

  const aiProjects = projects
    .filter((project) => project.category === 'ai')
    .sort(sortByOrderDesc);
  const webProjects = projects
    .filter((project) => project.category === 'web')
    .sort(sortByOrderDesc);

  const renderProjectCard = (p, i, delayBase = 0) => (
    <FadeIn key={`${p.title}-${i}`} delay={delayBase + i * 80}>
      <div className="project-card">
        <div className="project-media" style={{ borderColor: p.colorBorder }}>
          <img
            src={p.image}
            alt={`${p.title} preview`}
            className="project-image"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div
            className="project-icon project-icon-fallback"
            style={{ background: p.colorBg }}
          >
            {p.icon}
          </div>
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
  );

  return (
    <SectionWrap id="projects">
      <FadeIn>
        <SectionHead num="02" title="Projects" />
      </FadeIn>
      <div className="projects-group">
        <FadeIn>
          <h3 className="projects-group-title">AI Related</h3>
        </FadeIn>
        <div className="projects-grid">
          {aiProjects.map((p, i) => renderProjectCard(p, i))}
        </div>
      </div>

      <div className="projects-group">
        <FadeIn>
          <h3 className="projects-group-title">Web Development</h3>
        </FadeIn>
        <div className="projects-grid">
          {webProjects.map((p, i) => renderProjectCard(p, i, 120))}
        </div>
      </div>
    </SectionWrap>
  );
}
