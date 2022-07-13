import {combineReducers} from 'redux';
import fetchStudentsReducer from './fetchStudentsReducer';
import fetchInfoUserReducer from './fetchInfoUserReducer';
import fetchBusinessReducer from './fetchBusinessReducer';
import fetchPostReducer from './fetchPostReducer';
import fetchStaffReducer from './fetchStaffReducer';

const RootReducer= combineReducers({
    fetchStudentsReducer,
    fetchInfoUserReducer,
    fetchBusinessReducer,
    fetchPostReducer,
    fetchStaffReducer
});


export default RootReducer;