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
} from '@mui/material';
import PropTypes from 'prop-types';

UpdateAccountDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    accountData: PropTypes.string.isRequired,
};

const initialState = {
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: -1,
};

export default function UpdateAccountDialog({ open, setOpen, accountData }) {
    const [info, setInfo] = React.useState(initialState);
    const handleClose = () => {
        setOpen(false);
    };

    React.useEffect(() => {
        setInfo({ ...accountData });
    }, [accountData]);

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
                                value={info.firstName}
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
                                value={info.lastName}
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
                                value={info.email}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} mt={3}>
                        <Grid item xs={3}>
                            <Typography>Role</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                size='small'
                                variant='standard'
                                value={info.role}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button onClick={handleClose}>Update</Button>
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
