import {
    GET_INFO_FOR_STAFF,
    GET_INFO_FOR_STAFF_SUCCESS,
    GET_STUDENT_DETAIL,
    STAFF_ORDER_STUDENTS,
    STAFF_SHOW_ORDER,
    USER_DELETE,
    SEND_EMAIL
} from "../../constants/constants";

export function getInfoForStaff () {
    return {
        type: GET_INFO_FOR_STAFF
    };
};

export function getInfoForStaffSuccess (payload) {
    return {
        type: GET_INFO_FOR_STAFF_SUCCESS,
        payload
    };
};

export function getStudentDetail (payload) { 
    return {
        type: GET_STUDENT_DETAIL,
        payload
    };
};

export function ordenarAlumnos (payload) {
    return {
        type: STAFF_ORDER_STUDENTS,
        payload
    };
};

export function staffShowOrder () {
    return {
        type: STAFF_SHOW_ORDER
    };
};

export function userDelete (payload) {
    return {
        type: USER_DELETE,
        payload
    };
};

export function sendEmail(email){
    return {
        type: SEND_EMAIL,
        payload: email
    };
};