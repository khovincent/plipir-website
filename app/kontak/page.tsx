// File: app/kontak/page.tsx

import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { FaWhatsapp } from "react-icons/fa"; // Ikon WhatsApp

// ===== GANTI DATA DI SINI =====
const contactPersons = [
    {
    name: "Sigit", // Ganti dengan nama asli
    role: "Kepala Dusun Plipir",
    image: "/kontak-sigit.jpg", // Ganti dengan path foto Anda di /public
    whatsappNumber: "6282144986413", // GANTI dengan nomor WA (format 62, tanpa + atau 0)
  },
  {
    name: "Supeno", // Ganti dengan nama asli
    role: "Penasehat Kepala Dusun Plipir",
    image: "/kontak-supeno.jpg", // Ganti dengan path foto Anda di /public
    whatsappNumber: "6285330788829", // GANTI dengan nomor WA (format 62, tanpa + atau 0)
  },
];
// =============================

export default function KontakPage() {
  return (
    <div className="bg-black text-gray-300 font-sans">
      <Navigation />

      {/* Hero Section */}
      <header className="w-full h-[60vh] bg-black flex items-center justify-center text-center">
        <div className="p-8">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white" style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.1em' }}>
            Hubungi Kami
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
            Kami siap membantu dan menjawab setiap pertanyaan Anda mengenai Dusun Plipir.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-gray-950 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
          <section className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Cinzel, serif' }}>Narahubung Utama</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-400 leading-relaxed">
              Silakan hubungi perwakilan kami di bawah ini untuk informasi lebih lanjut.
            </p>
          </section>

          {/* Grid untuk Kartu Kontak */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {contactPersons.map((contact) => (
              <div 
                key={contact.name} 
                className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300"
              >
                {/* Foto Profil */}
                <div className="relative mb-6">
                  <Image
                    src={contact.image}
                    alt={`Foto ${contact.name}`}
                    width={150}
                    height={150}
                    className="rounded-full object-cover w-36 h-36 border-4 border-green-500 shadow-lg"
                  />
                </div>
                
                {/* Nama dan Jabatan */}
                <h3 className="text-2xl font-bold text-white">{contact.name}</h3>
                <p className="text-green-400 font-semibold mt-1">{contact.role}</p>

                {/* Tombol WhatsApp */}
                <a
                  href={`https://wa.me/${contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 mt-8 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition-colors duration-300 transform hover:scale-105"
                >
                  <FaWhatsapp className="h-6 w-6" />
                  <span>Hubungi di WhatsApp</span>
                </a>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}