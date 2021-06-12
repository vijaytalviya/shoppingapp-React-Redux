import axios from "axios";

export const getProduct = () => async (dispatch, getstate) => {
  try {
    const { data } = await axios.get("http://localhost:3000/products");
    dispatch({
      type: "GET_PRODUCT_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GET_PRODUCT_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }

  localStorage.setItem("cart", JSON.stringify(getstate().cart.cartItem));
};
