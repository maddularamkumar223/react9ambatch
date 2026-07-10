import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../slice/AuthSlice";
import PostSlice from "./../slice/PostSlice";
import FollowSlice from "./../slice/FollowSlice";

let Store = configureStore({
  reducer: {
    auth: AuthSlice,
    posts: PostSlice,
    follow: FollowSlice,
  },
});
export default Store;
