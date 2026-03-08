import "../styles/about.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-flourish about-flourish--left">&amp;</div>
      <div className="about-flourish about-flourish--right">&amp;</div>

      <div className="about-inner">
        <div className="about-ornament">
          <div className="about-ornament-line"></div>
          <div className="about-ornament-diamond"></div>
          <div className="about-ornament-line"></div>
        </div>

        <p className="about-label">Our story</p>

        <h2>
          Where <em>craft</em> meets intention
        </h2>

        <div className="about-underline"></div>

        <p>
          We believe that beauty is not an afterthought — it is the very
          foundation of everything we do. Each piece is shaped with careful
          hands, unhurried attention, and a devotion to the materials that make
          it real.
        </p>

        <p>
          Born from a small atelier tucked between old pines and open fields,
          our work carries the quietness of that place. We make things meant to
          last, things that age with grace, things that feel like home.
        </p>

        <div className="about-rule">
          <div className="about-rule-line"></div>

          <span className="about-rule-text">
            Est. 2018 — Handmade with love
          </span>

          <div className="about-rule-line"></div>
        </div>
      </div>
    </section>
  );
}

export default About;
