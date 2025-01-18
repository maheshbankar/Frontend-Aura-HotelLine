import {
    
    LOGIN_PROGRESS, LOGOUT_PROGRESS,

} from '../types/actionTypes';

export const login = (record) => ({
    type: LOGIN_PROGRESS,
    payload: record,
});

export const logout = (record) => ({
    type: LOGOUT_PROGRESS,
    payload: record,
});