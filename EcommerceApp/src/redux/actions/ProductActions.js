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
export const userExistsAlready = (user) => {
  return {
    type: ActionTypes.USEREXISTS,
    payload: user,
  };
};

export const userCart = (data) => {
  return {
    type: ActionTypes.USERCART,
    payload: data,
  };
};

export const deleteProduct = (id) => {
  return {
    type: ActionTypes.DELETE_PRODUCT,
    payload: id,
  };
};

export const addProduct = (data) => {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: data,
  };
};

export const editProduct = (data) => {
  return {
    type: ActionTypes.EDIT_PRODUCT,
    payload: data,
  };
};
export const searchData = (data) => {
  return {
    type: "SEARCH_PRODUCT",
    payload: data,
  };
};
