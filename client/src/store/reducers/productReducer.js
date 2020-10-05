import { GET_PRODUCT, GET_PRODUCTS } from "../actions/actionTypesProduct";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case GET_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};
