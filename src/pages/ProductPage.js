import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/products/actions";
import { selectProducts, selectState } from "../store/products/selectors";

export default function ProductPage() {
  const products = useSelector(selectProducts);
  const loading = useSelector(selectState);

  console.log("products", products);
  console.log("loading", loading.products);

  const jsxResult = loading.products
    ? "Loading"
    : products.products.map((res) => <li key={res.id}>{res.name}</li>);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Products page</h1>
      <ul>{jsxResult}</ul>
    </div>
  );
}
