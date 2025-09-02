"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import i18next from "i18next";
import { t } from "i18next";
import { theme } from "@/config/theme";
import { styles } from "@/config/styles";
import LanguageSelector from "@/components/common/languageSelector";
import ContactUsDialog from "@/components/common/ContactUs/ContactUs";
import useDialog from "@/utils/useDialog";
import { NEXT_PUBLIC_LOCAL_BASE_URL } from "@/utils/env";
import { useKcAuth } from "@/hooks/useKcAuth";

export default function Navbar() {
  const dialogProps = useDialog();
  const { authed } = useKcAuth();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const toggleDrawer = () => setMobileOpen((p) => !p);

  const handleButtonClick = (e: React.MouseEvent, name: string) => {
    (window as any).dataLayer?.push?.({
      event: "ppms.cm:trackEvent",
      parameters: { category: "Button", action: "Click", name },
    });
  };

  const drawer = (
    <Box
      role="presentation"
      onClick={toggleDrawer}
      sx={{ textAlign: "center" }}
    >
      <Box height={56} bgcolor="primary.main" sx={{ ...styles.centerVH }}>
        <img src={"/logo.svg"} alt="logo" style={{ height: 40 }} />
      </Box>

      <Divider />

      <List dense>
        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href={`${NEXT_PUBLIC_LOCAL_BASE_URL}spaces?lang=${i18next.language}`}
            sx={{ textAlign: "left", borderRadius: 1.5 }}
            onClick={(e) => handleButtonClick(e, "MyAssessments")}
          >
            <ListItemText primary={t("common.myAssessments")} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href={`${NEXT_PUBLIC_LOCAL_BASE_URL}assessment-kits?lang=${i18next.language}`}
            sx={{ textAlign: "left", borderRadius: 1.5 }}
            onClick={(e) => handleButtonClick(e, "KitLibrary")}
          >
            <ListItemText primary={t("common.kitLibrary")} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

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
          px: { xs: "8px", sm: "100px" },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          position: "relative",
        }}
      >
        <Box
          display={{ xs: "none", md: "flex" }}
          sx={{ height: "100%", width: "auto" }}
        >
          <img src={"/logo.svg"} style={{ height: "44px" }} alt={"logo-icon"} />
        </Box>
        <IconButton
          aria-label="open menu"
          onClick={toggleDrawer}
          sx={{
            display: { xs: "inline-flex", md: "none" },
            color: "#fff",
            mr: 0.5,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            gap: 1.5,
            pointerEvents: "none",
          }}
        >
          <Button
            variant="text"
            size="medium"
            component="a"
            href={`${NEXT_PUBLIC_LOCAL_BASE_URL}spaces?lang=${i18next.language}`}
            onClick={(e) => handleButtonClick(e, "MyAssessments")}
            sx={{
              height: "32px",
              color: "#fff",
              textTransform: "uppercase",
              px: 1.5,
              "&:hover": { background: "rgba(255,255,255,0.12)" },
              pointerEvents: "auto",
            }}
          >
            {t("common.myAssessments")}
          </Button>

          <Button
            variant="text"
            size="medium"
            component="a"
            href={`${NEXT_PUBLIC_LOCAL_BASE_URL}assessment-kits?lang=${i18next.language}`}
            onClick={(e) => handleButtonClick(e, "KitLibrary")}
            sx={{
              height: "32px",
              color: "#fff",
              textTransform: "uppercase",
              px: 1.5,
              "&:hover": { background: "rgba(255,255,255,0.12)" },
              pointerEvents: "auto",
            }}
          >
            {t("common.kitLibrary")}
          </Button>
        </Box>

        <Box
          sx={{
            ...styles.centerVH,
            gap: { xs: 1.2, sm: 2 },
            marginInlineEnd: 1,
          }}
        >
          <LanguageSelector />

          {!authed && (
            <Button
              variant="contained"
              size="medium"
              component="a"
              href={`${NEXT_PUBLIC_LOCAL_BASE_URL}?lang=${i18next.language}`}
              onClick={(e) => handleButtonClick(e, "Login")}
              sx={{
                height: "32px",
                color: theme.palette.primary.main,
                textTransform: "capitalize",
                background: "#F3F5F6",
                boxShadow: "0 1px 5px rgba(0,0,0,0.12)",
                "&:hover": { background: "#F3F5F6" },
                display: "flex",
              }}
            >
              {t("common.loginOrSignup")}
            </Button>
          )}
        </Box>
      </Box>

      <Drawer
        open={mobileOpen}
        onClose={toggleDrawer}
        anchor={i18next.language === "fa" ? "right" : "left"}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { width: 240, boxSizing: "border-box" },
        }}
      >
        {drawer}
      </Drawer>

      <ContactUsDialog {...dialogProps} />
    </nav>
  );
}
