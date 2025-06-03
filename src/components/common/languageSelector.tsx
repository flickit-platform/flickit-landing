import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { theme } from "@/config/theme";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (language: any) => {
    i18n.changeLanguage(language);
    window.location.reload();
  };

  return (
    <Box display="flex" justifyContent="center">
      {i18n.language === "fa" ? (
        <Typography
          variant="semiBoldLarge"
          onClick={() => handleLanguageChange("en")}
          sx={{
            cursor: "pointer",
          }}
          color="white"
        >
          فا
        </Typography>
      ) : (
        <Typography
          variant="semiBoldLarge"
          onClick={() => handleLanguageChange("fa")}
          sx={{
            cursor: "pointer",
          }}
          color="white"
        >
          EN
        </Typography>
      )}
    </Box>
  );
};

export default LanguageSelector;
