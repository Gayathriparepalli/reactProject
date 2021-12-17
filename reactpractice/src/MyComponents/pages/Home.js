import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from "../redux/action";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const handleAuth = () => {
    if (currentUser) {
      dispatch(logoutInitiate());
    }
    navigate("/login");
  };
  return (
    <div>
      <h2>Welcome to home page</h2>
      <br />
      <button className="btn btn-danger" onClick={handleAuth}>
        logout
      </button>
    </div>
  );
};

export default Home;
