import React from "react";
import GlobalState from "./Content/GlobalState";
import Transactions from "./Pages/Transactions";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddTransaction from "./Pages/AddTransaction";
import Balance from "./Pages/Balance";
import EditIncome from "./Pages/EditIncome";
import LoginPage from "./Pages/LoginPage";
import RegisterForm from "./Pages/RegisterForm";
import ProtectedRoutes from "./Pages/ProtectedRoutes";
const App = () => {
  return (
    <div style={{ alignContent: "center" }}>
      <GlobalState>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route exact path="/register">
              <RegisterForm />
            </Route>
            <ProtectedRoutes exact path="/expenses" component={Transactions} />
            <ProtectedRoutes
              exact
              path="/addExpenses"
              component={AddTransaction}
            />
            <ProtectedRoutes exact path="/balance" component={Balance} />
            <ProtectedRoutes exact path="/editIncome" component={EditIncome} />
          </Switch>
        </BrowserRouter>
      </GlobalState>
    </div>
  );
};

export default App;
