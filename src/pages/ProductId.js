import React from "react";
import { useParams, Link } from "react-router-dom";
import { allProducts } from "../store/products/selectors";
import { useSelector } from "react-redux";

export default function ProductId() {
  const route_parameters = useParams();
  const products = useSelector(allProducts);
  const itemId = route_parameters.id;

  const itemWeNeed = products.find((p) => parseInt(p.id) === parseInt(itemId));
  console.log(itemId);
  console.log(products);
  console.log(itemWeNeed);

  return (
    <div>
      <h1>
        {itemWeNeed ? (
          <div>
            <p>{itemWeNeed.name}</p> <img src={itemWeNeed.imageUrl} />{" "}
          </div>
        ) : (
          <div>no item</div>
        )}
      </h1>
    </div>
  );
}
