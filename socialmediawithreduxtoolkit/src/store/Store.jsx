import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../slice/AuthSlice";
import PostSlice from './../slice/PostSlice';


let Store = configureStore({
  reducer: {
    auth: AuthSlice,
    posts: PostSlice,
  },
});
export default Store;
