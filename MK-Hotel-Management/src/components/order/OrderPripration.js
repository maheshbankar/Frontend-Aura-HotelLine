import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from '.././../styles.module.css';
import { Alert, Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Grid, Paper, Snackbar, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Breadcrumb, Cancel, HMinput, HMinputNo, StyledTableCell, StyledTableRow } from "../reusableComponent/reusableMethods";
import { NavLink, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkAddedSharpIcon from '@mui/icons-material/BookmarkAddedSharp';
import BookmarkAddSharpIcon from '@mui/icons-material/BookmarkAddSharp';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
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
const OrderPripration = (props) => {

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
    // -----------------------
    const [open, setOpen] = useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
  
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
  
   
    return (
        <>
            <div>

                <Paper className={`${styles.add_container}`}>
                    <Breadcrumb
                        routeSegments={[
                            { name: 'Masters', path: '/masters/' },
                            { name: 'Order' },
                        ]}
                    />
                    {/* <Box sx={{ m: 4 }} > </Box> */}
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                            <Grid item xs={12} sm={4} md={2} key={table.id}>
                                              <NavLink to={{ pathname: `/order` }} state={table} className={`${styles.underline}`}>
                                             
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
                                                </NavLink>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </div>
                            ))}
                        </div>
                    </form>
                </Paper>
            </div>
        </>
    )
}
export default OrderPripration;