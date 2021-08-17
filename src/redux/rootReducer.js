import { combineReducers } from 'redux';
import  LoginReducer  from './login/login.reducers';


const rootReducer = combineReducers({
    LoginReducer: LoginReducer,
});

export default rootReducer;