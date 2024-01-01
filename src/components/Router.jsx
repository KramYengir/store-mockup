import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductsLayout from "../pages/ProductsLayout";
import ProductPage from "../pages/ProductPage";
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
              <Route path="clothes" element={<Products category="Clothes" />} />
              <Route path="clothes/:id" element={<ProductPage />} />
              <Route
                path="electronics"
                element={<Products category="Electronics" />}
              />
              <Route path="electronics/:id" element={<ProductPage />} />
              <Route
                path="furniture"
                element={<Products category="Furniture" />}
              />
              <Route path="furniture/:id" element={<ProductPage />} />
              <Route path="shoes" element={<Products category="Shoes" />} />
              <Route path="shoes/:id" element={<ProductPage />} />
              <Route
                path="misc"
                element={<Products category="Miscellaneous" />}
              />
              <Route path="misc/:id" element={<ProductPage />} />
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
