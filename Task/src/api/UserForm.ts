import axios from "axios";
import { formField } from "../forms/ContactusFom";

const BASE_URL = "http://localhost:3333/v1";

export const getUserData = (data: formField) => {
  return axios.post(BASE_URL + "/form", data);
};
