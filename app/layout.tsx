import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";

const librefranklin = Libre_Franklin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SOON Connections",
  description: "Group four groups of four!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={librefranklin.className}>{children}</body>
    </html>
  );
}
