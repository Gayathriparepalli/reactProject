import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NavBar from "./NavBar";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CardActions from "@mui/material/CardActions";
import { addToCart, deleteFromCart } from "../redux/actions/ProductActions";
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const addProduct = (product) => {
    dispatch(addToCart(product));
  };
  const removeProduct = (product) => {
    dispatch(deleteFromCart(product));
  };
  return (
    <div>
      <NavBar />
      {cart.length > 0 ? (
        cart.map((product) => (
          <Card sx={{ display: "flex" }} key={product.id}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                pl: 5,
                pb: 10,
                pt: 10,
              }}
            >
              <CardMedia
                component="img"
                sx={{ maxWidth: 200, maxHeight: 200 }}
                image={product.image}
                alt={product.title}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                pl: 10,
                pt: 10,
              }}
            >
              <CardContent>
                <Typography
                  component="div"
                  variant="subtitle1"
                  style={{
                    textAlign: "left",
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                >
                  {product.category}
                </Typography>
                <Typography
                  component="div"
                  variant="subtitle1"
                  style={{ textAlign: "left", fontSize: "20pt" }}
                >
                  {product.title}
                </Typography>

                <Typography
                  component="div"
                  variant="subtitle1"
                  style={{
                    textAlign: "left",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    fontSize: "20pt",
                    marginBottom: 10,
                  }}
                >
                  {product.qty} X ${product.price}=$
                  {product.qty * product.price}
                </Typography>

                <CardActions
                  style={{
                    textAlign: "left",
                    textTransform: "uppercase",
                  }}
                >
                  <IconButton onClick={() => addProduct(product)}>
                    <AddIcon />
                  </IconButton>
                  <IconButton onClick={() => removeProduct(product)}>
                    <RemoveIcon />
                  </IconButton>
                </CardActions>
              </CardContent>
            </Box>
          </Card>
        ))
      ) : (
        <h1 style={{ margin: 100 }}>your cart is empty</h1>
      )}
    </div>
  );
};

export default Cart;
