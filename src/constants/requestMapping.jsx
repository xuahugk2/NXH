/* eslint-disable react-refresh/only-export-components */
const BASE_URL = 'http://localhost:5000/api';

export const MAPPING = {
    LOGIN: `${BASE_URL}/login`,
    REGISTER: `${BASE_URL}/register`,
    FORGOT_PASSWORD: `${BASE_URL}/forgot-password`,
    GET_LIST_USER: `${BASE_URL}/users/list`,
    DELETE_USER: `${BASE_URL}/users/`,
};
