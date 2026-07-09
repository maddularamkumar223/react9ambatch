import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../apiCalls/AuthThunk";

const Users = () => {
  let dispatch = useDispatch();
  let { users } = useSelector((state) => state.auth);
  console.log(users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <>
      {users?.map((user) => {
        return (
          <div>
            <p>{user.name}</p>
            <button>Follow</button>
          </div>
        );
      })}
    </>
  );
};

export default Users;
