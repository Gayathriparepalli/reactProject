import { combineReducers } from "redux";
import {
  ProductReducer,
  selectedProductReducer,
  filterProductReducer,
  addToCartReducer,
  userExists,
  userCartReducer,
  editProductReducer,
  // searchProduct,
} from "./ProductReducer";
const reducer = combineReducers({
  allProducts: ProductReducer,
  product: selectedProductReducer,
  filterProduct: filterProductReducer,
  cart: addToCartReducer,
  userExists: userExists,
  userCart: userCartReducer,
  editProduct: editProductReducer,
});
export default reducer;
