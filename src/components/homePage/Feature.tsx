import { Box, Typography } from "@mui/material";
import { styles } from "@/config/styles";

interface Props {
  icon: string;
  title: string;
  desc: string;
}

const FeatureCard = ({ icon, title, desc }: Props) => (
  <Box
    sx={{
      ...styles.centerCH,
      py: 4,
      px: 2,
      borderRadius: "12px",
      bgcolor: "background.paper",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      height: 270,
      boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
      gap: 2,
    }}
  >
    <Box component="img" src={icon} alt={title} sx={{ maxWidth: 45 }} />
    <Typography variant="semiBoldXLarge" textAlign="center">
      {title}
    </Typography>
    <Typography variant="bodyLarge" textAlign="center" color="#2B333B">
      {desc}
    </Typography>
  </Box>
);

export default FeatureCard;
