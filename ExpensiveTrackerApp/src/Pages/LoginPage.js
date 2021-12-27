import React from "react";
import "./Style.css";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory, Link } from "react-router-dom";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import ReactGoogleLogin from "react-google-login";
import ReactFacebookLogin from "react-facebook-login";
import { auth } from "./Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const schema = yup.object().shape({
  email: yup.string().email().required("email is required"),
  password: yup.string().min(4).max(15).required("password is required"),
});

const LoginForm = () => {
  const history = useHistory();
  const paperStyle = {
    padding: 20,
    height: "50vh auto",
    width: 400,
    margin: "20px auto",
  };

  const avatarStyle = { backgroundColor: "#1bbd7e" };

  const btnstyle = { margin: "8px 0" };
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitForm = (data) => {
    console.log(data);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((user) => {
        console.log(user);
        localStorage.setItem("authantication", true);
        history.push("/balance");
      })
      .catch((err) => console.log(err));

    reset();
  };
  const onSuccess = (res) => {
    console.log(res);
    localStorage.setItem("authantication", true);
    history.push("/balance");
  };
  const onFailure = () => {
    console.log("login fail");
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: 5 }}>
              <ReactGoogleLogin
                clientId="236993324571-3d9262kel3mp2q6300k29u2agdgog6h8.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
              />
            </div>
            <div>
              <Paper style={{ width: 170, height: 50, textAlign: "center" }}>
                <ReactFacebookLogin
                  appId="3046893585576871"
                  fields="name,email,picture"
                  cssClass="btnFacebook"
                  icon={
                    <i
                      className="fa fa-facebook"
                      style={{ marginLeft: "5px" }}
                    />
                  }
                  textButton="&nbsp;&nbsp;Login with Facebook"
                  callback={onSuccess}
                  onFailure={onFailure}
                />
              </Paper>
            </div>
          </div>
        </Grid>
        <form onSubmit={handleSubmit(submitForm)}>
          <TextField
            label="email"
            name="email"
            placeholder="Enter Email"
            fullWidth
            {...register("email", {
              required: true,
            })}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => <p style={{ color: "red" }}>{message}</p>}
          />
          <TextField
            label="Password"
            name="password"
            placeholder="Enter password"
            type="password"
            fullWidth
            {...register("password", {
              required: true,
            })}
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => <p style={{ color: "red" }}>{message}</p>}
          />

          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Sign in
          </Button>
        </form>
        does not have an account
        <Link to="./register"> create account</Link>
      </Paper>
    </Grid>
  );
};

export default LoginForm;
