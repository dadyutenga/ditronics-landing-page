"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "#about" },
    { title: "Services", href: "#services" },
    { title: "Technology", href: "#technology" },
    { title: "Studio", href: "#studio" },
  ]

  return (
    <header className="bg-[#001219]/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DITRONICS-COMPANY-LOGO-w1s8tde4H97TGaCg0k6StC2lxO31JQ.png"
              alt="DITRONICS Logo"
              width={50}
              height={50}
              className="w-12 h-12"
            />
            <span className="text-2xl font-bold text-white">DITRONICS</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link key={item.title} href={item.href} className="text-gray-300 hover:text-[#00FFFF] transition-colors">
                {item.title}
              </Link>
            ))}
            <Button className="bg-[#FFD700] text-black hover:bg-[#FFC700]">Contact Us</Button>
          </nav>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-gray-300 hover:text-[#00FFFF] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Button className="bg-[#FFD700] text-black hover:bg-[#FFC700]">Contact Us</Button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
}

