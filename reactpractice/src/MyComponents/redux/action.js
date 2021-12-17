import * as type from "./actionType";
import { auth, googleAuthProvider } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from "firebase/auth";
export const registerStart = () => ({
  type: type.REGISTER_START,
});

export const registerSuccess = (user) => ({
  type: type.REGISTER_SUCCESS,
  payload: user,
});

export const registerFail = (error) => ({
  type: type.REGISTER_FAIL,
  payload: error,
});

export const loginStart = () => ({
  type: type.LOGIN_START,
});

export const loginSuccess = (user) => ({
  type: type.LOGIN_SUCCESS,
  payload: user,
});
export const loginFail = (error) => ({
  type: type.LOGIN_FAIL,
  payload: error,
});

export const googleSignInStart = () => ({
  type: type.GOOGLE_SIGININ_START,
});

export const googleSignInSuccess = (user) => ({
  type: type.GOOGLE_SIGNIN_SUCCESS,
  payload: user,
});

export const googleSignInFail = (error) => ({
  type: type.GOOGLE_SIGNIN_FAIL,
  payload: error,
});

export const logoutStart = () => ({
  type: type.LOGOUT_START,
});

export const logoutSuccess = () => ({
  type: type.LOGOUT_SUCCESS,
});
export const logoutFail = (error) => ({
  type: type.LOGOUT_FAIL,
  payload: error,
});

export const registerInitiate = (email, password, displayName) => {
  return function (dispatch) {
    dispatch(registerStart());

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        // user.updateProfile({
        //   displayName,
        // });

        dispatch(registerSuccess(user));
      })
      .catch((error) => dispatch(registerFail(error.message)));
  };
};

export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        // user.updateProfile({
        //   displayName,
        // });

        dispatch(loginSuccess(user));
      })
      .catch((error) => dispatch(loginFail(error.message)));
  };
};

export const logoutInitiate = () => {
  return function (dispatch) {
    dispatch(logoutStart());

    signOut(auth)
      .then(() => dispatch(logoutSuccess()))
      .catch((error) => dispatch(logoutFail(error.message)));
  };
};

export const initiateGoogle = () => {
  return function (dispatch) {
    dispatch(googleSignInStart());

    signInWithPopup(auth, googleAuthProvider)
      .then((user) => {
        dispatch(googleSignInSuccess(user));
      })
      .catch((error) => dispatch(googleSignInFail(error.message)));
  };
};
