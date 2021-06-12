import "./cart.scss";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../CartItem";
import Header from "../Header";
import { addToCart, removeFromCart } from "../../redux/action/cartAction";
const Cart = ({ history }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItem } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  const getCartCount = () => {
    return cartItem.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  const getCartSubTotal = () => {
    return cartItem.reduce((price, item) => item.price * item.qty + price, 0);
  };
  const checkoutHandler = () => {
    history.push("/checkout");
  };
  return (
    <div>
      <Header />
      <div className="cart">
        <div className="left">
          <h2>Cart</h2>
          {cartItem.length === 0 ? (
            <div>
              Your cart is empty <Link to="/"> Go Back</Link>
            </div>
          ) : (
            cartItem.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeFromCartHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>
        <div className="right">
          <div className="info">
            <p>Subtotal {getCartCount()} item </p>
            <p>Rs.{getCartSubTotal().toFixed(2)}</p>
          </div>
          <div>
            <button onClick={checkoutHandler}>Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
