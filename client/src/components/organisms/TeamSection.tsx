"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Dữ liệu Sơ đồ
const treeData = {
  level0: { role: "Giảng Viên Cố Vấn", name: "Kiêm Nhiệm", avatar: "/logo.svg" },
  level1: { role: "Chủ Nhiệm CLB", name: "Đinh Nguyễn Tường Nhi", avatar: "/logo.svg" },
  level2: [
    { role: "Phó Chủ Nhiệm", name: "Lê Văn Đức Tú", avatar: "/logo.svg" },
    { role: "Thư Ký & Thủ Quỹ", name: "Đặng Thị Minh Hằng", avatar: "/logo.svg" }
  ],
  level3: [
    { role: "Ban Media", name: "Trần Nguyễn Tấn Phúc", avatar: "/logo.svg" },
    { role: "Ban Chuyên Môn", name: "Phạm Nguyễn Minh Tiến", avatar: "/logo.svg" },
    { role: "Ban Dự Án", name: "Tạ Duy Tâm", avatar: "/logo.svg" }
  ]
};

// --- COMPONENT LUỒNG DỮ LIỆU ---
const DataLine = ({ vertical = true, delay = 0 }: { vertical?: boolean, delay?: number }) => (
  <div className={`relative overflow-hidden bg-cyan-950/30 ${vertical ? "w-px h-full" : "w-full h-px"}`}>
    <motion.div
      animate={vertical ? { y: ["-100%", "200%"] } : { x: ["-100%", "200%"] }}
      transition={{ repeat: Infinity, duration: 2, delay, ease: "linear" }}
      className={`absolute ${vertical ? "w-full h-1/2 bg-linear-to-b" : "h-full w-1/2 bg-linear-to-r"} from-transparent via-cyan-400 to-transparent opacity-60`}
    />
  </div>
);

// --- COMPONENT NÚT (EXPANDABLE NODE) ---
const TeamNode = ({ data, delay = 0 }: { data: any, delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    className="relative z-30"
  >
    <motion.div 
      whileHover={{ width: "320px" }}
      className="relative w-64 h-32 bg-slate-900/80 backdrop-blur-md border border-cyan-900/40 flex overflow-hidden group transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] rounded-lg"
    >
      {/* 50% BÊN TRÁI: ẢNH CHÂN DUNG */}
      <div className="w-1/2 h-full relative overflow-hidden bg-slate-800">
        <Image 
          src={data.avatar} 
          alt={data.name} 
          fill 
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="200px"
        />
        <div className="absolute inset-0 bg-linear-to-r from-transparent to-slate-900 opacity-60" />
      </div>

      {/* 50% BÊN PHẢI: THÔNG TIN */}
      <div className="w-1/2 h-full p-4 flex flex-col justify-center bg-slate-900 group-hover:bg-slate-800 transition-colors duration-500">
        <span className="text-[9px] font-bold text-cyan-500 uppercase tracking-widest mb-1 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]">
          {data.role}
        </span>
        <h4 className="text-sm font-black text-white leading-tight uppercase">
          {data.name}
        </h4>
        
        {/* Tia sáng dưới tên */}
        <div className="mt-2 w-8 h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left shadow-[0_0_8px_#22d3ee]" />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  </motion.div>
);

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-32 w-full bg-slate-950 relative z-20 border-t border-cyan-900/30 overflow-hidden">
      
      {/* Nền Blur Background */}
      <div className="absolute top-1/4 right-0 w-125 h-125 bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-24 text-center relative z-10">
        <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-[0.3em] mb-4">Cơ Cấu Tổ Chức</h2>
        <p className="text-4xl md:text-5xl font-black text-white tracking-tighter">
          Đội ngũ <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">Nòng cốt.</span>
        </p>
      </div>

      {/* --- SƠ ĐỒ CÂY CẢI TIẾN --- */}
      <div className="max-w-5xl mx-auto flex flex-col items-center relative px-4 md:px-0 z-10">
        
        {/* Lưới Grid Neon mờ ảo */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />

        {/* MỨC 0: GIẢNG VIÊN */}
        <TeamNode data={treeData.level0} delay={0.1} />
        
        <div className="w-full flex justify-center h-16">
          <DataLine vertical delay={0} />
        </div>

        {/* MỨC 1: CHỦ NHIỆM */}
        <TeamNode data={treeData.level1} delay={0.2} />

        <div className="w-full flex justify-center h-16 md:hidden">
           <DataLine vertical delay={0.2} />
        </div>

        {/* MỨC 2: PHÓ CHỦ NHIỆM & THƯ KÝ */}
        <div className="relative w-full max-w-3xl md:mt-16 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0">
          
          <div className="hidden md:block absolute -top-12 left-1/4 right-1/4 h-px">
             <DataLine vertical={false} delay={0.5} />
          </div>
          <div className="hidden md:flex absolute -top-12 left-1/4 w-px h-12 justify-center">
             <DataLine vertical delay={0.6} />
          </div>
          <div className="hidden md:flex absolute -top-12 right-1/4 w-px h-12 justify-center">
             <DataLine vertical delay={0.6} />
          </div>
          
          <div className="hidden md:block absolute -top-12 left-1/2 w-px h-[calc(100%+8rem)]">
             <DataLine vertical delay={0.2} />
          </div>

          <TeamNode data={treeData.level2[0]} delay={0.3} />
          <TeamNode data={treeData.level2[1]} delay={0.4} />
        </div>

        <div className="w-full flex justify-center h-16 md:hidden">
           <DataLine vertical delay={0.4} />
        </div>

        {/* MỨC 3: CÁC BAN CHUYÊN MÔN */}
        <div className="relative w-full max-w-5xl md:mt-32 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0">
          
          <div className="hidden md:block absolute -top-12 h-px" style={{ left: '16.666%', right: '16.666%' }}>
             <DataLine vertical={false} delay={0.8} />
          </div>
          <div className="hidden md:flex absolute -top-12 w-px h-12 justify-center" style={{ left: '16.666%' }}>
             <DataLine vertical delay={0.9} />
          </div>
          <div className="hidden md:flex absolute -top-12 left-1/2 w-px h-12 justify-center">
             <DataLine vertical delay={0.9} />
          </div>
          <div className="hidden md:flex absolute -top-12 w-px h-12 justify-center" style={{ right: '16.666%' }}>
             <DataLine vertical delay={0.9} />
          </div>

          <TeamNode data={treeData.level3[0]} delay={0.5} />
          <TeamNode data={treeData.level3[1]} delay={0.6} />
          <TeamNode data={treeData.level3[2]} delay={0.7} />
        </div>

      </div>
    </section>
  );
};