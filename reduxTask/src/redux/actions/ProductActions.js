import { ActionTypes } from "../contents/ActionTpes";

export const allProducts = (products) => {
  return {
    type: ActionTypes.DISPLAY_PRODUCTS,
    payload: products,
  };
};
export const selectProducts = (id) => {
  return {
    type: ActionTypes.SELECT_PRODUCT,
    payload: id,
  };
};

export const productCategory = (category) => {
  return {
    type: ActionTypes.FILTER_PRODUCT,
    payload: category,
  };
};
export const removeProductCategory = () => {
  return {
    type: ActionTypes.REMOVE_FILTER_PRODUCT,
  };
};
export const removeProductDetails = () => {
  return {
    type: ActionTypes.REMOVE_PRODUCT_DETAILS,
  };
};
export const addToCart = (product) => {
  return {
    type: ActionTypes.ADDTOCART,
    payload: product,
  };
};
export const removeFromCart = (product) => {
  return {
    type: ActionTypes.REMOVEFROMCART,
    payload: product,
  };
};
export const deleteFromCart = (product) => {
  return {
    type: ActionTypes.REMOVEFROMCART,
    payload: product,
  };
};
