"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "SACAS",
      description: "Smart Access Control and Attendance System",
      image: "/images/projects/sacas-preview.png",
      link: "https://sacas.ditronics.co.tz/"
    },
    {
      title: "ADHIMKITCHEN",
      description: "Digital Kitchen Management Solution",
      image: "/images/projects/adhimkitchen-preview.png",
      link: "https://adhimkitchen.ditronics.co.tz/login"
    }
  ]

  return (
    <section className="py-12 bg-[#001219]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              <Link 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-xl overflow-hidden bg-[#001824] hover:bg-[#002030] transition-all duration-300"
              >
                <div className="aspect-[16/9] relative h-[240px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain p-4"
                    priority
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-lg mb-4">{project.description}</p>
                  <span className="text-[#00FFFF] text-lg flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More
                    <svg 
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

