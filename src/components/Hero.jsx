import { useEffect } from "react";
import anime from "animejs";
import "../styles/hero.css";
import logoImg from "../assets/logo.jpg";

function Hero() {
  useEffect(() => {
    const tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 900,
    });

    tl.add({
      targets: ".hero-logo",
      opacity: [0, 1],
      scale: [0.8, 1],
      rotate: ["-10deg", "0deg"],
    })
      .add(
        {
          targets: ".hero-eyebrow",
          opacity: [0, 1],
          translateY: [10, 0],
        },
        "-=600",
      )
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
    <section className="hero" id="home">
      <div className="hero-lines"></div>

      <img src={logoImg} alt="Artheva Logo" className="hero-logo" />

      <span className="hero-eyebrow">Artheva Company</span>

      <h1 className="hero-title">
        Create Your <em>Mirror</em> Aesthetic
      </h1>

      <p className="hero-sub">
        dari bintang membawa sinar perubahan untuk masa depan
      </p>

      <button className="hero-btn">
        <a
          href="#products"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Explore Products
        </a>
      </button>
    </section>
  );
}

export default Hero;
