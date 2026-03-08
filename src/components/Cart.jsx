import "../styles/cart.css";

function Cart({ cart, setCart, open, setOpen }) {
  console.log(cart);
  const removeItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const sendToWhatsApp = () => {
    const phone = "6281234567890";

    let message = "Halo, saya ingin memesan:\n\n";

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.title} - Rp${item.price}\n`;
    });

    message += `\nTotal: Rp${total}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* floating button */}
      <div className="cart-float" onClick={() => setOpen(!open)}>
        🛒
        {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
      </div>
      {/* cart panel */}
      {open && (
        <div className="cart-panel">
          <h3>Your Cart</h3>

          {cart.length === 0 ? (
            <div className="cart-empty">Cart never used</div>
          ) : (
            <>
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>
                    <span>{item.title}</span>
                    <span>Rp{item.price}</span>

                    <button onClick={() => removeItem(index)}>✕</button>
                  </li>
                ))}
              </ul>

              {/* TOTAL */}
              <div className="cart-total">
                <span>Total</span>
                <span>Rp{total}</span>
              </div>

              <div className="cart-panel-footer">
                <button onClick={sendToWhatsApp} className="cart-close">
                  Checkout WhatsApp
                </button>

                <button
                  onClick={() => setOpen(false)}
                  className="cart-close"
                  style={{ marginTop: "8px", opacity: 0.8 }}
                >
                  Close
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Cart;
