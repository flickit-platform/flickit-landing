import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Trans} from "react-i18next";
import {Button} from "@mui/material";
import Grid from '@mui/material/Grid';
import {theme} from "@/config/theme";


export default function Footer() {
    const footerLinks = ["flickitApp", "assessmentKits", "blog"]
    return (
        <Box
            component={"footer"}
            sx={{background: "#2B333B", py: "42px", px: {xs: 1, sm: "48px"}}}>
            <Grid container sx={{
                maxWidth:"1440px",
                mx:"auto",
                display: "flex",
                gap: {xs: "101px", sm: "unset"}
            }}>
                <Grid order={{ xs: 3, sm: 1 }} size={{xs: 12, sm: 4}}>
                    <img src={"logo.svg"}/>
                    <Typography sx={{...theme.typography.bodyMedium, color: "#F0F2F4", maxWidth: {sm :"428px"}}}>
                        <Trans i18nKey={"flickitFooterText"}/>
                    </Typography>
                </Grid>
                <Grid order={2} size={{xs: 12, sm: 4}}
                      sx={{
                          color: "#F0F2F4",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                      }}>

                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: {xs: "center", sm: "flex-start"},
                        gap: 2

                    }}>
                        <Typography sx={{
                            ...theme.typography.titleMedium,
                            textAlign: {sx: "center", sm: "left"}
                        }}>
                            <Trans i18nKey={"links"}/>
                        </Typography>
                        <Box sx={{
                            display: "flex",
                            flexDirection: {xs: "row", sm: "column"},
                            gap: {xs: "48px", sm: "unset"},
                        }}>
                            {footerLinks.map(link => {
                                return (
                                    <Typography key={link} sx={{...theme.typography.semiBoldMedium}}>
                                        <Trans i18nKey={`${link}`}/>
                                    </Typography>
                                )
                            })}
                        </Box>

                    </Box>
                </Grid>
                <Grid order={{ xs: 1, sm: 3 }} size={{xs: 12, sm: 4}}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: {xs: "center", sm: "flex-end"},
                            flexDirection: {xs: "row", sm: "column"},
                            gap: 2
                        }}
                    >
                        <img style={{width: "137px", height: "120px"}} src={"emailIcon.svg"}/>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 2
                        }}>
                            <Typography sx={{
                                color: "#F0F2F4",

                            }}>
                                <Trans i18nKey={"feelFreeToReachUs"}/>
                            </Typography>
                            <Button variant={"contained"}>
                                <Trans i18nKey={"contactUs"}/>
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}


