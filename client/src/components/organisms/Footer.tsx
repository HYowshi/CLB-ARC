"use client";

import React from "react";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-slate-950 border-t border-cyan-900/30 overflow-hidden pt-24 pb-8 flex flex-col items-center">
      
      {/* Nền sáng dưới đáy */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-64 bg-linear-to-t from-cyan-900/20 to-transparent pointer-events-none" />

      {/* 1. KÊU GỌI HÀNH ĐỘNG (CALL TO ACTION) */}
      <div className="w-full max-w-7xl mx-auto px-6 mb-24 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">
            Sẵn sàng kiến tạo <span className="text-cyan-400">tương lai?</span>
          </h2>
          <p className="text-cyan-100/60 text-lg">Trở thành một phần của thế hệ kỹ sư công nghệ tiếp theo.</p>
        </div>
        <button className="shrink-0 relative px-10 py-5 bg-white text-slate-950 font-black text-sm uppercase tracking-widest overflow-hidden group rounded-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300">
          <span className="relative z-10 group-hover:text-white transition-colors duration-500">Gia nhập ARC ngay</span>
          <div className="absolute inset-0 bg-cyan-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
        </button>
      </div>

      {/* 2. LƯỚI LIÊN KẾT (GRID LINKS) */}
      <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 mb-20 relative z-10">
        
        {/* Cột 1: Thông tin liên hệ */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <Image src="/logo.svg" alt="ARC Logo" width={36} height={36} className="object-contain" />
            <span className="font-black text-2xl tracking-tighter text-white">ARC</span>
          </div>
          <p className="text-cyan-100/50 text-sm leading-relaxed mb-6">
            Câu lạc bộ Trí Tuệ Nhân Tạo & Công Nghệ Robot. Trực thuộc Đại học Công Nghệ Đồng Nai (DNTU).
          </p>
        </div>

        {/* Cột 2 */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-bold text-cyan-500 uppercase tracking-widest mb-2">Hệ Sinh Thái</h4>
          <a href="#about" className="text-sm text-cyan-100/60 hover:text-cyan-400 transition-colors">Về Chúng Tôi</a>
          <a href="#team" className="text-sm text-cyan-100/60 hover:text-cyan-400 transition-colors">Ban Chủ Nhiệm</a>
          <a href="#blog" className="text-sm text-cyan-100/60 hover:text-cyan-400 transition-colors">Dự Án Nghiên Cứu</a>
          <a href="#gallery" className="text-sm text-cyan-100/60 hover:text-cyan-400 transition-colors">Nhật Ký Hoạt Động</a>
        </div>

        {/* Cột 3 */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-bold text-cyan-500 uppercase tracking-widest mb-2">Tài Nguyên</h4>
          <a href="#" className="text-sm text-cyan-100/60 hover:text-cyan-400 transition-colors">Tài liệu học tập</a>
          <a href="#" className="text-sm text-cyan-100/60 hover:text-cyan-400 transition-colors">Mã nguồn (GitHub)</a>
          <a href="#" className="text-sm text-cyan-100/60 hover:text-cyan-400 transition-colors">Quy chế CLB</a>
        </div>

        {/* Cột 4 */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-bold text-cyan-500 uppercase tracking-widest mb-2">Kết Nối</h4>
          <a href="#" className="text-sm text-cyan-100/60 hover:text-cyan-400 transition-colors flex items-center gap-2">
            Fanpage Facebook <span className="text-[8px]">↗</span>
          </a>
          <a href="#" className="text-sm text-cyan-100/60 hover:text-cyan-400 transition-colors flex items-center gap-2">
            Kênh YouTube <span className="text-[8px]">↗</span>
          </a>
          <a href="#" className="text-sm text-cyan-100/60 hover:text-cyan-400 transition-colors flex items-center gap-2">
            Cộng đồng Discord <span className="text-[8px]">↗</span>
          </a>
        </div>

      </div>

      {/* 3. ĐÁY FOOTER (GIANT TYPOGRAPHY) */}
      <div className="w-full relative flex flex-col items-center overflow-hidden border-t border-cyan-900/20 pt-8">
        
        {/* Chữ khổng lồ làm nền (Giant Text) */}
        <div className="relative w-full flex justify-center translate-y-8 select-none pointer-events-none">
          <h1 className="text-[25vw] leading-none font-black text-transparent bg-clip-text bg-linear-to-b from-slate-900 to-slate-950 tracking-tighter m-0">
            ARC.
          </h1>
        </div>

        {/* Copyright nhỏ ở trên lớp chữ */}
        <div className="absolute bottom-6 w-full px-6 flex flex-col md:flex-row items-center justify-between text-[10px] text-cyan-100/40 font-mono z-10">
          <p>© {new Date().getFullYear()} AI & Robotics Club. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <span className="hover:text-cyan-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-cyan-400 cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-cyan-400 cursor-pointer transition-colors">SYSTEM_ONLINE</span>
          </div>
        </div>

      </div>

    </footer>
  );
};