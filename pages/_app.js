import '../style.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {NextUIProvider} from '@nextui-org/react'
import localFont from "next/font/local";

const recoleta = localFont({
  src: [
    {
      path: '../public/fonts/Recoleta-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/Recoleta-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Recoleta-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Recoleta-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Recoleta-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Recoleta-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    
   
  ],
  variable:'--font-recoleta',
  weight:['300','400','500','600','700','900']
});

export default function App({ Component, pageProps }) {
  return (<NextUIProvider>
    <main className={` ${recoleta.variable}`}>
 <Component {...pageProps} />
    </main>
 
  </NextUIProvider>)

}
