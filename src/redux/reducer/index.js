import { combineReducers } from "redux";
import { product_reducer, selectedProductReducer } from "./product_reducer";
  const reducer=combineReducers({
    allProducts: product_reducer,
    product:selectedProductReducer,
}
);
export default reducer;