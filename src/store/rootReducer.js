import { combineReducers } from "redux";
// import feedSliceReducer from "./feed/reducer";
// import authReducer from "./auth/reducer";
import productReducer from "./products/reducer";

const reducer = combineReducers({
  products: productReducer,
  // auth: authReducer,
  // postPage: postPageReducer,
  // etc.
});

export default reducer;
