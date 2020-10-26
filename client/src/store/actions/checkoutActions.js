import { ORDER_CHECKOUT } from "./actionTypesCheckout";
import axios from "axios";

export const orderCheckout = (cartItems, cartState) => async (dispatch) => {
  try {
    const cartObj = {
      cartItems,
      cartState: "Merged",
    };
    const order = await axios.put(
      `http://localhost:8000/api/v1/cart/5f8c07766690e338a84e7de2`,
      cartObj,
      {
        withCredentials: true,
      }
    );

    const payloadData = order.data.data.cartState;

    dispatch({
      type: ORDER_CHECKOUT,
      payload: payloadData,
    });
  } catch (err) {
    console.log(err);
  }
};
