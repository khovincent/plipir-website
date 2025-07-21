// File: app/tentang/page.tsx

import Image from "next/image";
import { Navigation } from "@/components/Navigation";
// Pastikan untuk menginstal react-icons: npm install react-icons
import { FaLeaf, FaHeart, FaStar } from 'react-icons/fa';

export default function TentangPage() {
  return (
    <div className="bg-gray-950 text-gray-300 font-sans">
      <Navigation />

      {/* Hero Section */}
      <header className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Overlay gelap untuk kontras teks */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10"></div>
        {/* Gambar Latar */}
        <Image
            src="/dusun-plipir.png" 
            alt="Pemandangan Dusun Plipir"
            layout="fill"
            objectFit="cover"
            className="z-0"
        />
        {/* Konten Teks di Hero */}
        <div className="z-20 p-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white" style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.1em' }}>
            Tentang Plipir
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl mx-auto">
            Sebuah simfoni keindahan alam, kehangatan komunitas, dan harapan untuk masa depan.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-black py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
          {/* Introduction Section */}
          <section className="text-center mb-16 lg:mb-24">
            <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Cinzel, serif' }}>Selamat Datang di Dusun Plipir</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-400 leading-relaxed">
              Terletak di Desa Dersono, Kecamatan Pringkuku, Kabupaten Pacitan, Jawa Timur, Dusun Plipir bukan sekadar tempat, melainkan sebuah pengalaman. Temukan esensi kehidupan pedesaan yang harmonis di tengah pesona alam yang memukau.
            </p>
          </section>

          {/* Three Pillars Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Pillar 1: Pesona Alam */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center flex flex-col items-center hover:bg-gray-800/50 transition-colors duration-300">
              <div className="text-5xl text-green-400 mb-5">
                <FaLeaf />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Cinzel, serif' }}>Pesona Alam</h3>
              <p className="text-gray-400 leading-relaxed">
                Dikelilingi perbukitan hijau yang subur, Plipir menawarkan suasana asri yang menenangkan jiwa. Udara segar dan pemandangan alam yang masih alami menjadi kekayaan utama dusun kami.
              </p>
            </div>

            {/* Pillar 2: Jantung Komunitas */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center flex flex-col items-center hover:bg-gray-800/50 transition-colors duration-300">
              <div className="text-5xl text-red-400 mb-5">
                <FaHeart />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Cinzel, serif' }}>Jantung Komunitas</h3>
              <p className="text-gray-400 leading-relaxed">
                Keramahan adalah identitas kami. Nilai-nilai kebersamaan, semangat gotong royong, dan tradisi lokal yang lestari menjadi fondasi kehidupan sosial masyarakat Plipir yang harmonis.
              </p>
            </div>

            {/* Pillar 3: Visi Masa Depan */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center flex flex-col items-center hover:bg-gray-800/50 transition-colors duration-300">
              <div className="text-5xl text-yellow-400 mb-5">
                <FaStar />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Cinzel, serif' }}>Visi Masa Depan</h3>
              <p className="text-gray-400 leading-relaxed">
                Dengan semangat untuk terus maju, kami berbenah dan mengembangkan potensi pertanian, peternakan, serta pariwisata untuk menciptakan masa depan yang lebih sejahtera bagi semua warga.
              </p>
            </div>
          </section>

          {/* Closing Quote */}
          <section className="text-center mt-20 lg:mt-28">
            <div className="border-t border-gray-800 max-w-xl mx-auto pt-8">
              <p className="text-2xl italic text-gray-400" style={{ fontFamily: 'Cinzel, serif' }}>
                “Menjaga Akar Tradisi, Meraih Puncak Prestasi.”
              </p>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}