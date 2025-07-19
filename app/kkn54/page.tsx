// File: app/kkn54/page.tsx

// 1. Impor komponen yang ingin Anda tampilkan
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Navigation } from "@/components/Navigation"; // Pastikan path ini benar

// 2. Siapkan data yang dibutuhkan oleh komponen tersebut
const testimonials = [
  {
    quote: "Edukasi Belajar Mengetik Kepada Anak Muda Menggunakan Media Game",
    name: "Ekik",
    designation: "Ketua Kelompok",
    src: "/ekik.png",
  },
  {
    quote: "Sosialisasi Pemanfaatan Kecerdasan Buatan (AI) dalam Aktivitas Sehari-hari dan Pembuatan Website",
    name: "Eric",
    designation: "Sekretaris",
    src: "/eric.png",
  },
  {
    quote: "Digitalisasi Profil Desa melalui Instagram untuk Pembuatan dan Pengelolaan Media Digital",
    name: "Else",
    designation: "Sekretaris",
    src: "/else.png",
  },
    {
    quote: "Manajemen Konten dan Promosi Digital untuk Sosialisasi Profil Desa melalui Instagram",
    name: "Angel",
    designation: "Bendahara",
    src: "/angel.png",
  },
    {
    quote: "Pemetaan Administrasi Wilayah, dan Potensi Pariwisata daerah padukuhan Plipir",
    name: "Rendi",
    designation: "Perkap",
    src: "/rendi.png",
  },
    {
    quote: "Pemeriksaan Kesehatan Dasar dan Edukasi Gaya Hidup Sehat bagi Warga Dusun Plipir",
    name: "Chris",
    designation: "Hubungan Manusia",
    src: "/chris.png",
  },
    {
    quote: "Sosialisasi Pemanfaatan Limbah Plastik Sebagai Bahan Ecobrick",
    name: "Jelo",
    designation: "Desain dan Dokumentasi",
    src: "/jelo.png",
  },
    {
    quote: "Desain Produk Visual Instagram untuk Sosialisasi Profil Desa Digital",
    name: "Siska",
    designation: "Desain dan Dokumentasi",
    src: "/siska.png",
  },
    {
    quote: "Papi dari Anak-anak KKN 54",
    name: "Pak Peno",
    designation: "Kepala Dusun Plipir Hingga Juli 2025",
    src: "/pakpeno.png",
  },
];

// 3. Buat komponen halaman dan ekspor sebagai default
export default function Kkn54Page() {
  return (
    // Gunakan div wrapper untuk seluruh halaman
    <div className="w-full bg-white dark:bg-black min-h-screen">
      
      {/* PERBAIKAN: Komponen <Navigation /> ditempatkan di sini, di dalam return statement */}
      <Navigation />

      {/* Konten utama halaman */}
      <main>
        <h2 className="pt-20 pb-10 text-center text-3xl font-bold text-black dark:text-white">
          Anggota & Program Kerja KKN 54
        </h2>
        
        {/* Gunakan komponen yang sudah diimpor */}
        <AnimatedTestimonials testimonials={testimonials} autoplay={false} />
      </main>

    </div>
  );
}