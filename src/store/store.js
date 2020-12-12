import { todoReducer } from "../reducers/todoreducer";
import {createStore} from "redux";
export const store=createStore(todoReducer)