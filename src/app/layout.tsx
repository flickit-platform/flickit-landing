import Navbar from "@/components/common/nav/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/config/theme";
import "@/assets/font/fonts.css"
import { cookies } from "next/headers";

export const metadata = {
  title: "Flickit",
  description: "Assessment platform",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = cookies().get("lang")?.value || "en";
  const dir = lang === "fa" ? "rtl" : "ltr";

  return (
    <html lang="en" dir={dir}>
      <body style={{ margin: 0, background: "#F9FAFB" }}>
        <ThemeProvider theme={theme}>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
