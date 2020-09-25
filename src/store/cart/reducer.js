const initialState = {
  products: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADDED_TO_CART":
      return {
        products: [...state.products, payload],
      };

    default:
      return state;
  }
};
