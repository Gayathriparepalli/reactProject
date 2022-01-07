import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userCart } from "../redux/actions/ProductActions";
import NavBar from "./NavBar";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CardActions from "@mui/material/CardActions";
const UsersCart = () => {
  const userExists = useSelector((state) => state.userExists);
  const dispatch = useDispatch();
  const id = userExists[0][0]["id"];
  const [userCart1, setuserCart1] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [qty, setQty] = useState([]);
  const [realProducts, setRealProducts] = useState([]);
  const [newData, setNewData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/carts/user/${id}`)
      .then((res) => {
        setuserCart1(res.data);
        dispatch(userCart(res.data));
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const clickhandle = () => {
    const products = userCart1.map((val) => val.products);
    // const quantity=userCart.map(val=>val.)
    setQty(products);
    console.log(products, qty);
    const id = products.map((val) => val.map((data) => data.productId));
    console.log(id);
    const merged = [].concat.apply([], id);
    const uniqueValue = [...new Set(merged)];
    console.log(merged, uniqueValue);
    const products1 = uniqueValue.map((val) => {
      axios
        .get(`https://fakestoreapi.com/products/${val}`)
        .then((res) => {
          setCartProducts((cartProducts) => [...cartProducts, res.data]);
          //   console.log(res.data);
        })
        .catch((err) => console.log(err));
    });
    const data = cartProducts.map((val) => {
      products.map((product) => {
        product.map((val2) => {
          if (val2.productId === val.id) {
            console.log(val.id, val2.quantity);
            val = { ...val, qty: val2.quantity };
            console.log(val);
            setRealProducts((realProducts) => [...realProducts, val]);
          }
        });
      });
    });
    setNewData([...new Set(realProducts)]);
    console.log(realProducts, newData);
  };

  return (
    <div>
      <NavBar />
      <button onClick={() => clickhandle()}>see cart</button>
      {newData.length > 0 ? (
        newData.map((product, index) => (
          <Card sx={{ display: "flex" }} key={index}>
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
                  <IconButton>
                    <AddIcon />
                  </IconButton>
                  <IconButton>
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

export default UsersCart;
