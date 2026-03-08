import "../styles/product.css";

function Products({ setCart }) {
  const products = [
    {
      icon: "◈",
      tag: "Rose · Vetiver",
      title: "Dusk",
      accent: "Ritual",
      desc: "A warm, grounding blend for evening — vetiver root and Bulgarian rose in a base of golden jojoba.",
      price: 20000,
    },
    {
      icon: "✦",
      tag: "administrative · admin",
      title: "Morning",
      accent: "Bloom",
      desc: "Neroli blossom and cedarwood bark, pressed into a weightless serum that warms to the skin.",
      price: 25000,
    },
    {
      icon: "◇",
      tag: "Jasmine · Sandalwood",
      title: "Still",
      accent: "Water Balm",
      desc: "Night jasmine and aged sandalwood in a slow-melting balm. For hands that have worked hard.",
      price: 25000,
    },
    {
      icon: "❋",
      tag: "Lavender · Amber",
      title: "Ember",
      accent: "Rest",
      desc: "True lavender and warm amber resin, blended for the quiet hour before sleep takes you.",
      price: 25000,
    },
  ];

  return (
    <section className="products" id="products">
      <div className="products-header">
        <p className="products-label">The Collection</p>
        <h2>
          Made with <em>slow</em> intention
        </h2>
        <div className="products-header-rule"></div>
      </div>

      <div className="products-grid">
        {products.map((p, index) => (
          <article className="product-card" key={index}>
            <div className="product-image">
              <span className="product-image-icon">{p.icon}</span>

              <div className="product-image-overlay">
                <span className="product-image-tag">{p.tag}</span>
              </div>
            </div>

            <div className="product-body">
              <h3>
                {p.title} <em>{p.accent}</em>
              </h3>

              <p>{p.desc}</p>

              <div className="product-footer">
                <span className="product-price">
                  <sup>$</sup>
                  {p.price}
                </span>

                <button
                  className="product-btn"
                  onClick={() => setCart((prev) => [...prev, p])}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Products;
