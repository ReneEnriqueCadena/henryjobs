import {take,call, all, spawn} from 'redux-saga/effects';
import { watchFetchStudentsSaga } from './fetchStudentsSaga';
import { watchFetchBusinessSaga } from './fetchBusinessSaga'
import { watchFetchPostSaga } from './fetchPostSaga';
import {watchFetchSaffSaga} from './fetchStaffSaga';

export function* RootSaga(){
    yield all([
        spawn(watchFetchStudentsSaga),
        spawn(watchFetchPostSaga),
        spawn(watchFetchBusinessSaga),
        spawn(watchFetchSaffSaga)
    ])
}