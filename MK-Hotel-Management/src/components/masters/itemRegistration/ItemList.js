import React, { useEffect, useState, forwardRef, useRef } from "react";
import {
    Box, Button, Grid, Dialog, DialogTitle, TextField, DialogActions, Container, Popover,
    TablePagination, Typography, InputAdornment, IconButton, Tooltip, DialogContent, Divider, Snackbar, AppBar,
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableBody
} from '@mui/material';
import styles from '.././../../styles.module.css';
import { BootstrapDialog, BootstrapDialogTitle, Breadcrumb, DeleteDialog, ExcelDownload, HandleSort, StyledTableCell, StyledTableRow } from "../../reusableComponent/reusableMethods";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state";
import { SearchOutlined } from "@mui/icons-material";
import ItemAdd from "./ItemAdd";

const ItemList = () => {

    const dispatch = useDispatch();
    const [successMessage, setSuccessMessage] = useState(null);

    let ref = useRef();
    const login_details = sessionStorage.getItem('loginUser');
    const userD = JSON.parse(login_details);
    // const userInfo = userD.userInfo;

    const [openPopup, setOpenPopup] = React.useState(false);
    const [info, setInfo] = useState({});
    const [openOption, setOpenOption] = useState('');
    const fileInputRef = useRef(null);

    const handleClickOpenPopup = (info) => {
        setInfo(info);
        setOpenPopup(true);
        setOpenOption(info.id ? 'BankUpdate' : 'BankAdd')

    };
    const handleClickOpenPopupAdd = () => {
        setInfo(undefined);
        setOpenPopup(true);
        setOpenOption('BankAdd')

    };
    const tableRef = useRef(null);
    const [rowsPerPage, setRowsPerPage] = React.useState(10)
    const [page, setPage] = React.useState(0)
    const [open, setOpen] = React.useState();
    const handleClickOpen = () => {
        setOpen(true);

    };
    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    const [isLoaded, setIsLoaded] = useState(false);

    const [q, setQ] = useState("");
    const [searchParam] = useState(["item_category"]);

    const fields = ['id', "item_category",];
    const labels = ['Id', "item_category",];

    const [isDelete, setIsDelete] = useState(false);
    const [deleteInfo, setDeleteInfo] = useState();
    const rows = [
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
    // const rows = useSelector(state => state.bank.bank)
    // const fetchData = () => {
    //     dispatch(getBankList({ companyId: userInfo.companyId }))
    // };
    useEffect(() => {
        // fetchData()
    }, []);
    const [deleteMessage, setDeleteMessage] = useState(null);
    const [shouldShowMsg, setShouldShowMsg] = useState(false);
    // const responseMessage = useSelector(state => state.bank.message);
    const responseMessage = 'test msg ';
    useEffect(() => {
        if (responseMessage) {
            setShouldShowMsg(true);
        }
    }, [responseMessage, dispatch]);

    useEffect(() => {
        if (shouldShowMsg) {
            if (responseMessage !== null) {
                if (responseMessage === 'Account number already available!') {
                    setOpenPopup(true);
                    setSuccessMessage(responseMessage)
                    setShouldShowMsg(false);
                    dispatch({ type: 'RESET_MESSAGE' });
                } else {
                    setSuccessMessage(responseMessage);
                    setShouldShowMsg(false);
                    dispatch({ type: 'RESET_MESSAGE' }); // Dispatch an action to reset the message
                    // fetchData();
                    setIsDelete(false);
                    // setOpenPopup(false);
                }
            }
        }
    }, [shouldShowMsg, responseMessage,
        // fetchData
    ]);



    const deleteRecord = (id) => {
        // dispatch(editDeleteBank({ id: deleteInfo.id, modifiedBy: userInfo.userId, modifiedAt: dateConversionOnEntryPage(new Date()), changedUpdatedValue: 'delete' }))
        setIsDelete(false);
        // fetchData()
    }

    const handleDelete = (functions) => {
        setIsDelete(true);
        setDeleteInfo(functions);
        setOpen(false);
    }

    const handleClose = (event, reason) => {
        setIsDelete(false)
        setDeleteInfo(null);
        setOpen(false);
        setOpenPopup(false);
    };

    function search() {
        return rows && rows.filter((item) => {
            return searchParam.some((newItem) => {
                return (
                    item[newItem] && item[newItem]
                        // .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                );
            });
        });
    }
    const [sortBy, setSortBy] = useState(null);
    const handleSort = (property) => {
        const isAsc = sortBy === property && sortBy !== null;
        setSortBy(isAsc ? property + '_desc' : property);
        rows.sort((a, b) => {
            if (typeof a[property] === 'number' && typeof b[property] === 'number') {
                return isAsc ? a[property] - b[property] : b[property] - a[property];
            } else {
                return isAsc ? a[property].localeCompare(b[property]) : b[property].localeCompare(a[property]);
            }
        });
    };
    const handleCloseSuccessMsg = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSuccessMessage(false)
    };

    const actionMsg = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleCloseSuccessMsg}>
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <>


            <Paper className={`${styles.list_container}`}>
                <Breadcrumb
                    routeSegments={[
                        { name: 'Masters', path: '/masters/' },
                        { name: 'Items' },
                    ]}
                />
                <Box sx={{ display: 'flex' }}>
                    <Grid container spacing={0.2} sx={{ pt: 0.5, pb: 0.5 }}>
                        <Grid item md={7} xs={12}>

                        </Grid>
                        <Grid item md={5} xs={12} style={{ display: 'flex', }}>
                            <Box className={`${styles.excel_box}`}>
                                <ExcelDownload
                                    data={rows}
                                    fields={fields}
                                    labels={labels}
                                    filename="Item List"
                                />
                            </Box>
                            <TextField
                                fullWidth
                                sx={{
                                    "& .MuiInputBase-root": {
                                        height: 25,
                                        fontSize: '11px',
                                        paddingLeft: '1px',
                                    }
                                }}
                                type="search"
                                name="search"
                                placeholder="Search"
                                value={q}
                                size="small"
                                onChange={(e) => setQ(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start" >
                                            <IconButton sx={{ padding: '4px' }}>
                                                <SearchOutlined className={`${styles.search_icon}`} />
                                                <Divider orientation="vertical" flexItem />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <Button variant="contained" className={`${styles.add_btn}`} onClick={handleClickOpenPopupAdd}>
                                <AddIcon viewBox="3 3 18 18" className={`${styles.add_icon}`} /> Create New
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                <TableContainer component={Paper} className={`${styles.list_tbl_container}`}>
                    <Table size="small" stickyHeader>
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell align="center" className={`${styles.table_head}`}>Action</StyledTableCell>
                                <StyledTableCell align="center" className={`${styles.table_head}`} onClick={() => HandleSort('item_category')}>Item Category <span className={`${styles.sort_icon}`}> {sortBy === 'item_category' ? '▲' : '▼'} </span></StyledTableCell>
                                <StyledTableCell align="center" className={`${styles.table_head}`} onClick={() => HandleSort('item_type')}>Item Type <span className={`${styles.sort_icon}`}> {sortBy === 'item_type' ? '▲' : '▼'} </span></StyledTableCell>
                                <StyledTableCell align="center" className={`${styles.table_head}`} onClick={() => HandleSort('item_name')}>Item Name <span className={`${styles.sort_icon}`}> {sortBy === 'item_name' ? '▲' : '▼'} </span></StyledTableCell>
                                <StyledTableCell align="center" className={`${styles.table_head}`} onClick={() => HandleSort('item_price')}>Item Price <span className={`${styles.sort_icon}`}> {sortBy === 'item_price' ? '▲' : '▼'} </span></StyledTableCell>
                                <StyledTableCell align="center" className={`${styles.table_head}`} onClick={() => HandleSort('item_image')}>Item Image <span className={`${styles.sort_icon}`}> {sortBy === 'item_image' ? '▲' : '▼'} </span></StyledTableCell>
                                <StyledTableCell align="center" className={`${styles.table_head}`} onClick={() => HandleSort('status')}>Status <span className={`${styles.sort_icon}`}> {sortBy === 'status' ? '▲' : '▼'} </span></StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {rows && search(rows)
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => (
                                    <StyledTableRow
                                        key={row.item_name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <StyledTableCell align="center">
                                            <PopupState variant="popover" popupId="demo-popup-popover">
                                                {(popupState) => (
                                                    <div>
                                                        <MoreHorizIcon
                                                            id={styles.actionBtn}
                                                            alt="translator"
                                                            variant="contained"
                                                            {...bindTrigger(popupState)}
                                                        />
                                                        <Popover
                                                            {...bindPopover(popupState)}
                                                            anchorOrigin={{
                                                                vertical: "right",
                                                                horizontal: "center"
                                                            }}
                                                            transformOrigin={{
                                                                vertical: "right",
                                                                horizontal: "center"
                                                            }}
                                                        >
                                                            <Container className={`${styles.tbl_action}`}>
                                                                <>
                                                                    <Button className={`${styles.list_tbl_action_btn}`} onClick={() => { handleClickOpenPopup(row); popupState.close() }}>
                                                                        <EditIcon style={{ float: 'left', fontSize: '20px', cursor: 'pointer' }} />
                                                                        <span style={{ marginRight: '13px' }}> Edit Record</span>
                                                                    </Button>
                                                                    <Button className={`${styles.list_tbl_action_btn}`} onClick={() => { handleDelete(row); popupState.close() }}>
                                                                        <DeleteForeverIcon style={{ float: 'left', fontSize: '20px', cursor: 'pointer' }} /> Delete Record
                                                                    </Button>
                                                                </>
                                                            </Container>
                                                        </Popover>
                                                    </div>
                                                )}
                                            </PopupState>
                                        </StyledTableCell>
                                        <StyledTableCell align="center" className={`${styles.list_table_body}`}>{row.item_category}</StyledTableCell>
                                        <StyledTableCell align="center" className={`${styles.list_table_body}`}>{row.item_type}</StyledTableCell>
                                        <StyledTableCell align="center" className={`${styles.list_table_body}`}>{row.item_name}</StyledTableCell>
                                        <StyledTableCell align="center" className={`${styles.list_table_body}`}>{row.item_half_price ? `$${row.item_half_price}` : 'N/A'}</StyledTableCell>
                                        <StyledTableCell align="center" className={`${styles.list_table_body}`}><img src={row.item_image} alt={row.item_name} style={{ width: '50px', height: '50px' }} /></StyledTableCell>
                                        <StyledTableCell align="center" className={`${styles.list_table_body}`}>{row.status}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    sx={{ px: 2 }}
                    rowsPerPageOptions={[10, 25, 50, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <DeleteDialog
                open={isDelete}
                handleClose={handleClose}
                deleteInfo={deleteInfo}
                deleteRecord={deleteRecord}
                deleteID={deleteInfo?.id || null}
                displayName={deleteInfo?.item_name || ''}
            />
            <BootstrapDialog
                PaperProps={{
                    sx: {
                        width: {
                            xs: '90%',  // For extra-small screens (mobile)
                            sm: '80%',  // For small screens (tablets)
                            md: '50%',  // For medium screens (laptops)
                            lg: '40%',  // For large screens (desktops)
                        },
                        maxWidth: '90%',
                        maxHeight: 600,
                        minWidth: '30%',
                        minHeight: 160,
                    },
                }}
                onClose={handleClose}
                open={openPopup}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} >
                    {openOption === 'BankAdd' && 'Create Item'}
                    {openOption === 'BankUpdate' && 'Update Item'}
                </BootstrapDialogTitle>
                <DialogContent dividers >
                    <ItemAdd handleCloseDialog={handleClose} details={info}
                    // onAPISubmt={fetchData} 
                    />
                </DialogContent>
            </BootstrapDialog>
            {/* {successMessage &&
                <Snackbar
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    open={successMessage ? true : false}
                    autoHideDuration={2000}
                    onClose={handleCloseSuccessMsg}
                    message={successMessage}
                    action={actionMsg}
                />
            } */}
        </>
    )
}
export default ItemList;