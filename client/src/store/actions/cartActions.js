import axios from "axios";
import {
  GET_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../actions/actionTypesCart";

export const getCart = (cartItems) => async (dispatch) => {
  const cart = await axios.get(
    "http://localhost:8000/api/v1/cart/5f8c07766690e338a84e7de2",
    {
      withCredentials: true,
    }
  );

  const payloadData = cart.data.data;

  dispatch({
    type: GET_CART,
    payload: payloadData,
  });
};

export const addToCart = (cart, productId) => async (dispatch) => {
  const foundProductIndex = cart.findIndex(
    (item) => item.lineItemId === productId
  );

  if (foundProductIndex > -1) {
    cart[foundProductIndex].quantity += 1;
  } else {
    const product = await getProduct(productId);

    const cartObj = {
      lineItemId: product._id,
      quantity: 1,
      lineItemPrice: product.price,
    };

    cart.push(cartObj);
  }

  const cartObj = {
    cartItems: cart,
  };

  const newCart = await axios.put(
    "http://localhost:8000/api/v1/cart/5f8c07766690e338a84e7de2",
    cartObj,
    {
      headers: {
        withCredentials: true,
      },
    }
  );

  const payloadData = newCart.data.data.cartItems;

  dispatch({
    type: ADD_TO_CART,
    payload: payloadData,
  });
};

export const removeFromCart = (cart, productId) => async (dispatch) => {
  const productIndex = foundProductIndex(cart, productId);

  if (productIndex > -1) {
    if (cart[productIndex].quantity === 1) {
      cart.splice(productIndex, 1);
    } else {
      cart[productIndex].quantity -= 1;
    }
  }

  const cartObj = {
    cartItems: cart,
  };

  const newCart = await axios.put(
    "http://localhost:8000/api/v1/cart/5f8c07766690e338a84e7de2",
    cartObj,
    {
      headers: {
        withCredentials: true,
      },
    }
  );

  const payloadData = newCart.data.data.cartItems;

  dispatch({
    type: REMOVE_FROM_CART,
    payload: payloadData,
  });
};

// Utility Functions

const foundProductIndex = (cartArr, itemId) => {
  return cartArr.findIndex((item) => item.lineItemId === itemId);
};

const getProduct = async (productId) => {
  try {
    const product = await axios.get(
      `http://localhost:8000/api/v1/products/${productId}`
    );

    return product.data.data;
  } catch (err) {
    console.log(err);
  }
};
