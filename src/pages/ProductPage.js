import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddItemToCart } from "../store/cart/actions";
import { fetchProducts } from "../store/products/actions";
import { selectProducts, selectState } from "../store/products/selectors";

export default function ProductPage() {
  const products = useSelector(selectProducts);
  const loading = useSelector(selectState);
  const dispatch = useDispatch();

  const jsxResult = loading.products
    ? "Loading"
    : products.products.map((res) => (
        <div key={res.id}>
          <li>
            {res.name}
            <button onClick={() => dispatch(AddItemToCart(res))}>
              {" "}
              Add to cart{" "}
            </button>
            <button> Details </button>
          </li>
        </div>
      ));

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Products page</h1>
      <ul>{jsxResult} </ul>
    </div>
  );
}
