import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authReducer from "../features/user/userSlice";
import productReducer from "../features/product/productSlice";
import blogReducer from "../features/blog/blogSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: authReducer,
    product: productReducer,
    blog: blogReducer,
  },
});
