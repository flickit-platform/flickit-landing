import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Trans } from "react-i18next";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { theme } from "@/config/theme";
import ContactUsDialog from "@/components/common/ContactUs/ContactUs";
import useDialog from "@/utils/useDialog";
import { styles } from "@/config/styles";
import useScreenResize from "@/utils/useScreenResize";

export default function Footer() {
  const dialogProps = useDialog();

  const isMobile = useScreenResize("sm");
  return (
    <Box
      component={"footer"}
<<<<<<< HEAD
      sx={{
        background: "#2a333b",
        backgroundImage: { md: "url(/footer.svg)" },
        py: "38px",
        px: { xs: 1, sm: "48px" },
      }}
=======
      sx={{ background: "#2B333B", p: {xs: "64px 24px 32px", sm: "42px 48px"}, px: { xs: 1, sm: "48px" } }}
>>>>>>> main
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
            sx={{
              ...theme.typography.bodyMedium,
              color: "#F0F2F4",
              maxWidth: { sm: 390 },
              mt: 2,
              textAlign: { xs: "center", md: "justify" },
            }}
          >
            <Trans i18nKey={"footer.flickitFooterText"} />
          </Typography>
        </Grid>
<<<<<<< HEAD
        <Grid
          order={2}
          size={{ xs: 12, sm: 4 }}
          sx={{ display: { xs: "none", sm: "grid" } }}
        ></Grid>
        <Grid order={{ xs: 1, sm: 3 }} size={{ xs: 12, sm: 2.65 }}>
=======
        <Grid order={2} size={{ xs: 12, sm: 4 }} sx={{display: {xs: "none", sm: "grid" }}} ></Grid>
        <Grid order={{ xs: 1, sm: 3 }} size={{ xs: 12, sm: 4 }}>
>>>>>>> main
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
                sx={{
                  ...theme.typography.titleLarge,
                  color: "#F0F2F4",
                }}
              >
                <Trans i18nKey={"footer.feelFreeToReachUs"} />
              </Typography>
              <Button
                onClick={() => dialogProps.openDialog({ open: true })}
                variant={"contained"}
              >
                <Trans i18nKey="common.contactUs" />
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <ContactUsDialog {...dialogProps} />
    </Box>
  );
}
