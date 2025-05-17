import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Trans} from "react-i18next";
import {Button} from "@mui/material";
import Grid from '@mui/material/Grid';

export default function Footer() {
    return (
        <Box
            component={"footer"}
            style={{background: "#2B333B"}}>
            <Grid container spacing={2}>
                {/*<Grid item*/}
                {/*      xs={12}*/}
                {/*      sm={4}*/}
                {/*>*/}
                {/*    <Box*/}
                {/*        sx={{display: "flex", flexDirection: {xs: "row", sm: "column"}, gap: 2}}*/}
                {/*    >*/}
                {/*        <img src={"emailIcon.svg"}/>*/}
                {/*        <Box sx={{*/}
                {/*            display: "flex",*/}
                {/*            flexDirection: "column",*/}
                {/*            justifyContent: "center",*/}
                {/*            alignItems: "center",*/}
                {/*            gap: 2*/}
                {/*        }}>*/}
                {/*            <Typography sx={{*/}
                {/*                color: "#F0F2F4",*/}

                {/*            }}>*/}
                {/*                <Trans i18nKey={"feelFreeToReachUs"}/>*/}
                {/*            </Typography>*/}
                {/*            <Button variant={"contained"}>*/}
                {/*                <Trans i18nKey={"contactUs"}/>*/}
                {/*            </Button>*/}
                {/*        </Box>*/}
                {/*    </Box>*/}
                {/*</Grid>*/}
            </Grid>
        </Box>
    )
}