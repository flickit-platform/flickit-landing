import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import FeatureCard from "./Feature";
import { styles } from "@/config/styles";
import { Trans } from "react-i18next";
import { motion } from "framer-motion";
import { t } from "i18next";

const features = [
  {
    icon: "/icons/ready-made.svg",
    titleKey: "main.readyMade.title",
    descKey: "main.readyMade.desc",
  },
  {
    icon: "/icons/analytics.svg",
    titleKey: "main.analytics.title",
    descKey: "main.analytics.desc",
  },
  {
    icon: "/icons/effortless.svg",
    titleKey: "main.effortless.title",
    descKey: "main.effortless.desc",
  },
  {
    icon: "/icons/expert-guidance.svg",
    titleKey: "main.expertGuidance.title",
    descKey: "main.expertGuidance.desc",
  },
  {
    icon: "/icons/pen.svg",
    titleKey: "main.customAssessment.title",
    descKey: "main.customAssessment.desc",
  },
  {
    icon: "/icons/cloud.svg",
    titleKey: "main.aiPowered.title",
    descKey: "main.aiPowered.desc",
  },
  {
    icon: "/icons/collabration.svg",
    titleKey: "main.teamCollab.title",
    descKey: "main.teamCollab.desc",
  },
  {
    icon: "/icons/share.svg",
    titleKey: "main.sharing.title",
    descKey: "main.sharing.desc",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const FeaturesSection = () => (
  <Box
    gap={4}
    sx={{
      ...styles.centerCVH,
      py: { xs: 2, md: 4 },
      bgcolor: "#F9FAFB",
    }}
    px={{ xs: 6, xxl: 30 }}
    mt={{ xs: 11, md: 20 }}
  >
    <Typography
      variant="headlineLarge"
      textAlign="center"
      sx={{ mb: { xs: 0, md: 14 } }}
    >
      <Trans
        i18nKey="main.whatMakesDifferent"
        values={{ app: t("main.flickit") }}
        components={{ style: <span style={{ color: "#2466A8" }} /> }}
      />
    </Typography>

    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Grid
        container
        spacing={{ xs: 3 }}
        alignItems="stretch"
        justifyContent="center"
      >
        {features.map((item, index) => (
          <Grid
            key={index}
            size={{ xs: 12, sm: 6, lg: 3 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: {
                xs: 0,
                lg:
                  index == 1 || index === 3
                    ? 20
                    : index == 4 || index === 6
                    ? -20
                    : 0,
              },
            }}
          >
            <motion.div variants={cardVariants}>
              <FeatureCard {...item} />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  </Box>
);

export default FeaturesSection;
