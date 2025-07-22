"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { theme } from "@/config/theme";
import useDialog from "@/utils/useDialog";
import ContactUsDialog from "@/components/common/ContactUs/ContactUs";
import LanguageSelector from "@/components/common/languageSelector";
import { styles } from "@/config/styles";
import useScreenResize from "@/utils/useScreenResize";
import { t } from "i18next";
import { NEXT_PUBLIC_LOCAL_BASE_URL } from "@/utils/env";

export default function Navbar() {
  const dialogProps = useDialog();
  const isMobile = useScreenResize("sm");
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
        <Box
          sx={{
            ...styles.centerVH,
            gap: { xs: 0.8, sm: 2 },
          }}
        >
          <LanguageSelector />
          <Button
            component="a"
            href={NEXT_PUBLIC_LOCAL_BASE_URL}
            variant={"outlined"}
            size={isMobile ? "small" : "large"}
            sx={{
              ...theme.typography.semiBoldLarge,
              height: "32px",
              color: "#fff",
              textTransform: "capitalize",
              borderColor: "#fff",
              "&:hover": {
                borderColor: "#fff",
              },
            }}
          >
            {t("nav.login")}
          </Button>
          <Button
            variant="contained"
            size="large"
            component="a"
            href={
              NEXT_PUBLIC_LOCAL_BASE_URL +
              "accounts/realms/flickit/login-actions/registration?client_id=flickit-frontend&tab_id=lb5MBPBbwgs"
            }
            sx={{
              ...theme.typography.semiBoldLarge,
              height: "32px",
              color: theme.palette.primary.main,
              textTransform: "capitalize",
              background: "#F3F5F6",
              boxShadow: "0 1px 5px rgba(0,0,0,0.12)",
              "&:hover": {
                background: "#F3F5F6",
              },
              display: { xs: "none", sm: "flex" },
            }}
          >
            {t("nav.createAccount")}
          </Button>
        </Box>
      </Box>
      <ContactUsDialog {...dialogProps} />
    </nav>
  );
}
