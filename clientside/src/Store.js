
import { applyMiddleware} from "redux";
import {thunk} from "redux-thunk";


import { createStore } from "redux";

import { composeWithDevTools } from "@redux-devtools/extension";
import rootreducers from "./Components/Redux/Reducers/Main";

const middleware =[thunk];
const store = createStore(
    rootreducers,
    composeWithDevTools(applyMiddleware(...middleware))
)
 

export default store;