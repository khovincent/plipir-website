// File: app/sejarah/page.tsx
import { Navigation } from "@/components/Navigation";
// Pastikan untuk menginstal react-icons: npm install react-icons
import { FaLandmark, FaRoad, FaWater, FaLightbulb, FaMountain, FaUsers } from 'react-icons/fa';

export default function Sejarah() {
  const historicalFacts = [
    {
      icon: <FaLandmark className="text-red-400" />,
      title: "Asal Usul & Lokasi",
      text: "Dusun Plipir merupakan bagian dari Desa Bersono, Kecamatan Pringkuku, Kabupaten Pacitan. Terletak di bagian utara desa, dusun ini dikenal sebagai wilayah yang paling sulit dijangkau karena lokasinya yang terpencil dan berbatasan langsung dengan Dusun Sugihwaras.",
    },
    {
      icon: <FaUsers className="text-blue-400" />,
      title: "Masa Pengungsian (1948)",
      text: "Menurut cerita para sesepuh seperti <strong>Mbah Mustorejo</strong>, <strong>Mbah Katimun</strong>, <strong>Mbah Kasimun</strong>, dan <strong>Mbah Wakimin</strong>, wilayah ini menjadi tempat vital untuk pengungsian sekitar tahun 1948. Kantor kecamatan saat itu bahkan menumpang di rumah <strong>Mbah Ketikem</strong> di Dusun Sumur.",
    },
    {
        icon: <FaMountain className="text-purple-400" />,
        title: "Saksi Sejarah & Peninggalan",
        text: "Dusun Plipir berada di ketinggian sekitar 300 mdpl. Di kawasan Gunung Pak Pongko, pernah ditemukan gua dengan stupa beraksara Jepang. <strong>Mbah Sukimin</strong> dan <strong>Mbah Sukijan</strong> merupakan saksi hidup yang pernah diwawancarai oleh <strong>Pak Supeno</strong> mengenai sejarah dusun ini.",
    },
    {
      icon: <FaWater className="text-cyan-400" />,
      title: "Air Bersih Mulai Masuk (2004)",
      text: "Sebelum tahun 2004, warga bergantung pada sumber air dari wilayah Dokbalong. Proyek air bersih yang terealisasi pada tahun ini menjadi sebuah lompatan besar bagi kualitas hidup masyarakat.",
    },
    {
      icon: <FaRoad className="text-yellow-400" />,
      title: "Akses Jalan Dibuka (2005)",
      text: "Keterisolasian mulai terkikis saat akses jalan yang layak akhirnya dibuka pada tahun 2005, menghubungkan Dusun Plipir dengan wilayah lain secara lebih mudah.",
    },
    {
      icon: <FaLightbulb className="text-green-400" />,
      title: "Penerangan Listrik (2010)",
      text: "Era modern semakin terasa saat listrik akhirnya menerangi Dusun Plipir pada tahun 2010, membuka jalan bagi kemajuan dan peluang baru bagi seluruh warga.",
    },
  ];

  return (
    <div className="bg-gray-950 text-gray-300 font-sans">
      <Navigation />

      {/* Hero Section */}
      <header className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="z-20 p-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white" style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.1em' }}>
            Sejarah Plipir
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl mx-auto">
            Menelusuri jejak waktu, dari tanah pengungsian hingga dusun yang terus berbenah.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-black py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
          {/* Introduction */}
          <section className="text-center mb-20 lg:mb-28">
            <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Cinzel, serif' }}>Gerbang Waktu Plipir</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-400 leading-relaxed">
              Setiap sudut Dusun Plipir menyimpan cerita. Dari masa lampau yang terisolasi hingga era modernisasi, inilah perjalanan sebuah dusun yang kaya akan sejarah dan ketangguhan warganya.
            </p>
          </section>

          {/* Timeline Section */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-700 hidden md:block"></div>

            {historicalFacts.map((fact, index) => (
              <div key={index} className="mb-12 md:mb-8 flex justify-center items-start md:even:flex-row-reverse">
                <div className="w-full md:w-1/2 md:px-8">
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-red-400/10 hover:border-red-400/50 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-3xl">{fact.icon}</span>
                      <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Cinzel, serif' }}>{fact.title}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: fact.text }}></p>
                  </div>
                </div>
                {/* Timeline Dot */}
                <div className="hidden md:flex items-center justify-center w-12 h-full">
                    <div className="w-4 h-4 bg-red-400 rounded-full border-4 border-gray-900"></div>
                </div>
                {/* Spacer for alignment */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}