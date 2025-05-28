import React from "react";
import Kit from "./KitPart";
import { Box, Grid, Typography } from "@mui/material";
import { styles } from "@/config/styles";
import { Trans } from "react-i18next";
const cardsData = [
  {
    id: "384",
    imageUrl: "goal.svg",
    chipLabel: "Software performance evaluation kit",
    title:
      "Ensure Your Product's Readiness for Scaling with this assessment kit",
    description:
      "Make sure your product is ready to scale with Software Performance Evaluation. Assess its ability to handle growth and avoid technical or business setbacks before scaling.",
    caseStudyDesc: "Amazon: How Latency Optimization Boosted Revenue",
    caseStudyLogo: "amazon.svg",
  },
  {
    id: "363",
    imageUrl: "magnifier.svg",
    chipLabel: "Tool maturity",
    title: "How Tool Maturity Enhances Both Speed and Quality",
    description:
      "Users don't wait. This kit checks the health of your software performance (Latency, Throughput, Resource Use) and fixes bottlenecks before they become a problem during high-demand periods.",
    caseStudyDesc:
      "How Etsy Accelerated Deployment up to fifty deploy per day with DevOps Automation?",
    caseStudyLogo: "etsy.svg",
  },
  {
    id: "386",
    imageUrl: "chart.svg",
    chipLabel: "Internal Audit Kit",
    title: "Ensuring Long-Term Viability and Sustainability of Software",
    description:
      "Having features isn’t enough. We need to ensure that the cost of maintaining, fixing bugs, and dealing with technical debt won’t hurt the software’s long-term sustainability. This kit examines the economic and technical health of your product.",
    caseStudyDesc:
      "Facebook Messenger: How Technical Debt Was Eliminated for Faster Performance",
    caseStudyLogo: "facebook.svg",
  },
  {
    id: "385",
    imageUrl: "checklist.svg",
    chipLabel: "Vendor Evaluation Kit",
    title:
      "Assessing Vendor Performance and Ensuring High-Quality Deliverables",
    description:
      "If the output from your vendors isn’t up to standard, the organization may pay the price for years to come. This kit checks the quality, security, and scalability of vendor deliveries.",
    caseStudyDesc:
      "Fujitsu's Failure: How Poor Vendor Control Led to a Billion-Dollar Disaster",
    caseStudyLogo: "fujistu.jpeg",
  },
];
const Kits = () => {
  return (
    <Box sx={{ ...styles.centerCVH }} gap={15} px={{ xs: 2, md: 6, xxl: 30 }}>
      <Typography variant="headlineLarge" textAlign="center">
        <Trans
          i18nKey="main.whatCanYouAssessWith"
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
        spacing={{ md: 3 }}
        columns={{ xs: 3, sm: 4, md: 6, lg: 12 }}
        alignItems="stretch"
      >
        {cardsData.map((item, index) => (
          <Grid
            key={index}
            size={{ xs: 2, sm: 4, md: 3 }}
            sx={{ display: "flex" }}
          >
            <Kit {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Kits;
