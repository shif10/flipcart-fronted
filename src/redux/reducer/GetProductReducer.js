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

export const getProductDetailReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionType.Get_product_detail_request:
      return { loading: true };
    case actionType.Get_product_detail_success:
      return { loading: false, product: action.payload };
    case actionType.Get_product_detail_fail:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
