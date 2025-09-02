"use client";;
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { t } from "i18next";
import i18next from "i18next";
import { theme } from "@/config/theme";
import { styles } from "@/config/styles";
import LanguageSelector from "@/components/common/languageSelector";
import ContactUsDialog from "@/components/common/ContactUs/ContactUs";
import useDialog from "@/utils/useDialog";
import { useKcAuth } from "@/hooks/useKcAuth";
import AccountDropDownButton from "@/components/common/nav/AccountDropDownButton";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

export default function Navbar() {
  const dialogProps = useDialog();
  const { authed, kc } = useKcAuth();
  const [userInfo, setUserInfo] = React.useState(null);

  React.useEffect(() => {
    let cancelled = false;
    const run = async () => {
      if (!authed || !kc) return;
      try {
        await kc.updateToken(30).catch(() => kc.login());
        const res = await fetch(`${API_BASE}/api/v1/users/me/`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${kc.token}`,
            Accept: "application/json",
          },
          credentials: "include",
          cache: "no-store",
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        console.log(json);
        if (!cancelled) setUserInfo(json);
      } catch (err) {
        console.error("GET /users/me failed:", err);
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, [authed, kc]);

  const handleButtonClick = (e: React.MouseEvent, name: string) => {
    (window as any).dataLayer?.push?.({
      event: "ppms.cm:trackEvent",
      parameters: { category: "Button", action: "Click", name },
    });
  };

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
        <Box sx={{ height: "100%", width: "auto" }}>
          <img src={"/logo.svg"} style={{ height: "44px" }} alt={"logo-icon"} />
        </Box>

        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Button
            variant="text"
            size="medium"
            component="a"
            href={process.env.NEXT_PUBLIC_LOCAL_BASE_URL + "spaces"}
            onClick={(e) => handleButtonClick(e, "MyAssessments")}
            sx={{
              height: "32px",
              color: "#fff",
              textTransform: "uppercase",
              px: 1.5,
              "&:hover": { background: "rgba(255,255,255,0.12)" },
            }}
          >
            {t("common.myAssessments")}
          </Button>

          <Button
            variant="text"
            size="medium"
            component="a"
            href={process.env.NEXT_PUBLIC_LOCAL_BASE_URL + "assessment-kits"}
            onClick={(e) => handleButtonClick(e, "KitLibrary")}
            sx={{
              height: "32px",
              color: "#fff",
              textTransform: "uppercase",
              px: 1.5,
              "&:hover": { background: "rgba(255,255,255,0.12)" },
            }}
          >
            {t("common.kitLibrary")}
          </Button>
        </Box>

        <Box sx={{ ...styles.centerVH, gap: { xs: 1.2, sm: 2 } }}>
          <LanguageSelector />

          {!authed ? (
            <Button
              variant="contained"
              size="medium"
              component="a"
              href={process.env.NEXT_PUBLIC_LOCAL_BASE_URL + `?lang=${i18next.language}`}
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
          ) : userInfo ? (
            <AccountDropDownButton userInfo={userInfo} />
          ) : null}
        </Box>
      </Box>

      <ContactUsDialog {...dialogProps} />
    </nav>
  );
}
