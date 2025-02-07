import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import styles from '.././../styles.module.css';
import { Alert, Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Grid, Paper, Snackbar, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Breadcrumb, Cancel, HMinput, HMinputNo, StyledTableCell, StyledTableRow } from "../reusableComponent/reusableMethods";
import { useLocation, useNavigate } from "react-router-dom";
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
import ReactToPrint from "react-to-print";
import tblBg from "../../images/tbl-bg.png"
import menuImg from "../../images/menu-sample.png"
import SaveIcon from '@mui/icons-material/Save';
import PrintOrder from "./PrintOrder";
console.log(PrintOrder, 'testprint');

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
    const urlLocation = useLocation();
    const tableInfo = urlLocation.state;

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

    // ---------------------------------
    const groupedMenuItems = menuItems.reduce((acc, item) => {
        if (!acc[item.item_category]) {
            acc[item.item_category] = [];
        }
        acc[item.item_category].push(item);
        return acc;
    }, {});
    // -------------------------item tbl -------------------
    const [isSet, setIsSet] = useState(false);
    const [total, setTotal] = useState(editData ? editData.basic_total : 0);

    const [isUpdateArray, setIsUpdateArray] = useState(false);
    const [supplier_po_details, setSupplier_po_details] = useState(
        editData ? JSON.parse(editData.supplier_po_details && editData.supplier_po_details) :
            [{
                sr_no: 1,
                item_name: '',
                quantity: 0.00,
                item_price: 0.00,
                total: 0.00,
                amount: 0.00,
            }]
    )
    const handleChangeInput = (e, i) => {
        const updatedDetails = [...supplier_po_details];  // Create a shallow copy of the array
        const updatedItem = { ...updatedDetails[i] };  // Copy the specific item

        updatedItem[e.target.name] = e.target.value;
        updatedDetails[i] = updatedItem;  // Update the item in the copied array
        setSupplier_po_details(updatedDetails);

        // Calculate total
        let tltAmt = updatedItem['total'] || 0;
        let qty = updatedItem['quantity'] || 0;
        let rate = updatedItem['item_price'] || 0;

        if (e.target.name === 'quantity') {
            qty = parseFloat(e.target.value);
        }
        if (e.target.name === 'item_price') {
            rate = parseFloat(e.target.value);
        }

        let basicAmt = qty * rate;
        tltAmt = basicAmt;

        updatedItem['total'] = basicAmt;
        updatedItem['amount'] = tltAmt;

        updatedDetails[i] = updatedItem;  // Update the item again in the copied array

        setSupplier_po_details(updatedDetails);

        // Recalculate the total
        const totalCount = updatedDetails.map(value => value.total || 0).reduce((acc, curr) => acc + curr, 0);
        setTotal(totalCount);
    };

    const handleRemoveSPQuotation = (id) => {
        const updatedDetails = supplier_po_details.filter(item => item.sr_no !== id); // Create a new array excluding the item to remove

        // Reassign the updated Sr. No for the remaining items
        updatedDetails.forEach((item, index) => {
            item.sr_no = index + 1;
        });

        setSupplier_po_details(updatedDetails); // Update state with the new array

        // Recalculate the total
        const totalCount = updatedDetails.map(value => value.total || 0).reduce((acc, curr) => acc + curr, 0);
        setTotal(totalCount);
    };

    const [itemMsg, setItemMsg] = useState();
    const [itemOne, setItemOne] = useState(false);
    const handleAddSPQuotationFields = (item) => {
        // Check if the item is already in the table based on its unique id (or combination of item_name and item_price)
        const isItemInDetails = supplier_po_details.some(detail => detail.item_name === item.item_name && detail.item_price === item.item_price);

        // Prevent adding the item if it already exists
        if (isItemInDetails) {
            console.log('Item already exists');
            setOpen(true);
            setItemMsg('Item already exists')
            setItemOne(true)
            return; // Don't add the item again
        }

        // Add the clicked item to the table
        const updatedDetails = [
            ...supplier_po_details, // Existing items
            {
                sr_no: supplier_po_details.length + 1, // New Sr. No based on existing items length
                item_name: item.item_name,
                item_price: item.item_price,
                quantity: 1.00, // Default quantity
                total: item.item_price, // Calculate total as price * quantity
                amount: item.item_price, // Amount starts as price for the first item
            }
        ];

        // Update the state
        setSupplier_po_details(updatedDetails);

        // Recalculate total
        const totalCount = updatedDetails.map(value => value.total || 0).reduce((acc, curr) => acc + curr, 0);
        setTotal(totalCount);
    };
    const handleChangeQuantity = (index, operation) => {
        const updatedDetails = [...supplier_po_details]; // Create a shallow copy of the array

        // Get the current item
        const updatedItem = { ...updatedDetails[index] };

        // Update the quantity based on the operation
        if (operation === 'increment') {
            updatedItem.quantity += 1;
        } else if (operation === 'decrement' && updatedItem.quantity > 1) {
            updatedItem.quantity -= 1; // Prevent going below 1
        }

        // Recalculate the total based on updated quantity
        updatedItem.total = updatedItem.quantity * updatedItem.item_price;
        updatedItem.amount = updatedItem.total;

        // Update the item in the copied array
        updatedDetails[index] = updatedItem;

        // Update the state with the new array
        setSupplier_po_details(updatedDetails);

        // Recalculate the total amount for all items
        const totalCount = updatedDetails.map(item => item.total || 0).reduce((acc, curr) => acc + curr, 0);
        setTotal(totalCount);
    };
    // ---------------------- 
    const printRef = useRef();
    const handleSaveAndPrint = () => {
        // onSubmit(); 
        // setTimeout(() => {
        //     componentRef.current && componentRef.current.handlePrint(); 
        // }, 1000); 
    };
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
                                <Grid item xs={12} md={8} >
                                    <Box sx={{ width: '100%' }}>
                                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                                <Tab label="Menu" {...a11yProps(0)} />
                                                {/* <Tab label="Menu" {...a11yProps(1)} /> */}
                                                {/* <Tab label="Non-Veg" {...a11yProps(2)} /> */}
                                            </Tabs>
                                        </Box>

                                        <CustomTabPanel value={value} index={0}>
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
                                                                <Grid item xs={12} sm={4} md={2} key={item.id}>
                                                                    {/* Card */}
                                                                    <Card sx={{ maxWidth: 345 }} onClick={() => handleAddSPQuotationFields(item)} >
                                                                        <CardHeader sx={{ height: '5vh', borderBottom: '1px solid #c0c0c0', bgcolor: '#fcba03', padding: '8px' }}
                                                                            // avatar={
                                                                            //     <Avatar
                                                                            //         sx={{
                                                                            //             bgcolor: item.status === 'Available' ? '#4caf50' : '#f44336', // Green for available, Red for unavailable
                                                                            //         }}
                                                                            //         aria-label="item status"
                                                                            //     >
                                                                            //         {item.status === 'Available' ? '✔️' : '❌'}
                                                                            //     </Avatar>
                                                                            // }
                                                                            // title={item.item_name} 
                                                                            subheader=
                                                                            {<Typography sx={{ fontSize: '12px' }}>{item.item_name} </Typography>}
                                                                        />
                                                                        <CardMedia
                                                                            component="img"
                                                                            sx={{
                                                                                width: '100%',
                                                                                padding: '15px',
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
                                                                            {/* {item.item_in_half && (
                                                                                <Typography variant="body2" sx={{ color: 'gray' }}>
                                                                                    Half: ₹{item.item_half_price}
                                                                                </Typography>
                                                                            )} */}
                                                                            <IconButton aria-label="add to favorites">
                                                                                {itemOne == false ?
                                                                                    <BookmarkAddSharpIcon sx={{
                                                                                        color: item.status === 'Available' ? '#4caf50' : '#f44336', // Green for available, Red for unavailable
                                                                                    }} />
                                                                                    : <BookmarkAddedSharpIcon sx={{
                                                                                        color: item.status === 'Available' ? '#4caf50' : '#f44336', // Green for available, Red for unavailable
                                                                                    }} />}
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
                                <Grid item xs={12} md={4}>
                                    <Typography sx={{ bgcolor: tableInfo.status ? '#4caf50' : '#f44336', }}>{tableInfo.table_name}( {tableInfo.seating_type}) </Typography>
                                    <TableContainer style={{ maxHeight: '450px', minHeight: '448px', marginTop: '5px' }}>
                                        <Table sx={{ minWidth: 50 }} size="small" aria-label="a dense table">
                                            <TableHead>
                                                <StyledTableRow>
                                                    <StyledTableCell align="center" className={`${styles.table_head}`}></StyledTableCell>
                                                    <StyledTableCell align="left" className={`${styles.table_head}`} sx={{ backgroundColor: '#ededed', fontSize: '12px' }} width="15%">Sr. No</StyledTableCell>
                                                    <StyledTableCell align="left" className={`${styles.table_head}`} sx={{ backgroundColor: '#ededed', fontSize: '12px' }} width="35%">Item Name</StyledTableCell>
                                                    <StyledTableCell align="center" className={`${styles.table_head}`} sx={{ backgroundColor: '#ededed', fontSize: '12px' }} width="18%">Qty</StyledTableCell>
                                                    <StyledTableCell align="center" className={`${styles.table_head}`} sx={{ backgroundColor: '#ededed', fontSize: '12px' }}>Price</StyledTableCell>
                                                    <StyledTableCell align="right" className={`${styles.table_head}`} sx={{ backgroundColor: '#ededed', fontSize: '12px' }}>Amount</StyledTableCell>
                                                </StyledTableRow>
                                            </TableHead>
                                            <TableBody>
                                                {supplier_po_details.map((row, index) => (
                                                    <StyledTableRow key={row.sr_no}>
                                                        <StyledTableCell align="left">
                                                            <Box style={{ display: 'flex', justifyContent: 'center' }}>
                                                                {index === 0 ? (
                                                                    <IconButton disabled size="small" style={{ fontSize: '12px', color: 'red' }}>
                                                                        <CloseIcon sx={{ color: '#c0c0c0', fontSize: '18px' }} />
                                                                    </IconButton>
                                                                ) : (
                                                                    <IconButton size="small" onClick={() => handleRemoveSPQuotation(row.sr_no)} style={{ fontSize: '12px', color: 'red' }}>
                                                                        <CloseIcon sx={{ fontSize: '18px' }} />
                                                                    </IconButton>
                                                                )}
                                                            </Box>
                                                        </StyledTableCell>

                                                        <StyledTableCell align="left">
                                                            <HMinput size="small" variant="standard" InputProps={{ disableUnderline: true }} type="text" name="sr_no" value={row.sr_no || index + 1} />
                                                        </StyledTableCell>

                                                        <StyledTableCell align="left">
                                                            <HMinput size="small" variant="standard" InputProps={{ disableUnderline: true }} type="text" name="item_name" value={row.item_name} onChange={(e) => handleChangeInput(e, index)} />
                                                        </StyledTableCell>

                                                        <StyledTableCell align="center">
                                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                                <IconButton
                                                                    size="small"
                                                                    onClick={() => handleChangeQuantity(index, 'decrement')}
                                                                    sx={{ fontSize: '16px', color: '#1b52d1' }}
                                                                >
                                                                    -  {/* <RemoveIcon sx={{ fontSize: '16px' }} /> */}
                                                                </IconButton>

                                                                <HMinputNo
                                                                    size="small"
                                                                    variant="standard"
                                                                    InputProps={{ disableUnderline: true }}
                                                                    type="number"
                                                                    name="quantity"
                                                                    value={row.quantity}
                                                                    onChange={(e) => handleChangeInput(e, index)} // Input change handler (for typing)
                                                                    sx={{ width: '30%', textAlign: 'center' }} // Style to center the input
                                                                />

                                                                <IconButton
                                                                    size="small"
                                                                    onClick={() => handleChangeQuantity(index, 'increment')}
                                                                    sx={{ fontSize: '12px', color: '#1b52d1' }}
                                                                >
                                                                    <AddIcon sx={{ fontSize: '12px' }} />
                                                                </IconButton>
                                                            </div>
                                                            {/* <HMinputNo size="small" variant="standard" InputProps={{ disableUnderline: true }} type="number" name="quantity" value={row.quantity} onChange={(e) => handleChangeInput(e, index)} /> */}
                                                        </StyledTableCell>

                                                        <StyledTableCell align="center">
                                                            <HMinputNo size="small" variant="standard" InputProps={{ disableUnderline: true }} type="number" name="item_price" value={row.item_price} onChange={(e) => handleChangeInput(e, index)} />
                                                        </StyledTableCell>

                                                        <StyledTableCell align="right">
                                                            <HMinputNo size="small" variant="standard" type="number" name="total" value={parseFloat(row.total).toFixed(2)} InputProps={{ readOnly: true, disableUnderline: true }} onChange={(e) => handleChangeInput(e, index)} />
                                                        </StyledTableCell>
                                                    </StyledTableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>

                                    <Box sx={{ p: 2 }}>
                                        {/* Row 1: Total Amount */}
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Total Amount</Typography>
                                            {/* <HMinputNo
                                                sx={{
                                                    paddingLeft: '16px',
                                                    "& .MuiInputBase-root": {
                                                        "& input": {
                                                            textAlign: "right",
                                                            fontSize: '12px'
                                                        }
                                                    }
                                                }}
                                                variant="standard"
                                                required
                                                type="number"
                                                name="total"
                                                size='small'
                                                onChange={handleChange}
                                                value={parseFloat(total).toFixed(2)}
                                                InputProps={{
                                                    disableUnderline: true,
                                                }}
                                            /> */}
                                            <Typography variant="h6" sx={{ color: 'green' }}>₹{parseFloat(total).toFixed(2)}</Typography>
                                        </Box>

                                        {/* Row 2: Buttons */}
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Button variant="contained" color="primary" sx={{ flex: 1, marginRight: 1 }}>
                                                Save
                                            </Button>
                                            {/* <button onClick={handleSaveAndPrint}>Save and Print Bill</button> */}

                                            <ReactToPrint
                                                trigger={() => <Button variant="contained" color="primary" sx={{ flex: 1, marginRight: 1 }}>
                                                    Save and Print
                                                </Button>}  // Print trigger button
                                                content={() => printRef.current}  // Use the ref here
                                            />
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

                    <div style={{ display: 'none' }}>
                        <PrintOrder ref={printRef} tableInfo={tableInfo} />
                    </div>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        open={open}
                        autoHideDuration={4000}
                        onClose={handleClose}
                    >
                        {/* Use the Alert component with severity="warning" */}
                        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                            {itemMsg}
                        </Alert>
                    </Snackbar>
                </Paper>
            </div>
        </>
    )
}
export default Order;