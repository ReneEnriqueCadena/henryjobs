import { take, call, all, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
    getInfoForStaffSuccess
} from '../actions/actionStaff';

import {
    GET_INFO_FOR_STAFF,
    URL_PEDIDO,
    URL_PROFILE,
    USER_DELETE,
    SEND_EMAIL,
    URL_DEPLOY
} from '../../constants/constants';


function* asynGetInfoForStaff () {
    try {
        const responseUsers = yield call(()=> axios.get(URL_PEDIDO+'/user'))
        const responsePubli = yield call(()=> axios.get(URL_PEDIDO+'/post'))
        console.log(responseUsers.data, responsePubli.data)
        yield put(getInfoForStaffSuccess({users: responseUsers.data, publications: responsePubli.data})) // reemplazar por response.data
    } catch (error) {
        console.log(error);
    }
};

function* asyncUserDelete (payload) {
    try {
        const resp = yield call(() => axios.delete(URL_PROFILE + payload.payload))
        console.log(resp);
    } catch (error) {
        console.log(error)
    }
}

function* asyncSendEmail (payload) {
    try {
                                                           // /api/advertencia/id
        const response = yield call(() => axios.get(URL_DEPLOY + `/advertencia/${payload.payload}`));
        // console.log(response.data);
    } catch (error) {
        console.log(error);
    }
};



export function* watchFetchSaffSaga(){
    yield takeEvery(GET_INFO_FOR_STAFF, asynGetInfoForStaff)
    yield takeEvery(USER_DELETE, asyncUserDelete)
    yield takeEvery(SEND_EMAIL, asyncSendEmail)
}