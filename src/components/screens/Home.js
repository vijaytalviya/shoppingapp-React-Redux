import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./home.scss";
import Product from "./Product";
import Header from "../Header";
import { getProduct as listProducts } from "../../redux/action/productAction";

const Home = () => {
  const dispatch = useDispatch();
  const getProduct = useSelector((state) => state.products);
  const { products, error } = getProduct;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <div className="home">
        <h2 className="title">Products</h2>
        <div className="products">
          {error ? (
            <h2>{error}</h2>
          ) : (
            products.map((product) => {
              return (
                <Product
                  key={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  productId={product.id}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
