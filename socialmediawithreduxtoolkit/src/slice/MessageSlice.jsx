import { createSlice } from "@reduxjs/toolkit";
import { fetchMessages, sendMessage } from "../apiCalls/MessageThunk";

let initialState = {
  loading: false,
  messages: [],
  errorMessage: "",
};

let MessageSlice = createSlice({
  name: "messageSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.messages = action.payload;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.errorMessage = action.error.message;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.messages = [...state.messages, action.payload];
      });
  },
});
export default MessageSlice.reducer;
