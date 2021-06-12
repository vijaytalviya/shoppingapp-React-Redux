import axios from "axios";
export const addOrder = (order) => async (dispatch, getstate) => {
  const { data } = await axios.post("http://localhost:3000/order", {
    ...order,
  });
  console.log("data", data);
  dispatch({
    type: "ADD_ORDER",
    payload: data,
  });
  localStorage.setItem("order", JSON.stringify(getstate().order));
};
