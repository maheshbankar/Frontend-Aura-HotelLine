import { styled } from '@mui/material/styles';
import { Autocomplete, Box, Breadcrumbs, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, InputAdornment, TableRow, TextField, Tooltip, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CloseIcon from '@mui/icons-material/Close';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SimCardDownloadTwoToneIcon from '@mui/icons-material/SimCardDownloadTwoTone';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import styles from './../../styles.module.css';
import * as XLSX from 'xlsx';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchOutlined } from '@mui/icons-material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Popover from '@mui/material/Popover';
import Container from '@mui/material/Container';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import AddIcon from '@mui/icons-material/Add';

// TL TextField 
export const HMinput = styled(TextField)(() => ({
    "& .MuiInputBase-root": {
        height: 25,
        fontSize: 12,
    },
}));

export const HMAutocomplete = styled(Autocomplete)(() => ({
    "& .MuiInputBase-root": {
        height: 25,
        fontSize: 12,
    },
}));

export const HMinputNo = styled(TextField)(() => ({
    "& .MuiInputBase-root": {
        height: 25,
        "& input": {
            textAlign: "right",
            fontSize: '12px',
        }
    },
    '& input[type=number]': {
        '-moz-appearance': 'textfield'
    },
    '& input[type=number]::-webkit-outer-spin-button': {
        '-webkit-appearance': 'none',
    },
    '& input[type=number]::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
    }
}));
// Search Input field
export const SearchInput = ({ value, onChange }) => {
    return (
        <HMinput
            fullWidth
            type="search"
            name="searchKey"
            placeholder='Search'
            value={value}
            size='small'
            onChange={onChange}
            sx={{
                "& .MuiInputBase-root": {
                    paddingLeft: '1px',
                }
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start" >
                        <IconButton sx={{ padding: '4px' }}>
                            <SearchOutlined sx={{ fontSize: '22px', marginRight: '4px' }} />
                            <Divider orientation="vertical" flexItem />
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    );
};

// Back & Cancel Button 
export const BackBtn = () => {
    let navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    }
    return (
        <Button onClick={() => handleBack()}
            style={{ padding: '1px', color: '#00527c', cursor: 'pointer', fontFamily: 'Roboto","Helvetica","Arial",sans-serif', fontSize: '12px' }}>
            <ArrowLeftIcon viewBox="0 0 4 24" icon="icon-park-twotone:back" style={{ color: '#00527c', marginRight: '5px' }} />
            Back
        </Button>
    );
};

export const Cancel = () => {
    let navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    }
    return (
        <Button onClick={() => handleBack()} id={`${styles.btn_cancel}`}
            style={{ backgroundColor: '#e02a1d', color: '#ffffff', float: 'right', marginLeft: '5px', cursor: 'pointer', fontFamily: 'Roboto","Helvetica","Arial",sans-serif', fontSize: '15px' }}>
            <CancelOutlinedIcon style={{ fontSize: '16px', marginRight: '8px' }} />
            Cancel
        </Button>
    );
};

// Dialog Popup 
export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        paddingLeft: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export const BootstrapDialogTitle = (props) => {
    const { children, onClose, onClick, ...other } = props;
    return (
        <DialogTitle sx={{ m: 0, p: 0.7, backgroundColor: '#00527c', color: '#ffff', float: 'left', fontSize: '15px', textTransform: 'uppercase', height: '36px' }} {...other} >
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        right: 8,
                        top: 0,
                        p: 0.5,
                        float: 'right'
                    }}
                >
                    <CloseIcon style={{ height: '18px', color: '#ffffff' }} />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

// Breadcrumb
export const Breadcrumb = ({ routeSegments }) => {
    return (
        <div position="static" className={`${styles.bredcrum}`}>
            <Box className={`${styles.bredcrum_in}`}>
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="smaller" />}
                    sx={{ fontSize: '12px' }}
                >
                    <NavLink to="/admin/dashboard" style={{ textDecoration: 'none' }}>
                        <span style={{ color: '#8c8c8c', fontWeight: 'bold' }}> Dashboard</span>
                    </NavLink>
                    {routeSegments
                        ? routeSegments.map((route, index) => {
                            return index !== routeSegments.length - 1 ? (
                                <NavLink key={index} to={route.path} style={{ textDecoration: 'none' }}>
                                    <span style={{ color: '#8c8c8c', fontWeight: 'bold' }}>
                                        {route.name}
                                    </span>
                                </NavLink>
                            ) : (
                                <span key={index} style={{ color: '#0783db', fontWeight: 'bold' }}>
                                    {route.name}
                                </span>
                            )
                        })
                        : null}
                </Breadcrumbs>
                <BackBtn />
            </Box>
        </div>
    )
}

// convert String into title case 
export const ConvertStringIntoTitleCase = (str) => {
    return str && str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

// convert number into words 
export const ConvertToIndianWords = (inputNumber, outputControl) => {
    var str = new String(inputNumber)
    var splt = str.split("");
    var rev = splt.reverse();
    var once = ['Zero', ' One', ' Two', ' Three', ' Four', ' Five', ' Six', ' Seven', ' Eight', ' Nine'];
    var twos = ['Ten', ' Eleven', ' Twelve', ' Thirteen', ' Fourteen', ' Fifteen', ' Sixteen', ' Seventeen', ' Eighteen', ' Nineteen'];
    var tens = ['', 'Ten', ' Twenty', ' Thirty', ' Forty', ' Fifty', ' Sixty', ' Seventy', ' Eighty', ' Ninety'];

    var numLength = rev.length;
    var word = new Array();
    var j = 0;

    for (var i = 0; i < numLength; i++) {
        switch (i) {

            case 0:
                if ((rev[i] == 0) || (rev[i + 1] == 1)) {
                    word[j] = '';
                }
                else {
                    word[j] = '' + once[rev[i]];
                }
                word[j] = word[j];
                break;

            case 1:
                aboveTens();
                break;

            case 2:
                if (rev[i] == 0) {
                    word[j] = '';
                }
                else if ((rev[i - 1] == 0) || (rev[i - 2] == 0)) {
                    word[j] = once[rev[i]] + " Hundred ";
                }
                else {
                    word[j] = once[rev[i]] + " Hundred and";
                }
                break;

            case 3:
                if (rev[i] == 0 || rev[i + 1] == 1) {
                    word[j] = '';
                }
                else {
                    word[j] = once[rev[i]];
                }
                if ((rev[i + 1] != 0) || (rev[i] > 0)) {
                    word[j] = word[j] + " Thousand";
                }
                break;


            case 4:
                aboveTens();
                break;

            case 5:
                if ((rev[i] == 0) || (rev[i + 1] == 1)) {
                    word[j] = '';
                }
                else {
                    word[j] = once[rev[i]];
                }
                if (rev[i + 1] !== '0' || rev[i] > '0') {
                    word[j] = word[j] + " Lakh";
                }

                break;

            case 6:
                aboveTens();
                break;

            case 7:
                if ((rev[i] == 0) || (rev[i + 1] == 1)) {
                    word[j] = '';
                }
                else {
                    word[j] = once[rev[i]];
                }
                if (rev[i + 1] !== '0' || rev[i] > '0') {
                    word[j] = word[j] + " Crore";
                }
                break;

            case 8:
                aboveTens();
                break;
            default: break;
        }
        j++;
    }

    function aboveTens() {
        if (rev[i] == 0) { word[j] = ''; }
        else if (rev[i] == 1) { word[j] = twos[rev[i - 1]]; }
        else { word[j] = tens[rev[i]]; }
    }

    word.reverse();
    var finalOutput = '';
    for (i = 0; i < numLength; i++) {
        finalOutput = finalOutput + word[i];
    }
    return finalOutput;
}

// date format yyyy-mm-dd 
export const DateConversionOnEntryPage = (date) => {
    var today = new Date(date);
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    const convDate = yyyy + "-" + mm + "-" + dd;
    return convDate;
};

// date format with time yyyy-mm-dd hh:mm:ss 
export const DateConversionOnEntryPageWithTime = (date) => {
    var today = new Date(date);
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    var hh = String(today.getHours()).padStart(2, "0");
    var min = String(today.getMinutes()).padStart(2, "0");
    var ss = String(today.getSeconds()).padStart(2, "0");
    const convDate = `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;
    return convDate;
};

// date conversion 
export const DateConversion = (date) => {
    var today = new Date(date);
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    const convDate = dd + "/" + mm + "/" + yyyy;
    return convDate;
};

export const ExcelDownload = ({ data, fields, labels, filename }) => {

    const formatDate = (dateString) => {
        const dateObj = new Date(dateString);
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const day = String(dateObj.getDate()).padStart(2, '0');
        return `${month}/${day}/${year}`;
    };

    const downloadExcel = () => {
        const formattedData = data.map((item) => {
            const rowData = {};
            fields.forEach((field, index) => {
                const fieldParts = field.split(' (');
                if (fieldParts.length > 1) {
                    const mainField = fieldParts[0];
                    const subField = fieldParts[1].substring(0, fieldParts[1].length - 1);
                    rowData[labels[index]] = `${item[mainField]} (${item[subField]})`;
                } else {
                    // Check if the field is a date and format it accordingly
                    if (item[field] instanceof Date) {
                        rowData[labels[index]] = formatDate(item[field]);
                    } else {
                        rowData[labels[index]] = item[field];
                    }
                }
            });
            return rowData;
        });

        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet 1');
        XLSX.writeFile(workbook, `${filename}.xlsx`);
    };

    return (
        <Tooltip title="Download Excel File" >
            <SimCardDownloadTwoToneIcon onClick={downloadExcel} />
            {/* <span onClick={downloadExcel}> <img src={download_excel} style={{ height: "20px", width: "20" }} />  </span> */}
            {/* <Icon icon="vscode-icons:file-type-excel2" onClick={downloadExcel} width="16" height="16" /> */}
        </Tooltip>
    );
};

// Search 
export function Search(rows, searchParam, q) {
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

// sort
export function HandleSort(property, sortBy, setSortBy, rows) {
    const isAsc = sortBy === property && sortBy !== null;
    setSortBy(isAsc ? property + '_desc' : property);
    rows.sort((a, b) => {
        if (typeof a[property] === 'number' && typeof b[property] === 'number') {
            return isAsc ? a[property] - b[property] : b[property] - a[property];
        } else {
            return isAsc ? a[property].localeCompare(b[property]) : b[property].localeCompare(a[property]);
        }
    });
}

// table 
export const StyledTableRow = styled(TableRow)(() => ({
    // '&:nth-of-type(even)': {
    //     backgroundColor: 'whitesmoke',
    // },
    '&:hover': {
        backgroundColor: 'whitesmoke',
    },

    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        borderTop: '1px solid #A9A9A9 !important',
        borderBottom: '1px solid #A9A9A9 !important',
        backgroundColor: '#fff',
        color: '#000',
        fontSize: 12,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 10,
        padding: '2px 4px 2px 4px'
    },
}));

export const StyledTableCellPrint = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        borderTop: '1px solid #616161 !important',
        borderBottom: '1px solid #616161 !important',
        fontSize: 12,
    },
    [`&.${tableCellClasses.body}`]: {
        borderTop: '1px solid #616161',
        borderBottom: '1px solid #616161',
        fontSize: 10,
        padding: '2px 4px 2px 4px !important',
    },
}));

// Snackbar Close 
export const HandleCloseSnackbar = (event, reason, setSuccessMessage) => {
    if (reason === 'clickaway') {
        return;
    }
    setSuccessMessage(false);
}

// Snackbar Action Close
export const ActionMsg = (setSuccessMessage) => {
    return (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={(event, reason) => HandleCloseSnackbar(event, reason, setSuccessMessage)}
            >
                <CloseIcon fontSize="small" style={{ color: '#fff' }} />
            </IconButton>
        </React.Fragment>
    )
}

// Delete Dialog
export const DeleteDialog = ({ open, handleClose, deleteInfo, deleteRecord, deleteID, displayName }) => {
    if (deleteInfo) {
        return (
            <Dialog
                open={open}
                PaperProps={{
                    sx: {
                        minWidth: "30%",
                        minHeight: "20%",
                        borderRadius: '8px'
                    }
                }}
            >
                <DialogTitle>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            right: 0,
                            top: 0,
                            float: 'right'
                        }}
                    >
                        <CloseIcon style={{ height: '18px', color: '#000000' }} />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <HighlightOffOutlinedIcon sx={{ fontSize: '90px', color: '#ff3c36', fontWeight: 400 }} />
                    <Typography sx={{ fontSize: '37px' }}>Are You Sure?</Typography>
                    {deleteInfo && (
                        <>
                            <Typography sx={{ fontSize: '37px' }}>
                                Do you really want to delete these records? #{displayName}
                            </Typography>
                        </>
                    )}
                </DialogContent>
                <DialogActions sx={{ padding: '10px' }}>
                    <Button onClick={handleClose} variant='outlined'>
                        No
                    </Button>
                    <Button onClick={() => deleteRecord(deleteID)} variant='outlined'>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
};

// Response Message Set
export const useMessageHandler = (fetchDataCallback, navigate, setSuccessMessage, responseMessage) => {
    const [shouldShowMsg, setShouldShowMsg] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (responseMessage) {
            setShouldShowMsg(true);
        }
    }, [responseMessage, dispatch]);

    useEffect(() => {
        if (shouldShowMsg) {
            if (responseMessage !== null) {
                if (responseMessage === 'Record already exists!') {
                    setSuccessMessage(responseMessage);
                    setShouldShowMsg(true);
                    dispatch({ type: 'RESET_MESSAGE' });
                    setTimeout(() => {
                        setSuccessMessage(null)
                    }, 1500)
                } else {
                    if (navigate === null) {
                        setSuccessMessage(responseMessage);
                        setShouldShowMsg(true);
                        dispatch({ type: 'RESET_MESSAGE' });
                        fetchDataCallback()
                    } else {
                        setShouldShowMsg(true);
                        navigate(-1, { responseMessage });
                    }
                }
            }
        }
    }, [shouldShowMsg, responseMessage, fetchDataCallback]);

    return {
        shouldShowMsg,
        responseMessage,
    };
};


//   Custom PopOver For Table
export const CustomePopover = ({ row, handleDelete, linkTo }) => {
    return (
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
                                <NavLink to={{ pathname: linkTo }} state={row} className={`${styles.underline}`}>
                                    <Button className={`${styles.list_tbl_action_btn}`}>
                                        <EditIcon style={{ float: 'left', fontSize: '20px', cursor: 'pointer' }} />
                                        <span style={{ marginRight: '13px' }}> Edit Record</span> </Button>
                                </NavLink>
                                <Button className={`${styles.list_tbl_action_btn}`} onClick={() => { handleDelete(row); popupState.close() }}>
                                    <DeleteForeverOutlinedIcon /> Delete Record</Button>
                            </>
                        </Container>
                    </Popover>
                </div>
            )}
        </PopupState>
    );
}



//   Add Button 

export const AddButton = ({ to, label }) => {
    return (
        <NavLink to={{ pathname: to }}>
            <Button variant="outlined" className={styles.add_btn}>
                <AddIcon viewBox="3 3 18 18" className={styles.add_icon} />
                {label}
            </Button>
        </NavLink>
    );
}
