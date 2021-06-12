import "./product.scss";
import { Redirect, Link } from "react-router-dom";
import { addToCart } from "../../redux/action/cartAction";
import { useSelector, useDispatch } from "react-redux";

const Product = (
  { imageUrl, name, price, description, productId },
  { history }
) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(productId, 1));
    <Redirect to="/cart" />;
  };
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />
      <div className="info">
        <p className="name">{name}</p>
        <p className="description">{description.substring(0, 100)}...</p>
        <p className="price">Rs.{price}</p>
        <Link to="/cart" className="button" onClick={addToCartHandler}>
          Add to Cart
        </Link>
      </div>
    </div>
  );
};

export default Product;
