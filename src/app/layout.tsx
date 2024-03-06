import "./globals.css";
import FINav from "./components/nav/FINav";
export const metadata = {
  title: "Flickit",
  description: "Assessment platform",
};
import { Ubuntu } from "next/font/google";
const ubuntu = Ubuntu({
  subsets: ["latin"],
  display: "swap",
  weight: ["300","400","500","700"],
  variable: '--font-ubuntu',
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ubuntu.className}>
      <body className="bg-gradient-to-r from-teal-50 via-moon-silver to-teal-50">
        <FINav />
        {children}
      </body>
    </html>
  );
}
