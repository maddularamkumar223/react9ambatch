import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./slice/CartSlice";

const Cart = () => {
  let cartValue = useSelector((state) => state.cart.quantity);
  console.log(cartValue);
  let dispatch = useDispatch();
  return (
    <div>
      <h1>{cartValue}</h1>
      <button onClick={() => dispatch(addToCart())}>Add</button>
    </div>
  );
};

export default Cart;
