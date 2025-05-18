// components/ResponsiveCard.tsx
import React from "react";
import { Box, Typography, Chip, Button } from "@mui/material";
import { Trans } from "react-i18next";
import { theme } from "@/config/theme";

interface Props {
  imageUrl: string;
  chipLabel: string;
  title: string;
  description: string;
}

const ResponsiveCard = ({ imageUrl, chipLabel, title, description }: Props) => {
  return (
    <Box
      sx={{
        position: "relative",
        p: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "1rem",
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
        bgcolor: "background.paper",
        overflow: "visible",
        maxWidth: "100%",
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src={imageUrl}
        alt="kit image"
        sx={{
          position: "absolute",
          top: "-80px",
          width: "auto",
          height: "160px",
          objectFit: "contain",
        }}
      />

      <Box sx={{ height: "80px" }} />

      <Chip
        sx={{
          ...theme.typography.labelMedium,
          background: "#EAF2FB",
          borderColor: "#87ACD2 !important",
        }}
        label={chipLabel}
        variant="outlined"
        color="primary"
        size="small"
      />
      <Typography variant="titleLarge" textAlign="center" sx={{ mb: 1 }}>
        {title}
      </Typography>

      <Typography
        variant="bodyLarge"
        textAlign="justify"
        color="#2B333B"
        sx={{ mb: 2 }}
      >
        {description}
      </Typography>

      <Button variant="outlined" fullWidth sx={{ mb: 1 }}>
        <Trans i18nKey="moreAboutThisKit" />
      </Button>

      <Button variant="contained" fullWidth>
        <Trans i18nKey="createAssessment" />
      </Button>
    </Box>
  );
};

export default ResponsiveCard;
