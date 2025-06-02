import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Trans } from "react-i18next";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { theme } from "@/config/theme";
import ContactUsDialog from "@/components/common/ContactUs/ContactUs";
import useDialog from "@/utils/useDialog";

export default function Footer() {
  const dialogProps = useDialog();

  return (
    <Box
      component={"footer"}
      sx={{ background: "#2B333B", py: "42px", px: { xs: 1, sm: "48px" } }}
    >
      <Grid
        container
        sx={{
          maxWidth: "1440px",
          mx: "auto",
          display: "flex",
          gap: { xs: "101px", sm: "unset" },
        }}
      >
        <Grid order={{ xs: 3, sm: 1 }} size={{ xs: 12, sm: 4 }}>
          <img src={"/logo.svg"} />
          <Typography
            sx={{
              ...theme.typography.bodyMedium,
              color: "#F0F2F4",
              maxWidth: { sm: "428px" },
            }}
            textAlign="justify"
          >
            <Trans i18nKey={"footer.flickitFooterText"} />
          </Typography>
        </Grid>
        <Grid order={2} size={{ xs: 12, sm: 4 }}></Grid>
        <Grid order={{ xs: 1, sm: 3 }} size={{ xs: 12, sm: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: { xs: "center", sm: "flex-end" },
              flexDirection: { xs: "row", sm: "column" },
              gap: 2,
            }}
          >
            <img
              style={{ width: "137px", height: "120px" }}
              src={"email-icon.svg"}
            />
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
