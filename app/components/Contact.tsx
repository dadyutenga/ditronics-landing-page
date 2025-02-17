"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#001824]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-[#002233] rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Get In Touch</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input type="text" placeholder="Your Name" className="bg-[#001219] border-gray-700 text-white" />
              <Input type="email" placeholder="Your Email" className="bg-[#001219] border-gray-700 text-white" />
            </div>
            <Input type="text" placeholder="Subject" className="bg-[#001219] border-gray-700 text-white" />
            <Textarea placeholder="Your Message" className="bg-[#001219] border-gray-700 text-white" rows={6} />
            <Button className="w-full bg-[#FFD700] text-black hover:bg-[#FFC700]">Send Message</Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

