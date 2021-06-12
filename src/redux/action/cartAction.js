import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getstate) => {
  const { data } = await axios.get(`http://localhost:3000/products/${id}`);

  dispatch({
    type: "ADD_TO_CART",
    payload: {
      product: data.id,
      name: data.name,
      imageUrl: data.imageUrl,
      price: data.price,
      countInStoke: data.countInStock,
      qty,
    },
  });
  localStorage.setItem("cart", JSON.stringify(getstate().cart.cartItem));
};

export const removeFromCart = (id) => (dispatch, getstate) => {
  dispatch({
    type: "REMOVE_FROM_CART",
    payload: id,
  });
  localStorage.setItem("cart", JSON.stringify(getstate().cart.cartItem));
};
