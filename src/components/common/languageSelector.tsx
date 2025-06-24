"use client"

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { theme } from "@/config/theme";
import {useRouter, usePathname} from 'next/navigation';
import {useLocale} from 'next-intl';

const LanguageSelector = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const handleLanguageChange = (language: any) => {
    const newLocale = language;

    // Replace the current locale in the pathname
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');

    router.push(newPath);
  };

  return (
    <Box display="flex" justifyContent="center">
      {currentLocale === "en" ? (
        <Typography
          variant="semiBoldLarge"
          onClick={() => handleLanguageChange("fa")}
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
