const initialState = {
  productsInCart: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADDED_TO_CART":
      return { ...state, productsInCart: [...state.productsInCart, payload] };
    case "REMOVED_FROM_CART":
      return {
        ...state,
        productsInCart: [...state.productsInCart.filter((p) => p !== payload)],
      };

    default:
      return state;
  }
};
