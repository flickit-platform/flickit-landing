import "./globals.css";
import FINav from "@/components/nav/FINav";
import {ubuntu} from "@/utils/fonts";
import { ThemeProvider } from '@mui/material/styles';
import {theme} from "@/config/theme";

export const metadata = {
  title: "Flickit",
  description: "Assessment platform",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ubuntu.className}>
            <body>
            <ThemeProvider theme={theme}>
                <FINav />
                {children}
            </ThemeProvider>
            </body>
    </html>
  );
}
