import React, { useState, useEffect } from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import { Link } from "react-router-dom";
import axios from "axios";
import { userExistsAlready } from "../redux/actions/ProductActions";
import { useDispatch, useSelector } from "react-redux";
const schema = yup.object().shape({
  userName: yup.string().required("userName is required"),
  password: yup.string().min(4).max(15).required("password is required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const userExists = useSelector((state) => state.userExists);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/users")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const navigate = useNavigate();
  const paperStyle = {
    padding: 20,
    height: "50vh auto",
    width: 300,
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
    const exists = users.filter((val) => {
      return val.username === data.userName && val.password === data.password;
    });
    dispatch(userExistsAlready(exists));
    console.log(data);
    console.log(exists, userExists);
    if (exists.length > 0) {
      axios
        .post("https://fakestoreapi.com/auth/login", {
          username: data.userName,
          password: data.password,
        })
        .then((res) => {
          console.log(res.data);
          navigate("/productList");
        })
        .catch((err) => console.log(err));
      reset();
    } else {
      alert("userName or password is incorrect");
    }
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <form onSubmit={handleSubmit(submitForm)}>
          <TextField
            label="userName"
            name="userName"
            placeholder="Enter userName"
            fullWidth
            {...register("userName", {
              required: true,
            })}
          />
          <ErrorMessage
            errors={errors}
            name="userName"
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
