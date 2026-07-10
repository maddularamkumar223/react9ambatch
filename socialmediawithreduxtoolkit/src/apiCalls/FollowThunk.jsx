import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "./../utilities";

export let followingUser = createAsyncThunk(
  "followUser/user",
  async ({ userId, followingData }) => {
    let response = await fetch(`${baseUrl}/users/${userId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ following: followingData }),
    });
    return response;
  },
);
export let followerUser = createAsyncThunk(
  "followerUser/user",
  async ({ userId, followerData }) => {
    let response = await fetch(`${baseUrl}/users/${userId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ followers: followerData }),
    });
    return response;
  },
);
