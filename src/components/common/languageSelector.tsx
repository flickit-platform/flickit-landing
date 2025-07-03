"use client"

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useRouter, usePathname} from 'next/navigation';
import {useLocale} from 'next-intl';
import { farsiFontFamily } from "@/utils/fonts";

const LanguageSelector = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const handleLanguageChange = (language: any) => {
    const newLocale = language;
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');

    router.push(newPath);

    window.location.reload()
  };

  return (
    <Box display="flex" justifyContent="center">
      {currentLocale === "en" ? (
        <Typography
          variant="semiBoldLarge"
          onClick={() => handleLanguageChange("fa")}
          sx={{
            cursor: "pointer",
            fontFamily:farsiFontFamily
          }}
          color="white"
        >
          فا
        </Typography>
      ) : (
        <Typography
          variant="semiBoldLarge"
          onClick={() => handleLanguageChange("en")}
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
