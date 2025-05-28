import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import FeatureCard from "./Feature";
import { styles } from "@/config/styles";
import { Trans } from "react-i18next";

const features = [
  {
    icon: "/icons/ready-made.svg",
    title: "Ready-made kits.",
    desc: "Choose from curated assessments designed for common roles, domains, and maturity objectives—no setup required.",
  },
  {
    icon: "/icons/analytics.svg",
    title: "Actionable analytics",
    desc: "Instantly turn responses into maturity scores, strengths, gaps, and prioritized next steps you can act on right away.",
  },
  {
    icon: "/icons/effortless.svg",
    title: "Effortless questionnaires",
    desc: "Skip logic makes answering fast, clear, and frustration-free.",
  },
  {
    icon: "/icons/expert-guidance.svg",
    title: "Expert guidance on demand",
    desc: "Book sessions with certified assessors for deep-dive reviews, interpretation, or roadmap validation whenever you need.",
  },
  {
    icon: "/icons/pen.svg",
    title: "Custom assessments, made for you",
    desc: "Need something specific? We'll connect you with an expert who can design a tailored assessment kit that fits your team’s exact context and goals.",
  },
  {
    icon: "/icons/collabration.svg",
    title: "AI-powered insights",
    desc: "Leverage advanced AI to uncover hidden patterns, benchmark against peers, and forecast ROI for improvement actions.",
  },
  {
    icon: "/icons/cloud.svg",
    title: "Real-time team collaboration",
    desc: "Invite colleagues to co-fill questionnaires, see each other’s progress instantly, and lock answers when consensus is reached.",
  },
  {
    icon: "/icons/share.svg",
    title: "3-Click report sharing",
    desc: "Share reports with stakeholders via a secure link in seconds.",
  },
];

const FeaturesSection = () => (
  <Box
    gap={8}
    sx={{
      ...styles.centerCVH,
      py: { xs: 2, md: 12 },
      bgcolor: "#F9FAFB",
    }}
    px={{ xs: 2, md: 6, xxl: 30 }}
  >
    <Typography
      variant="headlineLarge"
      textAlign="center"
      sx={{ mb: { xs: 0, md: 8 }, fontWeight: 700 }}
    >
      <Trans
        i18nKey="main.whatMakesDifferent"
        values={{
          app: "Flickit",
        }}
        components={{
          style: <span style={{ color: "#2466A8" }} />,
        }}
      />
    </Typography>
    <Grid
      container
      spacing={{ xs: 3 }}
      alignItems="stretch"
      justifyContent="center"
    >
      {features.map((item, index) => (
        <Grid
          key={index}
          size={{ xs: 12, sm: 6, md: 3 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: {
              xs: 0,
              md:
                index == 1 || index === 3
                  ? 20
                  : index == 4 || index === 6
                  ? -20
                  : 0,
            },
          }}
        >
          <FeatureCard {...item} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default FeaturesSection;
