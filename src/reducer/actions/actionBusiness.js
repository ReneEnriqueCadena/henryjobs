import {
    GET_PUBLICATION_STUDENTS,
    GET_PUBLICATION_STUDENTS_SUCCESS,
    GET_PUBLICAT_TECHNOLOGIES,
    GET_PUBLICAT_ENGLISH,
    GET_PUBLICAT_UBICATION,
    GET_PUBLICAT_DEVTYPE,
    GET_ALL_STUDENTS,
    GET_ALL_STUDENTS_SUCCESS,
    SHOW_FILTER,
    GET_PUBLICAT_WORKMODALITY,
    SET_STARS_ORDER,
    POST_ID_FOLLOW_BUSS,
    POST_ID_FOLLOW_BUSS_SUCCESS,
    GET_MY_PUBLICATIONS,
    GET_MY_PUBLICATIONS_SUCCESS,
    SET_APPLICANT,
    GET_BUSINESS_BY_EMAIL,
    GET_BUSINESS_BY_EMAIL_SUCCESS,
    SEND_NUDES,
    SEND_NUDE_SUCCESS,
    TRAER_FOLLOWING,
    TRAER_FOLLOWING_SUCCESS,
    BORRAR_PUBLICACIONES,
    SET_BUSBUSQUEDA,
    PUNTUAR
} from "../../constants/constants";

export function getPublicationStudents (payload) {
    return {
        type: GET_PUBLICATION_STUDENTS,
        payload
    }
};

export function postIdFollowBuss(payload, obj){
    return {
        type: POST_ID_FOLLOW_BUSS,
        payload,
        obj
    }
}

export function postIdFollowBusssSuccess(payload){
    return {
        type: POST_ID_FOLLOW_BUSS_SUCCESS,
        payload,
    }
}

export function getPublicationStudentsSuccess (payload, id) {

    return {
        type: GET_PUBLICATION_STUDENTS_SUCCESS,
        payload,
        id: id.payload
    }
};

export function getPublicatTechnologies (value){
    return {
        type: GET_PUBLICAT_TECHNOLOGIES,
        payload: value
    }
};

export function getPublicatEnglish (value){
    return {
        type: GET_PUBLICAT_ENGLISH,
        payload: value
    }
};

export function getPublicatUbication (value) {
    return {
        type: GET_PUBLICAT_UBICATION,
        payload: value
    }
};

export function getPublicatDevType (value) {
    return {
        type: GET_PUBLICAT_DEVTYPE,
        payload: value
    }
};

export function getPublicatWorkModal (value) {
    return {
        type: GET_PUBLICAT_WORKMODALITY,
        payload: value
    }
};

export function getAllStudents () {
    return {
        type: GET_ALL_STUDENTS,
    }
};

export function getAllStudentsSuccess (payload) {
    return {
        type: GET_ALL_STUDENTS_SUCCESS,
        payload
    }
}

export function setOrderStars(payload){
    return {
        type: SET_STARS_ORDER,
        payload: payload
    }
}

export function showFilter (){
    return{
        type: SHOW_FILTER
    }
}

/////////////////// CONTACT WALL //////////////////////
export function getMyPublications(id){
    return {
        type: GET_MY_PUBLICATIONS,
        payload: id
    };
};

export function getMyPublicationsSuccess(payload, id){
    return {
        type: GET_MY_PUBLICATIONS_SUCCESS,
        payload,
        id: id
    };
};

export function setApplicant(value){
    return {
        type: SET_APPLICANT,
        value
    };
};

export function getBusinessByEmail (email) {
    return {
        type: GET_BUSINESS_BY_EMAIL,
        email
    };
};

export function getBusinessByEmailSuccess (payload) {
    return {
        type: GET_BUSINESS_BY_EMAIL_SUCCESS,
        payload
    };
};

export function sendNudes (obj, idp) {
    return {
        type: SEND_NUDES,
        payload: obj,
        idp
    };
};

export function sendNudesSuccess (payload) {
    return{
        type: SEND_NUDE_SUCCESS,
        payload
    }
}

export function traerFollowing (payload) {
    return{
        type: TRAER_FOLLOWING,
        payload
    }
}

export function traerFollowingSuccess (payload) {
    return{
        type: TRAER_FOLLOWING_SUCCESS,
        payload
    }
}

export function borrarBusinessPub (payload) {
    return {
        type: BORRAR_PUBLICACIONES,
        payload
    };
};

export function setBusBusqueda (payload) {
    return {
        type: SET_BUSBUSQUEDA,
        payload
    };
};

export function puntuar (payload) {
    return {
        type: PUNTUAR,
        payload
    };
};

