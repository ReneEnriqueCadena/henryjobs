import { GET_INFO_USER_SUCCESS } from "../../constants/constants";

const initialState = {
    userType: 1,
    premium: false,
    isRegistered: true,
    email:""
};

const fetchInfoUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INFO_USER_SUCCESS:
            return {
                ...state,
                userType: action.payload[0].userType,
                premium: action.payload[0].premium,
                isRegistered: action.payload[0].isRegistered,
                email: action.payload[1]
            };

        default:
        return {
                ...state
            };
    }
};

export default fetchInfoUserReducer;