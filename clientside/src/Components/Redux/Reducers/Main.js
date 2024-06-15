import {getProductsReducers} from './ProductsReducers';
import {combineReducers} from "redux";


const rootreducers = combineReducers({
    getProductsdata:getProductsReducers
})

export default rootreducers;