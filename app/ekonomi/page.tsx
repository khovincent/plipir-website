// File: app/ekonomi/page.tsx

import Image from "next/image";
import { Navigation } from "@/components/Navigation";
// Pastikan untuk menginstal react-icons: npm install react-icons
import { 
  GiWheat, 
  GiChiliPepper, 
  GiRootTip, 
  GiCorn, 
  GiChicken, 
  GiGoat, 
  GiCow,
  GiFarmer,
  GiMonkey,
  GiMushroom // Menambahkan ikon jamur
} from 'react-icons/gi';
import { FaTractor } from 'react-icons/fa';


export default function EkonomiPage() {

  const crops = [
    { name: "Padi", icon: <GiWheat /> },
    { name: "Cabai", icon: <GiChiliPepper /> },
    { name: "Singkong", icon: <GiRootTip /> },
    { name: "Jagung", icon: <GiCorn /> },
    { name: "Ubi", icon: <GiRootTip /> }, 
  ];

  // Mengubah nama variabel dan menambahkan jamur
  const pests = [
    { name: "Monyet", icon: <GiMonkey /> },
    { name: "Jamur", icon: <GiMushroom /> },
  ];

  const livestock = [
    { name: "Ayam", icon: <GiChicken /> },
    { name: "Kambing", icon: <GiGoat /> },
    { name: "Sapi", icon: <GiCow /> },
  ];

  return (
    <div className="bg-gray-950 text-gray-300 font-sans">
      <Navigation />

      {/* Hero Section */}
      <header className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10"></div>
        <Image
            src="/ladang-petani.png" 
            alt="Ladang petani di Dusun Plipir"
            layout="fill"
            objectFit="cover"
            className="z-0"
        />
        <div className="z-20 p-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white" style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.1em' }}>
            Denyut Nadi Plipir
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl mx-auto">
            Kisah ketekunan para petani dan peternak yang menghidupi dusun dari kemurahan alam.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-black py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
          <section className="text-center mb-16 lg:mb-24 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Cinzel, serif' }}>Pekerja Keras Penjaga Tradisi</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Mayoritas warga Dusun Plipir menggantungkan hidupnya pada tanah dan ternak. Setiap pagi, langkah kaki mereka menyusuri jalan setapak menuju ladang, sementara suara ternak menjadi alunan musik kehidupan. Inilah cerminan kerja keras dan harmoni dengan alam.
            </p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Section 1: Pertanian */}
            <section className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl text-green-400"><FaTractor /></span>
                <h3 className="text-3xl font-bold text-white" style={{ fontFamily: 'Cinzel, serif' }}>Sang Penjaga Bumi</h3>
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Pertanian adalah tulang punggung utama ekonomi dusun. Para petani dengan gigih mengolah lahan untuk menanam berbagai komoditas yang menjadi sumber penghasilan pokok keluarga. Namun terdapat tantangan besar seperti hama monyet dan jamur yang merusak tanaman.  
              </p>
              
              {/* Hasil Panen */}
              <h4 className="text-xl font-semibold text-white mb-4">Hasil Utama Ladang:</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {crops.map((crop) => (
                  <div key={crop.name} className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center text-center hover:bg-green-400/10 transition-colors duration-300">
                    <span className="text-4xl text-green-400 mb-2">{crop.icon}</span>
                    <span className="font-semibold text-gray-200">{crop.name}</span>
                  </div>
                ))}
              </div>

              {/* ===== BAGIAN BARU: TANTANGAN & HAMA ===== */}
              <div className="mt-12">
                <h4 className="text-xl font-semibold text-white mb-4">Tantangan & Hama</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {pests.map((pest) => (
                    <div key={pest.name} className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center text-center hover:bg-red-400/10 transition-colors duration-300">
                      <span className="text-4xl text-red-400 mb-2">{pest.icon}</span>
                      <span className="font-semibold text-gray-200">{pest.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* ===== AKHIR BAGIAN BARU ===== */}

            </section>

            {/* Section 2: Peternakan */}
            <section className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl text-yellow-400"><GiFarmer /></span>
                <h3 className="text-3xl font-bold text-white" style={{ fontFamily: 'Cinzel, serif' }}>Sumber Kehidupan Bernyawa</h3>
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Selain bertani, warga juga beternak sebagai penopang ekonomi dan tabungan hidup. Dari ternak unggas hingga mamalia besar, semua dipelihara dengan penuh perhatian.
              </p>
              <h4 className="text-xl font-semibold text-white mb-4">Ternak Warga:</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {livestock.map((animal) => (
                  <div key={animal.name} className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center text-center hover:bg-yellow-400/10 transition-colors duration-300">
                    <span className="text-4xl text-yellow-400 mb-2">{animal.icon}</span>
                    <span className="font-semibold text-gray-200">{animal.name}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}