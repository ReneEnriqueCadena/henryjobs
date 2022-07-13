import { take, call, all, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
    emailExisteSuccess,
    newGetInfoUserSuccess,
    postRegisterModalSuccess,
    postUser,
    postUserFailure,
    postUserSuccess,
    profileSuccess,
    updateUserSuccess
} from '../actions/actionPost';
import { 
    POST_USER,
    URL_POST,
    PROFILE_ID,
    URL_PROFILE,
    POST_REGISTER_MODAL,
    URL_DEPLOY,
    UPDATE_USER,
    SET_PREMIUM,
    EMAIL_EXISTE,
    EDIT_PROFILE,
    PROFILE_EDIT_URL,
    GOOGLE_LOGIN,
    SEND_EMAIL_CONTACT,
    NEW_GET_INFO_USER,
    
} from '../../constants/constants';

function* asyncPostUser (user){
    console.log("llegue aca", user.payload)

    try{
        const response = yield call(() => (axios.post(URL_POST, user.payload)));
        yield put(postUserFailure(""));
        // const codedTK= response.data;
        // localStorage.setItem('codedTK',JSON.stringify(codedTK));
        yield put(postUserSuccess(response.data))
    }catch(error){
        yield put(postUserFailure(error.response.data));
    }finally{}

}

function* getProfileByID(id){
    try{
        const response= yield call(()=>axios.get(URL_PROFILE+`${id.payload}`))
        yield put(profileSuccess(response.data))

    }catch(error){
        console.log(error)
    }
}

function* asyncPostRegisterModal(RegisterUser){ // datos del registro modal
    console.log("llegue a lo asincrono", RegisterUser);
    try {
        const response = yield call(() => axios.post(URL_DEPLOY + "/user", RegisterUser.payload));
        yield put(postRegisterModalSuccess((response).data));
    } catch (error) {
        console.log(error);      
    }
};

function* asyncUpdateUser (objeto){
    try {
        const response = yield call(() => axios.put(URL_DEPLOY + `/user/${objeto.payload[1]}`, objeto.payload[0]))
        yield put(updateUserSuccess(response.data))
    } catch (error) {
        console.log(error);
    }
};

function* asyncLoginWithGoogle (payload){
    try {
        console.log("0. Estoy en sagas mi rey", payload.payload);

        const response = yield call(() => axios.post(URL_DEPLOY + "/user", payload.payload));
        console.log("soy la respuesta", response)
        
        // console.log("1. Soy el response antes del NEXT", response.data);
        if(response.data === "next"){
            const user = yield call(() => axios.get(URL_DEPLOY + `/mail?email=${payload.payload.email}`));
            console.log("2. Soy el user en NEXT", user.data);
            //setear user en el response del postReducer

            let obj = {
                email: user.data.email,
                password: "123456789"
            }

            yield put(postUser(obj));
            
        }
        else{
           //si no existe => response.data usuario completo
           console.log("3. soy el de google creado", response.data);
           // response.data => al response del postReducer
           let obj = {
            email: response.data.email,
            password: "123456789"
        }

           yield put(postUser(obj));
        }
    }
    catch(error){
        console.log(error);
    }
}

function* asyncSetPremium (payload){
    console.log(payload);
    try {
        const response = yield call(() => axios.put(URL_DEPLOY + `/user/${payload.payload}`, {premium: true}))
        console.log(response)
        yield put(updateUserSuccess(response.data))
    } catch (error) {
        console.log(error);
    }
};

function* asyncEmailExiste (payload) {
    try {
        console.log("antes de lo asinc", payload.payload)
        const response = yield call(() => axios.get(URL_DEPLOY + `/mail?email=${payload.payload}`));
        console.log("respuesta de email", response.data)
        yield put(emailExisteSuccess(response.data));
    } catch (error) {
        console.log(error);
    }
};

function* asyncEditProfile(payload){
    //AGREGAR OBJ DE PERFIL
    try{
        const response = yield call(() => axios.put(PROFILE_EDIT_URL+ `${payload.payload.id}`, payload.payload.objeto))
    } catch(error){
        console.log(error)
    }
};

function* asyncSendEmailContact (payload) {
    try {
        // MANDAR MAIL DICIENDO QUE LA EMPRESA SE QUIERE CONTACTAR api/contact/:id/:emailBusiness
        const id = payload.payload[0];
        const email = payload.payload[1]; 
        const response = yield call(()=> axios.get(URL_DEPLOY + `/contact/${id}/${email}` ));
        console.log(response.data)
    } catch (error) {
        console.log(error);
    }
};

function* asyncNewGetInfoUser(payload){
    try {
        const response = yield call(() => axios.get(PROFILE_EDIT_URL+ `${payload.payload}`));
        console.log(response.data);
        yield put(newGetInfoUserSuccess(response.data));
    } catch (error) {
        console.log(error);
    }

};



export function* watchFetchPostSaga(){
    yield takeEvery(POST_USER, asyncPostUser)
    yield takeEvery(PROFILE_ID, getProfileByID)
    yield takeEvery(POST_REGISTER_MODAL, asyncPostRegisterModal)
    yield takeEvery(UPDATE_USER, asyncUpdateUser)
    yield takeEvery(GOOGLE_LOGIN, asyncLoginWithGoogle)
    yield takeEvery(SET_PREMIUM, asyncSetPremium)
    yield takeEvery(EMAIL_EXISTE, asyncEmailExiste)
    yield takeEvery(EDIT_PROFILE, asyncEditProfile)
    yield takeEvery(SEND_EMAIL_CONTACT, asyncSendEmailContact)
    yield takeEvery(NEW_GET_INFO_USER, asyncNewGetInfoUser)
}