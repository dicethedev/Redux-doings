
import { createStore, combineReducers } from 'redux';
import homePage from './containers/HomePage/reducer';
import userPage from './containers/UserPage/reducer';

const reducers = combineReducers({ homePage, userPage });


export default createStore(reducers);