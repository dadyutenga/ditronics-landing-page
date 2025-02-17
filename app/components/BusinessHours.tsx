"use client"

import { motion } from "framer-motion"
import { Clock } from "lucide-react"

export default function BusinessHours() {
  return (
    <section className="py-20 bg-[#1a1a2e]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto bg-[#2a1a4a] p-8 rounded-lg text-center"
        >
          <Clock className="w-12 h-12 text-[#00FFFF] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Business Hours</h2>
          <div className="text-gray-300">
            <p className="text-lg mb-2">Monday - Saturday</p>
            <p className="text-xl font-semibold text-[#00FFFF]">08:00 AM - 20:00 PM</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

