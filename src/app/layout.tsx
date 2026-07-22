import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/navigation.css";
import MotionProvider from "@/components/MotionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechNeekX - Youth, Innovation, Unity",
  description: "Modern portfolio website for the TechNeekX team - balancing professionalism with youthful energy",
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
