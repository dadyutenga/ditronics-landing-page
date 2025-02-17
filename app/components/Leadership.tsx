"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Twitter } from "lucide-react"

export default function Leadership() {
  return (
    <section className="py-20 bg-[#001824]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Leadership</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Meet the visionaries behind DITRONICS who are driving innovation and excellence in technology.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative w-48 h-48 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00FFFF] via-[#00FF00] to-[#FFD700] animate-pulse" />
              <div className="absolute inset-1 rounded-full overflow-hidden bg-[#002233]">
                <Image
                  src="/images/team/dr-haji-fimbombaya.jpg"
                  alt="Dr. Haji Fimbombaya"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Dr. Haji Fimbombaya</h3>
              <p className="text-[#00FFFF] mb-4">Chief Executive Officer</p>
              <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                A visionary leader with over 10 years of experience in Computer Engineering and Telecom Engineering. 
                Driving DITRONICS towards excellence in digital solutions and technological advancement.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-[#00FFFF] hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-[#00FFFF] hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

