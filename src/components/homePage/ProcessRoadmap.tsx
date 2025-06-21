"use client"

import React from "react";
import { Box, Typography } from "@mui/material";
import { styles } from "@/config/styles";
import useScreenResize from "@/utils/useScreenResize";
import { motion } from "framer-motion";
import {useTranslations} from "next-intl"; // فقط این اضافه شد

type Pin = {
  id: number;
  titleKey: string;
  descKey: string;
  color: string;
  left: string;
  top: string;
  leftMobile: string;
  topMobile: string;
  url: string;
  labelPosition: "top-right" | "top" | "bottom-left" | "bottom-right";
};

const pins: Pin[] = [
  {
    id: 1,
    titleKey: "main.pin1Title",
    descKey: "main.pin1Desc",
    color: "#CE2A4B",
    left: "16.3%",
    top: "49%",
    leftMobile: "22%",
    topMobile: "5%",
    url: "/red-pin.svg",
    labelPosition: "top-right",
  },
  {
    id: 2,
    titleKey: "main.pin2Title",
    descKey: "main.pin2Desc",
    color: "#2466A8",
    left: "29.5%",
    top: "65.5%",
    leftMobile: "54%",
    topMobile: "21%",
    url: "/blue-pin.svg",
    labelPosition: "bottom-left",
  },
  {
    id: 3,
    titleKey: "main.pin3Title",
    descKey: "main.pin3Desc",
    color: "#F39318",
    left: "50%",
    top: "54%",
    leftMobile: "30%",
    topMobile: "46%",
    url: "/orange-pin.svg",
    labelPosition: "bottom-right",
  },
  {
    id: 4,
    titleKey: "main.pin4Title",
    descKey: "main.pin4Desc",
    color: "#388E3C",
    left: "75.7%",
    top: "54%",
    leftMobile: "57.5%",
    topMobile: "64%",
    url: "/green-pin.svg",
    labelPosition: "top",
  },
];

const getLabelStyle = (pos: Pin["labelPosition"]) => {
  switch (pos) {
    case "top-right":
      return {
        position: "absolute",
        left: "90%",
        top: "50%",
        marginLeft: "16px",
        transform: "translateY(-100%)",
        textAlign: "left" as const,
      };
    case "top":
      return {
        position: "absolute",
        left: "50%",
        top: "20%",
        transform: "translate(-50%, -120%)",
        textAlign: "center" as const,
      };
    case "bottom-left":
      return {
        position: "absolute",
        top: "140%",
        marginLeft: "-420px",
        marginTop: "12px",
        textAlign: "right" as const,
      };
    case "bottom-right":
      return {
        position: "absolute",
        left: "60%",
        top: "130%",
        marginLeft: "16px",
        marginTop: "12px",
        textAlign: "left" as const,
      };
    default:
      return {
        position: "absolute",
        left: "50%",
        top: "100%",
        transform: "translateX(-50%)",
        textAlign: "center" as const,
      };
  }
};

const PinLabel = ({
  pin,
  variant = "headlineMedium",
}: {
  pin: Pin;
  variant?: "headlineMedium" | "headlineSmall";
}) => {
  const t  = useTranslations();
  return (
      <Box
          sx={{
            my: 4,
            textAlign: "center",
            ...styles.centerCH,
            gap: 1,
            px: { xs: 8, md: 0 },
          }}
      >
        <Typography variant={variant} color={pin.color}>
          {t(pin.titleKey)}
        </Typography>
        <Typography variant="semiBoldXLarge" sx={{ color: "#2B333B" }}>
          {t(pin.descKey)}
        </Typography>
      </Box>
  );
}

type RoadmapImageWithPinsProps = {
  pins: Pin[];
  isMobile: boolean;
  streetImg: string;
};

const RoadmapImageWithPins = ({
  pins,
  isMobile,
  streetImg,
}: RoadmapImageWithPinsProps) => {
  const t  = useTranslations();
  return (
  <Box
    sx={{
      position: "relative",
      width: "100%",
      maxWidth: isMobile ? 470 : 1440,
      aspectRatio: isMobile ? "442/717" : "1440/831",
      mx: "auto",
      my: isMobile ? 2 : 0,
      mt: isMobile ? undefined : -15,
    }}
  >
    <img
      src={streetImg}
      alt="Process Roadmap"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "contain",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />

    {pins.map((pin, index) => (
      <motion.div
        key={pin.id}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          delay: index * 0.3,
          type: "spring",
          stiffness: 120,
          damping: 10,
        }}
        viewport={{ once: true, amount: 0.3 }}
        style={{
          position: "absolute",
          left: isMobile ? pin.leftMobile : pin.left,
          top: isMobile ? pin.topMobile : pin.top,
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          pointerEvents: "none",
          width: 81,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={pin.url}
          alt="pin"
          style={{
            width: "100%",
            height: "auto",
            zIndex: 3,
            position: "relative",
          }}
        />
        {!isMobile && (
          <Box
            sx={{
              ...(getLabelStyle(pin.labelPosition) as any),
              width: 356,
              maxWidth: "50vw",
              px: 1,
              pb: 1,
              zIndex: 2,
              pointerEvents: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography variant="headlineMedium" color={pin.color}>
              {t(pin.titleKey)}
            </Typography>
            <Typography variant="semiBoldXLarge" sx={{ color: "#2B333B" }}>
              {t(pin.descKey)}
            </Typography>
          </Box>
        )}
      </motion.div>
    ))}
  </Box>
)};

const ProcessRoadmap: React.FC = () => {
  const isMobile = useScreenResize("md");
  const streetImg = isMobile ? "/mobile-street.svg" : "/street.svg";
  const t  = useTranslations();
  return (
    <Box sx={{ ...styles.centerCVH }} mt={{ xs: 11, md: 20 }}>
      <Typography
        variant={isMobile ? "headlineMedium" : "headlineLarge"}
        textAlign="center"
      >
        {t.rich('main.howItWorks', {
          style: (chunks) => <span style={{ color: '#2466A8' }}>{chunks}</span>
        })}
      </Typography>

      {isMobile ? (
        <Box width="100%">
          <PinLabel pin={pins[0]} variant="headlineSmall" />
          <PinLabel pin={pins[1]} variant="headlineSmall" />
          <RoadmapImageWithPins
            pins={pins}
            isMobile={true}
            streetImg={streetImg}
          />
          <PinLabel pin={pins[2]} variant="headlineSmall" />
          <PinLabel pin={pins[3]} variant="headlineSmall" />
        </Box>
      ) : (
        <RoadmapImageWithPins
          pins={pins}
          isMobile={false}
          streetImg={streetImg}
        />
      )}
    </Box>
  );
};

export default ProcessRoadmap;
