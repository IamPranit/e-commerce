import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";
import { authReducer } from "./authReducer";
import { cartReducer } from "./cartReducer";
import { checkoutReducer } from "./checkoutReducer";

const rootReducer = combineReducers({
  product: productReducer,
  user: userReducer,
  auth: authReducer,
  cart: cartReducer,
  order: checkoutReducer,
});

export default rootReducer;
