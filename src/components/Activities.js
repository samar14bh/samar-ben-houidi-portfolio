import { SectionWrap, SectionHead, FadeIn } from './Section';
import './Activities.css';

export default function Activities({ activities, certifications }) {
  return (
    <>
      <SectionWrap id="community">
        <FadeIn>
          <SectionHead num="05" title="Community" />
        </FadeIn>

        <FadeIn delay={100}>
          <div className="activities-grid">
            {activities.map((a, i) => (
              <div className="activity-card" key={i}>
                <div className="activity-org">{a.org}</div>
                <div className="activity-sub">{a.sub}</div>
                {a.items.map((item, j) => (
                  <div className="activity-item" key={j}>{item}</div>
                ))}
              </div>
            ))}
          </div>
        </FadeIn>
      </SectionWrap>

      <SectionWrap id="certifications">
        <FadeIn>
          <SectionHead num="06" title="Certifications" />
        </FadeIn>

        <FadeIn delay={100}>
          <div className="cert-grid">
            {certifications.map((c, i) => (
              <div className="cert-card" key={i}>
                <div className="cert-content">
                  <div className="cert-title">{c.title}</div>
                  <div className="cert-sub">{c.sub}</div>
                  {c.pdf && (
                    <a
                      className="cert-btn"
                      href={c.pdf}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </SectionWrap>
    </>
  );
}