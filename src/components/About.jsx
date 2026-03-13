import "../styles/about.css";

function About() {
  return (
    <section className="about-premium" id="about">
      <div className="ap-glow"></div>
      <div className="ap-glow ap-glow-right"></div>
      
      <div className="ap-container">
        <div className="ap-header">
          <span className="ap-eyebrow">Our Story</span>
          <h2 className="ap-title">
            Where <span className="ap-text-gradient">craft</span> meets intention
          </h2>
          <div className="ap-line"></div>
        </div>

        <div className="ap-content-wrapper">
          <div className="ap-glass-card">
            <div className="ap-card-icon">✧</div>
            <p>
              We believe that beauty is not an afterthought — it is the very
              foundation of everything we do. Each piece is shaped with careful
              hands, unhurried attention, and a devotion to the materials that make
              it real.
            </p>
          </div>

          <div className="ap-glass-card">
            <div className="ap-card-icon">✦</div>
            <p>
              Born from a small atelier tucked between old pines and open fields,
              our work carries the quietness of that place. We make things meant to
              last, things that age with grace, things that feel like home.
            </p>
          </div>
        </div>

        <div className="ap-footer">
          <div className="ap-rule"></div>
          <span className="ap-est">Est. 2025 — Handmade with love</span>
          <div className="ap-rule"></div>
        </div>
      </div>
    </section>
  );
}

export default About;
