import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  let { currentUser } = useSelector((state) => state.auth);
  console.log(currentUser);
  return (
    <div>
      <p>Username: {currentUser.name}</p>
      <p>Email: {currentUser.email}</p>
      <p>Following:{currentUser.following.length}</p>
      <p>Followers:{currentUser.followers.length}</p>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Profile;
