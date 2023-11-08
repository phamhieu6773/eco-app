import axios from "axios";
import { base_url } from "../../utils/base_url";
import axiosJWT from "../../utils/axiosconfig";

const registerUser = async (userData) => {
  const response = await axios.post(`${base_url}user/register`, userData);
  return response.data;
};

const loginUser = async (userData) => {
  const response = await axios.post(`${base_url}user/login`, userData);
  localStorage.setItem("user", JSON.stringify(response.data));
  localStorage.setItem("token", JSON.stringify(response.data.token));
  localStorage.setItem("email", JSON.stringify(response.data.email));
  localStorage.setItem(
    "refreshToken",
    JSON.stringify(response.data.refreshToken)
  );
  return response.data;
};

const getWithlist = async () => {
  const response = await axiosJWT.get(`${base_url}user/wishlist`);
  return response.data;
};

export const authService = {
  registerUser,
  loginUser,
  getWithlist,
};
