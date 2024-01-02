import "../styles/products.css";
import { Link, Outlet } from "react-router-dom";

const ProductsLayout = () => {
  return (
    <div className="products-container">
      <nav className="products-navbar">
        <Link to={"."}>Featured</Link>
        <Link to={"electronics"}>Electronics</Link>
        <Link to={"jewelery"}>Jewelery</Link>
        <Link to={"mens clothing"}>Men&apos;s Clothing</Link>
        <Link to={"womens clothing"}>Women&apos;s Clothing</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default ProductsLayout;
