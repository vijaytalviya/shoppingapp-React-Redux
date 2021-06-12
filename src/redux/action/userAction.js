export const userReducer = (user) => (dispatch, getstate) => {
  dispatch({
    type: "ADD_USER",
    payload: user,
  });
  localStorage.setItem("user", JSON.stringify(getstate().user));
};

export const userAddressReducer = (Address) => (dispatch, getstate) => {
  dispatch({
    type: "ADD_ADDRESS",
    payload: Address,
  });
  localStorage.setItem("address", JSON.stringify(getstate().user.Address));
};
