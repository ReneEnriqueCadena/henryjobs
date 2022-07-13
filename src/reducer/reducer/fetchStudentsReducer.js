import {
    GET_PUBLICATIONS_BUSINESS,
    GET_PUBLICATIONS_BUSINESS_SUCCESS,
    GET_PUBLICATIONS_TECHNOLOGIES,
    GET_PUBLICATIONS_DEVTYPE,
    GET_PUBLICATIONS_WORK_MODALITY,
    GET_PUBLICATIONS_ENGLISH,
    GET_PUBLICATIONS_UBICATION,
    SHOW_FILTER,
    POST_ID_FOLLOW_SUCCESS,
    GET_STUDENTS_BY_EMAIL_SUCCESS,
    GET_MY_APPLICAT_SUCCESS,
    GET_PREMIUM_BUSINESS_SUCCESS,
    TRAER_FOLLOWING_STUD
} from "../../constants/constants";

const initialState = {
    infoUserStudent: [],
    AllPublications:[],
    AllPublicationsFollows:[],
    myApp: [],
    usersPremium: [],
    userFollows: [],
    busPublication:[],
    publicationsFiltered:[],
    filtrosos: {
        technologies:"",
        english:"",
        ubication:"",
        devType:"",
        workModality:"",
    }
};



const fetchStudentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TRAER_FOLLOWING_STUD:
            return{
                ...state,
                userFollows: action.payload.following
            }
        case GET_PREMIUM_BUSINESS_SUCCESS:
            let userp = action.payload.filter(e => e.premium === true)
            let bussprem = userp.filter(e => e.userTypes === 4 || e.userTypes === 5 )
            return {
                ...state,
                usersPremium: bussprem
            }

        case GET_MY_APPLICAT_SUCCESS:
            let id = action.id;
            let respondido = [];
            console.log(action.payload)
            for (let i = 0; i < action.payload.length; i++) {
                for(let j = 0; j < action.payload[i].applicants.length; j++){
                    if(action.payload[i].applicants[j].userId === id){
                        if(!respondido.includes(action.payload[i])){
                            respondido.push(action.payload[i]);
                        }
                    }
                }
            } 
            console.log("soy respondido", respondido)
            return {
                ...state,
                myApp: respondido
            };

        case GET_STUDENTS_BY_EMAIL_SUCCESS:
            return {
                ...state,
                infoUserStudent: action.payload,
                userFollows: action.payload.following
            };
        
        case GET_PUBLICATIONS_BUSINESS_SUCCESS:
            let all = action.payload.reverse();
            let fol1 = action.payload.filter(e => state.userFollows.includes(e.posterUser._id) || action.id.includes(e.posterUser._id))
            let response = fol1;// usuarios que sigo incluido yo
            let responseBusiness = all.filter(e => e.posterUser.userTypes === 4 || e.posterUser.userTypes === 5);

            return {
                ...state,
                AllPublications: all,
                busPublication: responseBusiness,
                publicationsFiltered: responseBusiness,
                AllPublicationsFollows: response,
            }
        case POST_ID_FOLLOW_SUCCESS:
            return {
                ...state,
                userFollows: action.payload
            }
        
        case GET_PUBLICATIONS_TECHNOLOGIES:
            return {
                ...state,
                filtrosos:{...state.filtrosos, technologies: action.payload}
            }

        case GET_PUBLICATIONS_DEVTYPE:
            return{
                ...state,
                filtrosos:{...state.filtrosos, devType: action.payload}
        }

        case GET_PUBLICATIONS_ENGLISH:
            return{
                ...state,
                filtrosos:{...state.filtrosos, english: action.payload}
        }

        case GET_PUBLICATIONS_WORK_MODALITY:
            return{
                ...state,
                filtrosos:{...state.filtrosos, workModality: action.payload}
        }

        case GET_PUBLICATIONS_UBICATION:
            return{
                ...state,
                filtrosos:{...state.filtrosos, ubication: action.payload}
        }
        
        case SHOW_FILTER:
            let publicacionesFiltradas = state.busPublication

            if(state.filtrosos.technologies !== ""){
                publicacionesFiltradas = publicacionesFiltradas.filter(e => e.technologies.includes(state.filtrosos.technologies))
            }
            if(state.filtrosos.devType !== ""){
                publicacionesFiltradas = publicacionesFiltradas.filter(e => e.backFront === state.filtrosos.devType)
            }
            if(state.filtrosos.english !== ""){
                publicacionesFiltradas = publicacionesFiltradas.filter(e => e.languages === state.filtrosos.english)
            }
            if(state.filtrosos.workModality !== ""){
                publicacionesFiltradas = publicacionesFiltradas.filter(e => e.workModality === state.filtrosos.workModality)
            }
            if(state.filtrosos.ubication !== ""){
                publicacionesFiltradas = publicacionesFiltradas.filter(e => e.country === state.filtrosos.ubication)
            }
            return{
            ...state,
            publicationsFiltered: publicacionesFiltradas
        }
        
        default:
            return {
                ...state
            }
    }
};

export default fetchStudentsReducer;