import { CREATE_USER } from "./actionTypesUser";
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
