import {
    BUGG_NAV,ACTUALIZAR_HOME_BUSINESS, POST_USER, POST_USER_SUCCESS,SET_LOGOUT,PROFILE_SUCCESS,ACTUALIZAR_ESTADO, SET_GOOGLE_USER, POST_REGISTER_MODAL_SUCCESS,SET_USERTYPE,SET_DEV_TYPE_AND_TECH, SET_LOCATION_ENG_STUDY, SET_RECRUITER_INFO,SET_BUSINESS_INFO,UPDATE_USER_SUCCESS, EMAIL_EXISTE_SUCCESS
    , NEW_GET_INFO_USER_SUCCESS, POST_USER_FAILURE,VACIAR_ESTADO,REINICIAR_PERFIL,REINICIAR_HOME_PRINCIPE


} from "../../constants/constants";

const initialState = {
    GOOGLEUSER: false, // ESTO ES DE GOOGLE
    Change: false,
    actualHome: false,
    errores: "",
    principe: false,
    reiniciarP: false,
    userResponse:[],
    response:[],
    newInfo:{},
    existenciaMail:"",
    responseProfile:[],
    log: false,
    buggati: false,
    upDateProfile: {
        userTypes:'',
        country:'',
        city:'',
        languages:'',
        premium: false,
        banner: {secure_url: 'https://res.cloudinary.com/noisybrain-cloud/image/upload/v1657222059/HenryJobs/banner_pogdok.jpg'},
        profileImage: {secure_url:'https://res.cloudinary.com/noisybrain-cloud/image/upload/v1657222048/HenryJobs/profileImage_iptpub.jpg'},
        otherStudies:[],
        currentJob:{name:'',date:'',job:''},
        backFront:'',
        technologies:[],
        cuit:''
    }
};

// AGREGAR FUNCION EN LOS ULTIMOS BOTONES DEL FORMULARIO QUE HAGA EL PUT EN EL BACK.

const fetchPostReducer = (state = initialState, action) => {
    switch (action.type) {
            case ACTUALIZAR_HOME_BUSINESS:
                return{
                    ...state,
                    actualHome: !state.actualHome
                }
            case REINICIAR_HOME_PRINCIPE:
                return{
                    ...state,
                    principe: !state.principe
                }
            case REINICIAR_PERFIL:
                return{
                    ...state,
                    reiniciarP: !state.reiniciarP
                }
            case EMAIL_EXISTE_SUCCESS:
                return {
                    ...state,
                    existenciaMail: action.payload
                };

            case BUGG_NAV:
                return{
                    ...state,
                    buggati: !state.buggati
                }
            case UPDATE_USER_SUCCESS: 
                return{
                    ...state,
                     // ojo
                }
            case PROFILE_SUCCESS:
                
                return{
                    ...state,
                    responseProfile: action.payload
                }

            case POST_USER:
                return{
                    ...state,
                    userResponse: action.payload

                }
            case POST_USER_SUCCESS:
               
                return{
                    ...state,
                    
                    response: action.payload
                }
            case SET_LOGOUT:
                return{
                    ...state,
                    response: undefined

                }

            case VACIAR_ESTADO:
                return {
                    ...state,
                    response: ""
                }

            case POST_USER_FAILURE:
                return {
                    ...state,
                    errores: action.payload
                };
            
            case POST_REGISTER_MODAL_SUCCESS:
                return {
                    ...state,
                    response: action.payload,
                    consola: console.log("action payload del reducer fetchPostReducer, registerModalSuccess", action.payload)
                }
            
            case SET_USERTYPE:
                return {
                    ...state,
                    upDateProfile: {...state.upDateProfile, userTypes: action.payload}
                }

            case SET_DEV_TYPE_AND_TECH:
                return {
                    ...state,
                    upDateProfile: {...state.upDateProfile, 
                        backFront: action.payload.backfront,
                        technologies: action.payload.technologies
                    }
                };
            
            case SET_LOCATION_ENG_STUDY:
                return {
                    ...state,
                    upDateProfile: {...state.upDateProfile, 
                        country: action.payload.location.country,
                        city: action.payload.location.city,
                        languages: action.payload.languages,
                        otherStudies: action.payload.otherStudies
                    }
                };

            case SET_RECRUITER_INFO:
                return {
                    ...state,
                    upDateProfile: {...state.upDateProfile,
                        currentJob:{
                            name:action.payload.enterprise, 
                            date:action.payload.antiguedad, 
                            job: action.payload.puesto
                        },
                        country: action.payload.location.country,
                        city: action.payload.location.city,
                        languages: action.payload.languages,
                        otherStudies: action.payload.study
                    }
                };

            case SET_BUSINESS_INFO:
                return {
                    ...state,
                    upDateProfile: {...state.upDateProfile,
                        country: action.payload.location.country,
                        city: action.payload.location.city,
                        cuit: action.payload.cuit,
                        currentJob:{
                            date: action.payload.age
                        }
                }
            };

            case SET_GOOGLE_USER:
                return {
                    ...state,
                    GOOGLEUSER: action.payload
                }
            case ACTUALIZAR_ESTADO: 
            return {
                ...state,
                Change: !state.Change
            };
            case NEW_GET_INFO_USER_SUCCESS:
                console.log("reducer", action.payload)
                return {
                    ...state,
                    newInfo: action.payload
                };
            
        default: 
        return {
                ...state
            };
    }
};

export default fetchPostReducer;