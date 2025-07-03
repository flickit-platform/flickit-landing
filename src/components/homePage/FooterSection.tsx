import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import ContactUsDialog from "@/components/common/ContactUs/ContactUs";
import useDialog from "@/utils/useDialog";
import { styles } from "@/config/styles";
import useScreenResize from "@/utils/useScreenResize";
import { useTranslations } from "next-intl";

export default function Footer() {
  const dialogProps = useDialog();

  const isMobile = useScreenResize("sm");
  const t = useTranslations();
  return (
    <Box
      component={"footer"}
      sx={{
        background: "#2a333b",
        backgroundImage: { md: "url(/Footer.svg)" },
        backgroundPosition: "center",
        py: "38px",
        px: { xs: 1, sm: "48px" },
      }}
    >
      <Grid
        container
        sx={{
          maxWidth: "1440px",
          mx: "auto",
          display: "flex",
          gap: { xs: 8, sm: "unset" },
        }}
      >
        <Grid
          order={{ xs: 3, sm: 1 }}
          size={{ xs: 12, sm: 5.35 }}
          sx={{
            ...styles.centerCV,
            justifyContent: { xs: "flex-start", md: "cente" },
            textAlign: { xs: "center", md: "justify" },
          }}
        >
          <img
            alt="logo"
            src={"/logo.svg"}
            style={{ margin: isMobile ? "0 auto" : "0", maxWidth: 170 }}
          />
          <Typography
            variant="bodyMedium"
            sx={{
              color: "#F0F2F4",
              maxWidth: { sm: 390 },
              mt: 2,
              textAlign: { xs: "center", md: "justify" },
            }}
          >
            {t("footer.flickitFooterText")}
          </Typography>
        </Grid>
        <Grid
          order={2}
          size={{ xs: 12, sm: 4 }}
          sx={{ display: { xs: "none", sm: "grid" } }}
        ></Grid>
        <Grid order={{ xs: 1, sm: 3 }} size={{ xs: 12, sm: 2.65 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: { xs: "row", sm: "column" },
              gap: 2,
            }}
          >
            <img src={"email-icon.svg"} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Typography
                variant="titleLarge"
                sx={{
                  color: "#F0F2F4",
                }}
              >
                {t("footer.feelFreeToReachUs")}
              </Typography>
              <Button
                onClick={() => dialogProps.openDialog({ open: true })}
                variant={"contained"}
              >
                {t("common.contactUs")}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <ContactUsDialog {...dialogProps} />
    </Box>
  );
}
