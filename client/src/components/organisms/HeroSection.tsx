"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface HeroSectionProps {
  videoUrl: string;
}

const heroTexts = [
  "CLB Trí Tuệ Nhân Tạo & Công Nghệ Robot",
  "AI - Robotics CLUB",
  "ARC"
];

export const HeroSection: React.FC<HeroSectionProps> = ({ videoUrl }) => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    // Đã fix Tailwind v4: min-h-svh thay vì min-h-[100svh]
    <section id="hero" className="relative w-full min-h-svh flex flex-col items-center justify-center overflow-hidden bg-slate-950">
      
      {/* 1. BACKGROUND CÓ MÀU SẮC NEON / HOLOGRAM */}
      <div className="video-bg-container">
        <iframe
          className="video-bg-iframe opacity-40 mix-blend-screen"
          src={`${videoUrl}?autoplay=1&mute=1&loop=1&playlist=${videoUrl.split('/').pop()}&controls=0&showinfo=0&rel=0`}
          title="ARC Cinematic Background"
          allow="autoplay; encrypted-media"
        />
        <div className="absolute inset-0 bg-radial-[at_center_center] from-transparent via-slate-950/80 to-slate-950 z-10" />
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] z-10 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] z-10 pointer-events-none" />

        <div className="absolute inset-0 z-10 opacity-30 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-size-[40px_40px]" />
        <div className="absolute bottom-0 left-0 w-full h-48 bg-linear-to-t from-slate-950 to-transparent z-10" />
      </div>

      {/* 2. NỘI DUNG CHÍNH */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full max-w-5xl pt-32 pb-40">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-500/30 bg-slate-900/50 backdrop-blur-xl mb-10 group cursor-pointer hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-500"
        >
          <Image 
            src="/dntu.svg" 
            alt="DNTU Logo" 
            width={22} 
            height={22} 
            className="object-contain drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" 
          />
          <span className="text-xs font-bold tracking-[0.2em] text-cyan-100 uppercase group-hover:text-cyan-400 transition-colors duration-500 mt-px">
            Đại học Công Nghệ Đồng Nai
          </span>
        </motion.div>

        <div className="relative w-full h-50 md:h-70 flex flex-col items-center justify-center mb-8">
          <AnimatePresence mode="wait">
            <motion.h1
              key={textIndex}
              initial={{ opacity: 0, y: 40, filter: "blur(20px)", scale: 0.95 }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, y: -40, filter: "blur(20px)", scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute text-5xl md:text-7xl lg:text-[80px] font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white via-cyan-100 to-blue-500 leading-[1.1] uppercase drop-shadow-[0_0_30px_rgba(6,182,212,0.4)]"
            >
              {heroTexts[textIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-lg md:text-xl text-cyan-100/70 max-w-2xl font-light mb-12"
        >
          Nơi những ý tưởng đột phá được chắp cánh. Khám phá không gian giao thoa giữa tư duy kỹ thuật và nghệ thuật sáng tạo vô hạn.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto px-6"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-4 bg-cyan-500 text-slate-950 font-black text-sm uppercase tracking-widest overflow-hidden group w-full sm:w-auto rounded-lg border border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-300"
          >
            <span className="relative z-10 transition-colors duration-500">Gia nhập CLB</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-4 bg-slate-900/50 backdrop-blur-md text-cyan-400 font-black text-sm uppercase tracking-widest overflow-hidden group w-full sm:w-auto rounded-lg border border-cyan-900 hover:border-cyan-400 transition-colors duration-300"
          >
             <span className="relative z-10">Khám phá kho dự án</span>
          </motion.button>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-600 font-bold">Khám phá</span>
        <div className="w-px h-16 bg-cyan-950 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-transparent to-cyan-400"
          />
        </div>
      </motion.div>

    </section>
  );
};