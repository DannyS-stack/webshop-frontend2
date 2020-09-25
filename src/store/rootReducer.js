import { combineReducers } from "redux";
// import feedSliceReducer from "./feed/reducer";
// import authReducer from "./auth/reducer";
import productReducer from "./products/reducer";
import cartReducer from "./cart/reducer";

const reducer = combineReducers({
  products: productReducer,
  cart: cartReducer,

  // auth: authReducer,
  // postPage: postPageReducer,
  // etc.
});

export default reducer;
