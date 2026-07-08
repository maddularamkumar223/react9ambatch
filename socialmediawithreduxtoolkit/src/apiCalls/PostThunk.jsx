import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../utilities";

export let addPost = createAsyncThunk("addPost/post", async (data) => {
  let response = await fetch(`${baseUrl}/posts`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  let responseValue = await response.json();
  return {
    statusCode: response.status,
    responseData: responseValue,
  };
});

export let fetchPost = createAsyncThunk("fetchPost/post", async () => {
  let response = await fetch(`${baseUrl}/posts`);
  let responseData = await response.json();
  return responseData;
});
