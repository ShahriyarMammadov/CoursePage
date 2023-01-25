import { combineReducers } from "redux";
import productReducer from "./product.reducer";
import favReducer from "./fav.reducer";

export const rootReducer = combineReducers({
  productReducer,
  favReducer,
});
