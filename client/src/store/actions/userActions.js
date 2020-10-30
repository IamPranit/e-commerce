import { CREATE_USER, GET_USER } from "./actionTypesUser";
import axios from "axios";

axios.defaults.withCredentials = true;

export const createUser = (userData) => async (dispatch) => {
  try {
    const { name, email, address, password } = userData;

    const user = await axios.post("http://localhost:8000/api/v1/users", {
      name,
      email,
      address,
      password,
    });

    const payloadData = user.data.data;

    dispatch({
      type: CREATE_USER,
      payload: payloadData,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getUser = () => async (dispatch) => {
  try {
    const user = await axios.get("http://localhost:8000/api/v1/users/search", {
      withCredentials: true,
    });

    const payloadData = user.data.data;

    dispatch({
      type: GET_USER,
      payload: payloadData,
    });
  } catch (err) {
    console.log(err);
  }
};
