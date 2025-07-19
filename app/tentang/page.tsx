// File: app/tentang/page.tsx

import Image from "next/image";
import { Navigation } from "@/components/Navigation"; // Pastikan path ini benar

export default function TentangPage() {
  return (
    // Wrapper utama dengan latar belakang dan memastikan navigasi bisa menempel
    <div className="w-full bg-white dark:bg-black min-h-screen">
      
      {/* 1. Navigasi ditempatkan di luar <main> agar bisa menempel di atas */}
      <Navigation />

      {/* 2. Konten utama diberi padding atas (pt-24) agar tidak tertutup oleh navigasi */}
      <main className="max-w-4xl mx-auto px-4 pt-24 pb-12 text-gray-800 dark:text-gray-200">
        
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Tentang Dusun Plipir
        </h1>

        {/* Gambar ditempatkan di atas untuk visual yang lebih menarik */}
        <div className="mb-8">
          <Image
            src="/dusun-plipir.png" // Pastikan gambar ini ada di folder /public
            alt="Pemandangan Dusun Plipir"
            width={800}
            height={500}
            className="rounded-2xl shadow-lg w-full h-auto object-cover border border-gray-200 dark:border-gray-700"
          />
        </div>

        <div className="text-lg leading-relaxed space-y-4">
          <p>
            Dusun Plipir adalah sebuah dusun yang asri dan menawan, berlokasi di Desa Dersono, Kecamatan Pringkuku, Kabupaten Pacitan, Jawa Timur. Dusun ini terkenal dengan suasana alamnya yang masih alami, dikelilingi perbukitan hijau, serta masyarakatnya yang ramah dan memegang teguh nilai-nilai kebersamaan.
          </p>
          <p>
            Selain keindahan alam, Dusun Plipir juga kaya akan tradisi lokal yang masih lestari. Kegiatan seperti upacara adat, pertanian tradisional, dan semangat gotong royong menjadi bagian tak terpisahkan dari kehidupan sehari-hari masyarakat. Hal ini menjadikan Plipir sebagai cerminan ideal dari kearifan lokal dan kehidupan pedesaan yang harmonis.
          </p>
          <p>
            Dusun ini terus berbenah dan mengembangkan potensinya, baik di bidang pertanian, peternakan, maupun pariwisata untuk meningkatkan kesejahteraan warganya.
          </p>
        </div>
      </main>
    </div>
  );
}