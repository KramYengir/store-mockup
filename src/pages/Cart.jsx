import "../styles/cart.css";
import { CartContext } from "../components/CartContext";
import { ProductContext } from "../components/ProductContext";
import { useContext } from "react";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const { products } = useContext(ProductContext);

  // Get Total
  const getTotalPrice = () => {
    let total = 0;

    cartItems.forEach((item) => {
      let product = getProductDetails(item.id);
      total += product.price * item.quantity;
    });

    return total;
  };

  // Function to get product details based on ID
  const getProductDetails = (productId) => {
    return products.find((product) => product.id === productId);
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((cartItem) => {
          const product = getProductDetails(cartItem.id);

          if (product) {
            return <CartItem key={product.id} product={product} />;
          }

          return null; // Handle the case where the product is not found
        })
      ) : (
        <div className="empty-cart-msg">
          Looks like you have an empty cart. Time to get shopping!
        </div>
      )}
      {cartItems.length > 0 && <h2>Total: £{getTotalPrice()}</h2>}
    </div>
  );
};

export default Cart;
