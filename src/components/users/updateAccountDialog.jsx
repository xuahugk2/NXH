import * as React from 'react';
import {
    Grid,
    Button,
    TextField,
    Typography,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Autocomplete,
} from '@mui/material';
import PropTypes from 'prop-types';
import useUsersAction from '../../actions/hooks/usersHook';
import useAuthState from '../../reducers/hook/authHook';
import useCodesState from '../../reducers/hook/codesHook';

UpdateAccountDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    accountData: PropTypes.string.isRequired,
    handleSuccess: PropTypes.string.isRequired,
};

const initialState = {
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    role: -1,
};

export default function UpdateAccountDialog({ open, setOpen, accountData, handleSuccess }) {
    const [info, setInfo] = React.useState(initialState);

    const { authInfo } = useAuthState();
    const { updateUser } = useUsersAction();

    const { codes } = useCodesState();

    React.useEffect(() => {
        setInfo({ ...accountData });
    }, [accountData]);

    const codesAutocompleteData = React.useMemo(() => {
        return codes.map((authority) => {
            return {
                id: authority.authorityId,
                label: authority.name,
            };
        });
    }, [codes]);

    const handleInput = (event) => {
        const { name, value } = event.target;

        setInfo({ ...info, [name]: value });
    };

    const handleInputSelect = (name, value) => {
        setInfo({ ...info, [name]: value.id });
    };

    const handleUpdateUser = () => {
        updateUser(info._id, {
            firstName: info.firstName,
            lastName: info.lastName,
            email: info.email,
            password: accountData.password,
            role: Number(info.role),
        }, authInfo._id, handleClose);
    };

    const handleClose = () => {
        setOpen(false);
        handleSuccess();
    };

    return (
        <Dialog open={open} maxWidth='sm' sx={classes.dialogStyle}>
            <DialogTitle textAlign='center'>Update Account Dialog</DialogTitle>
            <DialogContent>
                <Grid container>
                    <Grid container item xs={12} mt={1}>
                        <Grid item xs={3}>
                            <Typography>First Name</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                size='small'
                                variant='standard'
                                name='firstName'
                                value={info.firstName}
                                onInput={handleInput}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} mt={3}>
                        <Grid item xs={3}>
                            <Typography>Last Name</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                size='small'
                                variant='standard'
                                name='lastName'
                                value={info.lastName}
                                onInput={handleInput}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} mt={3}>
                        <Grid item xs={3}>
                            <Typography>Email</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                size='small'
                                variant='standard'
                                name='email'
                                value={info.email}
                                onInput={handleInput}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} mt={3}>
                        <Grid item xs={3}>
                            <Typography>Role</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Autocomplete
                                name="role"
                                disablePortal
                                size='small'
                                options={codesAutocompleteData}
                                onChange={(e, v) => handleInputSelect('role', v)}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button onClick={handleUpdateUser}>Update</Button>
            </DialogActions>
        </Dialog>
    );
}

const classes = {
    dialogStyle: {
        '& .MuiPaper-root.MuiDialog-paper .MuiGrid-container .MuiTypography-root': {
            textAlign: 'right',
            marginRight: '20px',
        },
    },
};
