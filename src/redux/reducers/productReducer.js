export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "GET_PRODUCT_SUCCESS":
      return {
        products: action.payload,
      };
    case "GET_PRODUCT_FAIL":
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
