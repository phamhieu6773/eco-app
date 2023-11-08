import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from "react-toastify";

const initialState = {
  user: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkApi) => {
    try {
      return await authService.registerUser(userData);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkApi) => {
    try {
      return await authService.loginUser(userData);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getWithlist = createAsyncThunk(
  "auth/withlist",
  async (thunkApi) => {
    try {
      return await authService.getWithlist();
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const resetStateUser = createAction("Reset_all_user");

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdUser = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
        if (state.isSuccess === true) {
          localStorage.setItem("token", action.payload.token);
          toast.success("Login successfully");
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getWithlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWithlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.withList = action.payload;
      })
      .addCase(getWithlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetStateUser, () => initialState);
  },
});

export default authSlice.reducer;
