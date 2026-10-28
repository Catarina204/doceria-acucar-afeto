import { useState } from "react";
import { useCart } from "../context/CartContext";
import { formatarPreco } from "../formatar";

function ProductCard({ produto }) {
  const { adicionar } = useCart();
  const [fotoErro, setFotoErro] = useState(false);

  return (
    <article className="card">
      {produto.destaque && <span className="selo">Queridinho da casa</span>}

      <div className="imagem">
        <img src={produto.imagem} alt={produto.nome} />
        {/* a foto real aparece por cima quando o mouse passa no card */}
        {produto.foto && !fotoErro && (
          <img
            src={produto.foto}
            alt=""
            className="foto-real"
            onError={() => setFotoErro(true)}
          />
        )}
      </div>

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
