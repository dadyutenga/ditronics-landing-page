import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-vibrant-purple"
        >
          About DITRONICS
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="DITRONICS Team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2 md:pl-8"
          >
            <p className="text-lg text-gray-300 mb-6">
              DITRONICS is a leading technology company specializing in electronics engineering, software development,
              digital services, and IT solutions. With a passion for innovation and a commitment to excellence, we
              deliver cutting-edge solutions that drive business growth and technological advancement.
            </p>
            <p className="text-lg text-gray-300">
              Our team of experts combines deep industry knowledge with technical expertise to solve complex challenges
              and create value for our clients across various sectors.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

