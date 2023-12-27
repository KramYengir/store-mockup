import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/Home";
import Products from "../pages/Products";
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
            <Route path="/" element={<Home />} />
            <Route path="Products" element={<Products />} />
            <Route path="Cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };

  return <BrowserRoutes />;
};

export default Router;
