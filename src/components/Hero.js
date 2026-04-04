import './Hero.css';

export default function Hero({ data }) {

  return (
    <section id="hero" className="hero">
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-tag">
            <span className="available-dot" />
            Software Engineering Student · INSAT
          </div>

          <h1 className="hero-name">
            <span className="hero-name-main">Samar</span>
            <br></br> 
            <span className="hero-name-last">Ben Houidi</span>
          </h1>

          <p className="hero-title">
            {data.title} &amp; <em>{data.titleHighlight}</em>
          </p>

          <p className="hero-desc">{data.subtitle}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View my work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn-ghost">Get in touch</a>
          </div>
        </div>

        {/* Photo section */}
        <div className="hero-photo-wrap">
          <div className="hero-photo-frame">
            <img src="/profile.png" alt="Samar Ben Houidi" className="hero-photo-img" />
          </div>
          <div className="hero-photo-decoration" />
        </div>
      </div>
    </section>
  );
}
