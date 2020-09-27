import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { numberOfcartItems, showCartItemIds } from "../store/cart/selectors";
import ProductCard from "../components/ProductCard";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { allProducts } from "../store/products/selectors";
import { removetemFromCart } from "../store/cart/actions";

export default function CartPage() {
  const dispatch = useDispatch();
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
                    color="primary"
                    style={{ margin: 10 }}
                  >
                    See details
                  </Button>
                </Link>
                <Button
                  onClick={() => dispatch(removetemFromCart(item.id))}
                  variant="contained"
                  color="secondary"
                  style={{ margin: 10 }}
                >
                  remove from cart{" "}
                </Button>
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
