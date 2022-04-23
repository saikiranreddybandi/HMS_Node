import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './src/Components/reducers/index';
import {connectRouter} from 'connected-react-router'
import { reducer as formReducer } from 'redux-form';
export const history=createBrowserHistory();
const reducer=combineReducers({...reducers,...{form:formReducer}})
const store=compose(
   applyMiddleware(thunk),
 window.devToolExtension?window.devToolExtension():f=>f
)(createStore)(connectRouter(history)(reducer));
export default store;