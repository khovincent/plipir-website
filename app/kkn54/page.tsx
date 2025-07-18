import Image from "next/image"
import { Navigation } from "@/components/Navigation"


export default function KKN54() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-foreground">
    <Navigation />
      <h1 className="text-4xl font-bold mb-6 text-green-700">Kegiatan KKN 54</h1>

      <div className="mb-6 text-lg leading-relaxed">
        <p className="mb-4">
          Kelompok Kuliah Kerja Nyata (KKN) 54 Universitas Kristen Duta Wacana hadir di Dusun Plipir sebagai bagian dari kontribusi mahasiswa dalam pembangunan masyarakat berbasis potensi lokal.
        </p>
        <p className="mb-4">
          Kegiatan KKN berlangsung selama <strong>Juni - Juli 2025</strong>, dengan fokus utama pada pemberdayaan masyarakat, edukasi lingkungan, pengembangan pariwisata lokal, serta digitalisasi informasi dusun.
        </p>
        <p className="mb-4">
          Program unggulan KKN 54 di Dusun Plipir meliputi:
        </p>
        <ul className="list-disc list-inside ml-2 mb-4">
          <li>Pembuatan website profil dusun</li>
          <li>Pelatihan pengelolaan sampah ecobrick</li>
          <li>Pengenalan instagram</li>
          <li>Pengenalan AI</li>
          <li>Edukasi anak-anak tentang mengetik</li>
          <li>Pengecekan kesehatan</li>
          <li>Pembuatan mapping dusun</li>
        </ul>
        <p>
          Semua kegiatan dilakukan dengan semangat kolaborasi bersama warga dusun, perangkat desa, dan pihak terkait lainnya.
        </p>
      </div>

      <Image
        src="/kkn54-dokumentasi.png"
        alt="Kegiatan KKN 54 di Dusun Plipir"
        width={800}
        height={500}
        className="rounded-2xl shadow-lg border border-border"
      />
    </main>
  )
}
