import { useState } from "react";
import "../styles/divisions.css";

// Import images
import ceoImg from "../assets/anggota/CEO.jpg";
import directProductionImg from "../assets/anggota/Direct_Production.jpg";
import directMarketingImg from "../assets/anggota/Direct_Marketing.jpg";
import directPrImg from "../assets/anggota/Direct_PR.jpg";
import directHrdImg from "../assets/anggota/Direct_HRD.jpg";
import directFinanceImg from "../assets/anggota/Direct_Finance.jpg";
import managerRdImg from "../assets/anggota/Manager_R&D.jpg";
import managerProductionImg from "../assets/anggota/Manager_Production.jpg";
import purchasingManagerImg from "../assets/anggota/Purchasing_Manager.jpg";
import qualityControlManagerImg from "../assets/anggota/Quality_Control_Manager.jpg";
import managerMarketingImg from "../assets/anggota/Manager_Marketing.jpg";
import salesMarketing1Img from "../assets/anggota/Sales_Marketing1.jpg";
import salesMarketing2Img from "../assets/anggota/Sales_Marketing2.jpg";
import marketingResearchImg from "../assets/anggota/Marketing_Research.jpg";
import creativeDesignImg from "../assets/anggota/Creative_Design.jpg";
import publicRelationsManager1Img from "../assets/anggota/Public_Relations_Manager1.jpg";
import publicRelationsManager2Img from "../assets/anggota/Public_Relations_Manager2.jpg";
import communityManagerImg from "../assets/anggota/Community_Manager.jpg";
import trainingDevelopmentManagerImg from "../assets/anggota/Training_Development_Manager.jpg";
import attendanceAndPayrollImg from "../assets/anggota/Attendance_and_Payroll.jpg";
import managerFinance1Img from "../assets/anggota/Manager_Finance1.jpg";
import managerFinance2Img from "../assets/anggota/Manager_Finance2.jpg";
import secretaryImg from "../assets/anggota/Secretary.jpg";

const teamData = [
  {
    name: "Alfina",
    surname: "Amoerita Anggraini",
    role: "CEO",
    desc: "Leads the company vision and coordinates every division to achieve innovation and sustainable growth.",
    image: ceoImg,
    badge: "AA",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Ardina",
    surname: "Mozarella",
    role: "Director of Production",
    desc: "Oversees production operations and ensures product quality and efficiency.",
    image: directProductionImg,
    badge: "AM",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Rimarcha",
    surname: "Dwi Fellysia",
    role: "Director of Marketing",
    desc: "Develops marketing strategies to strengthen brand awareness and expand market reach.",
    image: directMarketingImg,
    badge: "RF",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Arika",
    surname: "Rahmasari",
    role: "Director of Public Relations",
    desc: "Builds strong communication between the company and the public.",
    image: directPrImg,
    badge: "AR",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Salma",
    surname: "Bunga Amelia",
    role: "Director of HRD",
    desc: "Manages human resources and fosters a positive organizational culture.",
    image: directHrdImg,
    badge: "SA",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Shiva",
    surname: "Shavira",
    role: "Director of Finance",
    desc: "Responsible for financial planning, budgeting, and financial stability.",
    image: directFinanceImg,
    badge: "SS",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Shafa",
    surname: "Aliyah Renata",
    role: "Manager Research and Development",
    desc: "Focuses on innovation, product improvement, and creative solutions.",
    image: managerRdImg,
    badge: "SR",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Rina",
    surname: "Anggraini",
    role: "Manager Production",
    desc: "Coordinates production activities to ensure smooth operations.",
    image: managerProductionImg,
    badge: "RA",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Wilujeng",
    surname: "Naisilah Chusnul Pratama",
    role: "Purchasing Manager",
    desc: "Handles procurement of materials and manages supplier relations.",
    image: purchasingManagerImg,
    badge: "WP",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Abimanyu",
    surname: "Yoga Perdana",
    role: "Quality Control Manager",
    desc: "Ensures every product meets quality standards before release.",
    image: qualityControlManagerImg,
    badge: "AP",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Andaru",
    surname: "Ilham Amerta",
    role: "Manager Marketing",
    desc: "Leads marketing campaigns and ensures brand visibility in the market.",
    image: managerMarketingImg,
    badge: "AA",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Della",
    surname: "Savira Damayanti",
    role: "Sales Marketing",
    desc: "Supports marketing activities and drives product sales to customers.",
    image: salesMarketing1Img,
    badge: "DD",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Khansa",
    surname: "Aisya Zhafira",
    role: "Sales Marketing",
    desc: "Assists marketing campaigns and helps reach potential customers.",
    image: salesMarketing2Img,
    badge: "KZ",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Geisya",
    surname: "Odelia Bagus",
    role: "Marketing Research",
    desc: "Conducts research and analyzes market trends for better strategies.",
    image: marketingResearchImg,
    badge: "GB",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Audrey",
    surname: "Zahra Amaura",
    role: "Creative Design",
    desc: "Creates visual concepts and designs to strengthen the brand identity.",
    image: creativeDesignImg,
    badge: "AA",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Mayumi",
    surname: "Rahayu Wahyu N",
    role: "Public Relations Manager",
    desc: "Maintains public communication and strengthens the company image.",
    image: publicRelationsManager1Img,
    badge: "MN",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Dhiny",
    surname: "Ayuningtyas",
    role: "Public Relations Manager",
    desc: "Supports public relations activities and builds community engagement.",
    image: publicRelationsManager2Img,
    badge: "DA",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Dian",
    surname: "Maulida",
    role: "Community Manager",
    desc: "Builds relationships with communities and manages engagement.",
    image: communityManagerImg,
    badge: "DM",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Widya",
    surname: "Pramundita Putri",
    role: "Training Development Manager",
    desc: "Designs training programs to develop team skills and knowledge.",
    image: trainingDevelopmentManagerImg,
    badge: "WP",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Nayra",
    surname: "Salsabilla",
    role: "Attendance and Payroll",
    desc: "Manages employee attendance records and payroll processes.",
    image: attendanceAndPayrollImg,
    badge: "NS",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Keyla",
    surname: "Nur Azizah Putriani",
    role: "Manager Finance 1",
    desc: "Supports financial management and reporting activities.",
    image: managerFinance1Img,
    badge: "KP",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Cinta",
    surname: "Azzahra Putri L",
    role: "Manager Finance 2",
    desc: "Assists financial operations and ensures accurate records.",
    image: managerFinance2Img,
    badge: "CL",
    bg: "#e8d5c4",
    color: "rgba(183,110,121,0.5)",
  },

  {
    name: "Wahyu",
    surname: "Siva Ayuningtyas",
    role: "Secretary",
    desc: "Handles administrative coordination and documentation for the company.",
    image: secretaryImg,
    badge: "WS",
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
                <img src={member.image} alt={member.name} />
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
