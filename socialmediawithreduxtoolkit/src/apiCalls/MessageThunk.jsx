import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "./../utilities";

export let fetchMessages = createAsyncThunk(
  "fetchMessages/message",
  async () => {
    let response = await fetch(`${baseUrl}/messages`);
    let responseData = await response.json();
    return responseData;
  },
);
export let sendMessage = createAsyncThunk(
  "sendMessage/message",
  async (data) => {
    let response = await fetch(`${baseUrl}/messages`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let responseData = await response.json();
    return responseData;
  },
);
