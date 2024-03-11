import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

// Combine reducers
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

// Create Redux store
const store = createStore(rootReducer);

