"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const blogs = [
  { 
    id: 1,
    title: "AI & 3D Generative Model", 
    tag: "DỰ ÁN CỐT LÕI", 
    date: "06/12/2026", 
    desc: "Hệ thống AI đột phá có khả năng tạo Model 3D, tự động nội suy khung xương (rigging) chỉ từ một bức ảnh 2D duy nhất. Bước tiến lớn trong việc tự động hóa asset game.",
    isLarge: true // Bài nổi bật chiếm 2 cột
  },
  { 
    id: 2,
    title: "Dự Án MV3D", 
    tag: "ROBOTICS", 
    date: "17/12/2026", 
    desc: "Tích hợp thị giác máy tính vào hệ thống chuyển động không gian 3 chiều.",
    isLarge: false
  },
  { 
    id: 3,
    title: "Trọn bộ Office 2013", 
    tag: "TÀI LIỆU", 
    date: "06/12/2026", 
    desc: "Nền tảng kỹ năng tin học văn phòng cơ bản cho sinh viên khối ngành kỹ thuật.",
    isLarge: false
  }
];

export const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="w-full bg-slate-950 relative z-20 pb-32 overflow-hidden">
      
      {/* 1. INFINITE MARQUEE (Dải chữ chạy vô tận phong cách Cyberpunk) */}
      <div className="w-full py-10 border-y border-cyan-900/30 overflow-hidden flex whitespace-nowrap bg-slate-950/50 mb-32 relative shadow-[0_0_30px_rgba(6,182,212,0.05)]">
        {/* Lớp mờ 2 bên viền để chữ tan vào bóng tối */}
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-slate-950 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-slate-950 to-transparent z-10" />
        
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex gap-10 items-center"
        >
          {/* Lặp lại mảng chữ để không bị đứt đoạn */}
          {[...Array(8)].map((_, i) => (
            <span key={i} className="text-4xl md:text-5xl font-black text-transparent [-webkit-text-stroke:1px_#0891b2] uppercase tracking-widest flex items-center gap-10">
              ARTIFICIAL INTELLIGENCE <span className="text-cyan-400 text-2xl drop-shadow-[0_0_10px_#22d3ee]">✦</span> ROBOTICS <span className="text-cyan-400 text-2xl drop-shadow-[0_0_10px_#22d3ee]">✦</span> INNOVATION <span className="text-cyan-400 text-2xl drop-shadow-[0_0_10px_#22d3ee]">✦</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* 2. NỘI DUNG CHÍNH (Asymmetric Grid & Hologram Background) */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Vệt sáng Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 relative z-10">
          <div>
            <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-[0.3em] mb-4">Kho Dữ Liệu</h2>
            <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
              Báo cáo <br className="hidden md:block" /> 
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">Nghiên cứu.</span>
            </h3>
          </div>
          <button className="mt-8 md:mt-0 pb-2 border-b-2 border-cyan-500/50 text-cyan-100 font-bold uppercase tracking-widest text-sm hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_10px_20px_-10px_rgba(6,182,212,0.5)] transition-all duration-300">
            Khám phá toàn bộ kho
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {blogs.map((post, i) => (
            <motion.article 
              key={post.id} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              /* Bài isLarge chiếm 2 cột để phá vỡ bố cục nhàm chán */
              className={`group cursor-pointer flex flex-col bg-slate-900/40 backdrop-blur-md border border-cyan-900/30 p-4 rounded-2xl hover:border-cyan-400/80 hover:bg-slate-900/80 hover:shadow-[0_10px_40px_rgba(6,182,212,0.15)] transition-all duration-500 ${post.isLarge ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'}`}
            >
              <div className="relative w-full aspect-video md:aspect-auto md:h-64 bg-slate-950 overflow-hidden rounded-xl mb-6 border border-slate-800 group-hover:border-cyan-900/50 transition-colors">
                <Image 
                  src="/thumbtail.jpg" 
                  alt={post.title} 
                  fill 
                  // Đã bổ sung sizes để tối ưu hiệu năng và xóa cảnh báo của Next.js
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" 
                />
                {/* Lớp phủ xanh nhẹ khi hover */}
                <div className="absolute inset-0 bg-cyan-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                
                {/* Badge Tag & Date */}
                <div className="absolute top-4 left-4 flex items-center gap-3">
                  <span className="bg-cyan-500 text-slate-950 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-sm shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                    {post.tag}
                  </span>
                  <span className="text-[10px] font-bold text-cyan-100 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-sm border border-cyan-900/50">
                    {post.date}
                  </span>
                </div>
              </div>
              
              <div className="flex-1 px-2 pb-2">
                <h3 className="text-2xl font-black text-white mb-3 tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-cyan-100/60 text-sm md:text-base leading-relaxed line-clamp-3">
                  {post.desc}
                </p>
                
                {/* Đường gạch ngang trang trí khi Hover */}
                <div className="mt-6 w-12 h-0.5 bg-cyan-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 shadow-[0_0_8px_#06b6d4]" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};