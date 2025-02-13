import "./globals.css";
import type { Metadata } from "next";
import { Almarai } from "next/font/google";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-almarai",
  display: "swap",
});

export const metadata: Metadata = {
  title: "كل ما يخص الشواحن",
  description: "كل ما يخص الشواحن",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${almarai.variable} font-almarai antialiased`}>
        {children}
      </body>
    </html>
  );
}
