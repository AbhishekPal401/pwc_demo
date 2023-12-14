import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../middleware/actions.js";
import axios from "axios";

//api calling type 2

export const login2 = createAsyncThunk("posts/login2", async () => {
  const response = await axios.get("http://localhost:5174");
  return response.data;
});

const slice = createSlice({
  name: "user-login",
  initialState: {
    credentials: null,
    loading: false,
    status: "idle",
  },
  reducers: {
    requested: (users, action) => {
      users.loading = true;
    },
    success: (users, action) => {
      users.credentials = action.payload;
      users.loading = false;
    },
    failed: (users, action) => {
      users.credentials = action.payload;
      users.loading = false;
    },
    logout: (users, action) => {
      users.credentials = action.payload;
      users.loading = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login2.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(login2.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(login2.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { requested, success, failed, logout } = slice.actions;

export default slice.reducer;

//api calling type 1

export const login = (data) =>
  apiCallBegan({
    url: "/auth/login",
    method: "POST",
    data,
    onStart: requested.type,
    onSuccess: success.type,
    onFailed: failed.type,
  });
