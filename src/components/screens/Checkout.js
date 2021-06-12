import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addOrder } from "../../redux/action/orderAction";
import "./checkout.scss";

const Checkout = ({ history }) => {
  const [name, setName] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  const { user, cart } = useSelector((state) => state);

  const getCartSubTotal = () => {
    return cart.cartItem.reduce(
      (price, item) => item.price * item.qty + price,
      0
    );
  };
  const getCartCount = () => {
    return cart.cartItem.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addOrder({
        ...cart.cartItem,
        name,
        phoneNo,
        pinCode,
        address,
      })
    );
    alert("Order Placed");
    history.push("/");
  };
  return (
    <div className="checkout">
      <div className="header">
        <h1>Shopping</h1>
      </div>
      <div className="container">
        <div className="left">
          <div className="userdetails">
            <h2>Login</h2>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
          <h2>DELIVERY ADDRESS</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="txt_field">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="txt_field">
              <label>PhoneNo</label>
              <input
                type="tel"
                name="phoneNo"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                required
              />
            </div>
            <div className="txt_field">
              <label>PinCode</label>
              <input
                type="number"
                name="pincode"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                required
              />
            </div>
            <div className="txt_field">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <button className="submit">Place Order</button>
          </form>
        </div>
        <div className="right">
          <div className="info">
            <h2>Price Details</h2>
            <p>Total Item {getCartCount()}</p>
            <p>Total Payble RS.{getCartSubTotal()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
