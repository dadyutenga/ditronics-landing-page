"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const services = {
  videoProduction: [
    "Wedding ceremony",
    "Film production",
    "Business/brand documentary",
    "Commercial advertisements",
    "Family documentary",
    "Documentary films",
    "Corporate events",
    "Drone footages",
    "Interview",
  ],
  graphicsDesign: [
    "Business cards",
    "ID cards",
    "Calendars",
    "Stickers",
    "Pull-ups",
    "Brochures",
    "Logo",
    "Flyer",
    "Banner",
  ],
  digitalServices: [
    "Digital branding and managing",
    "Social media management",
    "Website development",
    "Live streaming services",
    "Motion graphics production",
    "Animation production",
    "Photoshooting",
  ],
}

export default function StudioServices() {
  return (
    <section id="studio-services" className="py-20 bg-[#2a1a4a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/INSTARGRAM-DITRONICS-STUDIOS-OFFICIAL-LOGO-snwMB1LGuZT8jJ6tzwjfZnUQovETZr.png"
              alt="DITRONICS Studios"
              width={100}
              height={100}
              className="mx-auto"
            />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#00FFFF] mb-4"
          >
            Studio Services
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1a1a2e] p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Video Production</h3>
            <ul className="space-y-2">
              {services.videoProduction.map((item, index) => (
                <li key={index} className="text-gray-300 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#00FFFF] rounded-full"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1a1a2e] p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Graphics Design</h3>
            <ul className="space-y-2">
              {services.graphicsDesign.map((item, index) => (
                <li key={index} className="text-gray-300 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#00FFFF] rounded-full"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1a1a2e] p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Digital Services</h3>
            <ul className="space-y-2">
              {services.digitalServices.map((item, index) => (
                <li key={index} className="text-gray-300 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#00FFFF] rounded-full"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

