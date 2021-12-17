import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { initiateGoogle, loginInitiate } from "../redux/action";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);
  const { email, password } = state;
  const handleGoogleSignIn = () => {
    dispatch(initiateGoogle());
  };
  const handlefacebookSignIn = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    if (!email || !password) {
      return;
    }
    dispatch(loginInitiate(email, password));
    setState({ email: "", password: "" });
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div>
      <div id="logreg-forms">
        <form className="form-signin" onSubmit={handleSubmit}>
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            Sign in
          </h1>
          <div className="social-login">
            <button
              className="btn google-btn social-btn"
              type="button"
              onClick={handleGoogleSignIn}
            >
              <span>
                <i className="fab fa-google-plus-g" /> Sign in with Google+
              </span>
            </button>
            <button
              className="btn facebook-btn social-btn"
              type="button"
              onClick={handlefacebookSignIn}
            >
              <span>
                <i className="fab fa-facebook"></i> Sign in with facebook
              </span>
            </button>
          </div>
          <p style={{ textAlign: "center" }}>OR </p>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="enter email"
            name="email"
            onChange={handleChange}
            value={email}
          />
          <input
            type="password"
            id="inputpassword"
            className="form-control"
            placeholder="enter password"
            name="password"
            onChange={handleChange}
            value={password}
          />
          <button className="btn btn-secondary btn-block" type="submit">
            <i className="fas fa-sign-in-alt" /> Sign In
          </button>
          <hr />
          <p>Don't have an account</p>
          <Link to="/register">
            <button
              className="btn btn-primary btn-block"
              type="button"
              id="btn-signup"
            >
              <i className="fas fa-user-plus"></i> sign up new Account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
