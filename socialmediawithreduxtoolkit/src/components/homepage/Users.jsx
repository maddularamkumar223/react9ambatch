import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../apiCalls/AuthThunk";
import { followerUser, followingUser } from "../../apiCalls/FollowThunk";

const Users = () => {
  let dispatch = useDispatch();
  let userid = localStorage.getItem("id");
  let { users } = useSelector((state) => state.auth);
  let { loading } = useSelector((state) => state.follow);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [loading]);

  let currentUser = users?.find((user) => user.id === userid);
  let updateFollowings = (userIdData, followId) => {
    let currentUser = users.find((user) => user.id === userIdData);
    let followUser = users.find((user) => user.id === followId);

    let currentUserFollowing = [...currentUser.following, followId];
    let followUserFollowers = [...followUser.followers, userIdData];
    dispatch(
      followingUser({
        userId: userIdData,
        followingData: currentUserFollowing,
      }),
    );
    dispatch(
      followerUser({ userId: followId, followerData: followUserFollowers }),
    );
  };
  let unFollowUser = (userIdData, followId) => {
    let currentUser = users.find((user) => user.id === userIdData);
    let followUser = users.find((user) => user.id === followId);

    let currentUserFollowing = currentUser.following.filter(
      (user) => user != followId,
    );
    let followUserFollowers = followUser.following.filter(
      (user) => user != userIdData,
    );

    dispatch(
      followingUser({
        userId: userIdData,
        followingData: currentUserFollowing,
      }),
    );
    dispatch(
      followerUser({ userId: followId, followerData: followUserFollowers }),
    );
  };

  return (
    <>
      {users
        ?.filter((user) => user.id != userid)
        .map((user) => {
          return (
            <div>
              <p>{user.name}</p>
              <button
                onClick={() => {
                  updateFollowings(userid, user.id);
                }}
              >
                {currentUser.following.includes(user.id)
                  ? "Following"
                  : "Follow"}
              </button>
              <button
                onClick={() => {
                  unFollowUser(userid, user.id);
                }}
              >
                {currentUser.following.includes(user.id) && "Unfollow"}
              </button>
            </div>
          );
        })}
    </>
  );
};

export default Users;
