import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { AddItemToCart } from "../store/cart/actions";
import { fetchProducts } from "../store/products/actions";
import {
  allProducts,
  allCategories,
  selectState,
} from "../store/products/selectors";
import Button from "@material-ui/core/Button";

export default function ProductPage() {
  const products = useSelector(allProducts);
  const loading = useSelector(selectState);
  const categories = useSelector(allCategories);
  const dispatch = useDispatch();
  console.log(products);
  const [filter, set_filtered] = useState([]);
  const productsFiltered =
    filter.length > 0
      ? products.filter((p) => filter.includes(p.categoryId))
      : products;
  const onActivateFilters = (id) => {
    if (filter.includes(id)) {
      set_filtered(() => filter.filter((c) => c !== id));
    } else {
      set_filtered(() => [...filter, id]);
    }
  };
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log(filter);

  return (
    <div>
      <h1>Products page</h1>
      {categories.map((c) => {
        return (
          <div
            style={{
              display: "inline",
            }}
          >
            <Button
              onClick={() => onActivateFilters(c.id)}
              variant="contained"
              color="secondary"
              style={{ margin: 10 }}
            >
              {c.name}{" "}
            </Button>{" "}
          </div>
        );
      })}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {products ? (
          productsFiltered.map((p) => {
            return (
              <div>
                <ProductCard id={p.id} name={p.name} image={p.imageUrl} />
                <Button
                  onClick={() => dispatch(AddItemToCart(p.id))}
                  variant="contained"
                  color="primary"
                >
                  Add item to Cart
                </Button>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/products/${p.id}`}
                >
                  <Button
                    onClick={() => dispatch(AddItemToCart(p.id))}
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
          <p>loading...</p>
        )}
      </div>
    </div>
  );
}
