import { farsiFontFamily, primaryFontFamily } from "@/utils/fonts";
import { keyframes, SxProps, Theme } from "@mui/material/styles";


const style = (style: SxProps<Theme>): SxProps<Theme> => style;

const commonStyles = {
  centerVH: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
  centerV: style({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  }),
  centerH: style({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  }),
  centerCVH: style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }),
  centerCV: style({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  }),
  centerCH: style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }),
  formGrid: style({
    marginTop: (theme) => `${theme.spacing(2)}`,
  }),
  activeNavbarLink: style({
    "&.active": {
      color: "#fff",
    },
    "&.active::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "90%",
      height: "2px",
      backgroundColor: "#fff",
      borderRadius: 1,
    },
  }),
  circularProgressBackgroundStroke: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [`& .MuiCircularProgress-circle`]: {
      strokeLinecap: "round",
    },
    boxShadow: "0 0 4px #bbb7b7 inset",
    borderRadius: "100%",
  }),
  ellipsis: style({
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }),
};

const sharedChipStyles = {
  chip: {
    fontWeight: 200,
    padding: 1,
    background: "rgba(36, 102, 168, 0.04)",
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 0.5,
    fontWeight: "bold",
  },
  rtlStyle: (isRTL = true) => ({
    direction: isRTL ? "rtl" : "ltr",
    fontFamily: isRTL ? farsiFontFamily : primaryFontFamily,
  }),
};

const cards = {
  auth: style({
    ...commonStyles.centerCH,
    px: { xs: 2, sm: 4 },
    py: { xs: 3, sm: 4 },
    flex: 1,
    m: 1,
    maxWidth: "460px",
  }),
};

const auth = {
  authLayout: style({
    background: (theme) =>
      `radial-gradient(${theme.palette.background.secondary},${theme.palette.background.secondaryDark})`,
    minHeight: "100vh",
    ...commonStyles.centerCH,
  }),
};

const buttons = {
  compareButton: style({
    position: { xs: "fixed", md: "absolute" },
    borderRadius: { xs: 0, sm: "100%" },
    transform: {
      xs: "translate(0,0)",
      md: "translate(50%,calc(50% + 24px))",
    },
    right: { xs: 0, sm: "26px", md: "50%" },
    bottom: { xs: 0, sm: "26px", md: "50%" },
    width: { xs: "100%", sm: "96px" },
    height: { xs: "40px", sm: "96px" },
    zIndex: 2,
  }),
  compareButtonBg: style({
    position: { xs: "fixed", md: "absolute" },
    borderRadius: { xs: 0, sm: "100%" },
    right: { xs: 0, sm: "19px", md: "50%" },
    bottom: { xs: 0, sm: "19px", md: "50%" },
    background: "white",
    transform: {
      xs: "translate(0,0)",
      md: "translate(50%,calc(50% + 24px))",
    },
    width: { xs: "100%", sm: "110px" },
    height: { xs: "46px", sm: "100px" },
    zIndex: 1,
  }),
  fixedIconButtonStyle: style({
    width: "2rem",
    height: "2rem",
    flexShrink: 0,
  }),
};

const box = {
  shadowStyle: style({
    background: "#fff",
    borderRadius: "16px",
    width: "100%",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
  }),
  boxStyle: style({
    background: "#fff",
    borderRadius: "12px",
    width: "100%",
    backgroundColor: "#fff",
    boxShadow: "0 0 8px 0 #0A234240",
    mb: { xs: "10px", sm: "40px" },
    p: { xs: 3, sm: 4 },
  }),
};
const compare = {
  compareResultBorder: style({
    "&:not(:last-of-type) > div": {
      borderRight: { md: "1px solid #e7e7e7", sm: "transparent" },
      borderBottom: { md: "transparent", sm: "", xs: "1px solid #e7e7e7" },
    },
  }),
};

const carouselStyle = {
  carousel: style({
    position: "relative",
    width: "100%",
    overflow: "hidden",
    cursor: "pointer",
  }),
  carouselInner: style({
    display: "flex",
    width: "100%",
    height: "100%",
    transition: "transform 0.5s ease-in-out",
  }),
  carouselImage: style({
    width: "100%",
    height: "100%",
    objectFit: "fill",
    flexShrink: 0,
  }),
  arrow: style({
    position: "absolute",
    top: { xs: "20%", sm: "40%" },
    transform: "translateY(-50%)",
    fontSize: { xs: "8px", sm: "24px" },
    backgroundColor: "transparent",
    border: "none",
    padding: { xs: 0.2, sm: 1.5 },
    cursor: "pointer",
    zIndex: 2,
    borderRadius: "50%",
  }),

  arrowLeft: style({
    left: { xs: "8px", sm: "15px" },
    transform: "rotate(90deg)",
  }),

  arrowRight: style({
    right: { xs: "8px", sm: "15px" },
    transform: "rotate(-90deg)",
  }),

  dots: style({
    display: { xs: "none", sm: "flex" },

    position: "absolute",
    bottom: "8px",
    left: "50%",
    transform: "translateX(-50%)",
    gap: { xs: "6px", sm: "10px" },
    zIndex: 3,
  }),

  dot: style({
    width: { xs: "4px", sm: "16px" },
    height: { xs: "4px", sm: "16px" },
    borderRadius: "50%",
    cursor: "pointer",
    transition: "all 0.3s ease",
    opacity: 0.7,
  }),

  dotActive: style({
    width: { xs: "10px", sm: "32px" },
    height: { xs: "5px", sm: "16px" },
    borderRadius: "20px",
    transform: "scale(1.3)",
    opacity: 1,
  }),
};

export const styles = {
  ...commonStyles,
  ...auth,
  ...buttons,
  ...compare,
  ...sharedChipStyles,
  ...box,
  ...carouselStyle,
  cards,
};


export const C1 = "#B71515";
export const C2 = "#D74427";
export const C3 = "#F55C3D";
export const C4 = "#F2995A";
export const C5 = "#FFBC00";
export const C6 = "#FFD900";
export const C7 = "#99CB34";
export const C8 = "#4FB34C";
export const C9 = "#168345";
export const C10 = "#0A5C25";

export const C1BG = "#B7151515";
export const C2BG = "#D7442715";
export const C3BG = "#F55C3D15";
export const C4BG = "#F2995A15";
export const C5BG = "#FFBC0015";
export const C6BG = "#FFD90015";
export const C7BG = "#99CB3415";
export const C8BG = "#4FB34C15";
export const C9BG = "#16834515";
export const C10BG = "#0A5C2515";

export const maturityLevelColorMap: any = {
  ML1: [C1],
  ML2: [C1, C10],
  ML3: [C1, C6, C10],
  ML4: [C1, C5, C7, C10],
  ML5: [C1, C4, C5, C8, C10],
  ML6: [C1, C3, C5, C7, C8, C10],
  ML7: [C1, C2, C4, C6, C7, C8, C10],
  ML8: [C1, C2, C4, C5, C7, C8, C9, C10],
  ML9: [C1, C2, C3, C4, C6, C7, C8, C9, C10],
  ML10: [C1, C2, C3, C4, C5, C6, C7, C8, C9, C10],
};

export const maturityLevelBGColorMap: any = {
  ML1: [C1BG],
  ML2: [C1BG, C10BG],
  ML3: [C1BG, C6BG, C10BG],
  ML4: [C1BG, C5BG, C7BG, C10BG],
  ML5: [C1BG, C4BG, C5BG, C8BG, C10BG],
  ML6: [C1BG, C3BG, C5BG, C7BG, C8BG, C10BG],
  ML7: [C1BG, C2BG, C4BG, C6BG, C7BG, C8BG, C10BG],
  ML8: [C1BG, C2BG, C4BG, C5BG, C7BG, C8BG, C9BG, C10BG],
  ML9: [C1BG, C2BG, C3BG, C4BG, C6BG, C7BG, C8BG, C9BG, C10BG],
  ML10: [C1BG, C2BG, C3BG, C4BG, C5BG, C6BG, C7BG, C8BG, C9BG, C10BG],
};

export const confidenceColor = [C1, C3, C4, C8, C10];
export const getMaturityLevelColors = (
  maturity_level_number: number,
  bg?: boolean,
) => {
  let maturityInstance = maturityLevelColorMap;
  if (bg) {
    maturityInstance = maturityLevelBGColorMap;
  }
  switch (maturity_level_number) {
    case 1:
      return maturityInstance.ML1;
    case 2:
      return maturityInstance.ML2;
    case 3:
      return maturityInstance.ML3;
    case 4:
      return maturityInstance.ML4;
    case 5:
      return maturityInstance.ML5;
    case 6:
      return maturityInstance.ML6;
    case 7:
      return maturityInstance.ML7;
    case 8:
      return maturityInstance.ML8;
    case 9:
      return maturityInstance.ML9;
    case 10:
      return maturityInstance.ML10;
  }
};

export const generateColorFromString = (
  str: string,
  palette: Record<
    string,
    { backgroundColor: string; color: string }
  > = chipColorPalette,
) => {
  let hash = 0;
  for (let i = 0; i < str?.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const keys = Object.keys(palette);
  const chipIndex = Math.abs(hash) % keys.length;

  return palette[keys[chipIndex]];
};

export const chipColorPalette: any = {
  chip1: {
    backgroundColor: "rgba(221, 239, 239, 1)",
    color: "rgba(0, 153, 145, 1)",
  },
  chip2: {
    backgroundColor: "rgba(218, 230, 220, 1)",
    color: "rgba(0, 153, 0, 1)",
  },
  chip3: {
    backgroundColor: "rgba(215, 225, 222, 1)",
    color: "rgba(0, 102, 43, 1)",
  },
  chip4: {
    backgroundColor: "rgba(212, 217, 223, 1)",
    color: "rgba(0, 26, 51, 1)",
  },
  chip5: {
    backgroundColor: "rgba(235, 218, 224, 1)",
    color: "rgba(204, 0, 68, 1)",
  },
  chip6: {
    backgroundColor: "rgba(238, 231, 221, 1)",
    color: "rgba(255, 157, 0, 1)",
  },
  chip7: {
    backgroundColor: "rgba(215, 225, 238, 1)",
    color: "rgba(0, 102, 204, 1)",
  },
  chip8: {
    backgroundColor: "rgba(230, 235, 222, 1)",
    color: "rgba(112, 153, 0, 1)",
  },
  chip9: {
    backgroundColor: "rgba(227, 217, 238, 1)",
    color: "rgba(102, 0, 153, 1)",
  },
  chip10: {
    backgroundColor: "rgba(215, 225, 233, 1)",
    color: "rgba(0, 102, 153, 1)",
  },
  chip11: {
    backgroundColor: "rgba(232, 219, 234, 1)",
    color: "rgba(184, 20, 167, 1)",
  },
  chip12: {
    backgroundColor: "rgba(218, 233, 230, 1)",
    color: "rgba(20, 184, 129, 1)",
  },
  chip13: {
    backgroundColor: "rgba(228, 224, 220, 1)",
    color: "rgba(153, 94, 0, 1)",
  },
};

export const customSemiCircleChartapPalette = {
  chip1: { backgroundColor: "#FDEAEA", color: "#B71515" },
  chip2: { backgroundColor: "#FBE1E1", color: "#8A1C1C" },
  chip3: { backgroundColor: "#DCEEFF", color: "#005BBB" },
  chip4: { backgroundColor: "#E5F0F9", color: "#1A73E8" },
  chip5: { backgroundColor: "#FFF7E6", color: "#FFBC00" },
  chip6: { backgroundColor: "#FAF0D5", color: "#A05A00" },
  chip7: { backgroundColor: "#FFEFE2", color: "#E96B11" },
  chip8: { backgroundColor: "#FFF2E0", color: "#CC5C00" },
  chip9: { backgroundColor: "#F3F1F9", color: "#6A1B9A" },
  chip10: { backgroundColor: "#F5F5F5", color: "#616161" },
};

const pomp = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;
const noPomp = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
`;

export const animations = {
  pomp,
  noPomp,
};
