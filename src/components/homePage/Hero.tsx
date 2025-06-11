import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Trans } from "react-i18next";
import { theme } from "@/config/theme";
import { Button } from "@mui/material";
import Link from "next/link";
import AnimatedTextBanner from "./AnimatedTextBanner";
import { VITE_LOCAL_BASE_URL } from "@/utils/env";

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "auto",
        mb: { xs: "-40px", sm: 0, md: "25px" },
        justifyContent: "center",
        pt: { xs: "0px", md: "44px" },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: {
            xs: "url(/hero-xs.svg)",
            sm: "url(/hero-sm.svg)",
            md: "url(/hero-md.svg)",
            xl: "url(/hero-xl.svg)",
          },
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat !important",
          backgroundPosition: "center",
          minHeight: { xs: "700px", sm: "none" },
        }}
      >
        <Box
          sx={{
            mx: { xs: "40px", sm: "auto" },
            maxWidth: { xs: "400px", sm: "600px", lg: "736px" },
            color: "#fff",
            textAlign: "center",
          }}
        >
          <AnimatedTextBanner />

          <Typography
            sx={{
              ...theme.typography.displayLarge,
              [theme.breakpoints.down("md")]: {
                ...theme.typography.headlineMedium,
              },
            }}
          >
            <Trans i18nKey={"hero.topBannerTitle"} />
          </Typography>

          <Typography
            sx={{
              ...theme.typography.displaySmall,
              [theme.breakpoints.down("md")]: {
                ...theme.typography.semiBoldLarge,
              },
              mt: 2,
            }}
          >
            <Trans i18nKey={"hero.topBannerDesc"} />
          </Typography>

          <Button
            component={Link}
            href={VITE_LOCAL_BASE_URL + "assessment-kits"}
            target="_blank"
            variant={"contained"}
            sx={{
              bgcolor: "#F3F5F6",
              borderRadius: "100px",
              mt: { xs: "39px", sm: "36px" },
              mb: { xs: "169px", xl: "175px" },
              boxShadow: "0 1px 5px 0 #0000001F",
              ...theme.typography.titleMedium,
              color: theme.palette.primary.main,
              fontWeight: 600,
            }}
            size="large"
          >
            <Trans i18nKey={"hero.startSelfAssessment"} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
