const initialState = {
  loading: true,
  products: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "productsFullyFetched":
      return { ...state, ...payload };

    default:
      return state;
  }
};
