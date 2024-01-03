import "../styles/header.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IoBodyOutline } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Header = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <header>
      <Link to={"/"}>
        <div className="logo">
          <i>
            <IoBodyOutline />
          </i>
          <h1>
            Yo<span>Body</span>Shop
          </h1>
        </div>
      </Link>
      <ul>
        <Link to={"/products"}>
          <li>Shop</li>
        </Link>
        <Link to={"/cart"}>
          <li>
            {<FaShoppingCart />}
            {cartItems && cartItems.length}
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
