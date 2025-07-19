import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import Meteors from "@/components/ui/meteors";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Users, Calendar, ShoppingBag } from 'lucide-react';

// Data fiktif untuk komponen dasbor
const dashboardData = {
  visitorStats: {
    today: 50,
    thisWeek: 13,
    thisMonth: 180,
  },
  popularAttractions: [
    { name: "Perbukitan dan Hutan Hijau", value: 45 },
    { name: "Kehidupan Tradisional Pedesaan", value: 25 },
    { name: "Perternakan Kambing dan Sapi", value: 18 },
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
    // Latar belakang gelap dan relatif untuk "menangkap" efek meteor
    <div className="relative overflow-hidden min-h-screen bg-slate-900 text-foreground font-sans">
      
      {/* Komponen Meteor untuk efek latar belakang dinamis */}
      <Meteors number={30} />

      {/* Konten utama dengan z-index lebih tinggi agar berada di atas meteor */}
      <main className="relative z-10 p-6 sm:p-8 md:p-12">
        <Navigation />

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Dusun Plipir
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Ringkasan aktivitas dan statistik di Dusun Plipir.
          </p>
        </header>

        {/* Grid untuk tata letak kartu dasbor */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Kartu Statistik Pengunjung */}
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
              <ul className="space-y-2 text-sm">
                {dashboardData.eventSchedule.map(item => (
                  <li key={item.event} className="flex justify-between">
                    <span>{item.event}</span>
                    <span className="font-mono text-muted-foreground">{item.time}</span>
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
                <div className="space-y-2">
                    {dashboardData.popularAttractions.map(attr => (
                        <div key={attr.name}>
                            <div className="flex justify-between text-sm mb-1">
                                <span>{attr.name}</span>
                                <span>{attr.value}%</span>
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
                    <a href="https://www.instagram.com/p/DL9p-Z9Pp0k/" className="mt-3 text-xs bg-primary text-background font-medium px-3 py-1 rounded-md hover:brightness-110 transition">
                      Lihat Detail
                    </a>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700 flex flex-col items-center justify-center text-center">
                    <h4 className="font-semibold text-white">Jagung</h4>
                    <p className="text-sm text-muted-foreground mt-1">Kuliner Khas</p>
                    <a href="https://www.instagram.com/p/DL9RF_-vzjx/" className="mt-3 text-xs bg-primary text-background font-medium px-3 py-1 rounded-md hover:brightness-110 transition">
                      Lihat Detail
                    </a>
                </div>
            </CardContent>
          </Card>

        </div>

        <footer className="mt-12 text-center text-sm text-muted-foreground border-t border-slate-800 pt-6">
          © {new Date().getFullYear()} Dasbor Desa Wisata Plipir. Data yang ditampilkan bersifat ilustratif.
        </footer>
      </main>
    </div>
  );
}