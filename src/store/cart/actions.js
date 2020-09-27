export function productIdAdded(id) {
  return {
    type: "ADDED_TO_CART",
    payload: id,
  };
}

export function productIdRemoved(id) {
  return {
    type: "REMOVED_FROM_CART",
    payload: id,
  };
}

export const AddItemToCart = (id) => (dispatch, getState) => {
  dispatch(productIdAdded(id));
};

export const removetemFromCart = (id) => (dispatch, getState) => {
  dispatch(productIdRemoved(id));
};
