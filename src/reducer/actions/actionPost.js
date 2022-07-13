import {

    POST_USER,
    POST_USER_SUCCESS,
    SET_LOGOUT,
    PROFILE_ID,
    PROFILE_SUCCESS,
    POST_REGISTER_MODAL,
    POST_REGISTER_MODAL_SUCCESS,
    SET_USERTYPE,
    SET_DEV_TYPE_AND_TECH,
    SET_LOCATION_ENG_STUDY,
    SET_RECRUITER_INFO,
    SET_BUSINESS_INFO,
    UPDATE_USER,
    UPDATE_USER_SUCCESS,
    BUGG_NAV,
    SET_PREMIUM,
    SET_GOOGLE_USER,
    EMAIL_EXISTE,
    EMAIL_EXISTE_SUCCESS,
    EDIT_PROFILE,
    ACTUALIZAR_ESTADO,
    GOOGLE_LOGIN,
    SEND_EMAIL_CONTACT,
    ACTUALIZAR_HOME_BUSINESS,
    NEW_GET_INFO_USER,
    NEW_GET_INFO_USER_SUCCESS,
    POST_USER_FAILURE,
    VACIAR_ESTADO,
    REINICIAR_PERFIL,
    REINICIAR_HOME_PRINCIPE

} from "../../constants/constants";


export function profileSuccess(response){
    return{
        type: PROFILE_SUCCESS,
        payload: response
    }
}

export function profileID(id){
    
    return{
        type:PROFILE_ID,
        payload: id

    }
}

export function setLogout(){
    return{
        type: SET_LOGOUT,
        
    }
}

export function postUser(user){
    
    return{
        type: POST_USER,
        payload: user
    }
}

export function postUserSuccess(payload){
    return{
        type: POST_USER_SUCCESS,
        payload
    }
}

export function postRegisterModal(payload){
    return{
        type: POST_REGISTER_MODAL,
        payload
    };
};

export function postRegisterModalSuccess(payload){
    return{
        type: POST_REGISTER_MODAL_SUCCESS,
        payload
    };
};

export function setUserType(payload){
    return {
        type: SET_USERTYPE,
        payload
    };
};

export function setDevTypeAndTech(payload){
    return {
        type: SET_DEV_TYPE_AND_TECH,
        payload
    };
};

export function setLocationEnglishStudy(payload){
    return {
        type: SET_LOCATION_ENG_STUDY,
        payload
    };
};

export function setRecruiterInfo(payload){
    return {
        type: SET_RECRUITER_INFO,
        payload
    };
};

export function setBusinessInfo(payload){
    return {
        type: SET_BUSINESS_INFO,
        payload
    };
};


export function updateUser(objeto){
    return{
        type: UPDATE_USER,
        payload: objeto
    }
}

export function updateUserSuccess(payload) {
    return{
        type: UPDATE_USER_SUCCESS,
        payload: payload
    }
}

export function buggNav(){
    return {
        type: BUGG_NAV
    };
};

export function loginWithGoogle(obj) {
    return {
        type: GOOGLE_LOGIN,
        payload: obj
    };
};


export function setPremium(payload){
    console.log("action Post", payload);
    
    return {
        type: SET_PREMIUM,
        payload : payload
    }
}


export function EditProfile(payload){ // esto tenía {id, editUser} como parametros

    return{
        type: EDIT_PROFILE,
       payload //acá tenía {id, editUser} tal cual

    }
}

export function setGoogleUser(payload){
    return {
        type: SET_GOOGLE_USER,
        payload
    }
}

export function emailExiste (email){
    return {
        type: EMAIL_EXISTE,
        payload: email
    };
};

export function emailExisteSuccess (payload){
    return {
        type: EMAIL_EXISTE_SUCCESS,
        payload
    };
};

export function actualizarEstado () {
    return {
        type: ACTUALIZAR_ESTADO
    }
};

export function enviarMailContactar (payload) {
    return {
        type: SEND_EMAIL_CONTACT,
        payload
    };
};

export function actualizarHomeBusiness () {
    return{
        type: ACTUALIZAR_HOME_BUSINESS
    }
}
export function newGetInfoUser (id){
    return {
        type: NEW_GET_INFO_USER,
        payload: id
    };
};

export function newGetInfoUserSuccess (payload){
    return {
        type: NEW_GET_INFO_USER_SUCCESS,
        payload
    };
};

export function postUserFailure (payload){
    return {
        type: POST_USER_FAILURE,
        payload
    };
};

export function vaciarEstado (){
    return {
        type: VACIAR_ESTADO,
    };
};

export function reiniciarPerfil (){
    return {
        type: REINICIAR_PERFIL
    };
};

export function reinciarHomePrincipe (){
    return {
        type: REINICIAR_HOME_PRINCIPE
    };
};
