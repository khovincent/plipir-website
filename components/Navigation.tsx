"use client"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const links = [
  { name: "Home", href: "/" },
  { name: "Tentang", href: "/tentang" },
  { name: "KKN 54", href: "/kkn54" },
  { name: "Instagram", href: "https://www.instagram.com/dusun_pliper?igsh=MTk1MGxuYmRtcXVhcg==" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <div className="w-full flex justify-center bg-black py-3">
      <NavigationMenu>
        <NavigationMenuList className="flex gap-4">
          {links.map((link) => (
            <NavigationMenuItem key={link.name}>
              <NavigationMenuLink
                href={link.href}
                className={cn(
                  "text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-white/10"
                    : "hover:bg-white/5"
                )}
              >
                {link.name}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
