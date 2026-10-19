import type { Metadata } from "next";
import { Atkinson_Hyperlegible, DM_Serif_Display } from "next/font/google";
import type { PropsWithChildren } from "react";
import { MotionConfig } from "framer-motion";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dietitianhealthconsult.com"),
  title: "Dietitian Health Consult | Better health with foods you love",
  description:
    "Personalized nutrition support from Grace Kanu, Registered Dietitian in Edmonton, Alberta. Better health with foods you love.",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Dietitian Health Consult | Better health with foods you love",
    description:
      "Personalized nutrition support from Grace Kanu, Registered Dietitian in Edmonton, Alberta.",
    url: "/",
    siteName: "Dietitian Health Consult",
    locale: "en_CA",
    type: "website",
  },
};

const atkinson = Atkinson_Hyperlegible({
  variable: "--font-atkinson",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${atkinson.variable} ${dmSerifDisplay.variable}`}>
      <body className={`font-atkinson`}>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
