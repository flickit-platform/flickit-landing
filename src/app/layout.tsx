import "./globals.css";
import "@/assets/font/fonts.css";

import Navbar from "@/components/nav/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/config/theme";

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
    <html lang="en">
      <body style={{ margin: 0 }}>
        <ThemeProvider theme={theme}>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
