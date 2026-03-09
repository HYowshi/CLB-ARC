import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";

// Dùng font Inter chuẩn quốc tế, thiết lập swap để tối ưu tốc độ tải (Performance)
const inter = Inter({ subsets: ["latin", "vietnamese"], display: "swap" });

export const metadata: Metadata = {
  title: "ARC - Tương lai của Công Nghệ",
  description: "Trải nghiệm không gian thực tế ảo và hệ sinh thái Trí Tuệ Nhân Tạo & Robotics đẳng cấp hàng đầu.",
};

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    // Đã xóa class 'cursor-none' ở đây để trả lại chuột mặc định của hệ thống
    <html lang="vi" className="scroll-smooth bg-black"> 
      <body className={`${inter.className} bg-black text-zinc-200 antialiased overflow-x-hidden selection:bg-zinc-800 selection:text-white`}>
        
        {/* Thanh điều hướng */}
        <Header />
        
        {/* Nội dung các trang */}
        <div className="relative w-full min-h-screen bg-black flex flex-col">
          {children}
        </div>

        {/* Chân trang */}
        <Footer />
        
      </body>
    </html>
  );
}