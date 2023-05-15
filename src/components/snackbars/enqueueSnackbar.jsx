import { enqueueSnackbar } from 'notistack';

export const enqueueSuccessSnackbar = (message) => {
    enqueueSnackbar(message, {
        variant: 'success',
    });
};

export const enqueueErrorSnackbar = (message) => {
    enqueueSnackbar(message, {
        variant: 'error',
    });
};

export const enqueueWarningSnackbar = (message) => {
    enqueueSnackbar(message, {
        variant: 'warning',
    });
};

export const enqueueInfoSnackbar = (message) => {
    enqueueSnackbar(message, {
        variant: 'info',
    });
};

export const enqueueDefaultSnackbar = (message) => {
    enqueueSnackbar(message, {
        variant: 'default',
    });
};
