import { Paper, Typography } from "@mui/material";
import React from "react";
import dashboardBg from "../../images/mk-bg.jpg"



const AuraDashboard = () => {

    return (
        <>
            <Paper  sx={{
         backgroundImage: `url(${dashboardBg})`,// Set your background image URL here
        backgroundSize: 'cover',  // Ensures the background covers the entire Paper
        backgroundPosition: 'center',  // Centers the image within the Paper
        backgroundRepeat: 'no-repeat',  // Prevents repeating the image
        width: '100%',
        height: '91vh',  // Sets the height to full viewport height (optional)
        '@media (max-width:600px)': {
          backgroundPosition: 'top',  // Adjust for small screens if necessary
          backgroundSize: 'contain',  // Optional: adjust the background size for smaller screens
        },
      }}>


            </Paper>
        </>
    )
}
export default AuraDashboard;