import {
  GET_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../actions/actionTypesCart";

const initialState = {
  cartItems: [],
  cartState: "",
  totalCartPrice: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        cartItems: action.payload.cartItems,
        cartState: action.payload.cartState,
        totalCartPrice: action.payload.totalCartPrice,
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartItems: action.payload,
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: action.payload,
      };

    default:
      return state;
  }
};
