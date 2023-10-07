import { combineReducers } from "redux";
import { product_reducer } from "./product_reducer";
  const reducer=combineReducers({
    allproducts: product_reducer,
}
);
export default reducer;