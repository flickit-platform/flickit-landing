import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { theme } from "@/config/theme";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === "fa" ? "en" : "fa";
    i18n.changeLanguage(newLang);
    window.location.reload();
  };

  return (
    <Box display="flex" justifyContent="center">
      {i18n.language === "fa" ? (
        <Typography
          variant="semiBoldLarge"
          onClick={() => toggleLang()}
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
          onClick={() => toggleLang()}
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
