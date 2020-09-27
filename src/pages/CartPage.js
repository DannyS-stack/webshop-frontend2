import React from "react";
import { useSelector } from "react-redux";
import { numberOfcartItems, showCartItemIds } from "../store/cart/selectors";
import ProductCard from "../components/ProductCard";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { allProducts } from "../store/products/selectors";

export default function CartPage() {
  const itemsInCart = useSelector(showCartItemIds);
  const testing = useSelector(numberOfcartItems);
  return (
    <div>
      <h1>Cart Page</h1>
      <p>all the items in your CART</p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {itemsInCart ? (
          itemsInCart.map((item) => {
            return (
              <div>
                <ProductCard
                  id={item.id}
                  name={item.name}
                  image={item.imageUrl}
                />{" "}
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/products/${item.id}`}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ margin: 10 }}
                  >
                    See details{" "}
                  </Button>
                </Link>
              </div>
            );
          })
        ) : (
          <div>no items in cart</div>
        )}
      </div>
    </div>
  );
}
