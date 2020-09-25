const initialState = {
  loading: true,
  products: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "startFetchingProducts":
      return {
        loading: true,
        products: [],
      };
    case "productsFullyFetched":
      return {
        loading: false,
        products: payload,
      };

    default:
      return state;
  }
};
