import { Ubuntu } from 'next/font/google'
import localFont from 'next/font/local'

// define your variable fonts
const ubuntu = Ubuntu({
    subsets: ["latin"],
    display: "swap",
    weight: ["300","400","500","700"],
    variable: '--font-ubuntu',
});

const sansation = localFont({
    src: [
        {
            path: '../assets/fonts/Sansation_Light.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../assets/fonts/Sansation_Regular.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../assets/fonts/Sansation_Bold.ttf',
            weight: '700',
            style: 'normal',
        }
    ],
    variable: '--font-sansation',
})

export { ubuntu, sansation }