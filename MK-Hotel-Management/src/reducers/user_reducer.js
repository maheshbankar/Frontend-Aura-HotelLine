import {
    // GET_USER_MANAGEMENT_LIST_PROGRESS, GET_USER_MANAGEMENT_LIST_SUCCESS, GET_USER_MANAGEMENT_LIST_FAILURE,
    // ADD_USER_MANAGEMENT_PROGRESS, ADD_USER_MANAGEMENT_SUCCESS, ADD_USER_MANAGEMENT_FAILURE,
    // EDIT_DELETE_USER_MANAGEMENT_PROGRESS, EDIT_DELETE_USER_MANAGEMENT_SUCCESS, EDIT_DELETE_USER_MANAGEMENT_FAILURE,

    RESET_MESSAGE,
    // GET_ALL_USER_MANAGEMENT_LIST_SUCCESS,
    // GET_ALL_USER_MANAGEMENT_LIST_FAILURE,
    // GET_ALL_USER_MANAGEMENT_LIST_PROGRESS,
    LOGIN_PROGRESS,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_PROGRESS,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,

} from '../types/actionTypes';

const initialState = {
    userManagement: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null
}

const user_reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_PROGRESS:
            return { ...state, loading: true };
        case LOGIN_SUCCESS:
            return { ...state, loginUser: action.loginUser, loading: false, error: false, message: action.loginUser.message };
        case LOGIN_FAILURE:
            return { ...state, loading: false, error: action.payload, message: 'Invalid Login!' };
        case LOGOUT_PROGRESS:
            return { ...state, loading: true };
        case LOGOUT_SUCCESS:
            return { ...state, loginUser: null, loading: false, error: false };
        case LOGOUT_FAILURE:
            return { ...state, loading: false, error: action.payload };

        // case GET_ALL_USER_MANAGEMENT_LIST_SUCCESS:
        //     return { ...state, userManagement: action.userManagement, loading: false };
        // case GET_ALL_USER_MANAGEMENT_LIST_FAILURE:
        //     return { ...state, loading: false, error: true };
        // case GET_ALL_USER_MANAGEMENT_LIST_PROGRESS:
        //     return { ...state, loading: true, error: false };
        // case GET_USER_MANAGEMENT_LIST_SUCCESS:
        //     return { ...state, userManagement: action.userManagement, loading: false };
        // case GET_USER_MANAGEMENT_LIST_FAILURE:
        //     return { ...state, loading: false, error: true };
        // case GET_USER_MANAGEMENT_LIST_PROGRESS:
        //     return { ...state, loading: true, error: false };
        // case ADD_USER_MANAGEMENT_PROGRESS:
        //     return { ...state, loading: true };
        // case ADD_USER_MANAGEMENT_SUCCESS:
        //     return { ...state, userManagement: [...state.userManagement, action.payload], loading: false, error: false, message: action.payload.message };
        // case ADD_USER_MANAGEMENT_FAILURE:
        //     return { ...state, loading: false, error: action.payload, message: action.payload.message };
        // case EDIT_DELETE_USER_MANAGEMENT_PROGRESS:
        //     return { ...state, loading: true };
        // case EDIT_DELETE_USER_MANAGEMENT_SUCCESS:
        //     return {
        //         ...state,
        //         userManagement: state.userManagement.map((userManagement) =>
        //             userManagement.id === action.payload.id ? action.payload : userManagement
        //         ),
        //         message: action.payload.message
        //     };
        // case EDIT_DELETE_USER_MANAGEMENT_FAILURE:
        //     return { ...state, loading: false, error: action.payload, message: action.payload.message };

        // case UPLOAD_USER_EXCEL_PROGRESS:
        //     return { ...state, loading: true };
        // case UPLOAD_USER_EXCEL_SUCCESS:
        //     return { ...state, userManagement: [...state.userManagement, action.payload], loading: false, error: false, message: 'Record uploaded successfully!' };
        // case UPLOAD_USER_EXCEL_FAILURE:
        //     return { ...state, loading: false, error: action.payload, message: 'Failed to upload excel file, try again!' };


        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default user_reducer;