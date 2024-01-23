import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import GoogleAnalytics from "./GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-BCYJGHWW3L" />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Best Women safety app, 
          Best student safety app, 
          Safety App,
          Travel safety app,
          Crime prevention,
          Emergency alert,
          Safety solutions,
          Reducing crimes
          Rape prevention app,
          Harassment prevention app,
          Domestic violence prevention app,
          Kolkata’s best safety app,
          Delhi women’s safety app,
          Panic button app,
          Offline Location tracking app,
          Emergency Contact app
          Reduce accidental death,
          Stop ragging,
          Create a safe atmosphere,
          Empowerment,
          Security,
          Confidence,
          Best safety app for students in India,
          Personal safety tips for women travelling home,
          How to prevent domestic violence using technology,
          Sicu-aura,
          Feel safe everywhere,
          Safe_T_Fast 
          personal safety app with gps tracking
free safety apps for students
best safety apps for solo travelers
discreet panic button app for iphone
safety app for walking home alone at night
apps for feeling safe in a new city,gps tracking apps
fake emergency call apps
stranger danger apps
crime tracker apps
medical alert apps
domestic violence support apps
stalking prevention apps
child safety apps
nighttime safety apps personal safety app
best personal safety apps
safety apps for women/men
lone worker safety apps
travel safety apps
emergency alert apps
self-defense apps
personal security apps
panic button apps"
        />

        <link rel="canonical" href="https://www.example.com/safety" />

        <meta property="og:title" content="Sicu-aura" />
        <meta
          property="og:description"
          content="Sicu-aura is a pre-revenue company which is working so hard to bring innovative technical solution as a Next Generation SoS. Our aim is to reduce rape cases, accidental death cases, river death cases, harrassment and bullying cases by 90%. We are also dedicated to bring out and serve justice to unregister cases due to faceloss. There are many more features. So stay tuned to our social media to stay updated"
        />
        <meta property="og:url" content="https://www.sicu-aura.com/" />
        <meta property="og:image" content="./images/sicu-aura logo round.png" />
        <body
          className={inter.className}
          style={{ backgroundColor: "#0F182B" }}
        >
          <Providers>{children}</Providers>
        </body>
      </head>
    </html>
  );
}
