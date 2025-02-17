"use client"

import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { motion } from "framer-motion"

export default function TopBar() {
  return (
    <motion.div
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      className="bg-[#001219] text-white py-2 border-b border-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-6">
            <a href="tel:+255717203759" className="flex items-center space-x-2 text-sm hover:text-[#00FFFF]">
              <Phone className="w-4 h-4" />
              <span>+255 717 203 759</span>
            </a>
            <a href="mailto:info@ditronics.co.tz" className="flex items-center space-x-2 text-sm hover:text-[#00FFFF]">
              <Mail className="w-4 h-4" />
              <span>info@ditronics.co.tz</span>
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#00FFFF]">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-[#00FFFF]">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-[#00FFFF]">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-[#00FFFF]">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

