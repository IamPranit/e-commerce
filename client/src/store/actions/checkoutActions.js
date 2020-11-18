import { ORDER_CHECKOUT } from "./actionTypesCheckout";
import axios from "axios";
import { SERVER_URL } from "../../constants/Constants";

axios.defaults.withCredentials = true;

export const orderCheckout = () => async (dispatch) => {
  try {
    const cartObj = {
      shipmentState: "Ready",
      paymentState: "Paid",
    };

    const order = await axios.post(`${SERVER_URL}/api/v1/order`, cartObj, {
      withCredentials: true,
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

export const getOrder = () => async (dispatch) => {
  try {
    const order = await axios.get(`${SERVER_URL}/api/v1/order/search`, {
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
