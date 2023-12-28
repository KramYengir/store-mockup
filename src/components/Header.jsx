import "../styles/header.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IoBodyOutline } from "react-icons/io5";

const Header = () => {
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
          <li>{<FaShoppingCart />}</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
