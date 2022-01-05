import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";

const Home = () => {
  return (
    <div>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}></Box>
        <CardMedia
          component="img"
          image="/assets/bgImage.PNG"
          alt="background image"
        />
      </Card>
    </div>
  );
};

export default Home;
