import React from "react";
import { useSelector } from "react-redux";
import { selectCardItems } from "../store/cart/selectors";

export default function CartPage() {
  const products = useSelector(selectCardItems);
  console.log("products in cartpage", products);
  console.log(products.name);
  return (
    <div>
      <h1>Cart Page</h1>
      {
        <ul>
          {products.products.map((product) => {
            console.log(product);
            return <li>{product.name}</li>;
          })}
        </ul>
      }
    </div>
  );
}
