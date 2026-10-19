import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import type { PropsWithChildren } from "react";
import { MotionConfig } from "framer-motion";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dietitian Health Consult | Better health with foods you love",
  description:
    "Personalized nutrition support from Grace Kanu, Registered Dietitian in Edmonton, Alberta. Better health with foods you love.",
};

const atkinson = Atkinson_Hyperlegible({
  variable: "--font-atkinson",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${atkinson.variable}`}>
      <body className={`font-atkinson`}>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
