import Image from "next/image"
import { Navigation } from "@/components/Navigation"

export default function Tentang() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-foreground">
      <Navigation />
      <h1 className="text-4xl font-bold mb-6 text-green-700">Tentang Dusun Plipir</h1>

      <div className="mb-6 text-lg leading-relaxed">
        <p className="mb-4">
          Dusun Plipir adalah sebuah dusun yang terletak di Desa Dersono, Kecamatan Pringkuku, Kabupaten Pacitan, Jawa Timur.
          Terkenal dengan suasana alam yang asri, masyarakat yang ramah, serta potensi budaya dan pariwisata yang kuat.
        </p>
        <p className="mb-4">
          Selain keindahan alam, Dusun Plipir juga memiliki kekayaan tradisi lokal seperti upacara adat, pertanian organik, dan kegiatan gotong royong yang
          masih dilestarikan hingga saat ini. Ini menjadikan Plipir sebagai tempat yang ideal untuk mengenal kearifan lokal Yogyakarta.
        </p>
        <p className="mb-4">
          Kepala Dusun saat ini adalah Pak Sigit.
        </p>
      </div>

      <Image
        src="/dusun-plipir.png"
        alt="Pemandangan Dusun Plipir"
        width={800}
        height={500}
        className="rounded-2xl shadow-lg border border-border"
      />
    </main>
  )
}
