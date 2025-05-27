import React from "react";
import { Box, Typography, Chip, Button } from "@mui/material";
import { Trans } from "react-i18next";
import { theme } from "@/config/theme";
import Link from "next/link";

interface Props {
  imageUrl: string;
  chipLabel: string;
  title: string;
  description: string;
  caseStudyDesc: string;
  caseStudyLogo: string;
  id: string;
}

const IMAGE_HEIGHT = 160;

const LOGO_SIZE = 24;

const ResponsiveCard = ({
  imageUrl,
  chipLabel,
  title,
  description,
  caseStudyDesc,
  caseStudyLogo,
  id,
}: Props) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
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
          overflow: "visible",
          height: "100%",
          textDecoration: "none",
          color: "unset",
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
          <Button
            variant="outlined"
            fullWidth
            component={Link}
            href={"https://app.flickit.org/assessment-kits/" + id}
          >
            <Trans i18nKey="main.moreAboutThisKit" />
          </Button>
          <Button
            variant="contained"
            fullWidth
            component={Link}
            href={
              "https://stage.flickit.org/assessment-kits/" +
              id +
              `#createAssessment?id=${id}&title=${encodeURIComponent(title)}`
            }
          >
            <Trans i18nKey="main.createAssessment" />
          </Button>
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            bottom: "-46px",
            transform: "translateX(-50%)",
            width: 0,
            height: "46px",
            borderRight: "1px dashed rgba(36, 102, 168, 0.5)",
            zIndex: 3,
          }}
        />
      </Box>

      {/* Global Case Study Box */}
      <Box
        sx={{
          mt: 6,
          position: "relative",
          bgcolor: "#F0F4F8",
          borderRadius: "0 0 20px 20px",
          p: 3,
          pt: 2.5,
          pb: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: { xs: "unset", md: 60, lg: 70 },
        }}
        mb={{ xs: 18, lg: 2 }}
      >
        {caseStudyLogo && (
          <Box
            component="img"
            src={caseStudyLogo}
            alt="logo"
            sx={{
              position: "absolute",
              left: `-${LOGO_SIZE / 2}px`,
              top: `-${LOGO_SIZE / 2}px`,
              width: `${LOGO_SIZE}px`,
              height: `${LOGO_SIZE}px`,
              borderRadius: "50%",
              zIndex: 2,
            }}
          />
        )}

        <Typography variant="labelSmall" color="#97A6B8" mb={0.5}>
          <Trans i18nKey="main.globalCaseStudy" />
        </Typography>
        <Typography
          variant="semiBoldMedium"
          color="#2466A8"
          textAlign="center"
          sx={{ mb: 2 }}
        >
          {caseStudyDesc}
        </Typography>
        {/* <Button variant="outlined" size="small">
          <Trans i18nKey="main.learnMore" />
        </Button> */}
      </Box>
    </Box>
  );
};

export default ResponsiveCard;
