import { PT_Serif, Special_Elite, Tai_Heritage_Pro } from "next/font/google";

export const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-special-elite",
});

export const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-pt-serif",
});

export const taiHeritage = Tai_Heritage_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-tai-heritage",
});