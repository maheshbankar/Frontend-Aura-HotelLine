import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from '.././../../styles.module.css';
import { Box, Button, Card, Grid, MenuItem, Paper, Snackbar, styled, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import imageCompression from 'browser-image-compression';
import { Breadcrumb, Cancel, HMAutocomplete, HMinput } from "../../reusableComponent/reusableMethods";
import { useNavigate } from "react-router-dom";
import SaveIcon from '@mui/icons-material/Save';

const useStyles = styled({
    option: {
        fontSize: 12,
    },
    noOptionsLabel: {
        fontSize: '12px', // Set the desired font size
    },
});
const ItemAdd = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const { handleSubmit } = useForm();
    const editData = props.details;
    console.log(editData, 'dfd')
    // const login_details = sessionStorage.getItem('loginUser');
    // const userD = JSON.parse(login_details);
    // const userInfo = userD.userInfo;
    // const urlLocation = useLocation();
    // const editInfo = urlLocation.state;
    const [empTypeList, setSeatingList] = useState([
        { id: 1, employee_type: 'Single' },
        { id: 2, employee_type: 'Double' },
        { id: 3, employee_type: 'Recliner' },
        { id: 4, employee_type: 'Single' },
        { id: 5, employee_type: 'Double' }
    ]);
    const [employee_type, setEmployee_type] = useState(editData ? editData.seating_type : null);
    const handleChangeAddress = (event, newValue) => {
        setEmployee_type(newValue ? newValue : null);
    }
    const [item_category, setItem_category] = useState(editData ? editData.item_category : null);
    const handleChangeCategory = (event, newValue) => {
        setItem_category(newValue ? newValue : null);
    }
    const editid = editData ? editData.id : null;
    let navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState(null);
    const [open, setOpen] = React.useState(false);
    const [openSnak, setOpenSnak] = React.useState(false);

    const [data, setData] = useState({
        id: editid,
        item_img: editData ? editData.item_img : '',
        item_name: editData ? editData.item_name : '',
        item_price: editData ? editData.item_price : '',
        status: editData ? editData.status : 'Active',
    });

    const date_ob = new Date();
    const hours = date_ob.getHours();
    const minutes = date_ob.getMinutes();
    const seconds = date_ob.getSeconds();
    const milliseconds = date_ob.getMilliseconds();
    const currentTime = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
    const tzoffset = (new Date()).getTimezoneOffset() * 60000;
    const localISODateTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        setOpen(false);
        setOpenSnak(false);

    };

    const handleOpenSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnak(false);
        setOpen(false);
    }

    const handleCloseSnak = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnak(false);
    };

    // const handleChange = ({ target }) => {
    //     const value = target.value;
    //     setData({
    //         ...data,
    //         [target.name]: value,
    //     });
    //     data[target.name] = target.value;
    // }
    const handleChange = async ({ target }) => {
        if (target.type === "file") {
            const file = target.files[0]; // Get the selected file

            if (file) {
                // Define compression options
                const options = {
                    maxSizeMB: 1, // Maximum file size (in MB) after compression
                    maxWidthOrHeight: 800, // Max width or height (to maintain aspect ratio)
                    useWebWorker: true, // Enable web worker for performance
                };

                try {
                    // Compress the image
                    const compressedFile = await imageCompression(file, options);

                    // Convert compressed image to Base64
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        const base64Image = reader.result;

                        // Update state with Base64 string
                        setData((prevData) => ({
                            ...prevData,
                            [target.name]: base64Image,
                        }));
                    };
                    reader.readAsDataURL(compressedFile); // Read the file as a data URL (Base64)
                } catch (error) {
                    console.error("Error while compressing the image", error);
                }
            }
        } else {
            // Handle other form input types
            const value = target.value;
            setData((prevData) => ({
                ...prevData,
                [target.name]: value,
            }));
        }
    };

    const [shouldShowMsg, setShouldShowMsg] = useState(false);
    // const responseMessage = useSelector(state => state.bank.message); 
    const responseMessage = 'add nmsf sdfd';

    useEffect(() => {
        if (responseMessage) {
            setShouldShowMsg(true);
        }
    }, [responseMessage, dispatch]);

    useEffect(() => {
        if (shouldShowMsg) {
            if (responseMessage !== null) {
                if (responseMessage === 'Bank already available !') {
                    setSuccessMessage(responseMessage)
                    setShouldShowMsg(false);
                    dispatch({ type: 'RESET_MESSAGE' });
                    setTimeout(() => {
                        setSuccessMessage(false)
                    }, 2000)

                } else {
                    setShouldShowMsg(true);
                    // navigate(-1, { responseMessage });
                }
            }
        }
    }, [shouldShowMsg, responseMessage]);

    const onSubmit = (event) => {
        const bankData = {
            // companyId: userInfo.companyId,
            ...data,
            // createdBy: editData ? editData.createdBy : userInfo.userId,
            // createdAt: editData ? editData.createdAt : dateConversionOnEntryPage(new Date()),
            // modifiedBy: editData ? userInfo.userId : null,
            // modifiedAt: editData ? dateConversionOnEntryPage(new Date()) : '',
            changedUpdatedValue: 'edit',
        }
        if (editData) {
            // dispatch(editDeleteBank(bankData));
        } else {
            // dispatch(addBank(bankData));
        }
    }


    return (
        <>
            <div>

                <Paper className={`${styles.add_container}`}>

                    {/* <Box sx={{ m: 4 }} > </Box> */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box>
                            <Grid container spacing={2} style={{ minHeight: '250px', }}>
                                <Grid item xs={12} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                    {/* <Card className={`${styles.m_card}`}> */}
                                    <Grid container spacing={1} sx={{ mt: 0 }}>
                                        <Grid item xs={12} className={`${styles.grid_lable}`}>
                                            <Typography className={`${styles.erp_lable}`}>Item Category</Typography>
                                        </Grid>
                                        <Grid item xs={12} className={`${styles.grid_input}`}>
                                            <HMAutocomplete
                                                classes={{ option: classes.option }}
                                                PaperComponent={({ children }) => (
                                                    <Paper style={{ fontSize: '12px' }}>{children}</Paper>
                                                )}
                                                noOptionsText={<span style={{ fontSize: '12px' }}>No options</span>}
                                                options={empTypeList}
                                                value={item_category}
                                                onChange={handleChangeCategory}
                                                getOptionLabel={(option) => option.item_category}
                                                getOptionSelected={(option, value) => option.id === value.id}
                                                renderInput={(params) => (
                                                    <HMinput fullWidth placeholder="Select Item Category" {...params} required />
                                                )}
                                            />
                                        </Grid>
                                        <Grid item xs={12} className={`${styles.grid_lable}`}>
                                            <Typography className={`${styles.erp_lable}`}>Item Type</Typography>
                                        </Grid>
                                        <Grid item xs={12} className={`${styles.grid_input}`}>
                                            <HMAutocomplete
                                                classes={{ option: classes.option }}
                                                PaperComponent={({ children }) => (
                                                    <Paper style={{ fontSize: '12px' }}>{children}</Paper>
                                                )}
                                                noOptionsText={<span style={{ fontSize: '12px' }}>No options</span>}
                                                options={empTypeList}
                                                value={employee_type}
                                                onChange={handleChangeAddress}
                                                getOptionLabel={(option) => option.employee_type}
                                                getOptionSelected={(option, value) => option.id === value.id}
                                                renderInput={(params) => (
                                                    <HMinput fullWidth placeholder="Select Item Type" {...params} required />
                                                )}
                                            />
                                        </Grid>
                                        <Grid item xs={12} className={`${styles.grid_lable}`}>
                                            <Typography className={`${styles.erp_lable}`}>Item / Menu Name</Typography>
                                        </Grid>
                                        <Grid item xs={12} className={`${styles.grid_input}`}>
                                            <HMinput
                                                required
                                                size='small'
                                                fullWidth
                                                type="text"
                                                onChange={handleChange}
                                                name="item_name"
                                                value={(data.item_name)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} className={`${styles.grid_lable}`}>
                                            <Typography className={`${styles.erp_lable}`}>Item Price</Typography>
                                        </Grid>
                                        <Grid item xs={12} className={`${styles.grid_input}`}>
                                            <HMinput
                                                required
                                                size='small'
                                                fullWidth
                                                type="text"
                                                onChange={handleChange}
                                                name="item_price"
                                                value={(data.item_price)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} className={`${styles.grid_lable}`}>
                                            <Typography className={`${styles.erp_lable}`}>Menu Photo</Typography>
                                        </Grid>
                                        <Grid item xs={12} className={`${styles.grid_input}`}>
                                            <HMinput
                                                size='small'
                                                variant="standard"
                                                InputProps={{
                                                    disableUnderline: true,
                                                }}
                                                type="file"
                                                name="item_img"
                                                accept="image/*"
                                                onChange={handleChange}
                                            // value={(data.item_img)}
                                            />
                                            {data.item_img && (
                                                <div>
                                                    <img
                                                        src={data.item_img}
                                                        alt="Preview"
                                                        style={{ maxWidth: '200px', maxHeight: '200px' }}
                                                    />
                                                </div>
                                            )}
                                        </Grid>
                                        <Grid item xs={12} className={`${styles.grid_lable}`}>
                                            <Typography className={`${styles.erp_lable}`}>Status</Typography>
                                        </Grid>
                                        <Grid item xs={12} className={`${styles.grid_input}`}>
                                            <HMinput
                                                select
                                                size='small'
                                                fullWidth
                                                type="text"
                                                onChange={handleChange}
                                                name="status"
                                                value={(data.status)}
                                            >
                                                <MenuItem value="Active" className={`${styles.erp_lable}`}>Available</MenuItem>
                                                <MenuItem value="Inactive" className={`${styles.erp_lable}`}>Not Available</MenuItem>
                                            </HMinput>
                                        </Grid>
                                        <Grid item xs={12} className={`${styles.grid_input}`}>
                                            <Box sx={{ marginTop: '12px', float: 'right' }}>
                                                <Button color="primary" id={`${styles.btn_save}`} variant="contained" type="submit">
                                                    <SaveIcon style={{ fontSize: '16px', marginRight: '10px' }} />  {editData ? 'Update' : 'Save'}
                                                </Button>
                                                {/* <Cancel /> */}
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    {/* </Card> */}
                                </Grid>
                            </Grid>
                        </Box>
                    </form>
                </Paper>
                {/* <Snackbar
                open={openSnak}
                autoHideDuration={4000}
                onClose={handleCloseSnak}
                message="Do you wish to close without saving ?"
                action={action}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            />
            {successMessage &&
                <Snackbar
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    open={successMessage}
                    autoHideDuration={2000}
                    message={successMessage}
                />
            } */}
            </div>
        </>
    )
}
export default ItemAdd;