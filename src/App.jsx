import { useState, useEffect } from "react";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import HowItWorks from "./components/HowItWorks";
import Divisions from "./components/Divisions";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Products setCart={setCart} />
        <HowItWorks />
        <Divisions />
      </main>

      <Cart
        cart={cart}
        setCart={setCart}
        open={openCart}
        setOpen={setOpenCart}
      />

      <Footer />
    </>
  );
}

export default App;
