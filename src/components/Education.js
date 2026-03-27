import { SectionWrap, SectionHead, FadeIn } from './Section';
import './Education.css';

export default function Education({ education }) {
  return (
    <SectionWrap id="education">
      <FadeIn>
        <SectionHead num="04" title="Education" />
      </FadeIn>
      <FadeIn delay={100}>
        <div className="edu-timeline">
          {education.map((edu, i) => (
            <div className="edu-item" key={i}>
              <div className="edu-degree">{edu.degree}</div>
              <div className="edu-school">{edu.school}</div>
              <div className="edu-year">{edu.year}</div>
            </div>
          ))}
        </div>
      </FadeIn>
    </SectionWrap>
  );
}
