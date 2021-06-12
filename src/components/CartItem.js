import "./cartitrm.scss";
const CartItem = ({ item, qtyChangeHandler, removeFromCartHandler }) => {
  return (
    <div className="cartitem">
      <div className="img">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <p className="itemname">{item.name}</p>
      <p className="price">Rs{item.price}</p>

      <select
        className="select"
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
      >
        {[...Array(item.countInStoke).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <button
        className="removeitem"
        onClick={() => removeFromCartHandler(item.product)}
      >
        ||
      </button>
    </div>
  );
};

export default CartItem;
