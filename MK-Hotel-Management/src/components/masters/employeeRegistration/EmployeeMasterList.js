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
import { BootstrapDialog, BootstrapDialogTitle, Breadcrumb, ExcelDownload, HandleSort, StyledTableCell, StyledTableRow } from "../../reusableComponent/reusableMethods";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state";
import { SearchOutlined } from "@mui/icons-material";
import EmployeeMasterAdd from "./EmployeeMasterAdd";

const EmployeeMasterList = () => {

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
    const [searchParam] = useState([
        "employee_name", 
        "employee_address", 
        "employee_contact_no", 
        "employee_id_card", 
        "status", 
        "employee_type"
      ]);

    const fields = ['id', 'employee_name', 'employee_address', 'employee_contact_no', 'employee_id_card', 'status', 'employee_type'];
    const labels = ['ID', 'Employee Name', 'Employee Address', 'Employee Contact No', 'Employee ID Card', 'Status', 'Employee Type'];

    const [isDelete, setIsDelete] = useState(false);
    const [deleteInfo, setDeleteInfo] = useState();
    const rows = [
        {
          id: 1,
          employee_name: 'John Doe',
          employee_address: '1234 Elm St, Springfield, IL',
          employee_contact_no: '555-1234',
          employee_id_card: 'ID12345',
          status: 'Active',
          employee_type: 'Full-time',
        },
        {
          id: 2,
          employee_name: 'Jane Smith',
          employee_address: '5678 Oak Rd, Springfield, IL',
          employee_contact_no: '555-5678',
          employee_id_card: 'ID12346',
          status: 'Inactive',
          employee_type: 'Part-time',
        },
        {
          id: 3,
          employee_name: 'Alice Johnson',
          employee_address: '9101 Maple Ave, Springfield, IL',
          employee_contact_no: '555-9101',
          employee_id_card: 'ID12347',
          status: 'Active',
          employee_type: 'Full-time',
        },
        {
          id: 4,
          employee_name: 'Bob Brown',
          employee_address: '1122 Pine Blvd, Springfield, IL',
          employee_contact_no: '555-1122',
          employee_id_card: 'ID12348',
          status: 'Active',
          employee_type: 'Contractor',
        },
        {
          id: 5,
          employee_name: 'Charlie Davis',
          employee_address: '3344 Birch Ln, Springfield, IL',
          employee_contact_no: '555-3344',
          employee_id_card: 'ID12349',
          status: 'Inactive',
          employee_type: 'Full-time',
        },
        {
          id: 6,
          employee_name: 'David Martinez',
          employee_address: '5566 Cedar Dr, Springfield, IL',
          employee_contact_no: '555-5566',
          employee_id_card: 'ID12350',
          status: 'Active',
          employee_type: 'Part-time',
        },
        {
          id: 7,
          employee_name: 'Eva Wilson',
          employee_address: '7788 Willow Ct, Springfield, IL',
          employee_contact_no: '555-7788',
          employee_id_card: 'ID12351',
          status: 'Active',
          employee_type: 'Full-time',
        },
        {
          id: 8,
          employee_name: 'Frank Miller',
          employee_address: '9900 Redwood St, Springfield, IL',
          employee_contact_no: '555-9900',
          employee_id_card: 'ID12352',
          status: 'Inactive',
          employee_type: 'Contractor',
        },
        {
          id: 9,
          employee_name: 'Grace Lee',
          employee_address: '2233 Fir Ave, Springfield, IL',
          employee_contact_no: '555-2233',
          employee_id_card: 'ID12353',
          status: 'Active',
          employee_type: 'Full-time',
        },
        {
          id: 10,
          employee_name: 'Henry Taylor',
          employee_address: '4455 Cypress Rd, Springfield, IL',
          employee_contact_no: '555-4455',
          employee_id_card: 'ID12354',
          status: 'Inactive',
          employee_type: 'Part-time',
        },
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

    const handleUpload = () => {
        fileInputRef.current.click();
    };

   

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
                        .toString()
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
                    { name: 'Employee' },
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
                                    filename="Bank List"
                                />
                            </Box>
                            <Box className={`${styles.excel_box}`}>
                                {/* <input
                                    ref={fileInputRef}
                                    type="file"
                                    name="file"
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                />
                                <Tooltip title="Upload Excel File">
                                    <span onClick={handleUpload} htmlFor="file-upload"> <img src={upload_excel} style={{ height: "20px", width: "20" }} /> </span>
                                </Tooltip> */}
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
                            {/* <NavLink to={{ pathname: `/masters/add-bank-masters` }} > */}
                                <Button variant="contained" className={`${styles.add_btn}`} onClick={handleClickOpenPopup}>
                                    <AddIcon viewBox="3 3 18 18" className={`${styles.add_icon}`} /> Create New
                                </Button>
                            {/* </NavLink> */}
                        </Grid>
                        <Grid item md={12} >
                            {/* <a href={`${fileDownloadURL}SampleFileBank.csv`}
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                            >
                                <Typography className={`${styles.erp_lable}`} style={{ textDecoration: 'underline', display: 'flex', float: 'right' }}> Download Sample File </Typography>
                            </a> */}
                        </Grid>
                    </Grid>
                </Box>
                <TableContainer component={Paper} className={`${styles.list_tbl_container}`}>
                    <Table size="small" stickyHeader>
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell   align="center" className={`${styles.table_head}`}>Action</StyledTableCell>
                                <StyledTableCell align="center" className={`${styles.table_head}`} onClick={() => HandleSort('employee_type')}>Employee type <span className={`${styles.sort_icon}`}> {sortBy === 'employee_type' ? '▲' : '▼'} </span></StyledTableCell>
                                <StyledTableCell align="center" className={`${styles.table_head}`} onClick={() => HandleSort('employee_name')}>Employee name <span className={`${styles.sort_icon}`}> {sortBy === 'employee_name' ? '▲' : '▼'} </span></StyledTableCell>
                                <StyledTableCell align="center" className={`${styles.table_head}`} onClick={() => HandleSort('employee_contact_no')}>Contact No <span className={`${styles.sort_icon}`}> {sortBy === 'employee_contact_no' ? '▲' : '▼'} </span></StyledTableCell>
                                <StyledTableCell align="center" className={`${styles.table_head}`} onClick={() => HandleSort('employee_address')}>Address <span className={`${styles.sort_icon}`}> {sortBy === 'employee_address' ? '▲' : '▼'} </span></StyledTableCell>
                                <StyledTableCell align="center" className={`${styles.table_head}`} onClick={() => HandleSort('employee_id_card')}>Id Card <span className={`${styles.sort_icon}`}> {sortBy === 'employee_id_card' ? '▲' : '▼'} </span></StyledTableCell>
                                <StyledTableCell align="center" className={`${styles.table_head}`} onClick={() => HandleSort('status')}>Status <span className={`${styles.sort_icon}`}> {sortBy === 'status' ? '▲' : '▼'} </span></StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {rows && search(rows)
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((row, index) => (
                                    <StyledTableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <StyledTableCell align="center" >
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
                                                                   
                                                                        <Button className={`${styles.list_tbl_action_btn}`} onClick={() => {handleClickOpenPopup(row);popupState.close()}}>
                                                                            <EditIcon style={{ float: 'left', fontSize: '20px', cursor: 'pointer' }} />
                                                                            <span style={{ marginRight: '13px' }}> Edit Record</span> </Button> 
                                                                    <Button className={`${styles.list_tbl_action_btn}`} onClick={() => { handleDelete(row); popupState.close() }}>
                                                                        {/* <Icon icon="ic:baseline-delete-forever" color="#c70000" width="20" height="20" />  */}
                                                                       <DeleteForeverIcon style={{ float: 'left', fontSize: '20px', cursor: 'pointer' }}/>  Delete Record</Button>
                                                                </>
                                                            </Container>
                                                        </Popover>
                                                    </div>
                                                )}
                                            </PopupState>
                                        </StyledTableCell>
                                        <StyledTableCell align="center" className={`${styles.list_table_body}`}>{row.employee_type}</StyledTableCell>
                                        <StyledTableCell align="center" className={`${styles.list_table_body}`}>{row.employee_name}</StyledTableCell>
                                        <StyledTableCell align="center" className={`${styles.list_table_body}`}>{row.employee_contact_no}</StyledTableCell>
                                        <StyledTableCell align="center" className={`${styles.list_table_body}`}>{row.employee_address}</StyledTableCell>
                                        <StyledTableCell align="center" className={`${styles.list_table_body}`}>{row.employee_id_card}</StyledTableCell>
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
            <Dialog open={isDelete}
                PaperProps={{
                    sx: {
                        minWidth: "35%",
                        minHeight: "22%",
                        borderRadius: '8px'
                    }
                }}>
                <DialogTitle className={`${styles.dilog_delete_title}`}>
                    Confirm Delete The Record?
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            right: 0,
                            top: 0,
                            float: 'right'
                        }} >
                        <CloseIcon style={{ height: '18px', color: '#000000' }} />
                    </IconButton>
                </DialogTitle>
                <DialogContent className={`${styles.dilog_delete_content}`}>
                    The BillCube will remove this record # {deleteInfo && deleteInfo.item_category}
                </DialogContent>
                <DialogActions sx={{ padding: '10px', }}>
                    <Button onClick={handleClose} className={`${styles.dilog_delete_no_btn}`} variant='outlined'>
                        No
                    </Button>
                    <Button onClick={() => deleteRecord(deleteInfo.id)} className={`${styles.dilog_delete_yes_btn}`} variant='outlined'>
                        Yes
                    </Button>
                </DialogActions> 
            </Dialog>
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
                    {openOption === 'BankAdd' && 'Create Employee'}
                    {openOption === 'BankUpdate' && 'Update Employee'}
                </BootstrapDialogTitle>
                <DialogContent dividers >
                    <EmployeeMasterAdd handleCloseDialog={handleClose} details={info} 
                    // onAPISubmt={fetchData} 
                    />
                </DialogContent>
            </BootstrapDialog>

            {/* {deleteMessage &&
                <DeleteSnackbar
                    open={deleteMessage ? true : false}
                    message={deleteMessage}
                />
            } */}

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
export default EmployeeMasterList;