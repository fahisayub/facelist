import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./authReducer/auth.reducer";
import { contactReducer } from "./contactReducer/contact.reducer";

const rootReducer = combineReducers({
    authReducer: authReducer,
    contactReducer: contactReducer,
})

const composeEnhancer =  compose

export const store = legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))