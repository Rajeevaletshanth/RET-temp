"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Building2, Eye, EyeOff, User, Briefcase, ChevronRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { useAuth } from "@/lib/auth"
import ConnectWalletButton from "@/components/connect-wallet-button"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [userType, setUserType] = useState("investor")
  const { login } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()

  // Get user type from URL if provided
  useEffect(() => {
    const type = searchParams.get("type")
    if (type && (type === "investor" || type === "builder")) {
      setUserType(type)
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Pass user type to login function
      await login(email, password, userType)

      // Redirect based on user type
      if (userType === "investor") {
        router.push("/dashboard/investor")
      } else if (userType === "builder") {
        router.push("/dashboard/builder")
      }
    } catch (error) {
      console.error("Login failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  }

  return (
    <div className="relative min-h-screen overflow-hidden real-bg">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-[10%] top-[20%] h-64 w-64 rounded-full real-bg-accent opacity-10 blur-3xl dark:opacity-5"
          animate={{
            x: [0, 30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute right-[15%] top-[30%] h-72 w-72 rounded-full bg-gray-800/10 blur-3xl dark:bg-gray-400/5"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto flex min-h-screen items-center justify-center px-4 py-16">
        <motion.div
          className="mx-auto w-full max-w-md space-y-8 rounded-lg border real-border bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:bg-gray-800/80"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="text-center" variants={itemVariants}>
            <Link href="/" className="inline-flex items-center gap-2 text-2xl font-bold">
              <Building2 className="h-8 w-8" />
              <span className="real-text">RealTokens</span>
            </Link>
            <h1 className="mt-6 text-3xl font-bold real-text">Welcome back</h1>
            <p className="mt-2 real-muted">Sign in to your account to continue</p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Tabs defaultValue={userType} onValueChange={setUserType} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="investor" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Investor
                </TabsTrigger>
                <TabsTrigger value="builder" className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  Builder
                </TabsTrigger>
              </TabsList>

              <TabsContent value="investor">
                <motion.div
                  className="mt-4 rounded-lg border real-border real-bg p-3"
                  variants={fadeIn}
                >
                  <p className="text-sm real-muted">
                    Sign in as an investor to browse properties and manage your investments.
                  </p>
                </motion.div>
              </TabsContent>

              <TabsContent value="builder">
                <motion.div
                  className="mt-4 rounded-lg border real-border real-bg p-3"
                  variants={fadeIn}
                >
                  <p className="text-sm real-muted">
                    Sign in as a builder to manage your properties and track tokenization progress.
                  </p>
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>

          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="real-text">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  className="h-12 rounded-md real-border bg-white focus:border-[#9b9b8c] focus:ring-[#9b9b8c] dark:bg-gray-800"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="real-text">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="h-12 rounded-md real-border bg-white focus:border-[#9b9b8c] focus:ring-[#9b9b8c] dark:bg-gray-800"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 real-accent" />
                    ) : (
                      <Eye className="h-4 w-4 real-accent" />
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
                    className="h-4 w-4 rounded real-border real-accent focus:ring-[#9b9b8c]"
                  />
                  <Label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none real-muted peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me
                  </Label>
                </div>
                <Link href="/forgot-password" className="text-sm font-medium real-accent hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Button
                type="submit"
                className="h-12 w-full rounded-none border border-[#9b9b8c] bg-[#9b9b8c] text-sm uppercase tracking-wider text-white transition-colors hover:bg-transparent hover:real-text dark:border-[#9b9b8c] dark:hover:text-white"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 real-accent dark:bg-gray-800">Or continue with</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <ConnectWalletButton className="w-full rounded-none border border-[#9b9b8c] bg-transparent text-sm uppercase tracking-wider real-text transition-colors hover:bg-[#9b9b8c] hover:text-white" />
          </motion.div>

          <motion.div className="text-center text-sm" variants={itemVariants}>
            Don&apos;t have an account?{" "}
            <Link href={`/signup?type=${userType}`} className="font-medium real-accent hover:underline">
              Sign up
            </Link>
          </motion.div>

          <motion.div className="mt-4 text-center text-sm" variants={itemVariants} whileHover={{ scale: 1.05 }}>
            <Link
              href="/admin-login"
              className="inline-flex items-center gap-1 font-medium real-muted hover:real-text"
            >
              Admin Login
              <ChevronRight className="h-3 w-3" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
