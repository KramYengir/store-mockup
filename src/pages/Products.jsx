import PropTypes from "prop-types";
import "../styles/products.css";

const Products = ({ category }) => {
  return (
    <div className="products-display">
      <div>{category}</div>
    </div>
  );
};

Products.defaultProps = {
  category: "featured",
};

Products.propTypes = {
  category: PropTypes.string,
};

export default Products;
