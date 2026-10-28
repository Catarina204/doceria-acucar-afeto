import { useCart } from "../context/CartContext";

function Header() {
  const { quantidadeTotal } = useCart();

  return (
    <header className="header">
      <h1>Açúcar &amp; Afeto</h1>
      <p>Doces artesanais feitos com carinho</p>
      <span className="contador">Carrinho: {quantidadeTotal}</span>
    </header>
  );
}

export default Header;
