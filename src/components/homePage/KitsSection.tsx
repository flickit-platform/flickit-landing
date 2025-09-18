import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { styles } from "@/config/styles";
import { Trans } from "react-i18next";
import { motion } from "framer-motion";
import KitPart from "./KitPart";
import { theme } from "@/config/theme";
import i18next, { t } from "i18next";
import { NEXT_PUBLIC_LOCAL_BASE_URL } from "@/utils/env";

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
    free: false,
  },
];

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
  const handleButtonClick = (e: any, name: string) => {
    (window as any).dataLayer.push({
      event: "ppms.cm:trackEvent",
      parameters: {
        category: "Button",
        action: "Click",
        name: name,
      },
    });
  };

  return (
    <Box sx={{ ...styles.centerCVH }} px={{ xs: 2, md: 6, xxl: 30 }}>
      <Typography variant="headlineLarge" textAlign="center" mb={15}>
        <Trans
          i18nKey="main.whatCanYouAssessWith"
          values={{ app: t("main.flickit") }}
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
            item
            key={item.id}
            xs={12}
            sm={4}
            md={3}
            sx={{ display: "flex" }}
          >
            <motion.div
              variants={cardVariants as any}
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
        component="a"
        href={
          NEXT_PUBLIC_LOCAL_BASE_URL +
          "assessment-kits" +
          `?lang=${i18next.language}`
        }
        onClick={(e) => {
          handleButtonClick(e, "View all assessment kits");
        }}
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
        <Trans i18nKey="main.viewAllAssessmentKits" />
      </Button>
    </Box>
  );
};

export default Kits;
