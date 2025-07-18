import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import Meteors from "@/components/ui/meteors";

export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-background text-foreground font-sans px-6 py-12 sm:px-16 md:px-24">
      {/* Meteor Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <Meteors number={25} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />

        <section className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Selamat Datang di Dusun Plipir
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Sebuah dusun yang asri dan menawan di tengah alam Yogyakarta.
              Nikmati keindahan, budaya, dan keramahan masyarakatnya.
            </p>
            <a
              href="#about"
              className="mt-6 inline-block bg-primary text-background font-medium px-6 py-3 rounded-lg hover:brightness-110 transition"
            >
              Jelajahi Lebih Lanjut
            </a>
          </div>

          <div className="flex-1">
            <Image
              src="/dusun-plipir.png"
              alt="Foto Dusun Plipir"
              width={640}
              height={420}
              className="rounded-2xl shadow-lg border border-border"
            />
          </div>
        </section>

        <section id="about" className="mt-24 space-y-12">
          <div>
            <h2 className="text-3xl font-semibold text-primary mb-2">Tentang Dusun Plipir</h2>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Dusun Plipir merupakan desa wisata dengan keindahan alam, pertanian hijau, dan keramahan masyarakatnya.
              Di sini, Anda bisa merasakan pengalaman hidup di desa yang damai dan harmonis dengan alam.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-primary mb-4">Daya Tarik</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg text-muted-foreground">
              <li className="bg-card border border-border p-4 rounded-lg shadow">🌿 Pemandangan perbukitan hijau</li>
              <li className="bg-card border border-border p-4 rounded-lg shadow">👨‍🌾 Wisata edukasi pertanian</li>
              <li className="bg-card border border-border p-4 rounded-lg shadow">🍲 Kuliner khas desa</li>
              <li className="bg-card border border-border p-4 rounded-lg shadow">🎨 Kerajinan tangan lokal</li>
            </ul>
          </div>
        </section>

        <footer className="mt-24 text-center text-sm text-muted-foreground border-t border-border pt-6">
          © {new Date().getFullYear()} Dusun Plipir. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
