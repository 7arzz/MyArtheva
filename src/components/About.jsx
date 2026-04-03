import "../styles/about.css";

function About() {
  return (
    <section className="about-premium" id="about">
      <div className="ap-glow"></div>
      <div className="ap-glow ap-glow-right"></div>

      <div className="ap-container">
        <div className="ap-header">
          <span className="ap-eyebrow">Our Vision and Mision</span>
          <h2 className="ap-title">
            The goal of the{" "}
            <span className="ap-text-gradient">Artheva Company</span>
          </h2>
          <div className="ap-line"></div>
        </div>

        <div className="ap-content-wrapper">
          <div className="ap-glass-card">
            <div className="ap-card-icon">✧</div>
            <p>
              To become a company that produces DIY glass products that are
              honest, beneficial to customers, high-quality, reliable, and
              consistently meet market needs.
            </p>
          </div>

          <div className="ap-glass-card">
            <div className="ap-card-icon">✦</div>
            <p>
              <li>Maintain consistent quality</li>
              <li>Inspire through design</li>
              <li>Continuously Innovate</li>
              <li>Develop a warm and professional customer experience</li>
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
