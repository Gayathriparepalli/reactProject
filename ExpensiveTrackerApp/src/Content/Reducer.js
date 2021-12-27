export const Reducer = (state, action) => {
  switch (action.type) {
    case "ADDTRANSACTION":
      return {
        ...state,
        transaction: [...state.transaction, action.payload],
      };
    case "DELETETRANSACTION":
      return {
        ...state,
        transaction: state.transaction.filter(
          (val) => val.id !== action.payload
        ),
      };
    case "SEARCHTRANSACTION":
      return {
        ...state,
        transaction: state.transaction.filter((val) =>
          val.name.toUpperCase().includes(action.payload.toUpperCase())
        ),
      };
    case "EDITINCOME":
      return {
        ...state,
        income: action.payload,
      };

    default:
      return state;
  }
};
