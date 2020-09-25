export function AddItemToCart(data) {
  return async function thunk(dispatch, getState) {
    return {
      type: "ADDED_TO_CART",
      payload: data,
    };
  };
}
