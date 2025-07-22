// File: app/ekonomi/page.tsx

"use client"; 

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GiWheat, GiChiliPepper, GiRootTip, GiCorn, 
  GiChicken, GiGoat, GiCow, GiFarmer, GiMonkey, GiMushroom, GiPeas 
} from 'react-icons/gi';
import { FaTractor } from 'react-icons/fa';

export default function EkonomiPage() {
  const [selectedCrop, setSelectedCrop] = useState<string | null>(null);

  const crops = [
    { 
      name: "Padi", 
      icon: <GiWheat />,
      details: {
        frequency: "1x per tahun",
        yield: "~270 karung",
        weight: "Min. 25 kg / karung"
      }
    },
    { 
      name: "Jagung", 
      icon: <GiCorn />,
      details: {
        frequency: "1x per tahun",
        yield: "~54 karung",
        weight: "25-30 kg / karung"
      }
    },
    { 
      name: "Cabai", 
      icon: <GiChiliPepper />,
      details: {
        frequency: "Setiap 10 hari (selama 1 tahun)",
        yield: "10-20 karung / 10 hari",
        weight: "~30 kg / karung"
      }
    },
    { 
      name: "Singkong", 
      icon: <GiRootTip />,
      details: {
        frequency: "1x per tahun",
        yield: "~27 karung (kering)",
        weight: "30-40 kg / karung"
      }
    },
    { 
      name: "Jahe & Kunyit", 
      icon: <GiRootTip />,
      details: {
        frequency: "1x per tahun",
        yield: "~25 karung",
        weight: "50 kg / karung"
      }
    },
    { 
      name: "Kencur", 
      icon: <GiRootTip />,
      details: {
        frequency: "1x per 3 tahun",
        yield: "~25 karung (kering)",
        weight: "25-30 kg / karung"
      }
    },
    { name: "Pete", icon: <GiPeas />, details: null },
    { name: "Ubi", icon: <GiRootTip />, details: null },
  ];

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
    <div className="bg-black text-gray-300 font-sans">
      <Navigation />

      {/* ===== PERUBAHAN DI SINI: HERO SECTION TANPA GAMBAR LATAR ===== */}
      <header className="w-full h-[60vh] bg-black flex items-center justify-center text-center">
        <div className="p-8">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white" style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.1em' }}>
            Denyut Nadi Plipir
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl mx-auto">
            Kisah ketekunan warga yang menghidupi dusun dari kemurahan alam.
          </p>
        </div>
      </header>
      {/* ============================================================= */}

      <main className="bg-gray-950 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
          <section className="text-center mb-16 lg:mb-24 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Cinzel, serif' }}>Pekerja Keras Penjaga Tradisi</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Mayoritas warga Dusun Plipir adalah petani dan peternak. Mereka menggantungkan hidup pada tanah, ternak, dan harmoni dengan alam.
            </p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            <section className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl text-green-400"><FaTractor /></span>
                <h3 className="text-3xl font-bold text-white" style={{ fontFamily: 'Cinzel, serif' }}>Sang Penjaga Bumi</h3>
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Pertanian adalah tulang punggung ekonomi. Klik pada setiap hasil panen di bawah ini untuk melihat detail estimasi panennya.
                Namun terdapat tantangan seperti hama monyet dan jamur yang mengancam hasil panen.
              </p>
              
              <h4 className="text-xl font-semibold text-white mb-4">Hasil Utama Ladang:</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {crops.map((crop) => (
                  <motion.div
                    key={crop.name}
                    layout
                    onClick={() => crop.details && setSelectedCrop(selectedCrop === crop.name ? null : crop.name)}
                    className={`p-4 rounded-lg flex flex-col items-center justify-start text-center transition-colors duration-300 ${crop.details ? 'cursor-pointer bg-gray-800 hover:bg-green-400/10' : 'bg-gray-800/50'}`}
                  >
                    <span className="text-4xl text-green-400 mb-2">{crop.icon}</span>
                    <span className="font-semibold text-gray-200">{crop.name}</span>
                    
                    <AnimatePresence>
                      {selectedCrop === crop.name && crop.details && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="w-full overflow-hidden text-left mt-4"
                        >
                          <div className="border-t border-gray-700 pt-3 text-xs space-y-1">
                            <p><strong className="font-semibold text-gray-300">Frekuensi:</strong> <span className="text-gray-400">{crop.details.frequency}</span></p>
                            <p><strong className="font-semibold text-gray-300">Perkiraan:</strong> <span className="text-gray-400">{crop.details.yield}</span></p>
                            <p><strong className="font-semibold text-gray-300">Bobot:</strong> <span className="text-gray-400">{crop.details.weight}</span></p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12">
                <h4 className="text-xl font-semibold text-white mb-4">Tantangan & Hama</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {pests.map((pest) => (
                    <div key={pest.name} className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center text-center">
                      <span className="text-4xl text-red-400 mb-2">{pest.icon}</span>
                      <span className="font-semibold text-gray-200">{pest.name}</span>
                    </div>
                  ))}
                </div>
              </div>

            </section>

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
                  <div key={animal.name} className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center text-center">
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