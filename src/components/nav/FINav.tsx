"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import {Trans} from "react-i18next";
import {Button} from "@mui/material";

export default function FINav() {

    return (
        <nav style={{height: "64px", padding: "0px 48px", background: "#2466A8"}}>
            <Container sx={{maxWidth: "1440px", display: "flex", justifyContent: "space-between" , alignItems: "center"}}>
                <Box>
                    <img src={"logo.svg"} alt={"logo-icon"}/>
                </Box>
                <Box sx={{display: "flex", gap: "40px", color: "#fff"}}>
                    <Typography>
                        <Trans i18nKey={"contactUs"}/>
                    </Typography>
                    <Typography>
                        <Trans i18nKey={"kitLibrary"}/>
                    </Typography>
                    <Typography>
                        <Trans i18nKey={"blog"}/>
                    </Typography>
                </Box>
                <Button variant={"contained"}
                        sx={{
                            background: "#F3F5F6"
                        }}
                >
                    <Typography sx={{ color: "#2466A8" }}>
                        <Trans i18nKey={"SignUpFree"} />
                    </Typography>
                </Button>
            </Container>
        </nav>
    );
}
