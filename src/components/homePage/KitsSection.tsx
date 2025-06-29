import { Box, Button, Grid, Typography } from "@mui/material";
import { styles } from "@/config/styles";
import { motion } from "framer-motion";
import KitPart from "./KitPart";
import { theme } from "@/config/theme";
import Link from "next/link";
import { VITE_LOCAL_BASE_URL } from "@/utils/env";
import { useTranslations } from 'next-intl';
import React from "react";

const cardsData = [
  {
    id: "384",
    imageUrl: "/EnsureProductScale-world.svg",
    chipLabelKey: "main.kit.softwarePerformance.chipLabel",
    titleKey: "main.kit.softwarePerformance.title",
    descKey: "main.kit.softwarePerformance.desc",
    caseStudyDescKey: "main.kit.softwarePerformance.caseStudyDesc",
    caseStudyLogo: "amazon.svg",
    free: true,
  },
  {
    id: "363",
    imageUrl: "/magnifier.svg",
    chipLabelKey: "main.kit.toolMaturity.chipLabel",
    titleKey: "main.kit.toolMaturity.title",
    descKey: "main.kit.toolMaturity.desc",
    caseStudyDescKey: "main.kit.toolMaturity.caseStudyDesc",
    caseStudyLogo: "etsy.svg",
    free: true,
  },
  {
    id: "386",
    imageUrl: "/speed.svg",
    chipLabelKey: "main.kit.internalAudit.chipLabel",
    titleKey: "main.kit.internalAudit.title",
    descKey: "main.kit.internalAudit.desc",
    caseStudyDescKey: "main.kit.internalAudit.caseStudyDesc",
    caseStudyLogo: "facebook.svg",
    free: false,
  },
  {
    id: "385",
    imageUrl: "/ai-kit.svg",
    chipLabelKey: "main.kit.vendorEvaluation.chipLabel",
    titleKey: "main.kit.vendorEvaluation.title",
    descKey: "main.kit.vendorEvaluation.desc",
    caseStudyDescKey: "main.kit.vendorEvaluation.caseStudyDesc",
    caseStudyLogo: "fujistu.jpeg",
    waitList: true,
    free: true,
  },
];

// framer-motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Kits = () => {
  const t  = useTranslations();
  return (
    <Box sx={{ ...styles.centerCVH }} px={{ xs: 2, md: 6, xxl: 30 }}>
      <Typography variant="headlineLarge" textAlign="center" mb={15}>
          {t.rich('main.whatCanYouAssessWith', {
              app: (chunks)=> <span>{t(`${chunks}`)}</span>,
              style: (chunks) => <span style={{ color: '#2466A8' }}>{chunks}</span>
          })}
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
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              style={{ width: "100%" }}
            >
              <KitPart {...item} />
            </motion.div>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        size="large"
        component={Link}
        href={VITE_LOCAL_BASE_URL + "assessment-kits"}
        sx={{
          borderRadius: "24px",
          marginBlock: 7,
          ...theme.typography.titleLarge,
          fontWeight: 600,
          textAlign: "center",
          [theme.breakpoints.down("md")]: {
            ...theme.typography.titleMedium,
          },
        }}
      >
          {t("main.viewAllAssessmentKits")}
      </Button>
    </Box>
  );
};

export default Kits;
