import React from "react";
import { MenuList, MenuItem, Box, Button, Grid, Typography, List, ListSubheader, ListItemButton, ListItemText, ListItem } from '@mui/material';


const AuraMenuList = () => {
    const menuStyles = {
        paddingLeft: '10px',
        lineHeight: '8px',
        fontSize: '12px',          // Font size of 10px
        color: 'white',
        // Default text color
        '&:hover': {
            color: '#f5b400',         // Text color on hover
        },
    };
    const topMenuStyles = {

        fontSize: '17px',          // Font size of 10px
        color: 'white',
        // '&:hover': {
        //     color: '#f5b400',        
        // },
    };
    const utiMenuStyles = {
        paddingLeft: '10px',
        // lineHeight:'8px',
        fontSize: '12px',          // Font size of 10px
        color: '#f5b400',
        borderBottom: '1px solid #ffffff',
        // Default text color
        '&:hover': {
            color: '#f5b400',         // Text color on hover
        },
    };
    return (
        <>
            <Grid container spacing={1} >
                <Grid item xs={2} sx={{borderRight:'1px solid #a6a7ab'}}>
                    <List
                        sx={{ width: '100%', maxWidth: 360, }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                    >
                        <ListItem disablePadding>
                            <ListItemText
                                primary={
                                    <Typography sx={{color:'#ffffff'}}>
                                        NEW
                                    </Typography>
                                }
                            />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText
                                primary={
                                    <Typography sx={{color:'#a6a7ab'}}>
                                        SELECT
                                    </Typography>
                                }
                            />
                        </ListItem>

                    </List>
                </Grid>
                <Grid item xs={10} >
                    <Grid container spacing={2} >
                        <Grid item xs={3} >
                            <Typography sx={topMenuStyles}>Masters </Typography>

                            <List
                                sx={{ width: '100%', maxWidth: 360, borderBottom: '1px solid #ffffff' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                    <ListSubheader sx={{
                                        padding: '0px',
                                        backgroundColor: 'transparent', // Remove background
                                        color: '#f5b400', // Subheader text color
                                        fontWeight: 'bold', // Optional: Make subheader bold
                                    }}>
                                        Financial
                                    </ListSubheader>
                                }
                            >
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Main Group
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Ledger Master
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Cost Center
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Financial Year
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Cost Center Category
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                            </List>
                            <List
                                sx={{ width: '100%', maxWidth: 360, borderBottom: '1px solid #ffffff' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                    <ListSubheader sx={{
                                        padding: '0px',
                                        backgroundColor: 'transparent', // Remove background
                                        color: '#f5b400', // Subheader text color
                                        fontWeight: 'bold', // Optional: Make subheader bold
                                    }}>
                                        Operational
                                    </ListSubheader>
                                }
                            >
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Party
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Branch
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Category Master
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Document Type
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Vendor Master
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Area Master
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Party Master
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Branch Master
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Vehicle Type
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Driver Master
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Country Master
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                State Master
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                District Master
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                City Master
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Region Master
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Tds Master
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Company Master
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Employee Master
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                User Master
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Item Master
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Item Purchase
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Vehicle Master
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Vehicle Transit Master
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Bank and Tds Category
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={3} >
                            <Typography sx={topMenuStyles}>Transaction Entry </Typography>
                            <List
                                sx={{ width: '100%', maxWidth: 360, borderBottom: '1px solid #ffffff' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                    <ListSubheader sx={{
                                        padding: '0px',
                                        backgroundColor: 'transparent', // Remove background
                                        color: '#f5b400', // Subheader text color
                                        fontWeight: 'bold', // Optional: Make subheader bold
                                    }}>
                                        Booking Entry
                                    </ListSubheader>
                                }
                            >
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                C.Note Entry
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Lhc Entry
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Lts Entry
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                            </List>

                            {/* --------------------------- */}
                            <List
                                sx={{ width: '100%', maxWidth: 360, borderBottom: '1px solid #ffffff' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                    <ListSubheader sx={{
                                        padding: '0px',
                                        backgroundColor: 'transparent', // Remove background
                                        color: '#f5b400', // Subheader text color
                                        fontWeight: 'bold', // Optional: Make subheader bold
                                    }}>
                                        Delivery Entry
                                    </ListSubheader>
                                }
                            >
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Pod
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Pod Forwarding
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Pod Receive
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Ldm Entry
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Arrival Entry
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Vehicle Park
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                            </List>
                            {/* ------------------------ */}
                            <List
                                sx={{ width: '100%', maxWidth: 360, borderBottom: '1px solid #ffffff' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                    <ListSubheader sx={{
                                        padding: '0px',
                                        backgroundColor: 'transparent', // Remove background
                                        color: '#f5b400', // Subheader text color
                                        fontWeight: 'bold', // Optional: Make subheader bold
                                    }}>
                                        Recepipts / Payments
                                    </ListSubheader>
                                }
                            >
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Voucher Entry
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Auxiliry Bill
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Additional Charges
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Vendor Payment
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Money Receipt
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                            </List>
                            {/* ------------------- */}
                            {/* <List
                                sx={{ width: '100%', maxWidth: 360, borderBottom:'1px solid #ffffff'}}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                    <ListSubheader sx={{
                                        padding: '0px',
                                        backgroundColor: 'transparent', 
                                        color: '#f5b400', 
                                        fontWeight: 'bold', 
                                    }}>
                                        INVENTORY
                                    </ListSubheader>
                                }
                            >
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                               Grn
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                               Inventory Issue
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                               Inventory Hsn
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                              Purchase Order
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                               
                            </List> */}
                            {/* ----------------------- */}
                            <List
                                sx={{ width: '100%', maxWidth: 360, borderBottom: '1px solid #ffffff' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                    <ListSubheader sx={{
                                        padding: '0px',
                                        backgroundColor: 'transparent', // Remove background
                                        color: '#f5b400', // Subheader text color
                                        fontWeight: 'bold', // Optional: Make subheader bold
                                    }}>
                                        Sale Invoice
                                    </ListSubheader>
                                }
                            >
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Invoice Forwarding
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Invoice Reciveing
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Customer Invoice
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Invoice Submission
                                            </Typography>
                                        }
                                    />
                                </ListItem>

                            </List>
                        </Grid>
                        <Grid item xs={3} >
                            <Typography sx={topMenuStyles}>Reports </Typography>
                            <List
                                sx={{ width: '100%', maxWidth: 360, borderBottom: '1px solid #ffffff' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                    <ListSubheader sx={{
                                        padding: '0px',
                                        backgroundColor: 'transparent', // Remove background
                                        color: '#f5b400', // Subheader text color
                                        fontWeight: 'bold', // Optional: Make subheader bold
                                    }}>
                                        Branch Reports
                                    </ListSubheader>
                                }
                            >
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Pending Reports
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Regular Reports
                                            </Typography>
                                        }
                                    />
                                </ListItem>

                            </List>
                            {/* --------------------------2 ------- */}
                            <List
                                sx={{ width: '100%', maxWidth: 360, borderBottom: '1px solid #ffffff' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                    <ListSubheader sx={{
                                        padding: '0px',
                                        backgroundColor: 'transparent', // Remove background
                                        color: '#f5b400', // Subheader text color
                                        fontWeight: 'bold', // Optional: Make subheader bold
                                    }}>
                                        Account Reports
                                    </ListSubheader>
                                }
                            >
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Genral Ledger
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Profit and Loss
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Day Book
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Balance Sheet
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Tracking
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                            </List>
                            {/* ----------------------3-------------- */}
                            <List
                                sx={{ width: '100%', maxWidth: 360, borderBottom: '1px solid #ffffff' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                    <ListSubheader sx={{
                                        padding: '0px',
                                        backgroundColor: 'transparent', // Remove background
                                        color: '#f5b400', // Subheader text color
                                        fontWeight: 'bold', // Optional: Make subheader bold
                                    }}>
                                        Grid Reports
                                    </ListSubheader>
                                }
                            >
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Booking Register
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Gss R
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Cn Pending For Bill
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Vendor Outstanding Grid
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={menuStyles}>
                                                Vehicle Master Export
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                            </List>

                        </Grid>
                        <Grid item xs={3} >
                            <Typography sx={topMenuStyles}>Utilities </Typography>
                            <List
                                sx={{ width: '100%', maxWidth: 360, borderBottom: '1px solid #ffffff' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                            // subheader={
                            //     <ListSubheader sx={{
                            //         padding: '0px',
                            //         backgroundColor: 'transparent', // Remove background
                            //         color: '#f5b400', // Subheader text color
                            //         fontWeight: 'bold', // Optional: Make subheader bold
                            //     }}>
                            //         Financial
                            //     </ListSubheader>
                            // }
                            >
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={utiMenuStyles}>
                                                Gc Modification Logs
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={utiMenuStyles}>
                                                Report Acces Class
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={utiMenuStyles}>
                                                Acces Class
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={utiMenuStyles}>
                                                Manage Favourites
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={utiMenuStyles}>
                                                App Variable
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={utiMenuStyles}>
                                                Webtrans Dashboard
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={utiMenuStyles}>
                                                Direct Print
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={utiMenuStyles}>
                                                Pod Upload
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemText
                                        primary={
                                            <Typography sx={utiMenuStyles}>
                                                Lr Import
                                            </Typography>
                                        }
                                    />
                                </ListItem>

                            </List>
                        </Grid>
                    </Grid>

                </Grid>


            </Grid>


        </>
    )
}
export default AuraMenuList;