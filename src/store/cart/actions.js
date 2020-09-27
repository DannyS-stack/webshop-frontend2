export function productIdAdded(id) {
  return {
    type: "ADDED_TO_CART",
    payload: id,
  };
}

//here we need an action creator so that the productcard can use it to send am action to the state

export const AddItemToCart = (id) => (dispatch, getState) => {
  dispatch(productIdAdded(id));
};
