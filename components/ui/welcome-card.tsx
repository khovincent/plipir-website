// File: components/ui/welcome-card.tsx

import React from "react";
import Link from "next/link";
import Meteors from "@/components/ui/meteors"; // Pastikan path ini benar

export function WelcomeCard() {
  return (
    // Kita hapus div pembungkus terluar agar lebih fleksibel saat ditaruh di grid
    <div className="relative w-full h-full">
      {/* Efek glow di latar belakang */}
      <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-green-500 to-blue-500 blur-3xl" />
      
      {/* Konten Kartu */}
      <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/80 backdrop-blur-sm px-4 py-8 shadow-xl">
        
        {/* Ikon kecil di pojok */}
        <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-2 w-2 text-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </div>

        {/* Teks Konten yang sudah disesuaikan */}
        <h1 className="relative z-50 mb-4 text-xl font-bold text-white">
          Selamat Datang di Website Dusun Plipir
        </h1>

        <p className="relative z-50 mb-4 text-base font-normal text-slate-400">
          Ini adalah pusat informasi digital Dusun Plipir. Jelajahi data, lihat jadwal kegiatan, dan temukan potensi luar biasa dari dusun kami.
        </p>

        {/* Tombol yang mengarah ke halaman "Tentang" */}
        <Link href="/tentang">
          <button className="rounded-lg border border-gray-500 px-4 py-1 text-gray-300 hover:bg-white/10 transition-colors">
            Jelajahi Tentang Kami
          </button>
        </Link>

        {/* Efek Meteor di dalam kartu */}
        <Meteors number={20} />
      </div>
    </div>
  );
}