import { Ubuntu } from 'next/font/google'
// define your variable fonts
const ubuntu = Ubuntu({
    subsets: ["latin"],
    display: "swap",
    weight: ["300","400","500","700"],
    variable: '--font-ubuntu',
});

export { ubuntu }

export const primaryFontFamily = "NotoSans";
export const secondaryFontFamily = "OpenSans";
export const farsiFontFamily = "'Vazirmatn','Arial','sans-serif'";