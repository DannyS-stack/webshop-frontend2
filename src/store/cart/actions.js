export function AddItemToCart(data) {
  return async function thunk(dispatch, getState) {
    dispatch(productsFullyFetched(data));
  };
}

export function productsFullyFetched(data) {
  return {
    type: "ADDED_TO_CART",
    payload: data,
  };
}
