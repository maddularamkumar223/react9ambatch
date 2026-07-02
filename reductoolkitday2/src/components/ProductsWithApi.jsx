import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../thunks/ProductThunks";
import Style from "./Products.module.css";

const ProductsWithApi = () => {
  let { loading, products, errorMessage } = useSelector(
    (state) => state.products,
  );
  let dispatch = useDispatch();
  console.log(loading);
  console.log(products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <section className={Style.products}>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        products.map((product) => {
          return (
            <article key={product.id}>
              <h2>Product name:{product.title}</h2>
              <p>Product price{product.price}</p>
              <p>Product Description{product.description}</p>
              <button>Add To Cart</button>
            </article>
          );
        })
      )}

      {errorMessage && <h1>{errorMessage}</h1>}
    </section>
  );
};

export default ProductsWithApi;
