import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

const reasons = [
  "Expertise across multiple tech domains",
  "Innovative solutions tailored to your needs",
  "Proven track record of successful projects",
  "Dedicated support and maintenance",
  "Cutting-edge technology and methodologies",
  "Commitment to quality and client satisfaction",
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-neon-green"
        >
          Why Choose DITRONICS
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-3 bg-gray-900 p-6 rounded-lg shadow-md"
            >
              <CheckCircle className="h-6 w-6 text-electric-blue flex-shrink-0" />
              <p className="text-gray-300">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

