import { ActionTypes } from "../contents/ActionTpes";
const initialState = {
  products: [],
  cart: [],
};

export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.DISPLAY_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECT_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_PRODUCT_DETAILS:
      return {};
    default:
      return state;
  }
};

export const filterProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.FILTER_PRODUCT:
      return { ...state, products: payload };
    case ActionTypes.REMOVE_FILTER_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const addToCartReducer = (
  state = initialState.cart,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.ADDTOCART:
      const exist = state.find((product) => product.id === payload.id);
      if (exist) {
        return state.map((product) =>
          product.id === payload.id
            ? { ...product, qty: product.qty + 1 }
            : product
        );
      } else {
        return [
          ...state,
          {
            ...payload,
            qty: 1,
          },
        ];
      }

    case ActionTypes.REMOVEFROMCART:
      const productExist = state.find((product) => product.id === payload.id);
      if (productExist.qty === 1) {
        return state.filter((product) => product.id !== payload.id);
      } else {
        return state.map((product) =>
          product.id === payload.id
            ? { ...product, qty: product.qty - 1 }
            : product
        );
      }
    default:
      return state;
  }
};
