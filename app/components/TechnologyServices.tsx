"use client"

import { motion } from "framer-motion"

const services = [
  {
    title: "Automation and Embedded Systems",
    items: [
      "Internet of Things (IoT)",
      "Wireless sensor network systems",
      "WSN and DSP",
      "Artificial Intelligence systems (AI)",
      "Machine learning systems (ML)",
      "WDA",
      "Mechatronics",
    ],
  },
  {
    title: "Software and Application Development",
    items: ["Content management system (CMS)", "Website development", "Tailor-made software development"],
  },
  {
    title: "Digital Electronics",
    items: ["Components and Devices", "Online Shop", "Physical Shop"],
  },
  {
    title: "Electronics Repair",
    items: ["Configuring and Maintenance", "Training and Research", "Development"],
  },
]

export default function TechnologyServices() {
  return (
    <section id="tech-services" className="py-20 bg-[#1a1a2e]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#00FFFF]"
        >
          Technology Services
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#2a1a4a] p-6 rounded-lg shadow-lg hover:shadow-[#00FFFF]/20 transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="text-gray-300 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#00FFFF] rounded-full"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

