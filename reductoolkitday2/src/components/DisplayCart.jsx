import { useDispatch, useSelector } from "react-redux";
import Style from "./Products.module.css";
import { removeProduct } from "../slice/CartSlice";
const DisplayCart = () => {
  let cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);

  let dispatch = useDispatch();
  return (
    <section className={Style.products}>
      {cartItems.map((product) => {
        return (
          <article key={product.id}>
            <h2>Product name:{product.title}</h2>
            <p>Product price{product.price}</p>
            <p>Product Description{product.description}</p>
            <button onClick={() => dispatch(removeProduct(product.id))}>
              Remove
            </button>
          </article>
        );
      })}
    </section>
  );
};

export default DisplayCart;
