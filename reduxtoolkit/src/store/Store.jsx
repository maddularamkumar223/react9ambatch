import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../slice/CounterSlice";
import CartSlice from "../slice/CartSlice";

let Store = configureStore({
  reducer: {
    counter: CounterSlice,
    cart: CartSlice,
  },
});
export default Store;
