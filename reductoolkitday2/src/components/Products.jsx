import { products } from "./ProductsData";
import Style from "./Products.module.css";
import { useDispatch } from "react-redux";

import { addToCart } from "../slice/CartSlice";

const Products = () => {
  let dispatch = useDispatch();
  return (
    <section className={Style.products}>
      {products.map((product) => {
        return (
          <article key={product.id}>
            <h2>Product name:{product.title}</h2>
            <p>Product price{product.price}</p>
            <p>Product Description{product.description}</p>
            <button onClick={() => dispatch(addToCart(product))}>
              Add To Cart
            </button>
          </article>
        );
      })}
    </section>
  );
};

export default Products;
