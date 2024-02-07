import * as actionType from "../../constants/productConstants.js";

export const getProductReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionType.Get_product_success:
      return { ...state, products: action.payload };

    case actionType.Get_product_fail:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
