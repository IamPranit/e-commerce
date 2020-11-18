import { GET_PRODUCTS, GET_PRODUCT } from "./actionTypesProduct";
import axios from "axios";
import { SERVER_URL } from "../../constants/Constants";

axios.defaults.withCredentials = true;

export const getProducts = () => async (dispatch) => {
  try {
    const products = await axios.get(`${SERVER_URL}/api/v1/products`);

    const payloadData = products.data.data;

    dispatch({
      type: GET_PRODUCTS,
      payload: payloadData,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getProduct = (productId) => async (dispatch) => {
  try {
    const product = await axios.get(
      `${SERVER_URL}/api/v1/products/${productId}`
    );

    const payloadData = product.data.data;

    dispatch({
      type: GET_PRODUCT,
      payload: payloadData,
    });
  } catch (err) {
    console.log(err);
  }
};
