
import { useState } from "react";
import { useCart } from "./CartContext.jsx";

export default function Checkout() {
  const { cart, total } = useCart();

  const [cliente, setCliente] = useState({
    nome: "",
    telefone: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    pagamento: "pix",
  });

  const [mensagem, setMensagem] = useState("");
  const [pedidoFinalizado, setPedidoFinalizado] = useState(false);

  function atualizarCampo(event) {
    const { name, value } = event.target;

    setCliente((atual) => ({
      ...atual,
      [name]: value,
    }));
  }

  function finalizarPedido(event) {
    event.preventDefault();

    if (cart.length === 0) {
      setMensagem("Adicione pelo menos um produto ao carrinho.");
      return;
    }

    setMensagem("");
    setPedidoFinalizado(true);
  }

  // Tela exibida depois de finalizar o pedido
  if (pedidoFinalizado) {
    return (
      <section className="pedido-confirmado">
        <div className="confirmacao-cartao">
          <div className="confirmacao-decoracao">✿ ♡ ✿</div>

          <div className="animacao-entrega" aria-hidden="true">
            <span>🛵</span>
            <span className="coracao-flutuante">💗</span>
          </div>

          <span className="confirmacao-etiqueta">
            FEITO COM AMOR
          </span>

          <h2>Oba! Seu pedido está a caminho!</h2>

          <p className="confirmacao-texto">
            Obrigada por escolher a Açúcar & Afeto!
            Esperamos que cada docinho deixe seu dia mais feliz.
          </p>

          <div className="confirmacao-resumo">
            <span>Valor do pedido</span>
            <strong>
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>
          </div>

          <p className="confirmacao-aviso">
            Pedido preparado com carinho para esta demonstração.
          </p>

          <button
            className="botao-voltar-loja"
            type="button"
            onClick={() => {
              setPedidoFinalizado(false);
              setMensagem("");
            }}
          >
            Voltar à loja ♡
          </button>

          <div className="confirmacao-rodape">
            Feito com carinho, especialmente para você
          </div>
        </div>
      </section>
    );
  }

  // Formulário original
  return (
    <section className="secao-checkout" id="finalizar">
      <div className="titulo-secao">
        <span className="etiqueta">FALTA POUQUINHO</span>
        <h2>Finalize seu pedido</h2>
        <p>Preencha seus dados para organizar a entrega.</p>
      </div>

      <form className="form-checkout" onSubmit={finalizarPedido}>
        <div className="campos-checkout">
          <label>
            Nome completo
            <input
              name="nome"
              value={cliente.nome}
              onChange={atualizarCampo}
              required
              minLength={3}
              placeholder="Seu nome"
            />
          </label>

          <label>
            Telefone
            <input
              name="telefone"
              type="tel"
              value={cliente.telefone}
              onChange={atualizarCampo}
              required
              placeholder="(00) 00000-0000"
            />
          </label>

          <label>
            Endereço
            <input
              name="endereco"
              value={cliente.endereco}
              onChange={atualizarCampo}
              required
              placeholder="Rua ou avenida"
            />
          </label>

          <label>
            Número
            <input
              name="numero"
              value={cliente.numero}
              onChange={atualizarCampo}
              required
              placeholder="Número"
            />
          </label>

          <label>
            Complemento (opcional)
            <input
              name="complemento"
              value={cliente.complemento}
              onChange={atualizarCampo}
              placeholder="Apartamento, casa..."
            />
          </label>

          <label>
            Bairro
            <input
              name="bairro"
              value={cliente.bairro}
              onChange={atualizarCampo}
              required
              placeholder="Seu bairro"
            />
          </label>
        </div>

        <label className="campo-pagamento">
          Forma de pagamento
          <select
            name="pagamento"
            value={cliente.pagamento}
            onChange={atualizarCampo}
          >
            <option value="pix">PIX</option>
            <option value="dinheiro">Dinheiro na entrega</option>
            <option value="cartao">Cartão na entrega</option>
          </select>
        </label>

        <div className="resumo-final">
          <span>Total dos produtos</span>
          <strong>
            {total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
        </div>

        <button className="botao-finalizar" type="submit">
          Preparar pedido
        </button>

        {mensagem && (
          <p className="mensagem-checkout" role="status">
            {mensagem}
          </p>
        )}
      </form>
    </section>
  );
}
