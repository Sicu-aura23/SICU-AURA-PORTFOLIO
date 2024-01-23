import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import GoogleAnalytics from './GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       <GoogleAnalytics GA_MEASUREMENT_ID='G-BCYJGHWW3L'/>
       <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Sicu-Aura : Your one stop safety solutions from India</title>


   
  <meta name="description" content="Sicu-aura is a pre-revenue company which is working so hard to bring innovative technical solution as a Next Generation SoS. Our aim is to reduce rape cases, accidental death cases, river death cases, harrassment and bullying cases by 90%. We are also dedicated to bring out and serve justice to unregister cases due to faceloss. There are many more features. So stay tuned to our social media to stay updated"/>
  <meta name="keywords" content="safety, security, protection, prevention, guidelines, Safety, Sicu-aura, Sicuaura, Sicura, Sicure-Rah, Sicurerah, Rishav Ghosh, Feel Safe Everywhere,  Safer, Modern Technologies, #Safe-T-Fast, sicu-aura.com, Sicuaura.com, siquara, Safety tips, Safety precautions, Safety measures, Safety guidelines, Safety equipment, Safety training, Safety regulations, Safety procedures, Safety in the workplace, Safety awareness, Safety practices, Safety checklist, Safety rules, Safety culture, Emergency SOS, SOS app, SOS button, SOS emergency, SOS signal, safety related unique company, Top Exclusive startup, Next Billionaires"/>
  
 
   <link rel="canonical" href="https://www.example.com/safety"/> 


  <meta property="og:title" content="Sicu-aura"/>
  <meta property="og:description" content="Sicu-aura is a pre-revenue company which is working so hard to bring innovative technical solution as a Next Generation SoS. Our aim is to reduce rape cases, accidental death cases, river death cases, harrassment and bullying cases by 90%. We are also dedicated to bring out and serve justice to unregister cases due to faceloss. There are many more features. So stay tuned to our social media to stay updated"/>
  <meta property="og:url" content="https://www.sicu-aura.com/"/>
  <meta property="og:image" content="./images/sicu-aura logo round.png"/>
      <body className={inter.className} style={{backgroundColor:"#0F182B"}}>
        <Providers>{children}</Providers>
      </body>
      </head>
    </html>
  )
}
