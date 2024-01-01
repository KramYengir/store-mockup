import "../styles/products.css";
import { Link, Outlet } from "react-router-dom";

const ProductsLayout = () => {
  return (
    <div className="products-container">
      <nav className="products-navbar">
        <Link to={"."}>Featured</Link>
        <Link to={"clothes"}>Clothes</Link>
        <Link to={"electronics"}>Electronics</Link>
        <Link to={"furniture"}>Furniture</Link>
        <Link to={"shoes"}>Shoes</Link>
        <Link to={"misc"}>misc</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default ProductsLayout;
