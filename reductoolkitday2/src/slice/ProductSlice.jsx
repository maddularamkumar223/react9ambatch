import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../thunks/ProductThunks";

let initialState = {
  products: [],
  loading: false,
  errorMessage: "",
};
let ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = "Some Thing Went Wrong";
        console.log(action);
      });
  },
});

export default ProductSlice.reducer;
