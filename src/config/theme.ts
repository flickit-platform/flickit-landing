"use client"

import { createTheme } from "@mui/material/styles";
import {farsiFontFamily, primaryFontFamily, secondaryFontFamily} from "@/utils/fonts";


declare module "@mui/material/styles" {
  interface TypographyVariants {
    headlineSmall: React.CSSProperties;
    headlineMedium: React.CSSProperties;
    headlineLarge: React.CSSProperties;
    displaySmall: React.CSSProperties;
    displayMedium: React.CSSProperties;
    displayLarge: React.CSSProperties;
    titleSmall: React.CSSProperties;
    titleMedium: React.CSSProperties;
    titleLarge: React.CSSProperties;
    bodySmall: React.CSSProperties;
    bodyMedium: React.CSSProperties;
    bodyLarge: React.CSSProperties;
    labelSmall: React.CSSProperties;
    labelMedium: React.CSSProperties;
    labelLarge: React.CSSProperties;
    labelCondensed: React.CSSProperties;
    subSmall: React.CSSProperties;
    subMedium: React.CSSProperties;
    subLarge: React.CSSProperties;
    semiBoldXLarge: React.CSSProperties;
    semiBoldLarge: React.CSSProperties;
    semiBoldMedium: React.CSSProperties;
    semiBoldSmall: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    headlineSmall?: React.CSSProperties;
    headlineMedium?: React.CSSProperties;
    headlineLarge?: React.CSSProperties;
    displaySmall?: React.CSSProperties;
    displayMedium?: React.CSSProperties;
    displayLarge?: React.CSSProperties;
    titleSmall?: React.CSSProperties;
    titleMedium?: React.CSSProperties;
    titleLarge?: React.CSSProperties;
    bodySmall?: React.CSSProperties;
    bodyMedium?: React.CSSProperties;
    bodyLarge?: React.CSSProperties;
    labelSmall?: React.CSSProperties;
    labelMedium?: React.CSSProperties;
    labelLarge?: React.CSSProperties;
    labelCondensed?: React.CSSProperties;
    subSmall?: React.CSSProperties;
    subMedium?: React.CSSProperties;
    subLarge?: React.CSSProperties;
    semiBoldXLarge?: React.CSSProperties;
    semiBoldLarge?: React.CSSProperties;
    semiBoldMedium?: React.CSSProperties;
    semiBoldSmall?: React.CSSProperties;
  }

}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    headlineSmall?: true;
    headlineMedium?: true;
    headlineLarge?: true;
    displaySmall?: true;
    displayMedium?: true;
    displayLarge?: true;
    titleSmall?: true;
    titleMedium?: true;
    titleLarge?: true;
    bodySmall?: true;
    bodyMedium?: true;
    bodyLarge?: true;
    labelSmall?: true;
    labelMedium?: true;
    labelLarge?: true;
    labelCondensed?: true;
    subSmall?: true;
    subMedium?: true;
    subLarge?: true;
    semiBoldXLarge?: true;
    semiBoldLarge?: true;
    semiBoldMedium?: true;
    semiBoldSmall?: true;
  }
}

// const is_farsi = Boolean(localStorage.getItem("lang") === "fa");
const is_farsi = true;

export const theme = createTheme({
  direction: is_farsi ? "rtl" : "ltr",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1620,
    },
  },
  typography: {
    fontFamily: is_farsi ? farsiFontFamily : primaryFontFamily,
    subSmall: {
      fontFamily: is_farsi ? farsiFontFamily : primaryFontFamily,
      fontWeight: 500,
      lineHeight: 1.57,
      letterSpacing: is_farsi ? "0px" : "0.09em",
      textTransform: "none",
      color: "GrayText",
    },
    subMedium: {
      fontFamily: is_farsi ? farsiFontFamily : primaryFontFamily,
      fontWeight: 500,
      lineHeight: 1.57,
      letterSpacing: is_farsi ? "0px" : "0.09em",
      color: "GrayText",
    },
    subLarge: {
      fontFamily: is_farsi ? farsiFontFamily : primaryFontFamily,
      fontWeight: 500,
      lineHeight: 1.57,
      letterSpacing: is_farsi ? "0px" : "0.09em",
      color: "GrayText",
    },
    headlineSmall: {
      fontFamily: is_farsi ? farsiFontFamily : secondaryFontFamily,
      fontWeight: "bold",
      fontSize: "1.5rem",
      lineHeight: "2rem",
      letterSpacing: is_farsi ? "0px" : "-3%",
    },
    headlineMedium: {
      fontFamily: is_farsi ? farsiFontFamily : secondaryFontFamily,
      fontWeight: "bold",
      fontSize: "2rem",
      lineHeight: "2.25rem",
      letterSpacing: is_farsi ? "0px" : "0",
    },
    headlineLarge: {
      fontFamily: is_farsi ? farsiFontFamily : secondaryFontFamily,
      fontWeight: "bold",
      fontSize: "2.5rem",
      lineHeight: "2.7rem",
      letterSpacing: is_farsi ? "0px" : "0",
    },
    displaySmall: {
      fontFamily: is_farsi ? farsiFontFamily : primaryFontFamily,
      fontSize: "1rem",
      fontWeight: "normal",
      letterSpacing: is_farsi ? "0px" : "0",
    },
    displayMedium: {
      fontFamily: is_farsi ? farsiFontFamily : primaryFontFamily,
      fontSize: "1.75rem",
      fontWeight: "Bold",
      lineHeight: "2.25rem",
      letterSpacing: is_farsi ? "0px" : "0",
    },
    displayLarge: {
      fontFamily: is_farsi ? farsiFontFamily : secondaryFontFamily,
      fontSize: "4rem",
      fontWeight: "bold",
      lineHeight: "5.75rem",
      letterSpacing: is_farsi ? "0px" : "0",
    },
    titleSmall: {
      fontFamily: is_farsi ? farsiFontFamily : primaryFontFamily,
      fontWeight: 600,
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      letterSpacing: is_farsi ? "0px" : ".1px",
    },
    titleMedium: {
      fontFamily: is_farsi ? farsiFontFamily : primaryFontFamily,
      fontWeight: 600,
      fontSize: "1rem",
      letterSpacing: is_farsi ? "0px" : ".15px",
    },
    titleLarge: {
      fontFamily: is_farsi ? farsiFontFamily : primaryFontFamily,
      fontWeight: 600,
      fontSize: "1.375rem",
      lineHeight: "1.75rem",
      letterSpacing: is_farsi ? "0px" : "0",
    },
    bodySmall: {
      fontFamily: is_farsi ? farsiFontFamily : secondaryFontFamily,
      fontWeight: "400",
      fontSize: "0.75rem",
      letterSpacing: is_farsi ? "0px" : "0.4px",
    },
    bodyMedium: {
      fontFamily: is_farsi ? farsiFontFamily : secondaryFontFamily,
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: "1.5rem",
      letterSpacing: is_farsi ? "0px" : "0.25px",
    },
    bodyLarge: {
      fontFamily: is_farsi ? farsiFontFamily : secondaryFontFamily,
      fontWeight: 400,
      fontSize: "1rem",
      letterSpacing: is_farsi ? "0px" : "0.5px",
    },
    labelSmall: {
      fontFamily: is_farsi ? farsiFontFamily : secondaryFontFamily,
      fontWeight: "400",
      fontSize: "0.68rem",
      lineHeight: "1rem",
      letterSpacing: "0px",
    },
    labelMedium: {
      fontFamily: is_farsi ? farsiFontFamily : secondaryFontFamily,
      fontWeight: 500,
      fontSize: "0.75rem",
      lineHeight: "1rem",
      letterSpacing: is_farsi ? "0px" : "0.5px",
    },
    labelLarge: {
      fontFamily: is_farsi ? farsiFontFamily : primaryFontFamily,
      fontWeight: "bold",
      fontSize: "0.875rem",
      lineHeight: "1.125rem",
      letterSpacing: is_farsi ? "0px" : "0.1px",
    },
    labelCondensed: {
      fontFamily: is_farsi ? farsiFontFamily : secondaryFontFamily,
      fontWeight: 500,
      fontSize: "0.75rem",
      lineHeight: "0.75rem",
      letterSpacing: "0.5px",
    },
    semiBoldSmall: {
      fontFamily: is_farsi ? farsiFontFamily : secondaryFontFamily,
      fontWeight: "500",
      fontSize: "0.75rem",
      lineHeight: "1rem",
      letterSpacing: is_farsi ? "0px" : "0.5px",
    },
    semiBoldLarge: {
      fontFamily: is_farsi ? farsiFontFamily : secondaryFontFamily,
      fontWeight: "500",
      fontSize: "1rem",
      letterSpacing: is_farsi ? "0px" : "0.15px",
    },
    semiBoldMedium: {
      fontFamily: is_farsi ? farsiFontFamily : secondaryFontFamily,
      fontWeight: "500",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      letterSpacing: is_farsi ? "0px" : "0.1px",
    },
    semiBoldXLarge: {
      fontFamily: is_farsi ? farsiFontFamily : secondaryFontFamily,
      fontWeight: "500",
      fontSize: "1.375rem",
      lineHeight: "1.75rem",
      letterSpacing: "0px",
    },
    button: {
      fontFamily: is_farsi ? farsiFontFamily : secondaryFontFamily,
      letterSpacing: is_farsi ? "0px" : ".05em",
    },
    h3: {
      fontFamily: is_farsi ? farsiFontFamily : primaryFontFamily,
    },
    h4: {
      fontFamily: is_farsi ? farsiFontFamily : primaryFontFamily,
      opacity: 0.9,
    },
    h5: {
      fontFamily: is_farsi ? farsiFontFamily : primaryFontFamily,
      opacity: 0.85,
    },
    h6: {
      fontFamily: is_farsi ? farsiFontFamily : secondaryFontFamily,
      lineHeight: 1.6,
      opacity: 0.85,
    },
  },
});
