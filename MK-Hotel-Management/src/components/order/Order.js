import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from '.././../styles.module.css';
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Grid, Paper, Snackbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Breadcrumb, Cancel, HMinput } from "../reusableComponent/reusableMethods";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import tblBg from "../../images/tbl-bg.png"
import menuImg from "../../images/menu-sample.png"
import SaveIcon from '@mui/icons-material/Save';
const tables = [
    { id: 1, table_name: 'Table A', status: true, seating_type: 'Hall' },
    { id: 2, table_name: 'Table B', status: false, seating_type: 'Garden' },
    { id: 3, table_name: 'Table C', status: true, seating_type: 'Family Room' },
    { id: 4, table_name: 'Table D', status: false, seating_type: 'Hall' },
    { id: 5, table_name: 'Table E', status: true, seating_type: 'Garden' },
    { id: 6, table_name: 'Table F', status: false, seating_type: 'Family Room' },
    { id: 7, table_name: 'Table G', status: true, seating_type: 'Hall' },
    { id: 8, table_name: 'Table H', status: false, seating_type: 'Garden' },
    { id: 9, table_name: 'Table I', status: true, seating_type: 'Family Room' },
    { id: 10, table_name: 'Table J', status: false, seating_type: 'Hall' },
];
const menuItems = [
    { id: 1, item_category: 'Veg', item_type: 'Sweet', item_name: 'Kheer', item_price: 799, item_in_half: true, item_half_price: 399, item_image: 'link_to_image1', status: 'Available' },
    { id: 2, item_category: 'Veg', item_type: 'Main Course', item_name: 'Paneer Butter Masala', item_price: 599, item_in_half: false, item_half_price: null, item_image: 'link_to_image2', status: 'Available' },
    { id: 3, item_category: 'Non-Veg', item_type: 'Starter', item_name: 'Chicken Tikka', item_price: 499, item_in_half: false, item_half_price: null, item_image: 'link_to_image3', status: 'Unavailable' },
    { id: 4, item_category: 'Veg', item_type: 'Main Course', item_name: 'Aloo Gobi', item_price: 399, item_in_half: false, item_half_price: null, item_image: 'link_to_image4', status: 'Available' },
    { id: 5, item_category: 'Dessert', item_type: 'Sweet', item_name: 'Gulab Jamun', item_price: 199, item_in_half: true, item_half_price: 99, item_image: 'link_to_image5', status: 'Available' },
    { id: 6, item_category: 'Non-Veg', item_type: 'Main Course', item_name: 'Butter Chicken', item_price: 799, item_in_half: false, item_half_price: null, item_image: 'link_to_image6', status: 'Available' },
    { id: 7, item_category: 'Veg', item_type: 'Snack', item_name: 'Samosa', item_price: 99, item_in_half: false, item_half_price: null, item_image: 'link_to_image7', status: 'Available' },
    { id: 8, item_category: 'Non-Veg', item_type: 'Main Course', item_name: 'Mutton Rogan Josh', item_price: 999, item_in_half: false, item_half_price: null, item_image: 'link_to_image8', status: 'Unavailable' },
    { id: 9, item_category: 'Dessert', item_type: 'Sweet', item_name: 'Rasgulla', item_price: 249, item_in_half: true, item_half_price: 125, item_image: 'link_to_image9', status: 'Available' },
    { id: 10, item_category: 'Veg', item_type: 'Starter', item_name: 'Veg Pakora', item_price: 149, item_in_half: false, item_half_price: null, item_image: 'link_to_image10', status: 'Available' },
];
const totalAmount = 1500;
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const Order = (props) => {

    const dispatch = useDispatch()
    const { handleSubmit } = useForm();
    const editData = props.details;
    // const login_details = sessionStorage.getItem('loginUser');
    // const userD = JSON.parse(login_details);
    // const userInfo = userD.userInfo;
    // const urlLocation = useLocation();
    // const editInfo = urlLocation.state  ;

    const editid = editData ? editData.id : null;
    let navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState(null);

    const [data, setData] = useState({
        id: editid,
        item_category: editData ? editData.item_category : '',
    });



    const handleChangek = ({ target }) => {
        const value = target.value;
        setData({
            ...data,
            [target.name]: value,
        });
        data[target.name] = target.value;
    }

    // const [shouldShowMsg, setShouldShowMsg] = useState(false);
    // const responseMessage = useSelector(state => state.bank.message); 


    // useEffect(() => {
    //     if (responseMessage) {
    //         setShouldShowMsg(true);
    //     }
    // }, [responseMessage, dispatch]);

    // useEffect(() => {
    //     if (shouldShowMsg) {
    //         if (responseMessage !== null) {
    //             if (responseMessage === 'Bank already available !') {
    //                 setSuccessMessage(responseMessage)
    //                 setShouldShowMsg(false);
    //                 dispatch({ type: 'RESET_MESSAGE' });
    //                 setTimeout(() => {
    //                     setSuccessMessage(false)
    //                 }, 2000)

    //             } else {
    //                 setShouldShowMsg(true);
    //                 navigate(-1, { responseMessage });
    //             }
    //         }
    //     }
    // }, [shouldShowMsg, responseMessage]);

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

    // -------------------------------------------------------------------------------
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    // --------------------------
    const groupedTables = tables.reduce((acc, table) => {
        if (!acc[table.seating_type]) {
            acc[table.seating_type] = [];
        }
        acc[table.seating_type].push(table);
        return acc;
    }, {});
    // ---------------------------------
    const groupedMenuItems = menuItems.reduce((acc, item) => {
        if (!acc[item.item_category]) {
            acc[item.item_category] = [];
        }
        acc[item.item_category].push(item);
        return acc;
    }, {});

    return (
        <>
            <div>

                <Paper className={`${styles.list_container}`}>
                    <Breadcrumb
                        routeSegments={[
                            { name: 'Masters', path: '/masters/' },
                            { name: 'Order' },
                        ]}
                    />
                    {/* <Box sx={{ m: 4 }} > </Box> */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box>
                            <Grid container spacing={2} >
                                <Grid item xs={8} >
                                    <Box sx={{ width: '100%' }}>
                                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                                <Tab label="Tables" {...a11yProps(0)} />
                                                <Tab label="Menu" {...a11yProps(1)} />
                                                {/* <Tab label="Non-Veg" {...a11yProps(2)} /> */}
                                            </Tabs>
                                        </Box>
                                        <CustomTabPanel value={value} index={0}>
                                            <div>
                                                {Object.keys(groupedTables).map((seatingType) => (
                                                    <div key={seatingType}>
                                                        {/* Group Title */}
                                                        <Typography variant="h6" sx={{ marginTop: 2, fontWeight: 'bold' }}>
                                                            {seatingType}
                                                        </Typography>
                                                        <Divider sx={{ marginBottom: 2 }} />

                                                        {/* Step 3: Use MUI Grid to display cards in a responsive layout */}
                                                        <Grid container spacing={2}>
                                                            {groupedTables[seatingType].map((table) => (
                                                                <Grid item xs={12} sm={4} md={3} key={table.id}>
                                                                    {/* Card */}
                                                                    <Card sx={{ maxWidth: 345 }}>
                                                                        <CardHeader
                                                                            avatar={
                                                                                <Avatar
                                                                                    sx={{
                                                                                        bgcolor: table.status ? '#4caf50' : '#f44336', // Green for available, Red for occupied
                                                                                    }}
                                                                                    aria-label="table status"
                                                                                >
                                                                                    {table.status ? '✔️' : '❌'} {/* Show a check or cross depending on status */}
                                                                                </Avatar>
                                                                            }
                                                                            title={table.table_name} // Use the table name as the title
                                                                            subheader={table.seating_type} // Optionally, you can show the seating type here
                                                                        />
                                                                        <CardMedia
                                                                            component="img"
                                                                            sx={{
                                                                                width: '100%',
                                                                                height: 'auto',
                                                                                objectFit: 'cover',
                                                                            }}
                                                                            image={tblBg} // Replace with your actual image path or dynamic data
                                                                            alt="Table image"
                                                                        />
                                                                        {/* <CardActions disableSpacing>
                                                                            <IconButton aria-label="add to favorites">
                                                                                <FavoriteIcon />
                                                                            </IconButton>
                                                                        </CardActions> */}
                                                                    </Card>
                                                                </Grid>
                                                            ))}
                                                        </Grid>
                                                    </div>
                                                ))}
                                            </div>
                                        </CustomTabPanel>
                                        <CustomTabPanel value={value} index={1}>
                                            <div>
                                                {Object.keys(groupedMenuItems).map((category) => (
                                                    <div key={category}>
                                                        {/* Group Title */}
                                                        <Typography variant="h6" sx={{ marginTop: 2, fontWeight: 'bold' }}>
                                                            {category} Menu
                                                        </Typography>
                                                        <Divider sx={{ marginBottom: 2 }} />

                                                        {/* Step 3: Use MUI Grid to display cards in a responsive layout */}
                                                        <Grid container spacing={2}>
                                                            {groupedMenuItems[category].map((item) => (
                                                                <Grid item xs={12} sm={4} md={3} key={item.id}>
                                                                    {/* Card */}
                                                                    <Card sx={{ maxWidth: 345 }}>
                                                                        <CardHeader
                                                                            avatar={
                                                                                <Avatar
                                                                                    sx={{
                                                                                        bgcolor: item.status === 'Available' ? '#4caf50' : '#f44336', // Green for available, Red for unavailable
                                                                                    }}
                                                                                    aria-label="item status"
                                                                                >
                                                                                    {item.status === 'Available' ? '✔️' : '❌'}
                                                                                </Avatar>
                                                                            }
                                                                            title={item.item_name} // Use the item name as the title
                                                                            subheader={item.item_type} // Optionally, you can show the item type here
                                                                        />
                                                                        <CardMedia
                                                                            component="img"
                                                                            sx={{
                                                                                width: '100%',
                                                                                height: 'auto',
                                                                                objectFit: 'cover',
                                                                            }}
                                                                            image={menuImg} // Replace with actual image URL
                                                                            alt={item.item_name}
                                                                        />
                                                                        <CardActions disableSpacing>
                                                                            <Typography variant="body2" sx={{ marginRight: '8px' }}>
                                                                                ₹{item.item_price}
                                                                            </Typography>
                                                                            {item.item_in_half && (
                                                                                <Typography variant="body2" sx={{ color: 'gray' }}>
                                                                                    Half: ₹{item.item_half_price}
                                                                                </Typography>
                                                                            )}
                                                                            <IconButton aria-label="add to favorites">
                                                                                <FavoriteIcon />
                                                                            </IconButton>
                                                                        </CardActions>
                                                                    </Card>
                                                                </Grid>
                                                            ))}
                                                        </Grid>
                                                    </div>
                                                ))}
                                            </div>
                                        </CustomTabPanel>
                                        {/* <CustomTabPanel value={value} index={2}>
                                            Non- Veg Menu
                                        </CustomTabPanel> */}
                                    </Box>
                                </Grid>
                                <Grid item xs={4} >
                                    <TableContainer component={Paper}>
                                        <Table sx={{}} aria-label="menu table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Item Name</TableCell>
                                                    <TableCell align="right">Qty</TableCell>
                                                    <TableCell align="right">Price (₹)</TableCell>

                                                    <TableCell align="right">Half Price (₹)</TableCell>

                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {menuItems.map((item) => (
                                                    <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                        <TableCell component="th" scope="row">{item.item_name}</TableCell>
                                                        <TableCell component="th" scope="row"><HMinput /></TableCell>
                                                        <TableCell align="right">{item.item_price}</TableCell>
                                                        <TableCell align="right">{item.item_in_half ? item.item_half_price : 'N/A'}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <Box sx={{ p: 2 }}>
                                        {/* Row 1: Total Amount */}
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Total Amount</Typography>
                                            <Typography variant="h6" sx={{ color: 'green' }}>₹{totalAmount}</Typography>
                                        </Box>

                                        {/* Row 2: Buttons */}
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Button variant="contained" color="primary" sx={{ flex: 1, marginRight: 1 }}>
                                                Save
                                            </Button>
                                            <Button variant="contained" color="primary" sx={{ flex: 1, marginRight: 1 }}>
                                                Save and Print
                                            </Button>
                                            <Button variant="contained" color="secondary" sx={{ flex: 1, marginRight: 1 }}>
                                                KOT
                                            </Button>
                                            <Button variant="contained" color="warning" sx={{ flex: 1 }}>
                                                Hold
                                            </Button>
                                        </Box>
                                    </Box>
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
export default Order;