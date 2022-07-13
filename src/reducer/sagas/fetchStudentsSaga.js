import { take, call, all, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {  
    GET_PUBLICATIONS_BUSINESS,
    POST_ID_FOLLOW,
    GET_STUDENTS_BY_EMAIL,
    URL_PEDIDO,
    GET_MY_APPLICAT,
    POSTULARSE,
    URL_PEDIDO_POSTS,
    POST_PUBLICATION_STU,
    GET_PREMIUM_BUSINESS,
    URL_DEPLOY,
    TRAER_FOLLOWING_STUD
} from '../../constants/constants';

import { getPublicationsBusinessSuccess, postIdFollowSuccess, getStudentsByEmailSuccess, getMyApplicatSuccess, getPremiumBusinessSuccess, traerFollowingStudSuccess } from '../actions/actionStudents';

//import actions 

function* asyncGetPublicationsBussines(payload) {
    try {
        const response= yield call(()=>axios.get(URL_PEDIDO_POSTS)) 
        yield put(getPublicationsBusinessSuccess(response.data, payload)) // <== WorkWall 
    } catch (error) {
        console.log(error) 
    }
};

function* asyncPostIdFollowSuccess(obj) {
    try {
        const response= yield call(()=>axios.put(URL_PEDIDO +'/follow/'+obj.payload, obj.obj)) 
        yield put(postIdFollowSuccess(response.data))
    } catch (error) {
        console.log(error)
    }
};

function* asyncGetStudentsByEmail (email) {
    try {
        const response = yield call(() => axios.get(URL_PEDIDO + `/mail?email=${email.email}`));
        yield put(getStudentsByEmailSuccess(response.data));
    } catch (error) {
        console.log(error);
    }
};

function* asyncPostularse (payload) {
    try { 
        const response = yield call(() => axios.put(URL_PEDIDO_POSTS + `/old/${payload.payload[1]}`, payload.payload[0]));
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
};

function* asyncGetMyApplicat (payload) {
    try { 
        const response = yield call(() => axios.get(URL_PEDIDO_POSTS));
        yield put(getMyApplicatSuccess(response.data, payload.id))
    } catch (error) {
        console.log(error);
    }
};

function* asyncPostPublicationStu (payload) {
    console.log(payload);
    try {
        const response = yield call(() => axios.post(URL_PEDIDO_POSTS, payload.payload))
        console.log(response);

    } catch (error) {
        console.log(error);
    }
};

function* asyncGetPremiumBusiness () {
    try {
        const response = yield call(() => axios.get(URL_DEPLOY+'/user'))
        yield put(getPremiumBusinessSuccess(response.data))

    } catch (error) {
        console.log(error);
    }
};

function* asyncTraerFollowingStud (payload) {
    try {
        const response = yield call(() => axios.put(URL_PEDIDO+'/user/'+payload.payload))
        yield put(traerFollowingStudSuccess(response.data));
    } catch (error) {
        console.log(error);
    }
};


export function* watchFetchStudentsSaga(){
    yield takeEvery(GET_PUBLICATIONS_BUSINESS, asyncGetPublicationsBussines)
    yield takeEvery(POST_ID_FOLLOW, asyncPostIdFollowSuccess)
    yield takeLatest(GET_STUDENTS_BY_EMAIL, asyncGetStudentsByEmail)
    yield takeLatest(POSTULARSE, asyncPostularse)
    yield takeEvery(GET_MY_APPLICAT, asyncGetMyApplicat)
    yield takeEvery(POST_PUBLICATION_STU, asyncPostPublicationStu)
    yield takeEvery(GET_PREMIUM_BUSINESS, asyncGetPremiumBusiness)
    yield takeEvery(TRAER_FOLLOWING_STUD, asyncTraerFollowingStud)
}