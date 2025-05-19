"use client"

import { motion } from "framer-motion"
import { Building2, Coins, Wallet } from 'lucide-react'

export default function HowItWorks() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="rounded-lg bg-white p-8 shadow-sm"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e8e6e1] text-[#9b9b8c]">
          <Building2 className="h-6 w-6" />
        </div>
        <h3 className="mt-6 text-xl font-bold text-[#3c3c3c]">1. Browse Properties</h3>
        <p className="mt-4 text-[#5c5c5c]">
          Explore our curated selection of premium real estate investment opportunities from around the world.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="rounded-lg bg-white p-8 shadow-sm"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e8e6e1] text-[#9b9b8c]">
          <Coins className="h-6 w-6" />
        </div>
        <h3 className="mt-6 text-xl font-bold text-[#3c3c3c]">2. Purchase Tokens</h3>
        <p className="mt-4 text-[#5c5c5c]">
          Buy fractional ownership tokens representing your stake in the property with minimal investment.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="rounded-lg bg-white p-8 shadow-sm"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e8e6e1] text-[#9b9b8c]">
          <Wallet className="h-6 w-6" />
        </div>
        <h3 className="mt-6 text-xl font-bold text-[#3c3c3c]">3. Earn Returns</h3>
        <p className="mt-4 text-[#5c5c5c]">
          Receive regular distributions from rental income and benefit from property value appreciation.
        </p>
      </motion.div>
    </div>
  )
}
