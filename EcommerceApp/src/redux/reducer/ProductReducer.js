import { ActionTypes } from "../contents/ActionTpes";
const initialState = {
  products: [],
  cart: [],
  userExists: [],
  userCart: [],
  editProduct: {},
};

export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.DISPLAY_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((val) => val.id !== payload),
      };
    case ActionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, payload],
      };
    case ActionTypes.SEARCH_PRODUCT:
      return {
        ...state,
        products: state.products.filter((val) =>
          val.title.toUpperCase().includes(payload.toUpperCase())
        ),
      };
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
export const editProductReducer = (
  state = initialState.editProduct,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.EDIT_PRODUCT:
      return { ...state, ...payload };
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

export const userExists = (
  state = initialState.userExists,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.USEREXISTS:
      return [...state, payload];
    default:
      return state;
  }
};
export const userCartReducer = (
  state = initialState.userCart,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.USERCART:
      return [...state, ...payload];
    default:
      return state;
  }
};
