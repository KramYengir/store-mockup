import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductCard = ({ id, title, description, price, category, img }) => {
  return (
    <div className="product-card">
      <Link to={`/products/${category.toLowerCase()}/${id}`}>
        <img src={img} alt={title} />
      </Link>
      <h1>{title}</h1>
      <div className="product-description">{description}</div>
      <div className="product-footer">
        <h2>£{price}</h2>
        <input type="text" placeholder="0" />
      </div>
    </div>
  );
};

/* ProductCard.defaultProps = {
  ...
}; */

ProductCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};

export default ProductCard;
