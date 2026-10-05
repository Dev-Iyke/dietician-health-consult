import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dietitian Health Consult | Better health with foods you love",
  description:
    "Evidence-led, personalized nutrition support from a registered dietitian in Edmonton, Alberta.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
