import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Container, FormControl, FormHelperText } from '@mui/material';

export default function ForgotPassword() {
    const [email, setEmail] = React.useState('');

    const handleInput = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = () => {
        console.log({ email });
    };

    return (
        <Container component="main" maxWidth="xs">
            <Grid container item xs={12} flexDirection="column" alignItems="center">
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Forgot Password
                </Typography>
                <Grid container sx={{ mt: 3 }}>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="off"
                                value={email}
                                onInput={handleInput}
                            />
                            <FormHelperText></FormHelperText>
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