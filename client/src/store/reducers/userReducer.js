import { CREATE_USER, GET_USER } from "../actions/actionTypesUser";

const initialState = {
  user: {
    _id: "",
    name: "",
    email: "",
    address: "",
  },
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        user: action.payload,
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
