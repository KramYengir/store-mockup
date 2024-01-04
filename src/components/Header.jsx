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
            Yo<span>Fake</span>Shop
          </h1>
        </div>
      </Link>
      <ul>
        <li>
          <Link to={"/products"}>Shop</Link>
        </li>
        <li>
          <Link className="cart-link" to={"/cart"}>
            {<FaShoppingCart className="cart-icon" />}
            {cartItems && (
              <div className="cart-quantity">{cartItems.length}</div>
            )}
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
