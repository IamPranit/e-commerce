import { CREATE_USER } from "../actions/actionTypesUser";

const initialState = {
  user: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
