"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

// Sample properties data
const properties = [
  {
    id: "1",
    title: "Luxury Apartment Complex",
    location: "Miami, FL",
    tokenPrice: 100,
    totalTokens: 1000,
    soldTokens: 650,
    imageUrl: "/placeholder.svg?height=300&width=400",
    percentFunded: 65,
  },
  {
    id: "2",
    title: "Commercial Office Building",
    location: "New York, NY",
    tokenPrice: 250,
    totalTokens: 2000,
    soldTokens: 1200,
    imageUrl: "/placeholder.svg?height=300&width=400",
    percentFunded: 60,
  },
  {
    id: "3",
    title: "Residential Development",
    location: "Austin, TX",
    tokenPrice: 75,
    totalTokens: 5000,
    soldTokens: 2500,
    imageUrl: "/placeholder.svg?height=300&width=400",
    percentFunded: 50,
  },
]

export default function FeaturedProperties() {
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid gap-8 md:grid-cols-3"
    >
      {properties.map((property) => (
        <motion.div
          key={property.id}
          variants={itemVariants}
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
          className="group overflow-hidden rounded-lg border border-[#e8e6e1] bg-white shadow-sm"
        >
          <div className="relative h-64 w-full overflow-hidden">
            <Image
              src={property.imageUrl || "/placeholder.svg"}
              alt={property.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-4 left-4 rounded-full bg-white px-4 py-1 text-sm font-medium text-[#3c3c3c]">
              ${property.tokenPrice} per token
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-[#3c3c3c]">{property.title}</h3>
            <p className="mt-2 text-[#5c5c5c]">{property.location}</p>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[#5c5c5c]">Funding Progress</span>
                <span className="font-medium text-[#3c3c3c]">{property.percentFunded}%</span>
              </div>
              <Progress value={property.percentFunded} className="h-2 bg-[#e8e6e1]" />
              <p className="text-xs text-[#9b9b8c]">
                {property.soldTokens.toLocaleString()} / {property.totalTokens.toLocaleString()} tokens sold
              </p>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <Button
                asChild
                className="rounded-none border border-[#9b9b8c] bg-transparent px-4 py-2 text-xs uppercase tracking-wider text-[#3c3c3c] transition-colors hover:bg-[#9b9b8c] hover:text-white"
              >
                <Link href={`/properties/${property.id}`}>View Details</Link>
              </Button>
              <Button
                asChild
                className="rounded-none border border-[#9b9b8c] bg-[#9b9b8c] px-4 py-2 text-xs uppercase tracking-wider text-white transition-colors hover:bg-transparent hover:text-[#3c3c3c]"
              >
                <Link href={`/properties/${property.id}`}>
                  Invest
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
