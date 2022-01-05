import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";
import { Grid } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Home from "./Home";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DisplayProducts = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.allProducts.products);

  const handleClick = (category) => {
    navigate(`productsCategory/${category}`);
  };

  return (
    <div>
      <NavBar />
      <Home />
      <Stack
        spacing={2}
        direction="row"
        style={{ marginTop: 20, marginBottom: 20, marginLeft: 200 }}
      >
        <Button
          variant="outlined"
          color="secondary"
          value="jewelery"
          onClick={() => handleClick("jewelery")}
        >
          Jewelery
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => handleClick("men's clothing")}
        >
          Men's Clothing
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => handleClick("women's clothing")}
        >
          Women's Clothing
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => handleClick("electronics")}
        >
          Electronic
        </Button>
      </Stack>
      <Grid style={{ margin: 20 }}>
        <Grid container spacing={2} style={{ marginTop: 20 }}>
          {products.map((val) => (
            <Grid xs={3} sm={3} item key={val.id}>
              <Card
                sx={{
                  width: "90%",
                  height: "95%",
                }}
              >
                <CardActionArea>
                  <Link
                    to={`productDetails/${val.id}`}
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
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default DisplayProducts;
