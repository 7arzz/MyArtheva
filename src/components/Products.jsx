import "../styles/product.css";
import bigMirrorImg from "../assets/BigMirror.jpg";
import smallMirrorImg from "../assets/SmallMirror.jpg";

function Products({ setCart }) {
  const products = [
    {
      icon: "◈",
      tag: "Big Mirror",
      title: "Big",
      accent: "Mirror",
      image: bigMirrorImg,
      desc: "An artisanal, large-format mirror frame hand-carved from reclaimed teak, reflecting both light and legacy.",
      price: 25000,
    },
    {
      icon: "◈",
      tag: "Small Mirror",
      title: "Small",
      accent: "Mirror",
      image: smallMirrorImg,
      desc: "A delicate, circular vanity mirror framed in aged brass — a subtle statement for intimate spaces.",
      price: 20000,
    },
  ];

  return (
    <section className="products" id="products">
      <div className="products-header">
        <p className="products-label">The Products</p>
        <h2>
          Made with <em>slow</em> intention
        </h2>
        <div className="products-header-rule"></div>
      </div>

      <div className="products-grid">
        {products.map((p, index) => (
          <article className="product-card" key={index}>
            <div className="product-image">
              <img src={p.image} alt={`${p.title} ${p.accent}`} />
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
