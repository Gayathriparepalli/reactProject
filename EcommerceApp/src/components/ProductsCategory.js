import React, { useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";
import { Grid } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import {
  productCategory,
  removeProductCategory,
} from "../redux/actions/ProductActions";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./NavBar";
const ProductsCategory = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.filterProduct.products);
  const getProducts = async () => {
    await axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => dispatch(productCategory(res.data)));
  };
  useEffect(() => {
    if (category && category !== "") {
      getProducts();
    }
    return () => {
      dispatch(removeProductCategory());
    };
  }, [category]);
  return (
    <div>
      <NavBar />
      <Grid style={{ margin: 20 }}>
        <Grid container spacing={2} style={{ marginTop: 20 }}>
          {products
            ? products.map((val) => (
                <Grid xs={3} sm={3} item key={val.id}>
                  <Card
                    sx={{
                      width: "90%",
                      height: "95%",
                    }}
                  >
                    <CardActionArea>
                      <Link
                        to={`/productsCategory/productDetails/${val.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <CardMedia
                          component="img"
                          sx={{
                            width: "90%",
                            height: "50%",
                          }}
                          image={val.image}
                          alt={val.title}
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            {val.title}
                          </Typography>
                          <Typography variant="h5" color="text.secondary">
                            ${val.price}
                          </Typography>
                        </CardContent>
                      </Link>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))
            : "loading..."}
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductsCategory;
