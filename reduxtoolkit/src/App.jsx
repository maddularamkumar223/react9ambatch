import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, sub } from "./slice/CounterSlice";
import Cart from "./Cart";

const App = () => {
  let [count, setCount] = useState(0);

  let countValue = useSelector((state) => state.counter.count);
  console.log(countValue);
  let dispatch = useDispatch();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Sub</button>
      <hr />
      <h1>Using Redux Toolkit</h1>
      <h1>Count: {countValue}</h1>
      <button onClick={() => dispatch(add())}>Add</button>
      <button onClick={() => dispatch(sub())}>Sub</button>

      <hr />

      <Cart />
    </div>
  );
};

export default App;
