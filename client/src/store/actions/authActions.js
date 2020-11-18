import { USER_LOGIN, USER_LOGOUT } from "./actionTypesAuth";
import axios from "axios";
import { SERVER_URL } from "../../constants/Constants";

axios.defaults.withCredentials = true;

export const userLogin = (userData) => async (dispatch) => {
  try {
    const { email, password } = userData;

    const user = await axios.post(
      `${SERVER_URL}/api/v1/auth/login`,
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );

    const auth = user.data.success;

    localStorage.setItem("loggedIn", auth);

    const payloadData = localStorage.getItem("loggedIn");

    dispatch({
      type: USER_LOGIN,
      payload: payloadData,
    });
  } catch (err) {
    console.log(err);
  }
};

export const userLogout = () => async (dispatch) => {
  try {
    await axios.get(`${SERVER_URL}/api/v1/auth/logout`, {
      withCredentials: true,
    });

    localStorage.removeItem("loggedIn");

    const payloadData = localStorage.getItem("loggedIn");

    dispatch({
      type: USER_LOGOUT,
      payload: payloadData,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getUser = () => async (dispatch) => {
  try {
    const user = await axios.get(`${SERVER_URL}/api/v1/users/search`, {
      withCredentials: true,
    });

    const payloadData = user.data.success;

    dispatch({
      type: USER_LOGIN,
      payload: payloadData,
    });
  } catch (err) {
    console.log(err);
  }
};
