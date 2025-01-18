import React, { useState } from 'react';
import { Button, CssBaseline, TextField, Paper, Box, Grid, Typography, FormControl, InputLabel, Select, MenuItem, InputBase } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
// import logo from '../images/billCubeLogo1.jpeg'
import loginImg from '../../images/demo_dashbord.jpg'
import { useForm } from "react-hook-form";
import FormHelperText from '@mui/material/FormHelperText';
import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../actions/actions'; // Mocking API call by skipping the import
import { useEffect } from 'react';
import { login } from '../../actions/actions';
import axios from 'axios';

const theme = createTheme();

const LoginCategory = () => {
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

    // useEffect(() => {
    //     if (loginUser?.userInfo) {
    //         navigate("/dashboard");
    //         window.location.reload();
    //     } else {
    //         navigate("/");
    //     }

    // }, [loginUser])

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



    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" style={{
                height: '100vh',
                // display: 'flex',
                // alignItems: 'flex-end',
                backgroundImage: `url(${loginImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    style={{
                        // display: 'flex',
                        // alignItems: 'flex-end',
                        // backgroundImage: `url(${loginImg})`,
                        // backgroundRepeat: 'no-repeat',
                        // backgroundSize: 'cover',
                        // backgroundPosition: 'center',
                    }}
                >
                </Grid>
                <Grid item xs={12} sm={8} md={5} elevation={6} square sx={{ background: 'transfrent' }}>
                    <Box
                        sx={{
                            my: 8,
                            mx: 12,
                            py: 2,
                            px: 8,
                            bgcolor: '#1976d2',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        {/* <img src={logo} style={{ height: "90px", marginBottom: '40px' }} /> */}
                        <br />
                        <Typography variant="h4" style={{ display: 'flex', justifyContent: 'center', color: '#f5b400' }}>
                            Aura Category
                        </Typography><br />
                        <form onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
                            <FormHelperText style={{ color: 'red', fontSize: '15px' }}>{helperText}</FormHelperText>
                            <FormControl fullWidth sx={{  paddingBottom: '20px' }}>
                                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    size='small'
                                    // value={age}
                                    // label="Age"
                                    // onChange={handleChange}
                                    input={<InputBase sx={{ borderBottom: '1px solid white',
                                         '&:hover': { borderBottom: '1px solid white' },
                                     '&.Mui-focused': { borderBottom: '1px solid white' } }} />}
                                >
                                    <MenuItem value={10}>Company 1</MenuItem>
                                    <MenuItem value={20}>Company 2</MenuItem>
                                    <MenuItem value={30}>Company 3</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl fullWidth sx={{ minWidth: '300px', paddingBottom: '20px' }}>
                                <InputLabel id="demo-simple-select-label">Branch</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={age}
                                    label="Age"
                                // onChange={handleChange}
                                input={<InputBase sx={{ borderBottom: '1px solid white',
                                    '&:hover': { borderBottom: '1px solid white' },
                                '&.Mui-focused': { borderBottom: '1px solid white' } }} />}
                                >
                                    <MenuItem value={10}>Pune</MenuItem>
                                    <MenuItem value={20}>Mumbai</MenuItem>
                                    <MenuItem value={30}>Kolhapur</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth sx={{ minWidth: '300px', paddingBottom: '20px' }}>
                                <InputLabel id="demo-simple-select-label">Financial Year</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={age}
                                    label="Age"
                                // onChange={handleChange}
                                input={<InputBase sx={{ borderBottom: '1px solid white',
                                    '&:hover': { borderBottom: '1px solid white' },
                                '&.Mui-focused': { borderBottom: '1px solid white' } }} />}
                                >
                                    <MenuItem value={10}>2024-2025</MenuItem>
                                    <MenuItem value={20}>2023-2024</MenuItem>
                                    <MenuItem value={30}>2022-2023</MenuItem>
                                </Select>
                            </FormControl>
                            <Typography style={{ color: 'red' }}>{isMessage}</Typography>
                            <Button
                                sx={{mt: 3, mb: 2, background: 'none', border:'1px solid #ffffff', color: 'white', borderRadius: '10px', fontSize: '16px','&:hover': { background: '#f5b400'}, }}
                                type="submit"
                                fullWidth
                                variant="contained"
                                // sx={{  }}
                            >
                                <b>Submit </b>
                            </Button>
                        </form>
                    </Box>

                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default LoginCategory;
