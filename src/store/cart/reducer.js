const initialState = {
  productsInCart: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADDED_TO_CART":
      console.log(payload);

      return { ...state, productsInCart: [...state.productsInCart, payload] };

    default:
      return state;
  }
};
