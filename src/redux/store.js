import { createStore, applyMiddleware, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import { cartReducer } from "./reducers/cartReducer";
import {
  getProductDetailsReducer,
  getProductReducer,
} from "./reducers/productReducer";
import { thunk } from "redux-thunk";

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductReducer,
  getProductDetails: getProductDetailsReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
