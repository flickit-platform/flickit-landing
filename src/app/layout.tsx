import "./globals.css";
import FINav from "@/components/nav/FINav";
import {ubuntu} from "@/utils/fonts";

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
      <body className="bg-blueDeep">
        <FINav />
        {children}
      </body>
    </html>
  );
}
