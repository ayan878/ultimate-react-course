import { applyMiddleware, combineReducers, createStore } from "redux";
import {thunk} from "redux-thunk";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

// Combine reducers
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

// Create Redux store with middleware (Thunk)
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

// In order to use middleware (Thunk) we have to follow Three Step
// Step:1 install middleware package
// step :2 we apply meddleware to store
// step :3 We use middleware in action creator function
