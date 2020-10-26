import { USER_LOGIN, USER_LOGOUT } from "./actionTypesAuth";
import axios from "axios";

export const userLogin = (userData) => async (dispatch) => {
  try {
    const { email, password } = userData;

    const user = await axios.post(
      "http://localhost:8000/api/v1/auth/login",
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

    dispatch({
      type: USER_LOGIN,
      payload: auth,
    });
  } catch (err) {
    console.log(err);
  }
};

export const userLogout = () => async (dispatch) => {
  try {
    const user = await axios.get("http://localhost:8000/api/v1/auth/logout", {
      withCredentials: true,
    });

    localStorage.removeItem("loggedIn");

    dispatch({
      type: USER_LOGOUT,
      payload: user,
    });
  } catch (err) {
    console.log(err);
  }
};
