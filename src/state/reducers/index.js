import { combineReducers } from "redux";
import { productListReducer } from "./productListReducer";

export const reducers = combineReducers({productList: productListReducer});