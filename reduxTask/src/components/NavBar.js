import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
function NavBar() {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 5 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Shop
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            products
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            About
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Contact
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button
              onClick={() => navigate("/cart")}
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
