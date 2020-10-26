import { ORDER_CHECKOUT } from "../actions/actionTypesCheckout";

const initialState = {
  orderStatus: "",
};

export const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_CHECKOUT:
      return {
        ...state,
        orderStatus: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
