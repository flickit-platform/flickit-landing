import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Trans, useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import useScreenResize from "@/utils/useScreenResize";
import React from "react";

export default function FooterGradientCTA() {
  const isMobile = useScreenResize("sm");
  const { t } = useTranslation();
  const message = t("footer.ctaMessage");

  return (
    <Box
      sx={{
        width: "100%",
        height: isMobile ? 258 : 132,
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${
          isMobile
            ? "/mobile-gradiant-rectangle.svg"
            : "/gradiant-rectangle.svg"
        }) center/cover no-repeat`,
        gap: 3,
        position: "relative",
      }}
    >
      <Typography variant="headlineSmall" color="#fff" textAlign="center">
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
          <Trans i18nKey="footer.ctaMessage" />
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
          boxShadow: "0 2px 12px 0 rgba(36,102,168,0.15)",
          "&:hover": {
            bgcolor: "#F3F7FB",
          },
          borderRadius: "4px",
          textTransform: "none",
        }}
      >
        <Typography variant={isMobile ? "inherit" : "titleLarge"}>
          <Trans i18nKey="hero.startSelfAssessment" />
        </Typography>
      </Button>
    </Box>
  );
}
