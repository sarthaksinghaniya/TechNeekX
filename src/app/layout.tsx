import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/navigation.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechNeekX - Youth, Innovation, Unity",
  description: "Modern portfolio website for the TechNeekX team - balancing professionalism with youthful energy",
  icons: {
    icon: "/file_0000000067647206a22ff5daad754190.png",
    shortcut: "/file_0000000067647206a22ff5daad754190.png",
    apple: "/file_0000000067647206a22ff5daad754190.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
