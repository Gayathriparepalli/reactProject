import React from "react";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { useForm } from "react-hook-form";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/actions/ProductActions";
import { useNavigate } from "react-router-dom";
const AddProducts = () => {
  const btnstyle = { margin: "8px 0" };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({});
  const submitForm = (data) => {
    axios
      .post("https://fakestoreapi.com/products", data)
      .then((res) => {
        dispatch(addProduct(res.data));
        console.log(res.data);
        navigate("/productList");
      })
      .catch((err) => console.log(err));
    reset();
  };
  const paperStyle = {
    padding: 20,
    height: "50vh auto",
    width: 300,
    margin: "20px auto",
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h2>Add Product</h2>
        </Grid>
        <form onSubmit={handleSubmit(submitForm)}>
          <TextField
            label="title"
            name="title"
            placeholder="Enter title"
            type="text"
            fullWidth
            {...register("title", {
              required: true,
            })}
          />
          <TextField
            label="price"
            name="price"
            placeholder="Enter price"
            type="number"
            fullWidth
            {...register("price", {
              required: true,
            })}
          />
          <TextField
            label="image"
            name="image"
            placeholder="Enter image url"
            type="text"
            fullWidth
            {...register("image", {
              required: true,
            })}
          />
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            name="Description"
            placeholder="Description"
            style={{ width: 290, marginTop: 5 }}
            {...register("Description", {
              required: true,
            })}
          />
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              category
            </InputLabel>
            <NativeSelect
              defaultValue="electronic"
              inputProps={{
                name: "category",
                id: "uncontrolled-native",
              }}
              {...register("category", {
                required: true,
              })}
            >
              <option value="electronic">electronic</option>
              <option value="Jewelery">Jewelery</option>
              <option value="Men'sClothing">Men's Clothing</option>
              <option value="Women's Clothing">Women's Clothing</option>
            </NativeSelect>
          </FormControl>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Add
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};
export default AddProducts;
