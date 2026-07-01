import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  cartItems: [],
};
let CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log(action);
      state.cartItems.push(action.payload);
    },
    removeProduct(state, action) {
      console.log(action);
      state.cartItems = state.cartItems.filter(
        (product) => product.id !== action.payload,
      );
    },
  },
});

export let { addToCart, removeProduct } = CartSlice.actions;
export default CartSlice.reducer;
