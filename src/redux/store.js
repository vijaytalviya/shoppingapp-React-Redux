import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { cartReducer } from "./reducers/cartReducer";
import { getProductsReducer } from "./reducers/productReducer";
import { userReducer } from "./reducers/userReducer";
import { orderReducer } from "./reducers/orderReducer";

const reducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  products: getProductsReducer,
  order: orderReducer,
});

const middleware = [thunk];

const cartFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
const userFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : {};
const initialState = {
  user: userFromLocalStorage,
  cart: {
    cartItem: cartFromLocalStorage,
  },
};
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
