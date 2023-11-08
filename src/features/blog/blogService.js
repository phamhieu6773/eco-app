import axios from "axios";
import { base_url } from "../../utils/base_url";
import axiosJWT from "../../utils/axiosconfig";

const getBlogs = async () => {
  const response = await axios.get(`${base_url}blog/all-blogs`);
  return response.data;
};

const getBlog = async (id) => {
  const response = await axios.get(`${base_url}blog/${id}`);
  return response.data;
};

const blogService = {
  getBlogs,
  getBlog,
};

export default blogService;
