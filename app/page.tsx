import Image from "next/image";
// Pastikan path ke Navigation sudah benar
import { Navigation } from "@/components/Navigation";
import Meteors from "@/components/ui/meteors";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Users, Calendar, ShoppingBag } from 'lucide-react';

const dashboardData = {
  visitorStats: {
    today: 50,
    thisWeek: 13,
    thisMonth: 180,
  },
  popularAttractions: [
    { name: "Perbukitan dan Hutan Hijau", value: 45 },
    { name: "Kehidupan Tradisional Pedesaan", value: 25 },
    { name: "Peternakan Kambing dan Sapi", value: 18 },
    { name: "Pertanian Tradisional", value: 12 },
  ],
  eventSchedule: [
    { time: "Rabu Pahing", event: "Kas Dusun Umum dan Musyawarah Dusun" },
    { time: "Sabtu Pahing", event: "Pertemuan Ibu PKK" },
    { time: "Tanggal 6", event: "Arisan Warga Plipir" },
    { time: "Tanggal 17", event: "Pemeriksaan Posyandu" },
    { time: "Hari Minggu Pertama", event: "Pertemuan Karang Taruna" },
    { time: "Setiap Jumat", event: "Gotong Royong Jumat Bersih" },
  ],
  featuredProducts: [
    { name: "Kambing", image: "/kambing.png", category: "Ternak" },
    { name: "Sapi", image: "/sapi.png", category: "Ternak" },
  ]
};

export default function DashboardHome() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-slate-900 font-sans text-foreground">
      
      <Meteors number={30} />

      {/* ======================= PERBAIKAN 1 ======================= */}
      {/* Navigation dipindahkan ke sini, di luar <main> agar bisa menempel di atas */}
      {/* z-index juga ditambahkan untuk memastikan ia di atas meteor */}
      <div className="relative z-20">
        <Navigation />
      </div>

      {/* Konten utama sekarang berada di bawah navigasi */}
      {/* ======================= PERBAIKAN 2 ======================= */}
      {/* Padding atas (pt-*) dihapus dari <main> dan dipindahkan ke <header> di bawah */}
      <main className="relative z-10 px-4 pb-12 sm:px-6 md:px-12">
        
        {/* ======================= PERBAIKAN 3 ======================= */}
        {/* Padding atas (pt-20) ditambahkan di sini untuk memberi ruang bagi navigasi */}
        <header className="mb-8 pt-20 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Dusun Plipir
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Ringkasan aktivitas dan statistik di Dusun Plipir.
          </p>
        </header>

        {/* Grid untuk tata letak kartu dasbor */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Kartu Statistik Warga */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-1 bg-slate-800/50 backdrop-blur-sm border-slate-700 text-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Jumlah Warga</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">{dashboardData.visitorStats.today}</div>
              <p className="text-xs text-muted-foreground">
                Jumlah Keluarga: {dashboardData.visitorStats.thisWeek}
              </p>
              <p className="text-xs text-muted-foreground">
                Jumlah Ternak: {dashboardData.visitorStats.thisMonth}
              </p>
            </CardContent>
          </Card>

          {/* Kartu Jadwal Acara */}
          <Card className="col-span-1 md:col-span-2 bg-slate-800/50 backdrop-blur-sm border-slate-700 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Kegiatan Warga Dusun Plipir
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-sm">
                {dashboardData.eventSchedule.map(item => (
                  <li 
                    key={item.event} 
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4"
                  >
                    <span className="font-medium">{item.event}</span>
                    <span className="font-mono text-muted-foreground text-left sm:text-right">{item.time}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Kartu Atraksi Populer */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-1 bg-slate-800/50 backdrop-blur-sm border-slate-700 text-white">
             <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart className="h-5 w-5" />
                Tujuan Wisata Populer
              </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-xs text-muted-foreground mb-4">Tujuan Wisata Dusun Plipir</p>
                <div className="space-y-4">
                    {dashboardData.popularAttractions.map(attr => (
                        <div key={attr.name}>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm mb-1 gap-1">
                                <span>{attr.name}</span>
                                <span className="font-semibold">{attr.value}%</span>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-2.5">
                                <div className="bg-primary h-2.5 rounded-full" style={{ width: `${attr.value}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
          </Card>

          {/* Kartu Produk Unggulan */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-4 bg-slate-800/50 backdrop-blur-sm border-slate-700 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                Produk Unggulan Lokal
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {dashboardData.featuredProducts.map(prod => (
                <div key={prod.name} className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                   <Image
                      src={prod.image}
                      alt={`Foto ${prod.name}`}
                      width={200}
                      height={150}
                      className="rounded-md shadow-lg w-full h-32 object-cover mb-3"
                   />
                  <h4 className="font-semibold text-white">{prod.name}</h4>
                  <p className="text-sm text-muted-foreground">{prod.category}</p>
                </div>
              ))}
              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700 flex flex-col items-center justify-center text-center">
                  <h4 className="font-semibold text-white">Singkong</h4>
                  <p className="text-sm text-muted-foreground mt-1">Kuliner Khas</p>
                  <a href="https://www.instagram.com/p/DL9p-Z9Pp0k/" target="_blank" rel="noopener noreferrer" className="mt-3 text-xs bg-primary text-background font-medium px-3 py-1 rounded-md hover:brightness-110 transition">
                    Lihat Detail
                  </a>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700 flex flex-col items-center justify-center text-center">
                  <h4 className="font-semibold text-white">Jagung</h4>
                  <p className="text-sm text-muted-foreground mt-1">Kuliner Khas</p>
                  <a href="https://www.instagram.com/p/DL9RF_-vzjx/" target="_blank" rel="noopener noreferrer" className="mt-3 text-xs bg-primary text-background font-medium px-3 py-1 rounded-md hover:brightness-110 transition">
                    Lihat Detail
                  </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <footer className="mt-12 text-center text-sm text-muted-foreground border-t border-slate-800 pt-6">
          © {new Date().getFullYear()} Dusun Plipir. All rights reserved.
        </footer>
      </main>
    </div>
  );
}