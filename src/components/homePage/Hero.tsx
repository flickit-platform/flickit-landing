import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Trans } from "react-i18next";
import { theme } from "@/config/theme";
import { Button } from "@mui/material";
import Link from "next/link";

const HeroSection = () => {
  return (
    <Box sx={{ display: "flex", height: "auto", mb: "25px" }}>
      <Box sx={{ height: "auto", flex: 1, bgcolor: "#1B4D7E" }} />
      <Box
        sx={{
          width: "100%",
          maxWidth: "1534px",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: {
            xs: "url(/flickit-hero-bg-m.svg)",
            sm: "url(/flickit-hero-bg-d.svg)",
          },
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat !important",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            mx: { xs: "52px", sm: "auto" },
            maxWidth: { xs: "336px", sm: "657px" },
            color: "#fff",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              ...theme.typography.displayLarge,
              [theme.breakpoints.down("sm")]: {
                ...theme.typography.headlineMedium,
                fontSize: "2.25rem",
                fontWeight: "bolder",
                lineHeight: "150%",
                letterSpacing: "-2%",
              },
              pt: { xs: "45px", sm: "77px" },
            }}
          >
            <Trans i18nKey={"hero.questionsAskedAnswers"} />
          </Typography>

          <Typography
            sx={{
              ...theme.typography.displaySmall,
              lineHeight: "32px",
              fontSize: "24px",
              fontWeight: 300,
              [theme.breakpoints.down("sm")]: {
                ...theme.typography.semiBoldLarge,
                lineHeight: "24px",
              },
              mt: "20px",
            }}
          >
            <Trans i18nKey={"hero.topBannerDesc"} />
          </Typography>
          <Button
            component={Link}
            href={"https://app.flickit.org/assessment-kits"}
            target="_blank"
            variant={"contained"}
            sx={{
              bgcolor: "#F3F5F6",
              borderRadius: "100px",
              mt: { xs: "39px", sm: "27px" },
              mb: { xs: "169px", xl: "175px" },
              boxShadow: "0 1px 5px 0 #0000001F",
            }}
            size="large"
          >
            <Typography
              sx={{
                ...theme.typography.semiBoldXLarge,
                whiteSpace: "nowrap",
                fontWeight: 400,
                textTransform: "uppercase",
                [theme.breakpoints.down("sm")]: {
                  ...theme.typography.semiBoldMedium,
                },
                color: "#2466A8",
              }}
            >
              <Trans i18nKey={"hero.startSelfAssessment"} />
            </Typography>
          </Button>
        </Box>
      </Box>
      <Box sx={{ height: "auto", flex: 1, bgcolor: "#D5E5F6" }} />
    </Box>
  );
};

export default HeroSection;
