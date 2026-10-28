import { useEffect, useState } from "react";

function PedidoModal({ aoFechar }) {
  const [enviado, setEnviado] = useState(false);

  // depois de alguns segundos, troca "enviando" por "enviado"
  useEffect(() => {
    const tempo = setTimeout(() => setEnviado(true), 2800);
    return () => clearTimeout(tempo);
  }, []);

  return (
    <div className="fundo-modal">
      <div className="modal">
        <span className="coracao c1">♡</span>
        <span className="coracao c2">♡</span>
        <span className="coracao c3">♡</span>

        <img
          src="/img/cupcake.svg"
          alt=""
          className={enviado ? "modal-img festa" : "modal-img pulando"}
        />

        {enviado ? (
          <>
            <h2>Pedido enviado!</h2>
            <p>Muito obrigada pela preferência. Volte sempre, a gente adora te receber ♡</p>
            <button onClick={aoFechar}>Voltar para a loja</button>
          </>
        ) : (
          <>
            <h2>Enviando seu pedido...</h2>
            <p>Estamos arrumando tudo com muito carinho</p>
            <div className="pontinhos">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PedidoModal;
