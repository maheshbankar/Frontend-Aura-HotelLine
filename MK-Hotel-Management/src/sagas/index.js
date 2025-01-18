import { put, takeLatest, all, call } from 'redux-saga/effects';

// import axiosClient from '../config/axios';
import {
    LOGIN_PROGRESS, LOGIN_SUCCESS, LOGIN_FAILURE,
    LOGOUT_PROGRESS, LOGOUT_SUCCESS, LOGOUT_FAILURE,

    
} from '../types/actionTypes';
import axiosClient from '../configs/axios';

// ============================= BIN ==============================
function* loginSaga(action) {
    try {
        const response = yield axiosClient.post('/api/User/signin', action.payload);
        sessionStorage.setItem('loginUser', JSON.stringify(response.data));
        yield put({ type: LOGIN_SUCCESS, loginUser: response.data });
    } catch (error) {
        yield put({ type: LOGIN_FAILURE, payload: error.message });
    }
}

function* watchLogin() {
    yield takeLatest(LOGIN_PROGRESS, loginSaga);
}

function* logoutSaga(action) {
    try {
        const logoutSession = sessionStorage.removeItem('loginUser');
        yield put({ type: LOGOUT_SUCCESS, loginUser: logoutSession });
    } catch (error) {
        yield put({ type: LOGOUT_FAILURE, payload: error.message });
    }
}

function* watchLogout() {
    yield takeLatest(LOGOUT_PROGRESS, logoutSaga);
}

// Export all sagas
export default function* rootSaga() {
    yield all([
        watchLogin(), watchLogout(),

    
    ])
}