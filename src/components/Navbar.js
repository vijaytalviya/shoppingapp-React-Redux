import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = ({ menuOpen, setMenuOpen }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItem } = cart;
  const getCartCount = () => {
    return cartItem.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className={"navbar " + (menuOpen && "active")}>
      <div className="navbarlogo">
        <h2>Shopping</h2>
      </div>
      <ul className="navbarlinks">
        <li>
          <Link to="/cart">
            cart
            <span className="cartlogo">({getCartCount()})</span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
      <div className="hanburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
