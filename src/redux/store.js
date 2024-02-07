import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk"; // Importing thunk from 'redux-thunk'
import { getProductReducer } from "./reducer/GetProductReducer";

const reducer = combineReducers({
  getProducts: getProductReducer,
});
const middlewares = [thunk]; // Using thunk as part of the middleware array
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export default store;
