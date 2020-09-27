import React from "react";
import { numberOfcartItems } from "../store/cart/selectors";
import { useSelector } from "react-redux";

export default function Cart() {
  const products = useSelector(numberOfcartItems);

  //this guy needs acces to an array of product IDs
  return (
    <div
      style={{
        float: "right",
        marginRight: 100,
      }}
    >
      <h1 style={{ fontSize: 50 }}>
        <img
          style={{ width: 60, height: 60 }}
          src="https://www.flaticon.com/svg/static/icons/svg/879/879815.svg"
        />
        {products}
      </h1>
    </div>
  );
}
