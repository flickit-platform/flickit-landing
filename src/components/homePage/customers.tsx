import React from 'react';
import Box from "@mui/material/Box";
import {theme} from "@/config/theme";
import {Trans} from "react-i18next";
import {styles} from "@/config/styles";
import Typography from "@mui/material/Typography";

const Customers = () => {
    return (
       <Box
        sx={{
            width:"100%",
            height: "100%",
            background: "#E2E5E9",
        }}
       >
           <Box sx={{
               ...styles.centerVH,
               maxWidth: "1440px",
               px: {sm: "114px"}
           }}>
               <Typography sx={{...theme.typography.bodyLarge, color: theme.palette.info.main}}>
                   <Trans i18nKey={"common.TrustedCustomers"} />
               </Typography>

           </Box>
       </Box>
    );
};

export default Customers;