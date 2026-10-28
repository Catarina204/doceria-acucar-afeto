import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [itens, setItens] = useState([]);

  function adicionar(produto) {
    setItens((atual) => {
      const existe = atual.find((item) => item.id === produto.id);
      if (existe) {
        // já está no carrinho: só soma a quantidade
        return atual.map((item) =>
          item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
        );
      }
      return [...atual, { ...produto, quantidade: 1 }];
    });
  }

  function aumentar(id) {
    setItens((atual) =>
      atual.map((item) => (item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item))
    );
  }

  function diminuir(id) {
    setItens((atual) =>
      atual
        .map((item) => (item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item))
        .filter((item) => item.quantidade > 0)
    );
  }

  function remover(id) {
    setItens((atual) => atual.filter((item) => item.id !== id));
  }

  const total = itens.reduce((soma, item) => soma + item.preco * item.quantidade, 0);
  const quantidadeTotal = itens.reduce((soma, item) => soma + item.quantidade, 0);

  return (
    <CartContext.Provider
      value={{ itens, adicionar, aumentar, diminuir, remover, total, quantidadeTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
