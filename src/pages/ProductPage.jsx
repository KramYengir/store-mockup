import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/productPage.css";
import { ProductContext } from "../components/ProductContext";
import { CartContext } from "../components/CartContext";

const ProductPage = () => {
  const { products, loading, error } = useContext(ProductContext);
  const { cartItems, setItemQuantity } = useContext(CartContext);
  const { id } = useParams();
  const cartItem = cartItems.find((item) => item.id == id);

  const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 0);

  const displayProduct = products.find((product) => product.id == id);

  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityChange = (value) => {
    let updatedValue = parseInt(value, 10);
    updatedValue = isNaN(value) ? 0 : Math.min(Math.max(value, 0), 10);
    setQuantity(updatedValue);
  };

  const handleUpdateCart = () => {
    setItemQuantity(Number(id), quantity);
  };

  return (
    <div className="product-page">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error fetching products...</div>
      ) : (
        <>
          {" "}
          <img src={displayProduct.image} alt={displayProduct.title} />
          <div className="right-side">
            <h2>{displayProduct.title}</h2>
            <p>{displayProduct.description}</p>

            <div className="product-footer">
              <h2>£{displayProduct.price}</h2>
              <div className="cart-input">
                <div className="quantity-input">
                  <button className="quantity-btn" onClick={handleDecrement}>
                    -
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min={0}
                    max={10}
                  />
                  <button className="quantity-btn" onClick={handleIncrement}>
                    +
                  </button>
                </div>
                <button onClick={handleUpdateCart}>Update Cart</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
