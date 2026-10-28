import { useState } from "react";
import { useCart } from "../context/CartContext";
import { formatarPreco } from "../formatar";
import PedidoModal from "./PedidoModal";

function Cart() {
  const { itens, aumentar, diminuir, remover, limpar, total } = useCart();
  const [finalizando, setFinalizando] = useState(false);

  function fecharPedido() {
    limpar();
    setFinalizando(false);
  }

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
          <button className="finalizar" onClick={() => setFinalizando(true)}>
            Finalizar pedido
          </button>
        </>
      )}

      {finalizando && <PedidoModal aoFechar={fecharPedido} />}
    </aside>
  );
}

export default Cart;
