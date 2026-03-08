import { useState } from "react";
import "../styles/divisions.css";

const teamData = [
  {
    name: "Alfina",
    surname: "Amoerita Anggraini",
    role: "CEO",
    desc: "Leads the company vision and coordinates every division to achieve innovation and sustainable growth.",
    letter: "A",
    badge: "✦",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Ardina",
    surname: "Mozarella",
    role: "Director of Production",
    desc: "Oversees production operations and ensures product quality and efficiency.",
    letter: "A",
    badge: "✦",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Rimarcha",
    surname: "Dwi Fellysia",
    role: "Director of Marketing",
    desc: "Develops marketing strategies to strengthen brand awareness and expand market reach.",
    letter: "R",
    badge: "✦",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Arika",
    surname: "Rahmasari",
    role: "Director of Public Relations",
    desc: "Builds strong communication between the company and the public.",
    letter: "A",
    badge: "✦",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Salma",
    surname: "Bunga Amelia",
    role: "Director of HRD",
    desc: "Manages human resources and fosters a positive organizational culture.",
    letter: "S",
    badge: "✦",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Shiva",
    surname: "Shavira",
    role: "Director of Finance",
    desc: "Responsible for financial planning, budgeting, and financial stability.",
    letter: "S",
    badge: "✦",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Shafa",
    surname: "Aliyah Renata",
    role: "Manager Research and Development",
    desc: "Focuses on innovation, product improvement, and creative solutions.",
    letter: "S",
    badge: "✦",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Rina",
    surname: "Anggraini",
    role: "Manager Production",
    desc: "Coordinates production activities to ensure smooth operations.",
    letter: "R",
    badge: "✦",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Wilujeng",
    surname: "Naisilah Chusnul Pratama",
    role: "Purchasing Manager",
    desc: "Handles procurement of materials and manages supplier relations.",
    letter: "W",
    badge: "✦",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Abimanyu",
    surname: "Yoga Perdana",
    role: "Quality Control Manager",
    desc: "Ensures every product meets quality standards before release.",
    letter: "A",
    badge: "✦",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Andaru",
    surname: "Ilham Amerta",
    role: "Manager Marketing",
    desc: "Leads marketing campaigns and ensures brand visibility in the market.",
    letter: "A",
    badge: "✦",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Della",
    surname: "Savira Damayanti",
    role: "Sales Marketing",
    desc: "Supports marketing activities and drives product sales to customers.",
    letter: "D",
    badge: "✦",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Khansa",
    surname: "Aisya Zhafira",
    role: "Sales Marketing",
    desc: "Assists marketing campaigns and helps reach potential customers.",
    letter: "K",
    badge: "✦",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Geisya",
    surname: "Odelia Bagus",
    role: "Marketing Research",
    desc: "Conducts research and analyzes market trends for better strategies.",
    letter: "G",
    badge: "✦",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Audrey",
    surname: "Zahra Amaura",
    role: "Creative Design",
    desc: "Creates visual concepts and designs to strengthen the brand identity.",
    letter: "A",
    badge: "✦",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Mayumi",
    surname: "Rahayu Wahyu N",
    role: "Public Relations Manager",
    desc: "Maintains public communication and strengthens the company image.",
    letter: "M",
    badge: "✦",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Dhiny",
    surname: "Ayuningtyas",
    role: "Public Relations Manager",
    desc: "Supports public relations activities and builds community engagement.",
    letter: "D",
    badge: "✦",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Dian",
    surname: "Maulida",
    role: "Community Manager",
    desc: "Builds relationships with communities and manages engagement.",
    letter: "D",
    badge: "✦",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Widya",
    surname: "Pramundita Putri",
    role: "Training Development Manager",
    desc: "Designs training programs to develop team skills and knowledge.",
    letter: "W",
    badge: "✦",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Nayra",
    surname: "Salsabilla",
    role: "Attendance and Payroll",
    desc: "Manages employee attendance records and payroll processes.",
    letter: "N",
    badge: "✦",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Keyla",
    surname: "Nur Azizah Putriani",
    role: "Manager Finance 1",
    desc: "Supports financial management and reporting activities.",
    letter: "K",
    badge: "✦",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Cinta",
    surname: "Azzahra Putri L",
    role: "Manager Finance 2",
    desc: "Assists financial operations and ensures accurate records.",
    letter: "C",
    badge: "✦",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Wahyu",
    surname: "Siva Ayuningtyas",
    role: "Secretary",
    desc: "Handles administrative coordination and documentation for the company.",
    letter: "W",
    badge: "✦",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
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
    <section className="divisions" id="team">
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Divisions;
