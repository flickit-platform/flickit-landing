import React from "react";
import Kit from "./KitPart";
import { Box, Grid, Typography } from "@mui/material";
import { styles } from "@/config/styles";
import { Trans } from "react-i18next";

const cardsData = [
  {
    id: "384",
    imageUrl: "/speed.svg",
    chipLabelKey: "main.kit.softwarePerformance.chipLabel",
    titleKey: "main.kit.softwarePerformance.title",
    descKey: "main.kit.softwarePerformance.desc",
    caseStudyDescKey: "main.kit.softwarePerformance.caseStudyDesc",
    caseStudyLogo: "amazon.svg",
  },
  {
    id: "363",
    imageUrl: "magnifier.svg",
    chipLabelKey: "main.kit.toolMaturity.chipLabel",
    titleKey: "main.kit.toolMaturity.title",
    descKey: "main.kit.toolMaturity.desc",
    caseStudyDescKey: "main.kit.toolMaturity.caseStudyDesc",
    caseStudyLogo: "etsy.svg",
  },
  {
    id: "386",
    imageUrl: "chart.svg",
    chipLabelKey: "main.kit.internalAudit.chipLabel",
    titleKey: "main.kit.internalAudit.title",
    descKey: "main.kit.internalAudit.desc",
    caseStudyDescKey: "main.kit.internalAudit.caseStudyDesc",
    caseStudyLogo: "facebook.svg",
  },
  {
    id: "385",
    imageUrl: "ai-kit.svg",
    chipLabelKey: "main.kit.vendorEvaluation.chipLabel",
    titleKey: "main.kit.vendorEvaluation.title",
    descKey: "main.kit.vendorEvaluation.desc",
    caseStudyDescKey: "main.kit.vendorEvaluation.caseStudyDesc",
    caseStudyLogo: "fujistu.jpeg",
  },
];

const Kits = () => {
  return (
    <Box sx={{ ...styles.centerCVH }} gap={15} px={{ xs: 2, md: 6, xxl: 30 }}>
      <Typography variant="headlineLarge" textAlign="center">
        <Trans
          i18nKey="main.whatCanYouAssessWith"
          values={{ app: "Flickit" }}
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
            key={item.id}
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
