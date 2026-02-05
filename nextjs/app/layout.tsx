import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ตั้งค่า Metadata สำหรับ SEO และการแสดงผลแบรนด์
export const metadata: Metadata = {
  title: "DooDram | ดูละคร ซีรีส์ และหนังออนไลน์",
  description: "DooDram แพลตฟอร์มสตรีมมิ่งสำหรับคนรักความบันเทิง ดูซีรีส์เกาหลี หนังใหม่ และละครดังได้ทุกที่ทุกเวลา",
  keywords: ["ดูหนัง", "ซีรีส์", "DooDram", "สตรีมมิ่ง"],
  authors: [{ name: "DooDram Team" }],
};

// ตั้งค่า Viewport เพื่อคุมสีแถบเมนูบนมือถือให้เป็นสีมืด
export const viewport: Viewport = {
  themeColor: "#010511",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#010511] text-white`}
      >
        {/* คุณสามารถใส่ส่วนประกอบที่ต้องมีทุกหน้า เช่น Footer ที่นี่ */}
        {children}
      </body>
    </html>
  );
}