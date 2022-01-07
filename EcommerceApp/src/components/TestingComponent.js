import axios from "axios";
export const BASE_URL = "https://fakestoreapi.com/products";
export const getProducts = async () => {
  return await axios.get(`${BASE_URL}`);
};
