import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import currentUser from "./reducers/currentUser";


// creating store
export const store = configureStore({
    reducer: combineReducers({currentUser}),
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(thunk)
});

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);