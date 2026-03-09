"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Tạo mảng 47 hình ảnh (Sử dụng công thức toán học i % 5 để fix hoàn toàn lỗi Hydration)
const galleryImages = Array.from({ length: 47 }, (_, i) => ({
  src: `/img/H${i + 1}.png`,
  number: i + 1,
  floatDelay: (i % 5) * 1.2 
}));

const row1 = galleryImages.slice(0, 16);
const row2 = galleryImages.slice(16, 32);
const row3 = galleryImages.slice(32, 47);

// --- COMPONENT THẺ ẢNH ---
const GalleryCard = ({ src, floatDelay }: { src: string, floatDelay: number }) => (
  <div 
    className="shrink-0 group/card"
    style={{ animation: `float 6s ease-in-out ${floatDelay}s infinite` }}
  >
    <div className="relative w-64 h-40 md:w-80 md:h-52 rounded-xl overflow-hidden border border-cyan-900/30 bg-slate-900 cursor-pointer hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,0.8)] transition-all duration-500 hover:z-50 hover:scale-[1.15] hover:-translate-y-2">
      <Image 
        src={src} 
        alt="ARC Activity" 
        fill 
        loading="lazy"
        sizes="(max-width: 768px) 256px, 320px"
        className="object-cover transition-transform duration-700"
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />
      <div className="absolute inset-0 bg-slate-950/20 group-hover/card:bg-transparent transition-colors duration-500 pointer-events-none" />
    </div>
  </div>
);

// --- COMPONENT DÒNG TRÔI (TÍCH HỢP NÚT ĐIỀU HƯỚNG NEON) ---
const MarqueeRow = ({ images, direction = "left", duration = 60 }: { images: {src: string, number: number, floatDelay: number}[], direction?: "left" | "right", duration?: number }) => {
  const [offset, setOffset] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Hàm lướt ảnh khi bấm nút
  const handleScroll = (amount: number) => {
    setOffset(prev => prev + amount);
  };

  return (
    <div 
      className="relative flex overflow-visible w-full group/row py-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Vùng chứa ảnh: Luôn giữ class animate-marquee. CSS sẽ tự "đóng băng" nó khi hover */}
      <div 
        className={`flex w-max ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
        style={{ 
          animationDuration: `${duration}s`,
          marginLeft: `${offset}px`, // Trượt thủ công bằng Margin
          transition: 'margin-left 0.6s cubic-bezier(0.16, 1, 0.3, 1)' 
        }}
      >
        <div className="flex gap-8 px-4 items-center">
          {images.map((img) => <GalleryCard key={`set1-${img.number}`} src={img.src} floatDelay={img.floatDelay} />)}
        </div>
        <div className="flex gap-8 px-4 items-center">
          {images.map((img) => <GalleryCard key={`set2-${img.number}`} src={img.src} floatDelay={img.floatDelay} />)}
        </div>
      </div>

      {/* 2 NÚT ĐIỀU HƯỚNG < > (FIX: Đặt ở left-[12%] để tránh bị lớp Mask làm mờ) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-y-0 left-[5%] right-[5%] md:left-[12%] md:right-[12%] flex justify-between items-center pointer-events-none z-50"
      >
        <button 
          onClick={(e) => { e.preventDefault(); handleScroll(350); }}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-950/90 border-2 border-cyan-400 text-cyan-300 flex items-center justify-center backdrop-blur-xl pointer-events-auto hover:bg-cyan-400 hover:text-slate-950 hover:scale-110 transition-all shadow-[0_0_20px_rgba(6,182,212,0.8)]"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8 pr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          onClick={(e) => { e.preventDefault(); handleScroll(-350); }}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-950/90 border-2 border-cyan-400 text-cyan-300 flex items-center justify-center backdrop-blur-xl pointer-events-auto hover:bg-cyan-400 hover:text-slate-950 hover:scale-110 transition-all shadow-[0_0_20px_rgba(6,182,212,0.8)]"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8 pl-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </motion.div>
    </div>
  );
};

export const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-32 w-full bg-slate-950 relative z-20 border-t border-cyan-900/30 overflow-hidden">
      
      {/* Nền Gradient Hologram */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-125 bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-200 h-200 bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
        <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-[0.3em] mb-4">Nhật Ký Hoạt Động</h2>
        <p className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-white to-cyan-300 tracking-tighter leading-tight drop-shadow-[0_0_20px_rgba(6,182,212,0.3)]">
          Bức tường <br className="hidden md:block" /> 
          <span className="text-cyan-600">Ký ức.</span>
        </p>
        <p className="text-cyan-100/60 mt-6 max-w-2xl mx-auto">
          Hàng ngàn giờ nghiên cứu, lắp ráp và sáng tạo. Toàn bộ hành trình rực rỡ của ARC được lưu trữ tại đây.
        </p>
      </div>

      {/* KHU VỰC BỨC TƯỜNG ẢNH ĐỘNG */}
      <div 
        className="relative w-full max-w-[100vw] overflow-visible py-24 mt-10"
        style={{ 
          // Mask mờ 15% viền
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', 
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' 
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center w-full -rotate-3 scale-110 md:scale-[1.15] origin-center"
        >
          <MarqueeRow images={row1} direction="left" duration={90} />
          <MarqueeRow images={row2} direction="right" duration={110} />
          <MarqueeRow images={row3} direction="left" duration={95} />
        </motion.div>
      </div>
      
      {/* CSS Toàn Cục Định Nghĩa Animation Trôi & Lơ lửng */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        .animate-marquee-left { animation: marqueeLeft linear infinite; }
        .animate-marquee-right { animation: marqueeRight linear infinite; }
        
        /* Đóng băng dòng chảy khi đưa chuột vào */
        .group\\/row:hover .animate-marquee-left,
        .group\\/row:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}} />

    </section>
  );
};