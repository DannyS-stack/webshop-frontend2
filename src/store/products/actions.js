import axios from "axios";

const API_URL = `http://localhost:4000/products`;

export function startFetchingProducts() {
  return {
    type: "startFetchingProducts",
  };
}

export function productsFullyFetched(data) {
  return {
    type: "productsFullyFetched",
    payload: data,
  };
}

export function fetchProducts() {
  return async function thunk(dispatch, getState) {
    dispatch(startFetchingProducts());

    const data = await axios.get(`${API_URL}`);

    dispatch(productsFullyFetched(data));
  };
}
