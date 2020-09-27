import axios from "axios";

const API_URL = `http://localhost:4000/products`;

export function productsFullyFetched(data) {
  return {
    type: "productsFullyFetched",
    payload: data,
  };
}

export function fetchProducts() {
  return async function thunk(dispatch, getState) {
    const data = await axios.get(`${API_URL}`);
    console.log(data.data);

    dispatch(productsFullyFetched(data.data));
  };
}
