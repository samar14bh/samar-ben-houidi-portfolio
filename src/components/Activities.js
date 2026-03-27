import { SectionWrap, SectionHead, FadeIn } from './Section';
import './Activities.css';

export default function Activities({ activities, certifications }) {
  return (
    <SectionWrap id="activities">
      <FadeIn>
        <SectionHead num="05" title="Community & Certs" />
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

      <FadeIn delay={200}>
        <div className="cert-grid">
          {certifications.map((c, i) => (
            <div className="cert-card" key={i}>
              <div className="cert-icon">{c.icon}</div>
              <div>
                <div className="cert-title">{c.title}</div>
                <div className="cert-sub">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </SectionWrap>
  );
}
