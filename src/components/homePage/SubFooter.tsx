import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Trans, useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import useScreenResize from "@/utils/useScreenResize";
import React from "react";
import {theme} from "@/config/theme";

export default function FooterGradientCTA() {
  const isMobile = useScreenResize("md");
  const { t } = useTranslation();
  const message = t("footer.ctaMessage");

  return (
    <Box
      sx={{
        width: "100%",
        height: {
            xs: "155px",
            sm: "150px",
            md: "80px",
            xl: "100px",
        },
        display: "flex",
        flexDirection: {xs: "column", md: "row"},
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
        position: "relative",
      }}
    >
        <Box
        sx={{
            position: "absolute",
            width: "100%",
            height: {
                xs: "200px",
                sm: "219px",
                md: "240px",
                xl: "245px"
            },
            backgroundImage:{
                xs: "url(/sub-footer-xs.svg)",
                sm: "url(/sub-footer-sm.svg)",
                md: "url(/sub-footer-md.svg)",
                xl: "url(/sub-footer-xl.svg)",
            },
            backgroundSize: {xs: "cover", md: "contain"},
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            overflow: "visible",
            transform: theme.direction == "rtl"?  "rotate(180deg)" : "",
        }}
        />
      <Typography variant="headlineSmall" color="#fff" textAlign="center" sx={{zIndex: 2}}>
        {isMobile ? (
          message.split(".").map(
            (sentence, i) =>
              sentence.trim() && (
                <React.Fragment key={i}>
                  {sentence.trim()}
                  <br />
                </React.Fragment>
              )
          )
        ) : (
            <Box sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                [theme.direction == "rtl" ? "left" : "right"]: {
                    md: "26%",
                    xxl: "22%"
                },
                top: 0,
                bottom: 0,
                gap: {
                md: "50px",
                xl: "30px",
                xxl: "40px",
                } ,
                color: "#fff"
            }} >
                <Typography sx={{
                    [theme.breakpoints.down("xxl")]: {
                        ...theme.typography.titleMedium
                    },
                    ...theme.typography.headlineSmall
                }}>
                    <Trans i18nKey={"footer.understandYourStrengths"} />
                </Typography>
                <Typography sx={{
                    [theme.breakpoints.down("xxl")]: {
                        ...theme.typography.titleMedium
                    },
                    ...theme.typography.headlineSmall
                }}>
                    <Trans i18nKey={"footer.eliminateRisks"} />
                </Typography>
                <Typography sx={{
                    [theme.breakpoints.down("xxl")]: {
                        ...theme.typography.titleMedium
                    },
                    ...theme.typography.headlineSmall
                }}>
                    <Trans i18nKey={"footer.buildWithConfidence"} />
                </Typography>
            </Box>
        )}
      </Typography>

      <Button
        href="https://app.flickit.org/assessment-kits"
        target="_blank"
        variant="contained"
        size="large"
        sx={{
          px: 2.25,
          py: isMobile ? 1 : 2,
          bgcolor: "#fff",
          color: "#2466A8",
          position: {md: "absolute"},
          [theme.direction == "rtl" ? "left" : "right"]: {
              md: "2%",
              xl: "4%"
          },
            height: {md: "58px"},
          boxShadow: "0 2px 12px 0 rgba(36,102,168,0.15)",
          "&:hover": {
            bgcolor: "#F3F7FB",
          },
          borderRadius: "4px",
          textTransform: "none",
          whiteSpace: "nowrap",
        }}
      >
        <Typography
            sx={{
                [theme.breakpoints.down("xl")]: {
                    ...theme.typography.titleMedium
                },
                ...theme.typography.titleLarge,
        }}
            variant={isMobile ? "inherit" : "titleLarge"}>
          <Trans i18nKey="hero.startSelfAssessment" />
        </Typography>
      </Button>
    </Box>
  );
}
