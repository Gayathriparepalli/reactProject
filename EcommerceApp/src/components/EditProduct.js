import React from "react";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import axios from "axios";
import { useSelector } from "react-redux";
const EditProduct = () => {
  const btnstyle = { margin: "8px 0" };
  const navigate = useNavigate();
  const editProduct = useSelector((state) => state.editProduct);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: editProduct.title,
      price: editProduct.price,
      image: editProduct.image,
      Description: editProduct.description,
      category: editProduct.category,
    },
  });
  const submitForm = (data) => {
    axios
      .put(`https://fakestoreapi.com/products/${editProduct.id}`, data)
      .then((res) => {
        alert("data updated successfully");
        console.log(res.data);
        navigate("/productList");
      })
      .catch((err) => console.log(err));
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
          <h2>Edit Product</h2>
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
            type="text"
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
          <TextField
            label="category"
            name="category"
            placeholder="Enter category"
            type="text"
            fullWidth
            {...register("category", {
              required: true,
            })}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            update
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};
export default EditProduct;
