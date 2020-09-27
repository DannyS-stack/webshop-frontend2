export const numberOfcartItems = (reduxState) =>
  reduxState.cart.productsInCart.length;

export const showCartItemIds = (reduxState) => {
  const allproducts = reduxState.products.categories.flatMap((c) => c.products);

  const finalItems = reduxState.cart.productsInCart.map((p) =>
    allproducts.find((a) => parseInt(a.id) === parseInt(p))
  );

  console.log(finalItems);
  return finalItems;
};
