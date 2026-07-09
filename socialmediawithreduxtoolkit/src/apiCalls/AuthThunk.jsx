import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "./../utilities";

export let addUser = createAsyncThunk("addUser/auth", async (data) => {
  let response = await fetch(`${baseUrl}/users`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
});

export let validation = createAsyncThunk(
  "validation/auth",
  async ({ email, password }) => {
    let response = await fetch(`${baseUrl}/users`);
    let responseData = await response.json();

    let filterData = responseData.find(
      (user) => user.email === email && user.password === password,
    );
    if (filterData !== undefined) {
      return filterData;
    } else {
      return "User Not Found";
    }
  },
);

export let fetchUsers = createAsyncThunk("fetchUsers/users", async () => {
  let response = await fetch(`${baseUrl}/users`);
  let responseData = await response.json();
  return responseData;
});
