import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  quantity: 0,
};
let CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state) {
      state.quantity = state.quantity + 1;
    },
  },
});
export let { addToCart } = CartSlice.actions;
export default CartSlice.reducer;
