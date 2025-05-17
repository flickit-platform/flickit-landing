"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {Trans} from "react-i18next";
import {Button} from "@mui/material";
import {theme} from "@/config/theme";

export default function FINav() {

    return (
        <nav style={{height: "64px", background: "#2466A8"}}>
            <Box sx={{maxWidth: "1440px", px: {xs: "8px", sm: "48px"}, display: "flex", justifyContent: "space-between" , alignItems: "center"}}>
                <Box sx={{height: "60px", width: "auto"}}>
                    <img src={"logo.svg"} style={{height: "100%"}} alt={"logo-icon"}/>
                </Box>
                <Box sx={{display: { xs: "none" , md: "flex" }, gap: "40px", color: "#fff"}}>
                    <Typography sx={{...theme.typography.titleLarge}}>
                        <Trans i18nKey={"contactUs"}/>
                    </Typography>
                    <Typography sx={{...theme.typography.titleLarge}}>
                        <Trans i18nKey={"kitLibrary"}/>
                    </Typography>
                    <Typography sx={{...theme.typography.titleLarge}}>
                        <Trans i18nKey={"blog"}/>
                    </Typography>
                </Box>
                <Button variant={"contained"}
                        size={"large"}
                        sx={{
                            ...theme.typography.semiBoldLarge,
                            background: "#F3F5F6"
                        }}
                >
                    <Typography sx={{ ...theme.typography.semiBoldLarge, color: "#2466A8" }}>
                        <Trans i18nKey={"SignUpFree"} />
                    </Typography>
                </Button>
            </Box>
        </nav>
    );
}
