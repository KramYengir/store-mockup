import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const ProductCard = ({ id, title, price, category, img }) => {
  const { cartItems, addToCart } = useContext(CartContext);

  const quantityInCart = cartItems.find((item) => item.id == id)?.quantity || 0;
  return (
    <div className="product-card">
      <Link
        className="top-side"
        to={`/products/${category.replace(/'/g, "")}/${id}`}
      >
        <img src={img} alt={title} />
        <h4>{title}</h4>
      </Link>
      <div className="product-footer">
        <h3>£{price}</h3>
        <button onClick={() => addToCart(id)}>
          Add To Cart {quantityInCart > 0 && `(${quantityInCart})`}
        </button>
      </div>
    </div>
  );
};

/* ProductCard.defaultProps = {
  ...
}; */

ProductCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
  img: PropTypes.string,
};

export default ProductCard;
