import React, { useContext, useState } from "react";
import { GlobalContext } from "../Content/GlobalState";
import { Paper } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@mui/material/TextField";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const Transactions = () => {
  const { transaction, deleteTransaction, searchTransaction } =
    useContext(GlobalContext);
  const history = useHistory();
  const [search, setSearch] = useState("");
  const paperStyle = {
    padding: 20,
    height: "50vh auto",
    width: 400,
    margin: "20px auto",
  };
  const addData = () => {
    history.push("/addExpenses");
  };
  const deleteExpenses = (id) => {
    deleteTransaction(id);
    console.log(id);
  };

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    searchTransaction(search);
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
        <Typography variant="h3" style={{ paddingLeft: 100 }}>
          HISTORY
        </Typography>

        <TextField
          label="type to search"
          style={{ width: 300, marginBottom: 20 }}
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
        {transaction.map((val) => (
          <Card variant="outlined" key={val.id}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {val.name}
                <span style={{ paddingLeft: 150 }}>${val.amount}</span>

                <IconButton
                  style={{ paddingLeft: 5 }}
                  onClick={() => deleteExpenses(val.id)}
                >
                  <CancelIcon />
                </IconButton>
              </Typography>
            </CardContent>
          </Card>
        ))}
        <Button
          variant="contained"
          style={{ marginLeft: 30, marginTop: 20 }}
          onClick={() => addData()}
        >
          Add expense
        </Button>
        <Button
          variant="contained"
          style={{ marginLeft: 20, marginTop: 20 }}
          onClick={() => history.push("/balance")}
        >
          view Amount
        </Button>
      </Paper>
    </div>
  );
};

export default Transactions;
