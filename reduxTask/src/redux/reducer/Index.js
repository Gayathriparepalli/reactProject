import { combineReducers } from "redux";
import {
  ProductReducer,
  selectedProductReducer,
  filterProductReducer,
  addToCartReducer,
} from "./ProductReducer";
const reducer = combineReducers({
  allProducts: ProductReducer,
  product: selectedProductReducer,
  filterProduct: filterProductReducer,
  cart: addToCartReducer,
});
export default reducer;
