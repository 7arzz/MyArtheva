import "../styles/howitworks.css";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose the Mirror",
      desc: "Pick the DIY mirror design that fits your style and aesthetic.",
    },
    {
      number: "02",
      title: "Customize",
      desc: "Arrange and customize the mirror pieces to match your creativity.",
    },
    {
      number: "03",
      title: "Buy",
      desc: "Buy the mirror you like and wait until it arrives at your home.",
    },
  ];

  return (
    <section className="how">
      <h2>How It Works</h2>

      <div className="how-container">
        {steps.map((step, index) => (
          <div className="how-card" key={index}>
            <span className="how-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
