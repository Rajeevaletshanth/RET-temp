"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Building2, Eye, EyeOff, Shield, Lock } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/lib/auth"

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { loginAsAdmin } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await loginAsAdmin(email, password)
      router.push("/dashboard/admin")
    } catch (error) {
      console.error("Admin login failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      {/* 3D Floating Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-[20%] top-[30%] h-64 w-64 rounded-full bg-red-500/5 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute right-[25%] top-[40%] h-72 w-72 rounded-full bg-blue-500/5 blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto flex min-h-screen items-center justify-center px-4 py-16">
        <motion.div
          className="mx-auto w-full max-w-md space-y-8 rounded-2xl border border-gray-700 bg-gray-800/80 p-8 shadow-xl backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link href="/" className="inline-flex items-center gap-2 text-2xl font-bold text-white">
              <Building2 className="h-8 w-8" />
              <span>RealTokens</span>
            </Link>
            <div className="mt-6 flex justify-center">
              <motion.div 
                className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-700"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
              >
                <Shield className="h-10 w-10 text-red-500" />
              </motion.div>
            </div>
            <h1 className="mt-6 text-3xl font-bold text-white">Admin Login</h1>
            <p className="mt-2 text-gray-400">Secure access for platform administrators</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base text-gray-300">
                  Email
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@example.com"
                    className="h-12 rounded-xl border-gray-700 bg-gray-700/50 text-white placeholder:text-gray-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-base text-gray-300">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="h-12 rounded-xl border-gray-700 bg-gray-700/50 text-white placeholder:text-gray-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 text-gray-400 hover:bg-transparent hover:text-white"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                    <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-red-500 focus:ring-red-500"
                  />
                  <Label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none text-gray-300"
                  >
                    Remember me
                  </Label>
                </div>
                <Link href="/admin-reset-password" className="text-sm font-medium text-red-400 hover:text-red-300">
                  Forgot password?
                </Link>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="h-12 w-full rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white hover:from-red-700 hover:to-red-600"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Authenticating...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Lock className="mr-2 h-4 w-4" />
                      Secure Login
                    </div>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          <motion.div 
            className="text-center text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Return to{" "}
            <Link href="/" className="font-medium text-red-400 hover:text-red-300">
              Main Site
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
