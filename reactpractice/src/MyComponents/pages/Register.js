import React, { useState, useEffect } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerInitiate } from "../redux/action";
const Register = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    PasswordConfirm: "",
  });
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);
  const { email, password, name, PasswordConfirm } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    if (password !== PasswordConfirm) {
      return;
    }
    console.log(currentUser);
    dispatch(registerInitiate(email, password, name));
    setState({ name: "", email: "", password: "", PasswordConfirm: "" });
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div>
      <div id="register-form">
        <form className="form-signup" onSubmit={handleSubmit}>
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            Sign up
          </h1>
          <input
            type="text"
            id="text"
            className="form-control"
            placeholder="enter name"
            name="name"
            onChange={handleChange}
            value={name}
          />

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
          <input
            type="password"
            id="passwordConfirm"
            className="form-control"
            placeholder="enter repassword"
            name="PasswordConfirm"
            onChange={handleChange}
            value={PasswordConfirm}
          />
          <button className="btn btn-secondary btn-block" type="submit">
            <i className="fas fa-user-plus" /> Sign up
          </button>
          <Link style={{ color: "blue" }} to="/login">
            <i className="fas fa-angle-left"></i>Back
          </Link>
        </form>
        <br />
      </div>
    </div>
  );
};

export default Register;
