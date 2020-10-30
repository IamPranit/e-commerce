import { USER_LOGIN, USER_LOGOUT } from "../actions/actionTypesAuth";

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

    case USER_LOGOUT:
      return {
        ...state,
        isLoggedIn: action.payload,
      };

    default:
      return state;
  }
};
