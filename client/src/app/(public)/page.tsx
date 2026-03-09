import React from "react";
import { HeroSection } from "@/components/organisms/HeroSection";
import { AboutSection } from "@/components/organisms/AboutSection";
import { TeamSection } from "@/components/organisms/TeamSection";
import { BlogSection } from "@/components/organisms/BlogSection";
import { GallerySection } from "@/components/organisms/GallerySection";

export default function LandingPage() {
  return (
    // Đã thay đổi bg-black thành bg-slate-950 để có màu sắc sâu thẳm
    <main className="flex flex-col items-center justify-start w-full bg-slate-950 overflow-hidden">
      
      <HeroSection videoUrl="https://www.youtube.com/embed/KlRHwpca19Q" />
      
      <AboutSection />

      <TeamSection />

      {/* TÍCH HỢP GALLERY 47 ẢNH VỚI ANIME.JS */}
      <GallerySection />

      <BlogSection />
      
    </main>
  );
}