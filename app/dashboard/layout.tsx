"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/login")
    }
  }, [user,  router])

  // if (loading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-background">
  //       <div className="text-center">
  //         <div className="w-16 h-16 border-4 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
  //         <p className="text-muted-foreground">Loading...</p>
  //       </div>
  //     </div>
  //   )
  // }

  if (!user) {
    return null // Will redirect in the useEffect
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* <Navbar /> */}
      <main className="flex-grow">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {children}
        </motion.div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}
