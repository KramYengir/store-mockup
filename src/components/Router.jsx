import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductsLayout from "../pages/ProductsLayout";
import Cart from "../pages/Cart";

const Router = () => {
  const Layout = () => {
    return (
      <>
        <Header />
        <div className="content">
          <Outlet />
        </div>
        <Footer />
      </>
    );
  };

  const BrowserRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<ProductsLayout />}>
              <Route index element={<Products category={"featured"} />} />
              <Route path="arms" element={<Products category="arms" />} />
              <Route path="legs" element={<Products category="legs" />} />
              <Route path="misc" element={<Products category="misc" />} />
            </Route>
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };

  return <BrowserRoutes />;
};

export default Router;
