import { createSlice } from "@reduxjs/toolkit";
import { addPost, fetchPost } from "../apiCalls/PostThunk";

let initialState = {
  addPostResponse: null,
  loading: null,
  posts: null,
  message: null,
};
let PostSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        console.log(action)
        // state.posts = state.posts.push(action.payload.responseData);
        state.loading = false;
      })
      .addCase(addPost.rejected, (state, action) => {
        state.message = action.error.message;
      })
      .addCase(fetchPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.message = action.error.message;
        console.log(action)
      });
  },
});

export default PostSlice.reducer;
