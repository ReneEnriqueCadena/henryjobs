import {
    SEND_REQUEST,
    REQUEST_SUCCESS,
    REQUEST_FAILURE,
    REQUEST_LOADING,
    GET_STUDENTS_SUCESS,
    GET_STUDENTS_FAILURE,
    GET_STUDENTS_AZ,
    GET_STUDENTS_ZA,
    GET_STUDENTS_HIGH_SCORE,
    GET_PUBLIC_FOLLOWS_SUCESS,
    GET_INFO_USER_SUCCES,
    SET_REGISTER_TRUE_SUCCES
} from "../../constants/constants";

const initialState = {
    user: 'Business', //seteado manualmente, tiene que traer que pido de usuario somos al momento de log
    userFollows: ['62bc9dff5c41483e313e899a','62bc9dff5c41483e313e899ab','62bc9dff5c41483e313e899ac','62bc9dff5c41483e313e899ad','62bc9dff5c41483e313e899ae'], // seteado manualmente,despues va a tener que traer el array de id de personas o empresas que seguimos
    pokemon: [],
    loading: false,
    error: {},
    allStudents: [],
    allPublicationsStudents: [],
    allPublicationsBusiness: [],
    allStudentsAz: [],
    allStudentsZa: [],
    allStudentsHighScore: [],
    userRegister: false,
    isPremium: false
};

const fetchDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INFO_USER_SUCCES:
            return { // aca hay que traer y setear todo lo que queramos del usuario
                ...state,
                userRegister: action.payload.register,
                /* isPremium: action.payload.premium */
            }
        case SET_REGISTER_TRUE_SUCCES:
            return {
                ...state,
                userRegister: true
            }
        case GET_PUBLIC_FOLLOWS_SUCESS:
            
            var fol1 = action.payload.filter(e => state.userFollows.includes(e.id))
            var response = fol1.reverse();
            return {
                ...state,
                allPublicationsStudents: response
            }
        case GET_STUDENTS_SUCESS:
            return{
                ...state,
                allStudents: action.payload
            }
        case GET_STUDENTS_FAILURE:
            return{
                ...state,
                allStudents: []
            }
        case GET_STUDENTS_AZ:
            function SortArray(x, y){
                if (x.name < y.name) {return -1;}
                if (x.name > y.name) {return 1;}
                return 0;
            }
            var response = action.payload.sort(SortArray);
            return {
                ...state,
                allStudentsAz: response
            }
        case GET_STUDENTS_ZA:
            function SortArray2(x, y){
                if (x.name < y.name) {return 1;}
                if (x.name > y.name) {return -1;}
                return 0;
            }
            var response = action.payload.sort(SortArray2);
            return {
                ...state,
                allStudentsZa: response
            }
        case REQUEST_SUCCESS:
            console.log(action.payload)
            return{
                ...state,
                loading:false,
                pokemon: action.payload,
                error:{}
            }
        case REQUEST_FAILURE:
        return{
            ...state,
            loading:false,
            pokemon:[],
            error: action.error
        }

        default:
        return {
                ...state
            }
    }
};

export default fetchDataReducer;