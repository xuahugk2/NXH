import axios from 'axios';
import {
    enqueueSuccessSnackbar,
    enqueueErrorSnackbar,
    enqueueWarningSnackbar,
    enqueueDefaultSnackbar,
} from '../components/snackbars/enqueueSnackbar';

const handleEnqueueSnackbar = (status, message) => {
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

export const httpPOST = async (url, body, successCallback, errorCallback) => {
    await axios
        .post(url, body)
        .then(response => {
            handleEnqueueSnackbar(response.status, response.data.message);
            if (successCallback) successCallback(response.data);
        })
        .catch(error => {
            handleEnqueueSnackbar(error.status, error.data.message);
            if (errorCallback) errorCallback(error.response.data);
        });
};
