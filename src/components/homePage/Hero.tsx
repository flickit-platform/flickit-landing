import React, { memo, useCallback, useMemo } from "react";
import dynamic from "next/dynamic";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Trans } from "react-i18next";
import { theme } from "@/config/theme";
import Button from "@mui/material/Button";
import { NEXT_PUBLIC_LOCAL_BASE_URL } from "@/utils/env";
import i18next from "i18next";

const AnimatedTextBanner = dynamic(() => import("./AnimatedTextBanner"), {
  ssr: false,
  loading: () => null,
});

const rootBoxSx = {
  display: "flex",
  height: "auto",
  mb: { xs: "-40px", sm: 0, md: "25px" },
  justifyContent: "center",
  pt: { xs: "0px", md: "44px" },
} as const;

const bgBoxSx = {
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
} as const;

const innerBoxSx = {
  mx: { xs: "40px", sm: "auto" },
  maxWidth: { xs: "400px", sm: "600px", lg: "736px" },
  color: "#fff",
  textAlign: "center",
} as const;

const titleSx = {
  ...theme.typography.displayLarge,
  [theme.breakpoints.down("md")]: {
    ...theme.typography.headlineMedium,
  },
} as const;

const descSx = {
  ...theme.typography.displaySmall,
  [theme.breakpoints.down("md")]: {
    ...theme.typography.semiBoldLarge,
  },
  mt: 2,
} as const;

const ctaBtnSx = {
  bgcolor: "#F3F5F6",
  borderRadius: "100px",
  mt: { xs: "39px", sm: "36px" },
  mb: { xs: "169px", xl: "175px" },
  boxShadow: "0 1px 5px 0 #0000001F",
  ...theme.typography.titleMedium,
  color: theme.palette.primary.main,
  fontWeight: 600,
} as const;

const HeroSection = () => {
  const href = useMemo(
    () =>
      `${NEXT_PUBLIC_LOCAL_BASE_URL}assessment-kits?lang=${i18next.language}`,
    []
  );

  const handleButtonClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, name: string) => {
      (window as any)?.dataLayer?.push?.({
        event: "ppms.cm:trackEvent",
        parameters: {
          category: "Button",
          action: "Click",
          name,
        },
      });
    },
    []
  );

  return (
    <Box sx={rootBoxSx}>
      <Box sx={bgBoxSx}>
        <Box sx={innerBoxSx}>
          <AnimatedTextBanner />

          <Typography sx={titleSx}>
            <Trans i18nKey={"hero.topBannerTitle"} />
          </Typography>

          <Typography sx={descSx}>
            <Trans i18nKey={"hero.topBannerDesc"} />
          </Typography>

          <Button
            component="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            sx={ctaBtnSx}
            size="large"
            onClick={(e) =>
              handleButtonClick(e, "Start your free self-assessment hero")
            }
            aria-label="Start your free self-assessment"
          >
            <Trans i18nKey={"hero.startSelfAssessment"} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(HeroSection);
