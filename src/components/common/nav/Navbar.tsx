"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Trans } from "react-i18next";
import { Button } from "@mui/material";
import { is_farsi, theme } from "@/config/theme";
import Link from "next/link";
import useDialog from "@/utils/useDialog";
import ContactUsDialog from "@/components/common/ContactUs/ContactUs";
import LanguageSelector from "@/components/common/languageSelector";
import { styles } from "@/config/styles";
import { farsiFontFamily, primaryFontFamily } from "@/utils/fonts";
import useScreenResize from "@/utils/useScreenResize";
import { VITE_LOCAL_BASE_URL } from "@/utils/env";
import { useTranslations } from 'next-intl';

export default function Navbar() {
  const dialogProps = useDialog();
  const isMobile = useScreenResize("sm");
  const t  = useTranslations();

  return (
    <nav
      style={{
        height: "44px",
        background: "#2466A8",
        width: "100%",
        boxShadow: "0 0 8px 0 #0A234240",
        position: "fixed",
        zIndex: 4,
        top: 0,
      }}
    >
      <Box
        sx={{
          mx: "auto",
          maxWidth: "1440px",
          px: { xs: "8px", sm: "48px" },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ height: "100%", width: "auto" }}>
          <img src={"/logo.svg"} style={{ height: "44px" }} alt={"logo-icon"} />
        </Box>
        <Box sx={{ ...styles.centerVH, gap: "32px" }}>
          <LanguageSelector />
          <Button
            variant={"contained"}
            size={isMobile ? "small" : "large"}
            sx={{
              ...theme.typography.semiBoldLarge,
              background: "#F3F5F6",
              height: "32px",
            }}
          >
            <Typography
              component={Link}
              href={VITE_LOCAL_BASE_URL ?? ""}
              variant="semiBoldMedium"
              sx={{
                color: "#2466A8",
                textDecoration: "none",
              }}
            >
                {t("nav.signUpFree")}
            </Typography>
          </Button>
        </Box>
      </Box>
      <ContactUsDialog {...dialogProps} />
    </nav>
  );
}
