import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { MESSAGE } from '../../constants/message';
import { enqueueSuccessSnackbar } from '../snackbars/enqueueSnackbar';
import { customTheme } from '../common/customTheme';

export default function ForgotPassword() {
    const [email, setEmail] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');

    const handleInput = (event) => {
        const value = event.target.value;
        setEmail(value);

        if (value) {
            setErrorMessage('');
        }
    };

    const checkError = () => {
        let cloneErrorMessage = '';
        if (!email) {
            cloneErrorMessage = MESSAGE.REQUIRED;
        }

        setErrorMessage(cloneErrorMessage);

        return cloneErrorMessage;
    };

    const handleSubmit = () => {
        if (checkError()) {
            return;
        }
        console.log({ email });
        enqueueSuccessSnackbar('Reset password success.');
    };

    return (
        <Container component="main" maxWidth="xs" sx={customTheme.justify}>
            <Grid container item xs={12} flexDirection="column" alignItems="center">
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <ManageAccountsIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Forgot Password
                </Typography>
                <Grid container sx={{ mt: 3 }}>
                    <Grid item xs={12} mb={1}>
                        <FormControl fullWidth error>
                            <TextField
                                fullWidth
                                id="email"
                                name="email"
                                label="Email Address"
                                autoComplete="off"
                                value={email}
                                onInput={handleInput}
                                error={!!errorMessage}
                                InputProps={{
                                    endAdornment: errorMessage && <ErrorOutlineIcon color='error' />,
                                }}
                            />
                            <FormHelperText sx={{ height: 2 }}>{errorMessage}</FormHelperText>
                        </FormControl>
                    </Grid>
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handleSubmit}
                    >
                        Reset Password
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                Already have an account?
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}
