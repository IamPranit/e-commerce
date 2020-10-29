import axios from "axios";
import {
  GET_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../actions/actionTypesCart";

export const getCart = () => async (dispatch) => {
  try {
    const cart = await axios.get("http://localhost:8000/api/v1/cart/search", {
      withCredentials: true,
    });

    const payloadData = cart.data.data;

    payloadData &&
      dispatch({
        type: GET_CART,
        payload: payloadData,
      });
  } catch (err) {
    console.log(err);
  }
};

export const addToCart = (cart, productId) => async (dispatch) => {
  try {
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

    axios.defaults.withCredentials = true;

    const existingCart = await axios.get(
      "http://localhost:8000/api/v1/cart/search",
      {
        withCredentials: true,
      }
    );

    let newCart;
    if (!existingCart.data.data) {
      newCart = await axios.post("http://localhost:8000/api/v1/cart", cartObj, {
        headers: {
          withCredentials: true,
        },
      });
    } else {
      const cartId = existingCart.data.data._id;
      newCart = await axios.put(
        `http://localhost:8000/api/v1/cart/${cartId}`,
        cartObj,
        {
          headers: {
            withCredentials: true,
          },
        }
      );
    }

    const payloadData = newCart.data.data.cartItems;

    dispatch({
      type: ADD_TO_CART,
      payload: payloadData,
    });
  } catch (err) {
    console.log(err);
  }
};

export const removeFromCart = (cart, productId) => async (dispatch) => {
  try {
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

    axios.defaults.withCredentials = true;

    const existingCart = await axios.get(
      "http://localhost:8000/api/v1/cart/search",
      {
        withCredentials: true,
      }
    );
    let newCart;
    if (existingCart.data.data.cartItems.length) {
      const cartId = existingCart.data.data._id;
      newCart = await axios.put(
        `http://localhost:8000/api/v1/cart/${cartId}`,
        cartObj,
        {
          headers: {
            withCredentials: true,
          },
        }
      );
    } else {
      newCart = [];
    }

    const payloadData = newCart.data.data.cartItems;

    dispatch({
      type: REMOVE_FROM_CART,
      payload: payloadData,
    });
  } catch (err) {
    console.log(err);
  }
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
