export function selectProducts(reduxState) {
  return {
    products: reduxState.products.products.data,
  };
}

export function selectState(reduxState) {
  return {
    products: reduxState.products.loading,
  };
}
