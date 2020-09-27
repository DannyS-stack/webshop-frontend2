export const allProducts = (state) =>
  state.products.categories.flatMap((c) => c.products);

export const allCategories = (reduxState) => reduxState.products.categories;

export function selectState(reduxState) {
  return {
    products: reduxState.products.loading,
  };
}
