"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "RealTokens has completely transformed how I invest in real estate. The platform is intuitive, and I've seen consistent returns on my investments.",
    author: "Sarah Johnson",
    role: "Investor since 2022",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "As a first-time real estate investor, I was looking for an accessible way to get started. RealTokens made it simple and straightforward.",
    author: "Michael Chen",
    role: "Investor since 2023",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "The transparency and security of blockchain technology combined with real estate is brilliant. I've recommended RealTokens to all my colleagues.",
    author: "David Rodriguez",
    role: "Investor since 2021",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function Testimonials() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="rounded-lg border border-[#e8e6e1] bg-white p-8 shadow-sm"
        >
          <div className="mb-6 text-lg italic text-[#5c5c5c]">"{testimonial.quote}"</div>
          <div className="flex items-center">
            <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.author}
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-[#3c3c3c]">{testimonial.author}</p>
              <p className="text-sm text-[#9b9b8c]">{testimonial.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
