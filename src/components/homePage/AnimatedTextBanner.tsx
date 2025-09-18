import { useEffect, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useAnimationControls, useReducedMotion, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { open_sans, sahel } from "@/config/theme";

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
] as const;

const wrapperSx = {
  mt: { xs: 6, sm: 0, md: 10 },
  mb: 2,
  position: "relative",
  display: "flex",
  justifyContent: "center",
} as const;

const bubbleSx = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  background:
    "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(171,203,237,0.15) 100%)",
  py: { xs: "8px", md: "24px" },
  px: "32px",
  borderRadius: "16px",
} as const;

const textBaseSx = {
  fontWeight: 400,
  color: "#fff",
  fontSize: { xs: "24px", md: "48px" },
  display: "inline-block",
  whiteSpace: { xs: "normal", md: "nowrap" } as any,
  textAlign: "center" as const,
};

const AnimatedTextBanner = () => {
  const { t, i18n } = useTranslation();
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const controls = useAnimationControls();

  const texts = useMemo(() => messages.map((k) => t(k)), [i18n.language, t]);
  const isFa = i18n.language === "fa";
  const fontFamily = isFa ? sahel.style.fontFamily : open_sans.style.fontFamily;
  const fontStyle = isFa ? "normal" : "italic";

  useEffect(() => {
    let alive = true;

    controls.set({ opacity: 1 });

    const tick = async () => {
      if (!alive) return;
      if (!prefersReducedMotion) {
        await controls.start({ opacity: 0, transition: { duration: 0.25 } });
      }
      setIndex((prev) => (prev + 1) % texts.length);
      if (!prefersReducedMotion) {
        await controls.start({ opacity: 1, transition: { duration: 0.25 } });
      }
    };

    const id = setInterval(tick, 5000);
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, [controls, prefersReducedMotion, texts.length]);

  return (
    <Box sx={wrapperSx}>
      <Box sx={bubbleSx}>
        <motion.div
          animate={controls}
          style={{ willChange: "opacity" }}
        >
          <Typography
            sx={textBaseSx}
            style={{ fontFamily, fontStyle }}
          >
            {texts[index]}
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default AnimatedTextBanner;
