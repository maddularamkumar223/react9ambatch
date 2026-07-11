import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../slice/AuthSlice";
import PostSlice from "./../slice/PostSlice";
import FollowSlice from "./../slice/FollowSlice";
import MessageSlice from "./../slice/MessageSlice";

let Store = configureStore({
  reducer: {
    auth: AuthSlice,
    posts: PostSlice,
    follow: FollowSlice,
    messages: MessageSlice,
  },
});
export default Store;
