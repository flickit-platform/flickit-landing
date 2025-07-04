import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { styles } from "@/config/styles";
import useScreenResize from "@/utils/useScreenResize";
import { Trans } from "react-i18next";
import { motion } from "framer-motion";

const faqs = [
  {
    icon: "/icons/thermometer.svg",
    questionKey: "main.faq1.question",
    answerKey: "main.faq1.answer",
  },
  {
    icon: "/icons/compass.svg",
    questionKey: "main.faq2.question",
    answerKey: "main.faq2.answer",
  },
  {
    icon: "/icons/people.svg",
    questionKey: "main.faq3.question",
    answerKey: "main.faq3.answer",
  },
];

const FaqSection = () => {
  const isMobile = useScreenResize("sm");

  return (
    <Box
      sx={{
        bgcolor: "#EAF2FB",
        py: 4,
        borderRadius: 4,
        ...styles.centerCV,
      }}
      px={{ xs: 2, md: 18, xxl: 30 }}
      mt={10}
    >
      <Typography
        variant={isMobile ? "headlineSmall" : "headlineLarge"}
        textAlign="center"
        sx={{ mb: 4 }}
      >
        <Trans i18nKey="main.faq" />
      </Typography>

      {faqs.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.25, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: idx % 2 === 0 ? "row" : "row-reverse",
              justifyContent: idx % 2 === 0 ? "start" : "end",
              textAlign: idx % 2 === 0 ? "start" : "end",
              alignItems: "center",
              mt: isMobile ? 8 : idx === 2 ? -4 : -8,
              gap: 4,
            }}
          >
            <Box
              component="img"
              src={item.icon}
              alt=""
              sx={{
                width: { xs: 140, sm: 200, md: "unset" },
                maxWidth: { xs: 140, sm: 200, md: 250 },
              }}
              color="#2B333B"
            />
            <Box
              sx={{ ...styles.centerCV }}
              maxWidth={{ lg: 570, xxl: 900 }}
              gap="12px"
            >
              <Typography
                variant={isMobile ? "semiBoldLarge" : "semiBoldXLarge"}
              >
                <Trans i18nKey={item.questionKey} />
              </Typography>
              <Typography variant={isMobile ? "bodyMedium" : "bodyLarge"}>
                <Trans i18nKey={item.answerKey} />
              </Typography>
            </Box>
          </Box>
        </motion.div>
      ))}
    </Box>
  );
};

export default FaqSection;
