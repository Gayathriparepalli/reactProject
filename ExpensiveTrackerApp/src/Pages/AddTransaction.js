import React, { useContext } from "react";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../Content/GlobalState";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
const schema = yup.object().shape({
  name: yup.string().required("expenses name is required"),
  amount: yup.number().positive().integer().required(),
});
const btnstyle = { margin: "8px 0" };
const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const history = useHistory();
  const paperStyle = {
    padding: 20,
    height: "50vh auto",
    width: 400,
    margin: "20px auto",
  };
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitForm = (data) => {
    console.log(data);
    const id = new Date().getTime().toString();
    const newExpense = { id, ...data };
    console.log(newExpense);
    addTransaction(newExpense);
    history.push("/expenses");
    reset();
  };

  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h2>Add Transaction</h2>
          </Grid>
          <form onSubmit={handleSubmit(submitForm)}>
            <TextField
              label="Name"
              name="name"
              type="text"
              placeholder="Enter Name"
              fullWidth
              {...register("name", {
                required: true,
              })}
            />
            <ErrorMessage
              errors={errors}
              name="name"
              render={({ message }) => (
                <p style={{ color: "red" }}>{message}</p>
              )}
            />

            <TextField
              label="amount"
              name="amount"
              placeholder="Enter amount"
              type="number"
              fullWidth
              {...register("amount", {
                required: true,
              })}
            />
            <ErrorMessage
              errors={errors}
              name="amount"
              render={({ message }) => (
                <p style={{ color: "red" }}>please Enter positive number</p>
              )}
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth
            >
              Add
            </Button>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};

export default AddTransaction;
