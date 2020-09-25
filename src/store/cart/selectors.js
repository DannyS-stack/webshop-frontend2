export function selectCardItems(reduxState) {
  return {
    products: reduxState.cart,
  };
}
