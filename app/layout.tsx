import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

/*
 * To restore the licensed Cerebri Sans Pro font from the original repo:
 * 1. Copy CerebriSansPro-{Regular,Medium,SemiBold,Bold,ExtraBold}.ttf
 *    into app/fonts/
 * 2. Uncomment the block below and add `${cerebri.variable}` to <body>.
 *
 * import localFont from "next/font/local";
 * const cerebri = localFont({
 *   src: [
 *     { path: "./fonts/CerebriSansPro-Regular.ttf",  weight: "400", style: "normal" },
 *     { path: "./fonts/CerebriSansPro-Medium.ttf",   weight: "500", style: "normal" },
 *     { path: "./fonts/CerebriSansPro-SemiBold.ttf", weight: "600", style: "normal" },
 *     { path: "./fonts/CerebriSansPro-Bold.ttf",     weight: "700", style: "normal" },
 *     { path: "./fonts/CerebriSansPro-ExtraBold.ttf",weight: "800", style: "normal" },
 *   ],
 *   variable: "--font-cerebri",
 * });
 */

export const metadata: Metadata = {
  title: "Beyondbrnd — Make your LinkedIn Impressive",
  description:
    "Busy business owners sign more deals when their LinkedIn is impressive. We make that happen.",
  icons: { icon: "/beyondbrnd-green.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
