import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { searchData } from "../redux/actions/ProductActions";
function NavBar() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [search, setSearch] = useState("");
  const userExists = useSelector((state) => state.userExists);
  const navigate = useNavigate();
  const handleClick = () => {
    if (userExists.length > 0) {
      console.log(userExists);
      navigate("/usersCart");
    } else {
      navigate("/cart");
    }
  };
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    dispatch(searchData(search));
  };

  return (
    <Box sx={{ flexGrow: 5 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shop
          </Typography>

          <TextField
            label="type to search"
            style={{ width: 300 }}
            value={search}
            onChange={onChangeHandler}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />

          <Button
            variant="contained"
            onClick={() => navigate("/addProducts")}
            style={{ marginLeft: 100 }}
          >
            Add Product
          </Button>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button
              onClick={() => handleClick()}
              variant="contained"
              endIcon={<ShoppingCartIcon />}
            >
              {cart.length}
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default NavBar;
