import React, {createContext, useContext, useState} from "react";


const CartContext = createContext();
// it will store the value and addToCart function, it is my shared data holder

export const useCart = () => useContext(CartContext);
// react custom hook it make easy to access cart data from anywhere


//  CartProvider is a special component that wraps around other components
//  (usually in App.js) and provides them access to the context.

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const decrementFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, decrementFromCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};