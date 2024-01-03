import { useState, useContext, createContext } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (id) => {
    const cartItem = cartItems.find((item) => item.id === id);
    let updatedCart;

    if (cartItem) {
      // If the quantity is less than 10, increment it, otherwise, keep it at 10
      const newQuantity = Math.min(cartItem.quantity + 1, 10);

      updatedCart = cartItems.map((item) =>
        item.id === cartItem.id ? { ...item, quantity: newQuantity } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { id: id, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const cartItem = cartItems.find((item) => item.id === id);

    if (cartItem) {
      let updatedCart;

      if (cartItem.quantity > 1) {
        // If quantity is greater than 1, decrement the quantity
        updatedCart = cartItems.map((item) =>
          item.id === cartItem.id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        );
      } else {
        // If quantity is 1, remove the item from the cart
        updatedCart = cartItems.filter((item) => item.id !== id);
      }

      setCartItems(updatedCart);
    }
  };

  const setItemQuantity = (id, quantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id == id ? { ...item, quantity } : item
    );

    // Remove the item from the cart if the quantity is set to 0
    const filteredCart = updatedCart.filter((item) => item.quantity > 0);

    setCartItems(filteredCart);
  };

  const contextObject = {
    cartItems,
    addToCart,
    removeFromCart,
    setItemQuantity,
  };

  console.log(cartItems);

  return (
    <CartContext.Provider value={contextObject}>
      {props.children}
    </CartContext.Provider>
  );
};
