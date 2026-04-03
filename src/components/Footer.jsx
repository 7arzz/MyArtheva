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
            <li>
              <a
                href="https://www.instagram.com/artheva.company/ "
                style={{ textDecoration: "none" }}
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@arthevacompany"
                style={{ textDecoration: "none" }}
              >
                TikTok
              </a>
            </li>
            <li>
              <a href="https://wa.me/6282260832406">Whatsapp</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Artheva x 7arzz. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
