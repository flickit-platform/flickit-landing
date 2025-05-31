import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {theme} from "@/config/theme";
import {Trans} from "react-i18next";
import {styles} from "@/config/styles";
import Typography from "@mui/material/Typography";

let customers = Array.from({length: 6}, (_, i) => "/customer-" + (i + 1));

const Customers = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
               flexDirection : {xs: "column-reverse", md: "row"},
               mx: "auto",
               maxWidth: "1440px",
               px: {xs: "24px", md: "114px"},
               py: "24px",
               gap: {md: "80px"}
           }}>
               <Typography sx={{...theme.typography.bodyLarge, color: theme.palette.info.main}}>
                   <Trans i18nKey={"common.TrustedCustomers"} />
               </Typography>
               <Box sx={{...styles.centerVH, gap: {xs: "20px", md :"24px"}}}>
                   {customers.map((img, index) =>{
                       return (
                           <Box
                               sx={{
                                   cursor: "pointer",
                                   transition: "transform 0.3s ease-in-out",
                                   transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                                   height: "100%",
                                   width: {xs: "40px", md: "80px"}
                               }}>
                               <img
                                   onMouseEnter={() => setHoveredIndex(index)}
                                   onMouseLeave={() => setHoveredIndex(null)}
                                   src={hoveredIndex === index ? `${img}.svg` : `${img}-b.svg`}
                                   style={{width: "100%", height: "100%"}}
                               />
                           </Box>
                       )
                   })}
               </Box>
           </Box>
       </Box>
    );
};

export default Customers;