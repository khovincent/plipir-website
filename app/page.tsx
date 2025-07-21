// File: app/page.tsx (atau file dashboard Anda)

import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Users, ShoppingBag } from 'lucide-react';
import AnimatedNumber from "@/components/ui/animated-number";
import { WelcomeCard } from "@/components/ui/welcome-card"; 

const dashboardData = {
  visitorStats: {
    today: 61,
    thisWeek: 13,
    thisMonth: 180,
  },
  popularAttractions: [
    { name: "Perbukitan dan Hutan Hijau", value: 45 },
    { name: "Kehidupan Tradisional Pedesaan", value: 25 },
    { name: "Peternakan Kambing dan Sapi", value: 18 },
    { name: "Pertanian Tradisional", value: 12 },
  ],
  featuredProducts: [
    { name: "Kambing", image: "/kambing.png", category: "Ternak" },
    { name: "Sapi", image: "/sapi.png", category: "Ternak" },
  ]
};

export default function DashboardHome() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black font-sans text-white">
      
      <div className="relative z-20">
        <Navigation />
      </div>

      <main className="relative z-10 px-4 pb-12 sm:px-6 md:px-12 pt-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* ===== BLOK 1: WELCOME CARD SEKARANG DI POSISI PERTAMA ===== */}
          <div className="col-span-1 md:col-span-2 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <WelcomeCard />
          </div>

          {/* ===== BLOK 2: KARTU STATISTIK SEKARANG DI POSISI KEDUA ===== */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-1 bg-gray-950/60 backdrop-blur-sm border-gray-800 text-white animate-fade-in-up transition-transform duration-300 hover:-translate-y-2" style={{ animationDelay: '200ms' }}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Data Kependudukan</CardTitle>
              <Users className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">
                <AnimatedNumber value={dashboardData.visitorStats.today} />
              </div>
              <p className="text-xs text-gray-400">
                Total Warga
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Jumlah Keluarga: {dashboardData.visitorStats.thisWeek}
              </p>
            </CardContent>
          </Card>

          {/* Kartu Potensi Dusun (posisi dan delay tetap) */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-1 bg-gray-950/60 backdrop-blur-sm border-gray-800 text-white animate-fade-in-up transition-transform duration-300 hover:-translate-y-2" style={{ animationDelay: '300ms' }}>
             <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart className="h-5 w-5" />
                Potensi Dusun
              </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-xs text-gray-400 mb-4">Persentase potensi yang diminati</p>
                <div className="space-y-4">
                    {dashboardData.popularAttractions.map(attr => (
                        <div key={attr.name}>
                            <div className="flex justify-between items-center text-sm mb-1 gap-1">
                                <span>{attr.name}</span>
                                <span className="font-semibold">{attr.value}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2.5">
                                <div className="bg-green-500 h-2.5 rounded-full animate-progress-fill" style={{ width: `${attr.value}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
          </Card>

          {/* Kartu Produk Unggulan (posisi dan delay tetap) */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-4 bg-gray-950/60 backdrop-blur-sm border-gray-800 text-white animate-fade-in-up transition-transform duration-300 hover:-translate-y-2" style={{ animationDelay: '400ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                Produk Unggulan Lokal
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {dashboardData.featuredProducts.map(prod => (
                <div key={prod.name} className="bg-gray-900 p-4 rounded-lg border border-gray-700 transition-all duration-300 hover:border-green-500 hover:scale-105">
                   <Image
                      src={prod.image}
                      alt={`Foto ${prod.name}`}
                      width={200}
                      height={150}
                      className="rounded-md shadow-lg w-full h-32 object-cover mb-3"
                   />
                  <h4 className="font-semibold text-white">{prod.name}</h4>
                  <p className="text-sm text-gray-400">{prod.category}</p>
                </div>
              ))}
              {[
                { name: 'Singkong', link: 'https://www.instagram.com/p/DL9p-Z9Pp0k/' },
                { name: 'Jagung', link: 'https://www.instagram.com/p/DL9RF_-vzjx/' }
              ].map(item => (
                <div key={item.name} className="bg-gray-900 p-4 rounded-lg border border-gray-700 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-green-500 hover:scale-105">
                    <h4 className="font-semibold text-white">{item.name}</h4>
                    <p className="text-sm text-gray-400 mt-1">Kuliner Khas</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-3 text-xs bg-green-600 text-white font-medium px-3 py-1 rounded-md hover:bg-green-500 transition">
                      Lihat Detail
                    </a>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <footer className="mt-12 text-center text-sm text-gray-500 border-t border-gray-800 pt-6">
          © {new Date().getFullYear()} Dusun Plipir. All rights reserved.
        </footer>
      </main>
    </div>
  );
}