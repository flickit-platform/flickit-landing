import { Box, Typography } from "@mui/material";
import { styles } from "@/config/styles";
import { Trans } from "react-i18next";

interface Props {
  icon: string;
  titleKey: string;
  descKey: string;
}

const FeatureCard = ({ icon, titleKey, descKey }: Props) => (
  <Box
    sx={{
      ...styles.centerCH,
      py: 4,
      px: 2,
      borderRadius: "12px",
      bgcolor: "background.paper",
      justifyContent: "flex-start",
      minHeight: { xs: 200, sm: 250 },
      boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
      gap: 2,
    }}
  >
    <Box component="img" src={icon} alt={titleKey} sx={{ maxWidth: 45 }} />
    <Typography variant="semiBoldXLarge" textAlign="center">
      <Trans i18nKey={titleKey} />
    </Typography>
    <Typography variant="bodyLarge" textAlign="center" color="#2B333B">
      <Trans i18nKey={descKey} />
    </Typography>
  </Box>
);

export default FeatureCard;
