import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan(state, action) {
      state.loan = action.payload.amount;
      state.loanPurpose = action.payload.purpose;
      state.balance += action.payload.amount;
    },
    payLoan(state, action) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

export const { deposit, withdraw, requestLoan, payLoan, convertingCurrency } =
  accountSlice.actions;

export const depositAsync = (amount, currency) => async (dispatch) => {
  if (currency === "USD") {
    dispatch(deposit(amount));
  } else {
    try {
      dispatch(convertingCurrency());
      const host = "api.frankfurter.app";
      const res = await fetch(
        `https://${host}/latest?amount=${amount}&from=${currency}&to=USD`
      );
      const data = await res.json();
      const converted = data.rates.USD;
      dispatch(deposit(converted));
    } catch (error) {
      console.error("Error:", error);
    }
  }
};

export default accountSlice.reducer;
