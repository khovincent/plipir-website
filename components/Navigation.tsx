"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react" // Mengimpor ikon

const links = [
  { name: "Home", href: "/" },
  { name: "Tentang", href: "/tentang" },
  { name: "KKN 54", href: "/kkn54" },
  // Link Instagram dipisahkan karena merupakan link eksternal
];

const externalLink = { 
  name: "Instagram", 
  href: "https://www.instagram.com/dusun_pliper?igsh=MTk1MGxuYmRtcXVhcg==" 
};

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false) // State untuk mengontrol menu mobile

  return (
    <nav className="relative w-full bg-black/80 backdrop-blur-sm border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo atau Nama Situs */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold text-xl">
              Dusun Plipir
            </Link>
          </div>

          {/* Navigasi untuk Desktop (tersembunyi di mobile) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "bg-white text-black"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              {/* Link Eksternal */}
              <a
                href={externalLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:bg-white/10 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {externalLink.name}
              </a>
            </div>
          </div>

          {/* Tombol Hamburger (hanya muncul di mobile) */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Buka menu utama</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile (muncul/hilang berdasarkan state 'isOpen') */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} // Tutup menu saat link diklik
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  pathname === link.href
                    ? "bg-white text-black"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
             {/* Link Eksternal untuk Mobile */}
             <a
              href={externalLink.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:bg-white/10 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {externalLink.name}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}