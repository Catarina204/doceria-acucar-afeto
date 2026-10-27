
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("doceria-carrinho")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("doceria-carrinho", JSON.stringify(cart));
  }, [cart]);

  function addToCart(produto) {
    setCart((carrinhoAtual) => {
      const existente = carrinhoAtual.find(
        (item) => item.id === produto.id
      );

      if (existente) {
        return carrinhoAtual.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }

      return [...carrinhoAtual, { ...produto, quantidade: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart((carrinhoAtual) =>
      carrinhoAtual.filter((item) => item.id !== id)
    );
  }

  function increaseQuantity(id) {
    setCart((carrinhoAtual) =>
      carrinhoAtual.map((item) =>
        item.id === id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      )
    );
  }

  function decreaseQuantity(id) {
    setCart((carrinhoAtual) =>
      carrinhoAtual.flatMap((item) => {
        if (item.id !== id) return [item];

        if (item.quantidade > 1) {
          return [{ ...item, quantidade: item.quantidade - 1 }];
        }

        return [];
      })
    );
  }

  const total = cart.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0
  );

  const totalItems = cart.reduce(
    (soma, item) => soma + item.quantidade,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        total,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
