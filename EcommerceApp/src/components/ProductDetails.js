import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
  removeProductDetails,
  addToCart,
} from "../redux/actions/ProductActions";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import axios from "axios";
import Box from "@mui/material/Box";
import NavBar from "./NavBar";
const ProductDetails = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const getData = async () => {
    console.log(productId);
    await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        dispatch(selectProducts(res.data));
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const addCart = (product) => {
    dispatch(addToCart(product));
  };
  useEffect(() => {
    if (productId && productId !== "") {
      getData();
    }
    return () => {
      dispatch(removeProductDetails());
    };
  }, [productId]);

  return (
    <div>
      <NavBar />
      {product ? (
        <Card sx={{ display: "flex" }}>
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
              sx={{ maxWidth: 600, maxHeight: 600 }}
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
                ${product.price}
              </Typography>

              <Typography
                component="div"
                variant="subtitle1"
                style={{ textAlign: "left" }}
              >
                {product.description}
              </Typography>

              <CardActions>
                <IconButton onClick={() => addCart(product)}>
                  <ShoppingCartIcon />
                  Add to cart
                </IconButton>
              </CardActions>
            </CardContent>
          </Box>
        </Card>
      ) : null}
    </div>
  );
};

export default ProductDetails;
