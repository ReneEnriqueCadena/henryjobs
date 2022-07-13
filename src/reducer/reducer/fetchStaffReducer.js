import { GET_INFO_FOR_STAFF_SUCCESS, GET_STUDENT_DETAIL, STAFF_ORDER_STUDENTS, STAFF_SHOW_ORDER } from "../../constants/constants";


const initialState = {
    staffAllStudents: [],
    staffAllBusiness: [],
    staffAllStudentsPublications: [],
    staffAllBusinessPublications: [],
    staffStudentDetail: { renderizar: [], filtro: '' },
    staffStudentBusinessProfile: {},
    staffStudentOrder: {
        busqueda: "",
        orden: ""
    }
};

// si no cumple con la cantidad de envios de CV que se le notifique automaticamente al alumno
// como desactivar esta funcionalidad? => ejemplo: el alumno consigue trabajo

const fetchStaffReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_INFO_FOR_STAFF_SUCCESS:

            let StudentUser = action.payload.users.filter(e => e.userTypes === 1 || e.userTypes === 2);
            let BusinessUser = action.payload.users.filter(e => e.userTypes === 4 || e.userTypes === 5);
            let StudentPub = action.payload.publications.filter(e => e.posterUser.userTypes === 1 || e.posterUser.userTypes === 2);
            let BusinessPub = action.payload.publications.filter(e => e.posterUser.userTypes === 4 || e.posterUser.userTypes === 5);

            return {
                ...state,
                staffAllStudents: StudentUser,
                staffAllBusiness: BusinessUser,
                staffAllStudentsPublications: StudentPub,
                staffAllBusinessPublications: BusinessPub,
                staffStudentDetail: { ...state, renderizar: StudentUser }
            };

        case STAFF_ORDER_STUDENTS:

            return {
                ...state,
                staffStudentOrder: { ...state.staffStudentOrder, orden: action.payload }
            };

        case GET_STUDENT_DETAIL:
            return {
                ...state,
                staffStudentOrder: { ...state.staffStudentOrder, busqueda: action.payload.toLowerCase() }
            }

        case STAFF_SHOW_ORDER:
            let Todos = state.staffAllStudents;
            let e = '';
            if (state.staffStudentOrder.orden !== "") {
                if (state.staffStudentOrder.orden === "CV enviado ascendente") {
                    Todos = Todos.sort((a, b) => {
                        if (a.curriculumCounter < b.curriculumCounter) return -1;
                        if (b.curriculumCounter < a.curriculumCounter) return 1;
                        return 0;
                    })
                    e = 'as'
                }
                else if (state.staffStudentOrder.orden === "CV enviado descendente") {
                    Todos = Todos.sort((a, b) => {
                        if (a.curriculumCounter < b.curriculumCounter) return -1;
                        if (b.curriculumCounter < a.curriculumCounter) return 1;
                        return 0;
                    })
                    e = 'des'
                    Todos = Todos.reverse();

                }
                else if (state.staffStudentOrder.orden === "Stars ascendente") {
                    Todos = Todos.sort((a, b) => {
                        if (a.allStars < b.allStars) return -1;
                        if (b.allStars < a.allStars) return 1;
                        return 0;
                    })
                    e = 'stas'
                }
                else if (state.staffStudentOrder.orden === "Stars descendente") {
                    Todos = Todos.sort((a, b) => {
                        if (a.allStars < b.allStars) return -1;
                        if (b.allStars < a.allStars) return 1;
                        return 0;
                    })
                    e = 'destas'
                    Todos = Todos.reverse();
                }
            }
            if (state.staffStudentOrder.busqueda !== "") {
                Todos = Todos.filter(e => {
                    let nombre = (e.name + " " + e.lastName).toLocaleLowerCase();
                    let busqueda = state.staffStudentOrder.busqueda.split('')
                    let nombreBuscado = state.staffStudentOrder.busqueda;
                    if(nombre.slice(0,busqueda.length) === nombreBuscado){
                        return e;
                    } else {
                        return;
                    }
                });
            }
            return {
                ...state,
                staffStudentDetail: { ...state, filtro: e, renderizar: Todos }
            };

        default:
            return {
                ...state
            };
    };
};

export default fetchStaffReducer;
