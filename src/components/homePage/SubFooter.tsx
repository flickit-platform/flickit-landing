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
            md: "70px",
            xl: "85px",
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
                md: theme.direction == "rtl" ? "url(/fa-sub-footer-md.svg)" : "url(/en-sub-footer-md.svg)",
                xl: theme.direction == "rtl" ? "url(/fa-sub-footer-xl.svg)" : "url(/en-sub-footer-xl.svg)",
            },
            backgroundSize: {xs: "cover", md: "contain"},
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            overflow: "visible",
            filter: 'drop-shadow(0 0 4px #000)',
        }}
        />
      <Typography  sx={{
          ...theme.typography.titleLarge,
          textAlign: "center",
          color: "#fff",
          zIndex: 2}}>
        {isMobile && (
          message.split(".").map(
            (sentence, i) =>
              sentence.trim() && (
                <React.Fragment key={i}>
                  {sentence.trim()}
                  <br />
                </React.Fragment>
              )
          ))}
      </Typography>

      <Button
        href="https://app.flickit.org/assessment-kits"
        target="_blank"
        variant="contained"
        size="large"
        sx={{
          px: 2.25,
          bgcolor: "#fff",
          color: "#2466A8",
          position: {md: "absolute"},
          [theme.direction == "rtl" ? "left" : "right"]: {
              md: "4%",
              xl: "8%",
              xxl: "15%",
          },
            height: {xl: "58px"},
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
        }}>
          <Trans i18nKey="hero.startSelfAssessment" />
        </Typography>
      </Button>
    </Box>
  );
}
