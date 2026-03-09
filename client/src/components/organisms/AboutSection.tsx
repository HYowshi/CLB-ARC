"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Tọa độ thực tế của Đại học Công Nghệ Đồng Nai (DNTU - Trảng Dài, Biên Hòa)
const TARGET_COORDS = { lat: 10.973432, lng: 106.855523 };

// --- CÁC HÀM TOÁN HỌC ĐỊA LÝ ---
const toRad = (value: number) => (value * Math.PI) / 180;
const toDeg = (value: number) => (value * 180) / Math.PI;

const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371e3; 
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; 
};

const calculateBearing = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const dLon = toRad(lon2 - lon1);
  const y = Math.sin(dLon) * Math.cos(toRad(lat2));
  const x = Math.cos(toRad(lat1)) * Math.sin(toRad(lat2)) - Math.sin(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.cos(dLon);
  let brng = Math.atan2(y, x);
  return (toDeg(brng) + 360) % 360;
};

export const AboutSection: React.FC = () => {
  const [isCompassMode, setIsCompassMode] = useState(false);
  const [distance, setDistance] = useState<number | null>(null);
  const [bearing, setBearing] = useState<number>(0);
  const [heading, setHeading] = useState<number>(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    let watchId: number;
    
    const handleOrientation = (event: DeviceOrientationEvent) => {
      let currentHeading = 0;
      if ((event as any).webkitCompassHeading) {
        currentHeading = (event as any).webkitCompassHeading;
      } else if (event.alpha) {
        currentHeading = 360 - event.alpha; 
      }
      setHeading(currentHeading);
    };

    if (isCompassMode) {
      if (!navigator.geolocation) {
        setErrorMsg("Trình duyệt không hỗ trợ định vị.");
        return;
      }

      watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const dist = calculateDistance(latitude, longitude, TARGET_COORDS.lat, TARGET_COORDS.lng);
          const bear = calculateBearing(latitude, longitude, TARGET_COORDS.lat, TARGET_COORDS.lng);
          setDistance(Math.round(dist));
          setBearing(bear);
          setErrorMsg(null);
        },
        (err) => setErrorMsg("Vui lòng cấp quyền vị trí để sử dụng radar."),
        { enableHighAccuracy: true, maximumAge: 0 }
      );

      window.addEventListener("deviceorientation", handleOrientation, true);
    }

    return () => {
      if (watchId) navigator.geolocation.clearWatch(watchId);
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, [isCompassMode]);

  const pointerRotation = bearing - heading;

  return (
    <section id="about" className="py-32 w-full bg-slate-950 relative z-20 border-t border-cyan-900/30 overflow-hidden">
      
      {/* Background Neon Glow */}
      <div className="absolute top-1/2 left-0 w-200 h-200 bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 relative z-10">
        
        {/* CỘT TRÁI: TEXT & IDENTITY */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-sm font-bold text-cyan-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-4">
              <span className="w-12 h-px bg-cyan-500/50 shadow-[0_0_10px_#06b6d4]"></span>
              Bản Sắc & Sứ Mệnh
            </h2>
            
            <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight mb-8">
              Làm chủ công nghệ. <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_20px_rgba(6,182,212,0.4)]">Kiến tạo giải pháp.</span>
            </h3>
            
            <p className="text-cyan-100/70 text-lg leading-relaxed mb-12 max-w-2xl">
              ARC là cộng đồng quy tụ những sinh viên chung niềm đam mê với Trí Tuệ Nhân Tạo và Robotics. Sứ mệnh của chúng tôi là thu hẹp khoảng cách giữa lý thuyết học thuật và ứng dụng thực tế. Đây là môi trường chuyên nghiệp nơi tư duy logic kết hợp cùng tinh thần đổi mới, nhằm biến các ý tưởng sáng tạo thành sản phẩm công nghệ mang lại giá trị thực tiễn.
            </p>

            <div className="grid grid-cols-2 gap-8 border-y border-cyan-900/30 py-10">
              <div>
                <p className="text-6xl md:text-7xl font-black text-white tracking-tighter mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">64<span className="text-cyan-500">+</span></p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">Thành Viên</p>
              </div>
              <div>
                <p className="text-6xl md:text-7xl font-black text-white tracking-tighter mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">12<span className="text-cyan-500">+</span></p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">Dự Án Trọng Điểm</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CỘT PHẢI: MAP & COMPASS TERMINAL */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full bg-slate-900/50 backdrop-blur-xl border border-cyan-900/50 shadow-[0_0_30px_rgba(6,182,212,0.15)] p-2 flex flex-col relative overflow-hidden h-125 rounded-xl"
          >
            {/* Thanh tiêu đề Terminal */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-cyan-900/50 bg-slate-950/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="ml-2 text-[10px] uppercase tracking-[0.2em] text-cyan-500 font-bold">
                  {isCompassMode ? "Hệ Thống Dẫn Đường" : "Định Vị Tọa Độ"}
                </span>
              </div>
              <button 
                onClick={() => setIsCompassMode(!isCompassMode)}
                className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 border border-cyan-700 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 transition-colors cursor-pointer rounded-sm"
              >
                {isCompassMode ? "Xem Bản Đồ" : "Kích Hoạt Radar"}
              </button>
            </div>

            {/* Khung nội dung */}
            <div className="relative flex-1 bg-slate-950 overflow-hidden flex items-center justify-center">
              <AnimatePresence mode="wait">
                
                {/* 1. MÀN HÌNH BẢN ĐỒ */}
                {!isCompassMode && (
                  <motion.div 
                    key="map"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <iframe 
                      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.967814986377!2d106.83894451528656!3d10.955030292200455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174dfb24e6c3821%3A0xb3ebce08dfb64e5!2zxJDhuqFpIGjhu41jIEPDtG5nIG5naOG7hyDEkOG7k25nIE5haQ!5e0!3m2!1svi!2s!4v1680000000000!5m2!1svi!2s`} 
                      className="w-full h-full border-0 filter invert-90 hue-rotate-180 contrast-[1.2] grayscale-20"
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                    <div className="absolute inset-0 pointer-events-none border-20 border-slate-950/50" />
                  </motion.div>
                )}

                {/* 2. MÀN HÌNH RADAR / LA BÀN */}
                {isCompassMode && (
                  <motion.div 
                    key="compass"
                    initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                    className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-slate-950"
                  >
                    <div className="relative w-64 h-64 border border-cyan-900/50 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.1)]">
                      <div className="absolute w-48 h-48 border border-cyan-800/50 rounded-full" />
                      <div className="absolute w-32 h-32 border border-dashed border-cyan-500/50 rounded-full animate-[spin_10s_linear_infinite]" />
                      <div className="absolute w-full h-px bg-cyan-900/50" />
                      <div className="absolute h-full w-px bg-cyan-900/50" />

                      {errorMsg ? (
                        <p className="text-red-500 text-xs text-center px-4 font-mono">{errorMsg}</p>
                      ) : (
                        <>
                          <motion.div 
                            className="absolute w-full h-full flex items-center justify-center transition-transform duration-300 ease-out"
                            style={{ transform: `rotate(${pointerRotation}deg)` }}
                          >
                            <svg className="w-12 h-12 text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                          </motion.div>
                          <div className="w-3 h-3 bg-cyan-400 rounded-full z-10 shadow-[0_0_15px_rgba(6,182,212,1)] animate-pulse" />
                        </>
                      )}
                    </div>

                    <div className="mt-8 text-center">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-600 mb-1">Khoảng Cách Tới CLB</p>
                      <p className="text-3xl font-black text-cyan-300 font-mono drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                        {distance !== null ? `${distance}m` : "---"}
                      </p>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
            
            {/* Terminal Footer */}
            <div className="bg-slate-950/90 border-t border-cyan-900/50 p-3 text-xs text-cyan-600 font-mono flex justify-between">
              <span>SYS_NAV_READY</span>
              <span className="animate-pulse block w-2 h-2 bg-cyan-500 mt-1 shadow-[0_0_8px_#06b6d4]"></span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};