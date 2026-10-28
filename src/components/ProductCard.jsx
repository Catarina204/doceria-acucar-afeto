import { useCart } from "../context/CartContext";
import { formatarPreco } from "../formatar";

function ProductCard({ produto }) {
  const { adicionar } = useCart();

  return (
    <article className="card">
      <img src={produto.imagem} alt={produto.nome} />
      <div className="card-texto">
        <h3>{produto.nome}</h3>
        <p>{produto.descricao}</p>
        <div className="card-rodape">
          <strong>{formatarPreco(produto.preco)}</strong>
          <button onClick={() => adicionar(produto)}>Adicionar ao carrinho</button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
