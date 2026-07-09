import { createSlice } from "@reduxjs/toolkit";
import { addUser, fetchUsers, validation } from "../apiCalls/AuthThunk";

let initialState = {
  addResponse: null,
  users: null,
  login: null,
  loading: false,
  message: null,
  currentUser: null,
};
let AuthSlice = createSlice({
  name: "authSlice",
  initialState,
  reducer: {
    updateAddResponse: (state) => {
      state.addResponse = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;
        state.addResponse = action.payload.status;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.message = action.error.message;
      })
      .addCase(validation.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        localStorage.setItem("id", action.payload.id);
        state.login = true;
      })
      .addCase(validation.rejected, (state, action) => {
        console.log(action);
      })
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.message = action.error.message;
      });
  },
});

export let { updateAddResponse } = AuthSlice.actions;
export default AuthSlice.reducer;
