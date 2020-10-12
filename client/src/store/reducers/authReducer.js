import { USER_LOGIN } from "../actions/actionTypesAuth";

const initialState = {
  isLoggedIn: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isLoggedIn: action.payload,
      };

    default:
      return state;
  }
};
