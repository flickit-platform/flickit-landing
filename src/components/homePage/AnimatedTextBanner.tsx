import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "@/config/styles";
import { useTranslations } from "next-intl";
import { farsiFontFamily, primaryFontFamily } from "@/utils/fonts";
import useScreenResize from "@/utils/useScreenResize";
import { useParams } from "next/navigation";

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
  const t = useTranslations();
  const isMobile = useScreenResize("sm");
  const { locale } = useParams();
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <Box
      sx={{
        mt: { xs: 6, sm: 0, md: 10 },
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              whiteSpace: isMobile ? "wrap" : "nowrap",
              overflow: "hidden",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontStyle: locale === "fa" ? "none" : "italic",
                fontWeight: 400,
                color: "#fff",
                fontSize: {
                  xs: "24px",
                  md: "48px",
                },
                fontFamily:
                  locale === "fa" ? farsiFontFamily : primaryFontFamily,
                display: "inline-block",
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
