import { useEffect } from "react";
import anime from "animejs";
import "../styles/hero.css";
function Hero() {
  useEffect(() => {
    const tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 900,
    });

    tl.add({
      targets: ".hero-eyebrow",
      opacity: [0, 1],
      translateY: [10, 0],
    })
      .add(
        {
          targets: ".hero-title",
          opacity: [0, 1],
          translateY: [20, 0],
        },
        "-=400",
      )
      .add(
        {
          targets: ".hero-sub",
          opacity: [0, 1],
          translateY: [16, 0],
        },
        "-=400",
      )
      .add(
        {
          targets: ".hero-btn",
          opacity: [0, 1],
          translateY: [12, 0],
        },
        "-=400",
      );
  }, []);

  return (
    <section className="hero">
      <div className="hero-lines"></div>

      <span className="hero-eyebrow">Artheva Company</span>

      <h1 className="hero-title">
        Create Your <em>Mirror</em> Aesthetic
      </h1>

      <p className="hero-sub">
        Design your own DIY mirror and transform your room into a creative
        aesthetic space with Artheva.
      </p>

      <button className="hero-btn">Explore Products</button>
    </section>
  );
}

export default Hero;
