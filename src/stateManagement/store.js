import { applyMiddleware, combineReducers, compose, configureStore } from "@reduxjs/toolkit";
import { listReducer } from "./reducers/listReducer";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    listReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})
