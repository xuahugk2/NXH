/* eslint-disable react-refresh/only-export-components */
const BASE_URL = 'http://localhost:5000/api';

export const MAPPING = {
    LOGIN: `${BASE_URL}/auth/login`,
    REGISTER: `${BASE_URL}/auth/register`,
    FORGOT_PASSWORD: `${BASE_URL}/auth/forgot-password`,
    GET_LIST_USER: `${BASE_URL}/users/list`,
    USER_ACTION: `${BASE_URL}/users/`,
    CREATE_USER: `${BASE_URL}/users/create`,
};
