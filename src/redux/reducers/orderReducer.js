export const orderReducer = (state = { orderDetails: [] }, action) => {
  switch (action.type) {
    case "ADD_ORDER":
      console.log("case");
      return {
        ...state,
        orderDetails: [action.payload],
      };
    default:
      return state;
  }
};
