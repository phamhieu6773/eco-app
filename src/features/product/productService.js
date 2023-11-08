import axios from "axios";
import { base_url } from "../../utils/base_url";
import axiosJWT from "../../utils/axiosconfig";

const getProducts = async () => {
  const response = await axios.get(`${base_url}product/all-products`);
  return response.data;
};

const getProduct = async (id) => {
  const response = await axios.get(`${base_url}product/${id}`);
  return response.data;
};

const addToWithlist = async (id) => {
  const response = await axiosJWT.put(`${base_url}product/wishlist`, {
    prodId: id,
  });
  return response.data;
};

const productService = {
  getProducts,
  getProduct,
  addToWithlist,
};

export default productService;
