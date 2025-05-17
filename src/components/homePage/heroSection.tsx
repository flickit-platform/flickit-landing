import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Trans} from "react-i18next";
import {theme} from "@/config/theme";
import {Button} from "@mui/material";

const HeroSection = () => {
    return (
        <Box
            sx={{
                height: "720px", width: "100%",
                display: "flex"
            }}
        >
            <Box sx={{height: "696px", flex: 1, bgcolor: "#1B4D7E"}}/>
            <Box
                sx={{
                    background: "url(/heroBg-desktop.svg)",
                    backgroundPosition: "center center",
                    height: "100%",
                    width: "100%",
                    maxWidth: "1440px",
                    backgroundSize: "content",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <Box sx={{
                    mx: "auto",
                    mt: "77px",
                    maxWidth: "657px",
                    color: "#fff",
                    textAlign: "center"
                }}>

                    <Typography sx={{...theme.typography.displayLarge}}>
                        <Trans i18nKey={"questionsAskedAnswers"}/>
                    </Typography>
                    <Typography sx={{...theme.typography.headlineSmall, lineHeight: "32px" ,fontSize: "2rem", fontWeight: "regular"}}>
                        <Trans i18nKey={"topBannerDesc"}/>
                    </Typography>
                    <Button
                    variant={"contained"}
                    sx={{bgcolor: "#F3F5F6",
                    borderRadius: "100px",
                    mt: "27px",
                    boxShadow: "0 1px 5px 0 #000"
                    }}
                    >
                        <Typography sx={{
                            ...theme.typography.headlineSmall,
                            color: "#2466A8"
                        }}>
                            <Trans i18nKey={"startSelfAssessment"} />
                        </Typography>
                    </Button>
                </Box>

            </Box>
            <Box sx={{height: "696px", flex: 1, bgcolor: "#D5E5F6"}}/>
        </Box>
    );
};

export default HeroSection;