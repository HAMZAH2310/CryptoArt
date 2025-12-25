import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";

const fixel = localFont({
  src:[
    {
      path: "../../public/fonts/cryptoart/FixelText/FixelText-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/cryptoart/FixelText/FixelText-Medium.otf",
      weight:"500",
      style:"normal",
    },
    {
      path: "../../public/fonts/cryptoart/FixelText/FixelText-Bold.otf",
      weight:"700",
      style:"normal",
    },
  ],
  variable:"--font-fixel",
  display:"swap",
});

export const metadata: Metadata = {
  title: "Crypto Art",
  description: "Crypto Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fixel.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
