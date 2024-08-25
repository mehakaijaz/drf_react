import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productsListReducers, productsDetailsReducers } from './reducers/productsReducers';


const reducer = combineReducers({
    productsList: productsListReducers,
    productsDetails: productsDetailsReducers
})

const initialState = {}
const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store;