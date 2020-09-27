const initialState = {
  loading: true,
  categories: [],
  cart: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "startFetchingProducts":
      return {
        loading: true,
        categories: [],
      };
    case "productsFullyFetched":
      return {
        loading: false,
        categories: payload.categories,
        cart: [],
      };

    default:
      return state;
  }
};
