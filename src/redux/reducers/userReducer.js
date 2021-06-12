export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...action.payload,
      };
    case "ADD_ADDRESS":
      return {
        ...state,
        address: action.payload,
      };
    default:
      return state;
  }
};
