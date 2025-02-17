"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#001219]">
      {/* Background Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 grid grid-cols-6 gap-4 opacity-20">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-[#00FFFF] rounded-full"></div>
          ))}
        </div>
        <div className="absolute bottom-20 right-10 grid grid-cols-6 gap-4 opacity-20">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              We are pioneering
              <span className="text-[#00FFFF] block">Digital Innovation</span>
              with Cutting-Edge Solutions
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Electronics Engineering | Software Development | Digital Services | IT Solutions
            </p>
            <div className="flex space-x-4">
              <Button className="bg-[#FFD700] text-black hover:bg-[#FFC700]">Get Started</Button>
              <Button variant="outline" className="border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF] hover:text-black">
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border-2 border-[#00FFFF] transform -rotate-6">
                  <Image
                    src="/images/hero/services-1.jpg"
                    alt="DITRONICS Technologies Services"
                    width={300}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border-2 border-[#FFD700] transform rotate-6">
                  <Image
                    src="/images/hero/mindmap-1.jpg"
                    alt="DITRONICS Services Mind Map"
                    width={300}
                    height={400}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="mt-12 space-y-4">
                <div className="rounded-2xl overflow-hidden border-2 border-[#00FFFF] transform rotate-6">
                  <Image
                    src="/images/hero/services-2.jpg"
                    alt="DITRONICS Studios Services"
                    width={300}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border-2 border-[#FFD700] transform -rotate-6">
                  <Image
                    src="/images/hero/mindmap-2.jpg"
                    alt="DITRONICS Overview"
                    width={300}
                    height={400}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

