import React, { useEffect, useState } from "react"; 
import { useForm } from "react-hook-form";
import styles from '.././../../styles.module.css';
import { Box, Button, Card, Grid, Paper, Snackbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Breadcrumb, Cancel, HMinput } from "../../reusableComponent/reusableMethods";
import { useNavigate } from "react-router-dom";
import SaveIcon from '@mui/icons-material/Save';


const ItemTypeAdd = (props) =>{

    const dispatch = useDispatch()
    const { handleSubmit } = useForm();
    const editData = props.details;
    // const login_details = sessionStorage.getItem('loginUser');
    // const userD = JSON.parse(login_details);
    // const userInfo = userD.userInfo;
    // const urlLocation = useLocation();
    // const editInfo = urlLocation.state;
   
    const editid = editData ? editData.id : null;
    let navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState(null);
    const [open, setOpen] = React.useState(false);
    const [openSnak, setOpenSnak] = React.useState(false);

    const [data, setData] = useState({
        id: editid,
        item_category: editData ? editData.item_category : '',
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

    const handleChange = ({ target }) => {
        const value = target.value;
        setData({
            ...data,
            [target.name]: value,
        });
        data[target.name] = target.value;
    }

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

    const action = (
        <React.Fragment>
            <Button size="small" id="btnYes" onClick={handleOpenSnack}>
                Yes
            </Button>
            <Button size="small" id="btnNo" onClick={handleCloseSnak}>
                No
            </Button>
        </React.Fragment>
    );


    return(
        <>
        <div>
          
            <Paper className={`${styles.list_container}`}>

                {/* <Box sx={{ m: 4 }} > </Box> */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box>
                        <Grid container spacing={2} style={{ minHeight: '250px', paddingLeft: '50px' }}>
                           
                            <Grid item xs={12} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                <Card className={`${styles.m_card}`}>
                                    <Grid container spacing={1} sx={{ mt: 0 }}>
                                        <Grid item xs={12} className={`${styles.grid_lable}`}>
                                            <Typography className={`${styles.erp_lable}`}>Item Category</Typography>
                                        </Grid>
                                        <Grid item xs={12} className={`${styles.grid_input}`}>
                                            <HMinput
                                                required
                                                size='small'
                                                fullWidth
                                                type="text"
                                                onChange={handleChange}
                                                name="item_category"
                                                value={(data.item_category)}
                                            />
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
                                </Card>
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
    export default ItemTypeAdd;