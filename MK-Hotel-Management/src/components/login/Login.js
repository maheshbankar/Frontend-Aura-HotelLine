import React, { useState } from 'react';
import { Button, CssBaseline, TextField, Paper, Box, Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
// import logo from '../images/billCubeLogo1.jpeg'
// import loginImg from '../images/login-image01.jpg'
import { useForm } from "react-hook-form";
import FormHelperText from '@mui/material/FormHelperText';
import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../actions/actions'; // Mocking API call by skipping the import
import { useEffect } from 'react';
import { login } from '../../actions/actions';
import axios from 'axios';

const theme = createTheme();

const Login = () => {
    const { handleSubmit } = useForm({});
    const navigate = useNavigate()
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('');
    const [isMessage, setIsMessage] = useState('');
    const dispatch = useDispatch();

    const handleUsername = (e) => {
        setUserName(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const loginUser = useSelector(state => state.userManagement.loginUser)

    useEffect(() => {
        if (loginUser?.userInfo) {
            navigate("/dashboard");
            window.location.reload();
        } else {
            navigate("/");
        }

    }, [loginUser])

    const [shouldShowMsg, setShouldShowMsg] = useState(false);
    const responseMessage = useSelector(state => state.userManagement.message);

    useEffect(() => {
        if (responseMessage) {
            setShouldShowMsg(true);
        }
    }, [responseMessage, dispatch]);

    useEffect(() => {
        if (shouldShowMsg) {
            if (responseMessage !== null) {
                setHelperText(responseMessage);
                setShouldShowMsg(false);
                dispatch({ type: 'RESET_MESSAGE' }); 
            }
        }
    }, [shouldShowMsg, responseMessage]);

    const onSubmit = async (event) => {
        const loginData = { username, password, operation: 'signin' };
        dispatch(login(loginData))
        
    }

//     const onSubmit = async (event) => {
//         // event.preventDefault(); 
        
//         const loginData = { username, password };
        
//         try {
//             const response = await axios.post('https://localhost:8080/api/User/signin', loginData);
            
           
//             console.log('Login successful:', response.data);
// ;

//         } catch (error) {
//             console.error('Login failed:', error.response ? error.response.data : error.message);

           
//         }
//     };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    style={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        // backgroundImage: `url(${loginImg})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                </Grid>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 12,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        {/* <img src={logo} style={{ height: "90px", marginBottom: '40px' }} /> */}
                        <br />
                        <Typography variant="h4" style={{ display: 'flex', justifyContent: 'center' }}>
                            Sign In
                        </Typography><br />
                        <form onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
                            <FormHelperText style={{ color: 'red', fontSize: '15px' }}>{helperText}</FormHelperText>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Username"
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={handleUsername}
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Password"
                                id="password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={handlePassword}
                            />
                            <Typography style={{ color: 'red' }}>{isMessage}</Typography>
                            <Button
                                style={{ background: '#002b65', color: 'white', borderRadius: '10px', fontSize: '16px' }}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                <b>Sign In </b>
                            </Button>
                        </form>
                    </Box>

                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default Login;
