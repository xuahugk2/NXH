/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-undef */
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_URL = `${API_BASE_URL}/api`;

export const MAPPING = {
    // Authenticate
    LOGIN: `${API_URL}/auth/login`,
    REGISTER: `${API_URL}/auth/register`,
    FORGOT_PASSWORD: `${API_URL}/auth/forgot-password`,
    // User
    GET_LIST_USER: `${API_URL}/users/list`,
    USER_ACTION: `${API_URL}/users/`,
    CREATE_USER: `${API_URL}/users/create`,
    // Code
    GET_LIST_CODE: `${API_URL}/code/list`,
};
