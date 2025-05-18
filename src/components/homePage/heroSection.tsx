import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Trans} from "react-i18next";
import {theme} from "@/config/theme";
import {useMediaQuery} from "@mui/material";

const HeroSection = () => {

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: {
                    xs: "url(/heroBg-mobile.svg)",
                    sm: "url(/heroBg-desktop.svg)"
                },
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat !important",
                backgroundPosition: "center"
            }}
        >

            <Box
                sx={{
                    // maxWidth: "1440px",
                    mx: {xs: "52px", sm: "auto"},
                    maxWidth: {xs: "336px", sm: "657px"},
                    color: "#fff",
                    textAlign: "center"
                }}
            >
                <Typography sx={{
                    ...theme.typography.displayLarge,
                    [theme.breakpoints.down('sm')]: {
                        ...theme.typography.headlineMedium,
                        fontSize: '2.25rem',
                        fontWeight: "bolder",
                        lineHeight: "150%",
                        letterSpacing: "-2%"
                    },
                    pt: {xs: "45px", sm: "77px"},
                }}>
                    <Trans i18nKey={"questionsAskedAnswers"}/>
                </Typography>

                <Typography sx={{
                    ...theme.typography.headlineSmall,
                    lineHeight: "32px",
                    fontSize: "2rem",
                    fontWeight: "regular",
                    [theme.breakpoints.down('sm')]: {
                        ...theme.typography.semiBoldLarge,
                        lineHeight: "24px"
                    },
                    mt: "20px"
                }}>
                    <Trans i18nKey={"topBannerDesc"}/>
                </Typography>
                <Box sx={{width: "100%", mt: {xs: "67px"}, mb: {xs: "76px"}, mx: "auto"}}>
                    <Box
                        component={"img"}
                        src={isMobile ? "flickitMainIcon-m.svg" : "flickitMainIcon-d.svg"}
                    />
                </Box>
            </Box>
        </Box>
    )
};

export default HeroSection;