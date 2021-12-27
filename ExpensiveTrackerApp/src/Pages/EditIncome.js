import React, { useContext } from "react";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../Content/GlobalState";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
const schema = yup.object().shape({
  amount: yup.number().positive().integer().required(),
});

const btnstyle = { margin: "8px 0" };
const EditIncome = () => {
  const { income, edit } = useContext(GlobalContext);
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
    defaultValues: { amount: parseInt(income) },
    resolver: yupResolver(schema),
  });
  const submitForm = (data) => {
    console.log(data);
    edit(data.amount);
    history.push("./balance");
    reset();
  };

  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h2>Edit Income</h2>
          </Grid>
          <form onSubmit={handleSubmit(submitForm)}>
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
                <p style={{ color: "red" }}>{message}</p>
              )}
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth
            >
              submit
            </Button>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};

export default EditIncome;
