import React, { useState } from "react";
import Box from "@mui/material/Box";
import { theme } from "@/config/theme";
import { Trans } from "react-i18next";
import { styles } from "@/config/styles";
import Typography from "@mui/material/Typography";
import useScreenResize from "@/utils/useScreenResize";

let customers = Array.from({ length: 5 }, (_, i) => "/customer-" + (i + 1));

const Customers = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isMobile = useScreenResize("sm");
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        background: "#E2E5E9",
      }}
    >
      <Box
        sx={{
          ...styles.centerVH,
          flexDirection: { xs: "column-reverse", md: "row" },
          mx: "auto",
          maxWidth: "1440px",
          px: 23,
          py: { xs: "24px", md: "38px" },
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            ...theme.typography.semiBoldXLarge,
            color: theme.palette.info.main,
          }}
        >
          <Trans i18nKey={"common.trustedCustomers"} />
        </Typography>
        <Box sx={{ ...styles.centerVH, gap: { xs: "15px", sm: "24px" } }}>
          {customers.map((img, index) => {
            return (
              <Box
                sx={{
                  cursor: "pointer",
                  transition: "transform 0.3s ease-in-out",
                  transform:
                    hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                  height: { xs: "auto", md: "80px" },
                  width: { xs: "auto", md: "80px" },
                  minWidth: "40px",
                  minHeight: "40px",
                }}
              >
                <img
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  src={hoveredIndex === index ? `${img}.svg` : `${img}-b.svg`}
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Customers;
