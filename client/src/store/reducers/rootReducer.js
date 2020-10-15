import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";
import { authReducer } from './authReducer'

const rootReducer = combineReducers({
  product: productReducer,
  user: userReducer,
  auth: authReducer
});

export default rootReducer;
