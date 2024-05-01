import axios from "axios";
import { formField } from "../forms/ContactusFom";

const BASE_URL = "https://mern-stack-task-topaz.vercel.app/v1";

export const getUserData = (data: formField) => {
  return axios.post(BASE_URL + "/form", data);
};
