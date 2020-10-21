import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";
import { authReducer } from "./authReducer";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
  product: productReducer,
  user: userReducer,
  auth: authReducer,
  cart: cartReducer,
});

export default rootReducer;
