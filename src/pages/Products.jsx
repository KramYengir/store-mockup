import { Outlet, Link } from "react-router-dom";
import "../styles/products.css";

const Products = ({ category }) => {
  return (
    <div className="products-display">
      <div>{category}</div>
    </div>
  );
};

export default Products;
