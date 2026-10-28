import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <CartProvider>
      <Header />
      <main className="conteudo">
        <ProductList />
        <Cart />
      </main>
    </CartProvider>
  );
}

export default App;
