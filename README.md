# Website Resmi Dusun Plipir

[![Deploy with Vercel](https://plipir-website.vercel.app)](https://github.com/khovincent/plipir-website.com)

Sebuah situs web modern dan informatif yang dibangun menggunakan Next.js dan Tailwind CSS untuk menampilkan profil, sejarah, potensi, dan kegiatan Dusun Plipir, Desa Bersono, Pacitan.

### [🔗 Lihat Demo Langsung](https://plipir-website.vercel.app)


---

## ✨ Fitur Utama

-   **Dasbor Interaktif:** Halaman utama yang menampilkan ringkasan data kependudukan, potensi dusun, dan produk unggulan dengan animasi angka dan progress bar.
-   **Kartu Selamat Datang Dinamis:** Sebuah kartu utama dengan efek *glow* dan hujan meteor yang indah untuk menyambut pengunjung.
-   **Halaman Sejarah:** Garis waktu (timeline) vertikal yang menceritakan sejarah dusun dari masa ke masa.
-   **Halaman Tentang:** Penjelasan mengenai visi, misi, dan karakteristik dusun dengan layout tiga pilar (Alam, Komunitas, Visi).
-   **Halaman Ekonomi:** Rincian mengenai mata pencaharian warga, termasuk hasil pertanian, peternakan, serta tantangan hama yang dihadapi.
-   **Halaman KKN 54:** Halaman khusus untuk mendokumentasikan program kerja dan galeri kegiatan mahasiswa KKN.
-   **Desain Responsif:** Tampilan yang optimal di berbagai perangkat, dari desktop hingga mobile.
-   **Animasi Modern:** Dibangun dengan animasi halus menggunakan Framer Motion dan CSS untuk memberikan pengalaman pengguna yang lebih hidup.
-   **Navigasi Sticky:** Navbar yang menempel di atas layar saat di-scroll untuk kemudahan akses.

## 🛠️ Teknologi yang Digunakan

-   **Framework:** [Next.js](https://nextjs.org/) 14+ (App Router)
-   **Bahasa:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Animasi:** [Aceternity](https://ui.aceternity.com/) & CSS Keyframes
-   **Ikon:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
-   **Komponen UI:** Dibangun secara kustom, terinspirasi dari [Shadcn/UI](https://ui.shadcn.com/)
-   **Deployment:** [Vercel](https://vercel.com/)

## 📂 Struktur Proyek

Proyek ini menggunakan struktur App Router dari Next.js.

-   `app/`: Berisi semua halaman dan layout utama.
    -   `page.tsx`: Halaman utama (Dasbor).
    -   `tentang/page.tsx`: Halaman Tentang.
    -   `sejarah/page.tsx`: Halaman Sejarah.
    -   `ekonomi/page.tsx`: Halaman Ekonomi.
    -   `kkn54/page.tsx`: Halaman KKN 54.
    -   `layout.tsx`: Layout root aplikasi.
    -   `globals.css`: File CSS global.
-   `components/`: Berisi semua komponen yang dapat digunakan kembali.
    -   `Navigation.tsx`: Komponen navbar.
    -   `ui/`: Komponen UI spesifik seperti `meteors.tsx`, `animated-number.tsx`, dll.
-   `public/`: Berisi semua aset statis seperti gambar (`logo.png`, `kambing.png`, dll.) dan favicon.
-   `lib/`: Berisi fungsi utilitas, seperti `cn` dari `tailwind-merge`.

## 🚀 Cara Menjalankan Secara Lokal

Untuk menjalankan proyek ini di lingkungan pengembangan lokal Anda, ikuti langkah-langkah berikut.

1.  **Clone Repositori**
    ```bash
    git clone https://github.com/khovincent/plipir-website
    ```

2.  **Instal Dependensi**
    Proyek ini menggunakan `npm` sebagai package manager.
    ```bash
    npm install
    ```

3.  **Siapkan Environment Variables**
    Salin file `.env.example` (jika ada) menjadi `.env.local`. Untuk saat ini, tidak ada variabel yang dibutuhkan.
    ```bash
    # Tidak ada variabel yang perlu diatur untuk saat ini
    ```

4.  **Jalankan Server Pengembangan**
    ```bash
    npm run dev
    ```
    Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

## 🚢 Deployment

Proyek ini dioptimalkan untuk deployment di **Vercel**.

1.  **Push kode Anda ke repositori GitHub.**
2.  **Impor proyek Anda di Vercel.** Vercel akan secara otomatis mendeteksi bahwa ini adalah proyek Next.js.
3.  **Konfigurasi Environment Variables.** Jika Anda menambahkan variabel di masa depan, pastikan untuk menambahkannya juga di Vercel (Project Settings > Environment Variables).
4.  **Klik "Deploy".** Selesai!

## 📄 Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT. Lihat file `LICENSE` untuk detail lebih lanjut.