import "./menu.scss";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Menu = ({ menuOpen, setMenuOpen }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItem } = cart;

  const getCartCount = () => {
    return cartItem.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/cart">
            Cart
            <span className="cartlogo">({getCartCount()})</span>
          </Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
