import React from "react";
import ResponsiveCard from "./ResponsiveCard";
import { Box, Grid, Typography } from "@mui/material";
import { styles } from "@/config/styles";
const Cards = () => {
  const cardsData = [
    {
      imageUrl: "goal.svg",
      chipLabel: "Software performance evaluation kit",
      title: "Ensure Your Product's Readiness for Scaling with this assessment kit",
      description: "Make sure your product is ready to scale with Software Performance Evaluation. Assess its ability to handle growth and avoid technical or business setbacks before scaling.",
    },
    {
      imageUrl: "magnifier.svg",
      chipLabel: "Tool maturity",
      title: "How Tool Maturity Enhances Both Speed and Quality",
      description: "Users don't wait. This kit checks the health of your software performance (Latency, Throughput, Resource Use) and fixes bottlenecks before they become a problem during high-demand periods.",
    },
    {
      imageUrl: "chart.svg",
      chipLabel: "Internal Audit Kit",
      title: "Ensuring Long-Term Viability and Sustainability of Software",
      description: "Having features isn’t enough. We need to ensure that the cost of maintaining, fixing bugs, and dealing with technical debt won’t hurt the software’s long-term sustainability. This kit examines the economic and technical health of your product.",
    },
    {
      imageUrl: "checklist.svg",
      chipLabel: "Vendor Evaluation Kit",
      title: "Assessing Vendor Performance and Ensuring High-Quality Deliverables",
      description: "If the output from your vendors isn’t up to standard, the organization may pay the price for years to come. This kit checks the quality, security, and scalability of vendor deliveries.",
    },
  ];

  return (
    <Box sx={{ ...styles.centerCVH }} gap={15} px={{ xs: 2, md: 6 }}>
      <Typography variant="headlineLarge">
        What can you assess with Flickit?
      </Typography>
      <Grid
        container
        spacing={{ xs: 6, md: 3 }}
        columns={{ xs: 3, sm: 8, md: 12 }}
      >
        {cardsData.map((item, index) => (
          <Grid key={index} size={{ xs: 2, sm: 4, md: 3 }}>
            <ResponsiveCard
              imageUrl={item.imageUrl}
              chipLabel={item.chipLabel}
              title={item.title}
              description={item.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Cards;
