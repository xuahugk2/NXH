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
    accountId: PropTypes.string.isRequired,
};

export default function UpdateAccountDialog({ open, setOpen, accountId }) {
    const handleClose = () => {
        setOpen(false);
    };

    React.useEffect(() => {
        console.log(accountId);
    }, [accountId]);

    return (
        <Dialog open={open} maxWidth='lg' sx={{ paddingY: 5 }}>
            <DialogTitle>Update Account Dialog</DialogTitle>
            <DialogContent>
                <Grid container item xs={12} mt={1}>
                    <Grid item xs={6}>
                        <Typography>First Name</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            size='small'
                            variant='standard'
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={12} mt={3}>
                    <Grid item xs={6}>
                        <Typography>Last Name</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            size='small'
                            variant='standard'
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={12} mt={3}>
                    <Grid item xs={6}>
                        <Typography>Email</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            size='small'
                            variant='standard'
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={12} mt={3}>
                    <Grid item xs={6}>
                        <Typography>Role</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            size='small'
                            variant='standard'
                        />
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
