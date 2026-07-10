import { createSlice } from "@reduxjs/toolkit";
import { followerUser, followingUser } from "../apiCalls/FollowThunk";

let initialState = {
  loading: false,
  message: "",
};

let FollowSlice = createSlice({
  name: "followSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(followingUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(followingUser.fulfilled, (state, action) => {
        console.log(action);
        state.loading = false;
      })
      .addCase(followingUser.rejected, (state, action) => {
        state.message = action.error.message;
      })
      .addCase(followerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(followerUser.fulfilled, (state, action) => {
        console.log(action);
        state.loading = false;
      })
      .addCase(followerUser.rejected, (state, action) => {
        state.message = action.error.message;
      });
  },
});

export default FollowSlice.reducer;
