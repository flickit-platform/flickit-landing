import React, { memo, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Trans } from "react-i18next";
import { theme } from "@/config/theme";
import { NEXT_PUBLIC_LOCAL_BASE_URL } from "@/utils/env";
import i18next from "i18next";

const AnimatedTextBanner = dynamic(() => import("./AnimatedTextBanner"), {
  ssr: false,
  loading: () => null,
});

const containerSx = {
  position: "relative",
  display: "flex",
  height: "auto",
  mb: { xs: "-40px", sm: 0, md: "25px" },
  justifyContent: "center",
  pt: { xs: "0px", md: "44px" },
} as const;

const bgWrapSx = {
  position: "relative",
  width: "100%",
  // نکته‌ی مهم: نسبت تصویر ریسپانسیو برای توازن پس‌زمینه
  aspectRatio: { xs: "3 / 4", sm: "16 / 10", md: "16 / 9" } as any,
  minHeight: { xs: 700, md: 560 }, // اگر خواستی فقط از aspectRatio استفاده کن
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
} as const;

const innerBoxSx = {
  position: "relative",
  zIndex: 1,
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
  const muiTheme = useTheme();
  // فقط یکی از تصاویر واقعاً رندر شود
  const isXs = useMediaQuery(muiTheme.breakpoints.down("sm"), { noSsr: true });
  const isSm = useMediaQuery(
    muiTheme.breakpoints.between("sm", "md"),
    { noSsr: true }
  );
  const isMdUp = useMediaQuery(muiTheme.breakpoints.up("md"), { noSsr: true });
  const isXlUp = useMediaQuery(muiTheme.breakpoints.up("xl"), { noSsr: true });

  const bgSrc = useMemo(() => {
    if (isXs) return "/hero-xs.svg";
    if (isSm) return "/hero-sm.svg";
    if (isMdUp && !isXlUp) return "/hero-md.svg";
    return "/hero-xl.svg";
  }, [isXs, isSm, isMdUp, isXlUp]);

  const href = useMemo(
    () => `${NEXT_PUBLIC_LOCAL_BASE_URL}assessment-kits?lang=${i18next.language}`,
    []
  );

  const handleButtonClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, name: string) => {
      (window as any)?.dataLayer?.push?.({
        event: "ppms.cm:trackEvent",
        parameters: { category: "Button", action: "Click", name },
      });
    },
    []
  );

  return (
    <Box sx={containerSx}>
      <Box sx={bgWrapSx}>
        <Image
          src={bgSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            pointerEvents: "none",
          }}
        />

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
