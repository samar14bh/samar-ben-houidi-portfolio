import './Contact.css';

export default function Contact({ data }) {
  return (
    <footer id="contact" className="contact">
      <div className="contact-inner">
        <div className="contact-left">
          <h2 className="contact-heading">
            Let's build<br />
            <span className="contact-heading-accent">something great.</span>
          </h2>
          <p className="contact-sub">Open to internships, collaborations &amp; interesting projects.</p>
        </div>

        <div className="contact-links">
          <a href={`mailto:${data.email}`} className="contact-link">
            <span className="contact-link-icon">✉</span>
            {data.email}
          </a>
          <a href={data.linkedin} className="contact-link" target="_blank" rel="noreferrer">
            <span className="contact-link-icon">in</span>
            linkedin.com/in/samar-benhouidi
          </a>
          <a href={data.github} className="contact-link" target="_blank" rel="noreferrer">
            <span className="contact-link-icon">gh</span>
            github.com/samar14bh
          </a>
          <a href={`tel:${data.phone.replace(/\s/g, '')}`} className="contact-link">
            <span className="contact-link-icon">☏</span>
            {data.phone}
          </a>
        </div>
      </div>

      <div className="contact-footer">
        © 2026 Samar Ben Houidi · Tunisia
      </div>
    </footer>
  );
}
