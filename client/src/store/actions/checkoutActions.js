import { ORDER_CHECKOUT } from "./actionTypesCheckout";
import axios from "axios";

axios.defaults.withCredentials = true;

export const orderCheckout = () => async (dispatch) => {
  try {
    const cartObj = {
      shipmentState: "Ready",
      paymentState: "Paid",
    };

    const order = await axios.post(
      "http://localhost:8000/api/v1/order",
      cartObj,
      {
        withCredentials: true,
      }
    );

    const payloadData = order.data.data;

    dispatch({
      type: ORDER_CHECKOUT,
      payload: payloadData,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getOrder = () => async (dispatch) => {
  try {
    const order = await axios.get(`http://localhost:8000/api/v1/order/search`, {
      headers: {
        withCredentials: true,
      },
    });

    const payloadData = order.data.data;

    dispatch({
      type: ORDER_CHECKOUT,
      payload: payloadData,
    });
  } catch (err) {
    console.log(err);
  }
};
