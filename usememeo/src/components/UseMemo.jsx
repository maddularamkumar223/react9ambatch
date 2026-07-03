import React, { useCallback, useMemo, useState } from "react";
import Child from "./Child";
import { FaInstagram } from "react-icons/fa";

const UseMemo = ({ data }) => {
  let [count, setCount] = useState(0);
  let [userName, setUserName] = useState("");

  useMemo(() => {
    return data();
  }, [userName]);

  let parent = useCallback(() => {
    return "I am a parent Function";
  }, [userName]);
  return (
    <div>
      <Child parentFunction={parent} />
      <FaInstagram />
      <hr />
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <hr />

      <h1>Name:{userName}</h1>
      <button onClick={() => setUserName("Ram")}>Update Name</button>

      <hr />
    </div>
  );
};

export default UseMemo;
