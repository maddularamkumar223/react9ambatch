import { createAsyncThunk } from "@reduxjs/toolkit";

export let fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    let response = await fetch("https:/com/products");
    let responseData = await response.json();
    return responseData;
  },
);
