import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductCard = ({ id, title, price, category, img }) => {
  return (
    <div className="product-card">
      <Link
        className="top-side"
        to={`/products/${category.replace(/'/g, "")}/${id}`}
      >
        <img src={img} alt={title} />
        <h4>{title}</h4>
      </Link>
      {/* <div className="product-description">{description}</div> */}
      <div className="product-footer">
        <h3>£{price}</h3>
        <button>Add To Cart</button>
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
