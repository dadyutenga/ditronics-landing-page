"use client"

import { motion } from "framer-motion"
import { Cpu, Code, Palette, Video } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Cpu,
    title: "Electronics Engineering",
    description: "Cutting-edge hardware solutions and IoT implementations.",
    color: "#00FFFF",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions and application development.",
    color: "#FFD700",
  },
  {
    icon: Video,
    title: "Video Production",
    description: "Professional video and film production services.",
    color: "#00FFFF",
  },
  {
    icon: Palette,
    title: "Graphics Design",
    description: "Creative design solutions for all your branding needs.",
    color: "#FFD700",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#001219]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions in technology and digital production
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#002233] rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300"
              style={{ borderTop: `3px solid ${service.color}` }}
            >
              <service.icon className="w-12 h-12 mb-4" style={{ color: service.color }} />
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DITRONICS-STUDIOS-DOOR-GRAPHICS-PREVIEW.jpg-HK66RnJcmdCC048hTRhGW6ZSjzOaa1.jpeg"
              alt="Studio Services"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Studio Services</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-300">
                <span className="w-2 h-2 bg-[#00FFFF] rounded-full mt-2"></span>
                <span>Professional video and film production</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-300">
                <span className="w-2 h-2 bg-[#FFD700] rounded-full mt-2"></span>
                <span>Motion and static graphics designing</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-300">
                <span className="w-2 h-2 bg-[#00FFFF] rounded-full mt-2"></span>
                <span>Digital branding and content creation</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-300">
                <span className="w-2 h-2 bg-[#FFD700] rounded-full mt-2"></span>
                <span>Live streaming services</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

