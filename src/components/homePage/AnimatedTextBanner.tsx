import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "@/config/styles";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { farsiFontFamily, primaryFontFamily } from "@/utils/fonts";

const messages = [
  "hero.quotes.systemGotHacked",
  "hero.quotes.userDataLeaked",
  "hero.quotes.systemNotBooting",
  "hero.quotes.clientCommitmentsUnmet",
  "hero.quotes.reputationAtStake",
  "hero.quotes.lowTeamProductivity",
  "hero.quotes.slowReleases",
  "hero.quotes.budgetRunningOut",
  "hero.quotes.dontTrustOutputs",
  "hero.quotes.peopleLeaving",
  "hero.quotes.tooManyBugs",
  "hero.quotes.notUserFriendly",
  "hero.quotes.missingCertifications",
  "hero.quotes.technicalIssueBlockingDev",
];

const AnimatedTextBanner = () => {
  const [index, setIndex] = useState(0);
  const theme = useTheme();
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        mt: 15,
        mb: 2,
        position: "relative",
        ...styles.centerH,
      }}
    >
      <Box
        sx={{
          ...styles.centerVH,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(171,203,237,0.15) 100%)",
          py: { xs: "8px", md: "24px" },
          px: "32px",
          borderRadius: "16px",
          display: "inline-flex",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              sx={{
                fontStyle: "italic",
                fontWeight: 600,
                color: "#fff",
                fontSize: {
                  xs: "24px",
                  md: "48px",
                },
                fontFamily:
                  i18next.language === "fa"
                    ? farsiFontFamily
                    : primaryFontFamily,
                whiteSpace: "nowrap",
              }}
            >
              {t(messages[index])}
            </Typography>
          </motion.div>
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default AnimatedTextBanner;
