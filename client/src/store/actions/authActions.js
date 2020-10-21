import { USER_LOGIN } from "./actionTypesAuth";
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

    dispatch({
      type: USER_LOGIN,
      payload: auth,
    });
  } catch (err) {
    console.log(err);
  }
};
