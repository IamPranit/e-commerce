import { ORDER_CHECKOUT } from "../actions/actionTypesCheckout";

const initialState = {
  orderId: "",
  shippingAddress: "",
  customer: "",
};

export const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_CHECKOUT:
      return {
        ...state,
        orderId: action.payload._id,
        shippingAddress: action.payload.shippingAddress,
        customer: action.payload.customer,
      };

    default:
      return {
        ...state,
      };
  }
};
