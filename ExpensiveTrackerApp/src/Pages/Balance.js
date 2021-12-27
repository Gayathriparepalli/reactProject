import React, { useContext } from "react";
import { GlobalContext } from "../Content/GlobalState";
import { useHistory } from "react-router-dom";
import { Paper } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const Balance = () => {
  const history = useHistory();
  const { transaction, income } = useContext(GlobalContext);
  const amount = transaction.map((val) => parseInt(val.amount));
  const total = amount.reduce((acc, num) => acc + num, 0);
  console.log(amount);
  const viewHistory = () => {
    history.push("/expenses");
  };
  const paperStyle = {
    padding: 20,
    height: "50vh auto",
    width: 400,
    margin: "20px auto",
  };
  const editIncome = () => {
    history.push("/editIncome");
  };
  const logOut = () => {
    localStorage.removeItem("authantication");
    history.push("/");
  };
  return (
    <div>
      <Paper style={paperStyle}>
        <IconButton onClick={() => logOut()}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h3" style={{ paddingLeft: 100, color: "gray" }}>
          Details
        </Typography>

        <Card variant="outlined">
          <CardContent style={{ backgroundColor: "green" }}>
            <Typography
              style={{ color: "white", textAlign: "center" }}
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Income: ${income}
              <IconButton onClick={() => editIncome()}>
                <EditIcon />
              </IconButton>
            </Typography>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardContent style={{ backgroundColor: "red" }}>
            <Typography
              style={{ color: "white", textAlign: "center" }}
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Expense: ${total}
            </Typography>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardContent style={{ backgroundColor: "blue" }}>
            <Typography
              style={{ color: "white", textAlign: "center" }}
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Balance: ${parseInt(income) - parseInt(total)}
            </Typography>
          </CardContent>
        </Card>

        <Button
          style={{ width: 360, marginTop: 20 }}
          onClick={() => viewHistory()}
        >
          view History
        </Button>
      </Paper>
    </div>
  );
};

export default Balance;
