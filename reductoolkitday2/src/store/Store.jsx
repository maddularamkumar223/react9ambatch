import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../slice/CartSlice";

let Store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});
export default Store;
