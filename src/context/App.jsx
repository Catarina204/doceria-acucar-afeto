import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <CartProvider>
      <Header />
      <Hero />
      <main className="conteudo">
        <ProductList />
        <Cart />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
