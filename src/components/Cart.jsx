import { useCart } from "../context/CartContext";
import { formatarPreco } from "../formatar";

function Cart() {
  const { itens, aumentar, diminuir, remover, total } = useCart();

  return (
    <aside className="carrinho">
      <h2>Seu carrinho</h2>

      {itens.length === 0 ? (
        <p className="vazio">Nenhum doce por aqui ainda. Escolha algo gostoso!</p>
      ) : (
        <>
          <ul>
            {itens.map((item) => (
              <li key={item.id}>
                <div className="item-info">
                  <strong>{item.nome}</strong>
                  <span>{formatarPreco(item.preco * item.quantidade)}</span>
                </div>
                <div className="item-botoes">
                  <button onClick={() => diminuir(item.id)}>-</button>
                  <span>{item.quantidade}</span>
                  <button onClick={() => aumentar(item.id)}>+</button>
                  <button className="remover" onClick={() => remover(item.id)}>
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p className="total">
            Total: <strong>{formatarPreco(total)}</strong>
          </p>
        </>
      )}
    </aside>
  );
}

export default Cart;
