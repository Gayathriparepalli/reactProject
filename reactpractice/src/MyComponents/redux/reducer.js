import * as type from "./actionType";
const initialState = {
  loading: false,
  currentUser: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.REGISTER_START:
    case type.LOGIN_START:
    case type.LOGOUT_START:
    case type.GOOGLE_SIGININ_START:
      return {
        ...state,
        loading: true,
      };
    case type.LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    case type.REGISTER_SUCCESS:
    case type.LOGIN_SUCCESS:
    case type.GOOGLE_SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    case type.REGISTER_FAIL:
    case type.LOGIN_FAIL:
    case type.LOGOUT_FAIL:
    case type.GOOGLE_SIGNIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
