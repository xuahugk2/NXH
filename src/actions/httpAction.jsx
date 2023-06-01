import axios from 'axios';
import {
    enqueueSuccessSnackbar,
    enqueueErrorSnackbar,
    enqueueWarningSnackbar,
    enqueueDefaultSnackbar,
} from '../components/snackbars/enqueueSnackbar';

const handleEnqueueSnackbar = (status, message) => {
    if (!(status && message)) {
        return;
    }

    switch (status) {
        case 200:
            enqueueSuccessSnackbar(message);
            break;
        case 500:
            enqueueErrorSnackbar(message);
            break;
        case 503:
            enqueueWarningSnackbar(message);
            break;
        default:
            enqueueDefaultSnackbar(message);
    }
};

export const httpGET = async (url, authorization, successCallback, errorCallback) => {
    await axios
        .get(url, {
            headers: {
                Authorization: authorization,
            },
        })
        .then(response => {
            console.log(response);
            handleEnqueueSnackbar(response.status, response.data.message);
            if (successCallback) successCallback(response.data.data);
        })
        .catch(error => {
            console.log(error);
            handleEnqueueSnackbar(error.response.status, error.response.data.message);
            if (errorCallback) errorCallback(error.response.data);
        });
};

export const httpPOST = async (url, body, authorization, successCallback, errorCallback) => {
    await axios
        .post(url, body, {
            headers: {
                Authorization: authorization,
            },
        })
        .then(response => {
            console.log(response);
            handleEnqueueSnackbar(response.status, response.data.message);
            if (successCallback) successCallback(response.data.data);
        })
        .catch(error => {
            console.log(error);
            handleEnqueueSnackbar(error.response.status, error.response.data.message);
            if (errorCallback) errorCallback(error.response.data);
        });
};

export const httpPUT = async (url, body, authorization, successCallback, errorCallback) => {
    await axios
        .put(url, body, {
            headers: {
                Authorization: authorization,
            },
        })
        .then(response => {
            console.log(response);
            handleEnqueueSnackbar(response.status, response.data.message);
            if (successCallback) successCallback(response.data.data);
        })
        .catch(error => {
            console.log(error);
            handleEnqueueSnackbar(error.response.status, error.response.data.message);
            if (errorCallback) errorCallback(error.response.data);
        });
};

export const httpDELETE = async (url, authorization, successCallback, errorCallback) => {
    await axios
        .delete(url, {
            headers: {
                Authorization: authorization,
            },
        })
        .then(response => {
            console.log(response);
            handleEnqueueSnackbar(response.status, response.data.message);
            if (successCallback) successCallback(response.data.data);
        })
        .catch(error => {
            console.log(error);
            handleEnqueueSnackbar(error.response.status, error.response.data.message);
            if (errorCallback) errorCallback(error.response.data);
        });
};
