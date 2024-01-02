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
              <Route
                path="electronics"
                element={<Products category="electronics" />}
              />
              <Route path="electronics/:id" element={<ProductPage />} />
              <Route
                path="jewelery"
                element={<Products category="jewelery" />}
              />
              <Route path="jewelery/:id" element={<ProductPage />} />
              <Route
                path="mens clothing"
                element={<Products category="men's clothing" />}
              />
              <Route path="mens clothing/:id" element={<ProductPage />} />
              <Route
                path="womens clothing"
                element={<Products category="women's clothing" />}
              />
              <Route path="womens clothing/:id" element={<ProductPage />} />
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
