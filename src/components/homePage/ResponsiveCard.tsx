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

const CARD_HEIGHT = 460;
const IMAGE_HEIGHT = 160;

const ResponsiveCard = ({ imageUrl, chipLabel, title, description }: Props) => {
  return (
    <Box
      sx={{
        position: "relative",
        p: 2,
        pt: `${IMAGE_HEIGHT / 2}px`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "1rem",
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
        bgcolor: "background.paper",
        maxWidth: "100%",
        minWidth: 0,
        height: { xs: `${CARD_HEIGHT}px`, md: `${CARD_HEIGHT}px` },
        overflow: "visible",
      }}
    >
      <Box
        component="img"
        src={imageUrl}
        alt="kit image"
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translate(-50%, -50%)",
          height: `${IMAGE_HEIGHT}px`,
          width: "auto",
          maxWidth: "60%",
          objectFit: "contain",
          zIndex: 2,
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          width: "100%",
          mt: 3,
          gap: 1,
        }}
      >
        <Chip
          sx={{
            ...theme.typography.labelMedium,
            background: "#EAF2FB",
            borderColor: "#87ACD2 !important",
            mb: 1,
            mx: "auto",
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
          sx={{
            mb: 2,
            flex: 1,
            minHeight: "60px",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          {description}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          mt: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Button variant="outlined" fullWidth>
          <Trans i18nKey="moreAboutThisKit" />
        </Button>
        <Button variant="contained" fullWidth>
          <Trans i18nKey="createAssessment" />
        </Button>
      </Box>
    </Box>
  );
};

export default ResponsiveCard;
