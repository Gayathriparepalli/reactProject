import React from "react";
import { useHistory, Route } from "react-router-dom";
const ProtectedRoutes = ({ auth, component: Component, ...rest }) => {
  const history = useHistory();
  const isAuth = localStorage.getItem("authantication");
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Component {...props} /> : history.push("/")
      }
    />
  );
};

export default ProtectedRoutes;
