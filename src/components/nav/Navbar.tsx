"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "@/config/i18n";
import {Trans} from "react-i18next";
import {Button, useMediaQuery} from "@mui/material";
import {theme} from "@/config/theme";
import Link from "next/link";

export default function Navbar() {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <nav style={{height: "64px", background: "#2466A8", width: "100%"}}>
            <Box sx={{
                mx: "auto",
                maxWidth: "1440px",
                px: {xs: "8px", sm: "48px"},
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Box sx={{height: "60px", width: "auto"}}>
                    <img src={"/logo.svg"} style={{height: "100%"}} alt={"logo-icon"}/>
                </Box>
                <Box sx={{display: {xs: "none", md: "flex"}, gap: "40px", color: "#fff"}}>
                    {/*<Typography sx={{...theme.typography.titleLarge}}>*/}
                    {/*    <Trans i18nKey={"contactUs"}/>*/}
                    {/*</Typography>*/}
                    <Typography
                        component={Link}
                        href={"https://app.flickit.org/assessment-kits"}
                        target="_blank"
                        sx={{ ...theme.typography.titleLarge, textDecoration: 'none', color: "#fff" }}>
                        <Trans i18nKey={"kitLibrary"}/>
                    </Typography>
                    {/*<Typography*/}
                    {/*    sx={{...theme.typography.titleLarge}}>*/}
                    {/*    <Trans i18nKey={"blog"}/>*/}
                    {/*</Typography>*/}
                </Box>
                <Button variant={"contained"}
                        size={isMobile ? "small" : "large"}
                        sx={{
                            ...theme.typography.semiBoldLarge,
                            background: "#F3F5F6"
                        }}
                >
                    <Typography
                        component={Link}
                        href={"https://app.flickit.org/"}
                        sx={{
                            ...theme.typography.semiBoldLarge, color: "#2466A8",
                            textDecoration: 'none'
                        }}>
                        <Trans i18nKey={"SignUpFree"}/>
                    </Typography>
                </Button>
            </Box>
        </nav>
    );
}
