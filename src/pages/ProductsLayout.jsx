import { Link, Outlet } from "react-router-dom";

const ProductsLayout = () => {
  return (
    <div className="products-container">
      <nav className="products-navbar">
        <Link to={"arms"}>Arms</Link>
        <Link to={"legs"}>Legs</Link>
        <Link to={"misc"}>misc</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default ProductsLayout;
