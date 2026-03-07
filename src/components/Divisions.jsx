import { useState } from "react";
import "../styles/divisions.css";

const teamData = [
  {
    name: "Amélie",
    surname: "Beaumont",
    role: "Creative Director",
    desc: "Trained in Paris, drawn to silence. Amélie shapes the soul of every collection before a single drop is pressed.",
    letter: "A",
    badge: "✦",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },
  {
    name: "Olivier",
    surname: "Marchand",
    role: "Master Botanist",
    desc: "Thirty years of field work distilled into an instinct for raw material. Olivier sources from growers he knows by name.",
    letter: "O",
    badge: "◈",
    bg: "#ddd0c5",
    color: "rgba(200,169,110,0.5)",
  },
  {
    name: "Seren",
    surname: "Whitfield",
    role: "Head of Blending",
    desc: "Seren composes each formula like a sentence — nothing surplus, nothing missing.",
    letter: "S",
    badge: "◇",
    bg: "#e4d4c8",
    color: "rgba(183,110,121,0.4)",
  },
  {
    name: "Léon",
    surname: "Vásquez",
    role: "Vessel & Form",
    desc: "Every bottle begins as clay in Léon's hands. He believes the container is part of the medicine.",
    letter: "L",
    badge: "❋",
    bg: "#ddd5c5",
    color: "rgba(200,169,110,0.45)",
  },
];

function Divisions() {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (index) => {
    if (openCard === index) {
      setOpenCard(null);
    } else {
      setOpenCard(index);
    }
  };

  return (
    <section className="divisions">
      <div className="divisions-header">
        <p className="divisions-label">Our People</p>

        <h2>
          The hands behind the <em>craft</em>
        </h2>

        <p>
          Each member of our atelier brings a different discipline — united by
          the same devotion to slow, considered making.
        </p>

        <div className="divisions-header-rule"></div>
      </div>

      <div className="divisions-grid">
        {teamData.map((member, index) => (
          <div
            key={index}
            className={`team-card ${openCard === index ? "open" : ""}`}
            onClick={() => toggleCard(index)}
          >
            <div className="team-portrait-wrap">
              <div className="team-portrait">
                <div
                  className="team-portrait-inner"
                  style={{
                    background: member.bg,
                    color: member.color,
                  }}
                >
                  {member.letter}
                </div>
              </div>

              <div className="team-badge">{member.badge}</div>
            </div>

            <h3>
              {member.name}
              <em>{member.surname}</em>
            </h3>

            <p className="team-role">{member.role}</p>

            <div className="team-divider"></div>

            <div className="team-info">
              <div className="team-info-inner">
                <p>{member.desc}</p>

                <div className="team-links">
                  <a href="#" className="team-link">
                    Work
                  </a>
                  <a href="#" className="team-link">
                    Archive
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Divisions;
