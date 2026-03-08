import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Artheva</h2>
          <p>
            Elegant DIY mirrors crafted to transform your space into a modern
            aesthetic sanctuary.
          </p>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>How It Works</li>
            <li>Team</li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <ul>
            <li>Instagram</li>
            <li>TikTok</li>
            <li>Shopee</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Artheva. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
