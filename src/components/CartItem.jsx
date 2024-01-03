import { Link } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import { CartContext } from "./CartContext";
import { useContext, useState } from "react";

const CartItem = ({ product }) => {
  const { cartItems, setItemQuantity } = useContext(CartContext);
  const cartItem = cartItems.find((item) => item.id == product.id);

  const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 0);

  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
      setItemQuantity(product.id, quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setItemQuantity(product.id, quantity - 1);
    }
  };

  const handleQuantityChange = (e) => {
    let value = parseInt(e.target.value, 10);
    value = isNaN(value) ? 0 : Math.min(Math.max(value, 0), 10);
    setQuantity(value);
  };

  return (
    <div className="cart-item">
      <Link
        className="left-side"
        to={`/products/${product.category.replace(/'/g, "")}/${product.id}`}
      >
        <img src={product.image} alt={product.title} />
      </Link>
      <div className="right-side">
        <Link
          to={`/products/${product.category.replace(/'/g, "")}/${product.id}`}
        >
          <h4>{product.title}</h4>
        </Link>
        <div className="price-and-input">
          <h4>£{product.price}</h4>
          <div className="cart-input">
            <div>
              <button onClick={handleDecrement}>-</button>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min={0}
                max={10}
              />
              <button onClick={handleIncrement}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
