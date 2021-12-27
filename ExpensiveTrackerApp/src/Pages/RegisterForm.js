import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import { auth } from "./Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required("password is required"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});
const RegisterForm = () => {
  const history = useHistory();
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };
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
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((user) => {
        console.log(user);

        localStorage.setItem("authantication", true);
        history.push("/balance");
      })
      .catch((err) => console.log(err));
    reset();
  };

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit(submitForm)}>
          <TextField
            fullWidth
            type="text"
            label="name"
            name="name"
            placeholder="Enter your name"
            {...register("name", {
              required: true,
            })}
          />
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => <p style={{ color: "red" }}>{message}</p>}
          />
          <TextField
            fullWidth
            type="text"
            label="Email"
            name="email"
            placeholder="Enter your email"
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
            fullWidth
            type="password"
            label="password"
            name="password"
            placeholder="Enter your password"
            {...register("password", {
              required: true,
            })}
          />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => <p style={{ color: "red" }}>{message}</p>}
          />

          <TextField
            fullWidth
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            placeholder="Confirm your password"
            {...register("confirmPassword", {
              required: true,
            })}
          />
          <ErrorMessage
            errors={errors}
            name="confirmPassword"
            render={({ message }) => (
              <p style={{ color: "red" }}>
                {errors.confirmPassword && "password does not match"}
              </p>
            )}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={marginTop}
          >
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default RegisterForm;
