import React, { useReducer } from "react";
import { Reducer } from "./Reducer";
const initialState = {
  income: 20000,
  transaction: [
    { id: 1, name: "Buy a book", amount: 20 },
    { id: 2, name: "Buy a milk", amount: 50 },
    { id: 3, name: "Buy a bag", amount: 500 },
  ],
};
export const GlobalContext = React.createContext();

const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETETRANSACTION", payload: id });
  };

  const addTransaction = (data) => {
    dispatch({ type: "ADDTRANSACTION", payload: data });
  };
  const searchTransaction = (data) => {
    dispatch({ type: "SEARCHTRANSACTION", payload: data });
  };
  const edit = (newIncome) => {
    dispatch({ type: "EDITINCOME", payload: newIncome });
  };

  return (
    <div>
      <GlobalContext.Provider
        value={{
          transaction: state.transaction,
          deleteTransaction,
          addTransaction,
          searchTransaction,
          edit,
          income: state.income,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </div>
  );
};
export default GlobalState;
