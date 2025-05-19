"use client"

import { motion } from "framer-motion"

const amenities = [
  {
    category: "Interior Features",
    items: [
      "Gourmet chef's kitchen with premium appliances",
      "Custom Italian cabinetry and marble countertops",
      "Smart home automation system",
      "Floor-to-ceiling windows with motorized shades",
      "Custom lighting fixtures and recessed lighting",
      "Wine cellar with temperature control",
      "Home theater with state-of-the-art audio system",
    ],
  },
  {
    category: "Exterior & Grounds",
    items: [
      "Infinity edge swimming pool and spa",
      "Landscaped gardens with mature trees",
      "Outdoor kitchen and dining area",
      "Fire pit with lounge seating",
      "Private rooftop terrace with panoramic views",
      "Secure gated entrance with video monitoring",
      "Three-car garage with EV charging stations",
    ],
  },
  {
    category: "Building Services",
    items: [
      "24-hour concierge and security",
      "Dedicated property management",
      "Valet parking for guests",
      "Private fitness center with yoga studio",
      "Spa treatment rooms",
      "Business center and conference room",
      "Pet grooming services",
    ],
  },
]

export default function AmenitiesList() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="grid gap-12 md:grid-cols-3">
      {amenities.map((category, categoryIndex) => (
        <motion.div
          key={categoryIndex}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="flex flex-col"
        >
          <h3 className="font-serif text-xl text-[#3c3c3c]">{category.category}</h3>
          <div className="mt-2 h-px w-16 bg-[#9b9b8c]"></div>
          <ul className="mt-6 space-y-4">
            {category.items.map((item, itemIndex) => (
              <motion.li key={itemIndex} variants={itemVariants} className="flex items-start">
                <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-[#9b9b8c]"></span>
                <span className="font-sans text-[#5c5c5c]">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  )
}
