import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import styles from '.././../styles.module.css';
import { StyledTableRow } from '../reusableComponent/reusableMethods';

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

const PrintOrder = React.forwardRef(({ tableInfo }, ref) => {
    return (
        <div ref={ref}>
            <Box className="print-source" style={{ pageBreakAfter: 'always', margin: '30px' }}>
                <Paper sx={{ margin: '55px 15px 3px 15px', boxShadow: 'none', border: '1px solid #000000', minHeight: '90vh' }}>
                    <Box sx={{ paddingTop: '50px' }}>
                        <Typography style={{ fontSize: '20px', fontFamily: 'monospace', textAlign: 'center', fontWeight: 'bold' }}> HOTEL SAMADHAN</Typography>
                        <Typography style={{ fontSize: '12px', fontFamily: 'monospace', textAlign: 'center', paddingLeft: '50px', paddingRight: '50px' }}>
                            3rd Floor, SEASONS MALL, Magarpatta Police Station Rd
                            Casual spot for Maharashtrian cuisine</Typography>
                        <Typography style={{ fontSize: '12px', fontFamily: 'monospace', textAlign: 'center', paddingLeft: '50px', paddingRight: '50px' }}>
                            PHONE : 02320-418508
                        </Typography>
                        <Typography style={{ fontSize: '12px', fontFamily: 'monospace', textAlign: 'center', paddingLeft: '50px', paddingRight: '50px' }}>
                            GSTIN : 33AAAGP068F1ZH
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '15px' }}>
                            <Typography style={{ fontSize: '12px', fontFamily: 'monospace', textAlign: 'center', paddingLeft: '50px', paddingRight: '50px' }}>
                                Bill No : HM_0045
                            </Typography>
                            <Typography style={{ fontSize: '12px', fontFamily: 'monospace', textAlign: 'center', paddingLeft: '50px', paddingRight: '50px' }}>
                                Date : 17/10/2025
                            </Typography>
                        </Box>
                    </Box>
                    <TableContainer style={{ maxHeight: '450px', minHeight: '448px', marginTop: '5px' }}>
                        <Table sx={{ minWidth: 50 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow sx={{border:'1px doted #000000'}}>
                                    <TableCell align="left"  sx={{ backgroundColor: '#ededed', fontSize: '12px' }} width="15%">Sr. No</TableCell>
                                    <TableCell align="left"  sx={{ backgroundColor: '#ededed', fontSize: '12px' }} width="35%">Item Name</TableCell>
                                    <TableCell align="center" sx={{ backgroundColor: '#ededed', fontSize: '12px' }} width="18%">Qty</TableCell>
                                    <TableCell align="center" sx={{ backgroundColor: '#ededed', fontSize: '12px' }}>Price</TableCell>
                                    <TableCell align="right" sx={{ backgroundColor: '#ededed', fontSize: '12px' }}>Amount</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {menuItems.map((row, index) => (
                                    <TableRow key={row.sr_no}>
                                        <TableCell align="left">
                                            {row.sr_no}
                                        </TableCell>
                                        <TableCell align="left">
                                            {row.item_name}
                                        </TableCell>
                                        <TableCell align="center">
                                            {row.quantity}
                                        </TableCell>
                                        <TableCell align="center">
                                            {row.item_price}
                                        </TableCell>
                                        <TableCell align="right">
                                            {parseFloat(row.total).toFixed(2)}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Box>
        </div>
    );
});

export default PrintOrder; // Ensure it's a default export
