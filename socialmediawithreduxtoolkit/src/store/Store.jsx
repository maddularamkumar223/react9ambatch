import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../slice/AuthSlice";

let Store = configureStore({
  reducer: {
    auth: AuthSlice,
  },
});
export default Store;
