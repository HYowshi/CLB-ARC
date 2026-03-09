"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export const Header: React.FC = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 150);
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? "bg-slate-950/80 backdrop-blur-xl border-cyan-500/20 shadow-[0_10px_30px_rgba(6,182,212,0.1)]" 
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* CỤM LOGO - Đã trả lại nguyên bản, xóa chữ DNTU */}
        <div className="flex items-center gap-5 cursor-pointer group">
          <Image 
            src="/dntu.svg" 
            alt="DNTU Logo" 
            width={32} 
            height={32} 
            className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] group-hover:drop-shadow-[0_0_12px_rgba(6,182,212,0.8)] transition-all duration-500" 
          />

          <div className="h-8 w-px bg-cyan-900/50"></div>
          
          <div className="flex items-center gap-3 relative">
            <div className="absolute inset-0 bg-cyan-500 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
            <Image 
              src="/logo.svg" 
              alt="ARC Logo" 
              width={32} 
              height={32} 
              className="object-contain relative z-10" 
            />
            <span className="font-black text-2xl tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-white to-cyan-400 relative z-10">
              ARC
            </span>
          </div>
        </div>

        <nav className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-[0.15em] text-cyan-100/60">
          {["Trang Chủ", "Về Chúng Tôi", "Ban Chủ Nhiệm", "Hoạt Động"].map((item, idx) => (
            <a key={idx} href={`#${item === 'Hoạt Động' ? 'gallery' : 'hero'}`} className="relative group hover:text-cyan-400 transition-colors py-2">
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#22d3ee]"></span>
            </a>
          ))}
        </nav>

        <button className="relative px-7 py-3 bg-linear-to-r from-cyan-600 to-blue-600 text-white font-black text-xs uppercase tracking-widest overflow-hidden group rounded-md border border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300">
          <span className="relative z-10 group-hover:text-white transition-colors duration-500">Tham Gia</span>
          <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-violet-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
        </button>

      </div>
    </motion.header>
  );
};