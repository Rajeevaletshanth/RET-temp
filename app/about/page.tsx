"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Building2, Globe, Heart, Shield, Target, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { fadeIn, staggerContainer } from "@/lib/motion-variants"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Co-Founder",
      bio: "Former real estate investment banker with 15+ years of experience in property development and finance.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Chen",
      role: "CTO & Co-Founder",
      bio: "Blockchain expert with previous experience at major tech companies and multiple successful Web3 startups.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Investment Officer",
      bio: "20+ years in commercial real estate with expertise in property valuation and portfolio management.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Jessica Williams",
      role: "Head of Legal & Compliance",
      bio: "Specialized in securities law and regulatory compliance for blockchain-based financial products.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "David Kim",
      role: "VP of Business Development",
      bio: "Former proptech executive with extensive network in real estate development and investment.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Priya Patel",
      role: "Head of Marketing",
      bio: "Digital marketing strategist with experience in fintech and real estate technology platforms.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const values = [
    {
      title: "Accessibility",
      description: "Making real estate investment accessible to everyone, regardless of wealth or background.",
      icon: Users,
    },
    {
      title: "Transparency",
      description: "Providing clear, honest information about all properties and investment opportunities.",
      icon: Shield,
    },
    {
      title: "Innovation",
      description: "Continuously improving our platform with cutting-edge blockchain technology.",
      icon: Target,
    },
    {
      title: "Sustainability",
      description: "Promoting environmentally and socially responsible real estate development.",
      icon: Heart,
    },
    {
      title: "Global Perspective",
      description: "Connecting investors and properties across borders for a truly global marketplace.",
      icon: Globe,
    },
    {
      title: "Integrity",
      description: "Operating with the highest ethical standards in all aspects of our business.",
      icon: Building2,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 py-20 text-white">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "translateZ(-10px) scale(2)",
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-900/90 to-slate-800/90" />

        <motion.div
          className="container relative z-20 mx-auto px-4 text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            variants={fadeIn("up", "tween", 0.2, 1)}
          >
            About RealTokens
          </motion.h1>
          <motion.p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300" variants={fadeIn("up", "tween", 0.4, 1)}>
            We're revolutionizing real estate investment through blockchain technology, making property ownership
            accessible, transparent, and efficient for everyone.
          </motion.p>
        </motion.div>
      </section>

      {/* Our Story */}
      <motion.section
        className="py-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div className="flex flex-col justify-center" variants={fadeIn("right", "tween", 0.2, 1)}>
              <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
              <div className="space-y-4">
                <p>
                  RealTokens was founded in 2021 by a team of real estate and blockchain experts who recognized the
                  potential to transform property investment through tokenization.
                </p>
                <p>
                  Traditional real estate investment has always been characterized by high barriers to entry,
                  illiquidity, and complex processes. We set out to change that by leveraging blockchain technology to
                  fractionate property ownership into digital tokens.
                </p>
                <p>
                  Since our launch, we've helped thousands of investors access real estate opportunities previously out
                  of reach, while providing property developers with innovative funding solutions.
                </p>
                <p>
                  Today, RealTokens is a leading platform for tokenized real estate, with properties across major
                  markets and a growing community of investors and builders.
                </p>
              </div>
            </motion.div>
            <motion.div className="flex items-center justify-center" variants={fadeIn("left", "tween", 0.2, 1)}>
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="RealTokens Story"
                width={500}
                height={500}
                className="rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Values */}
      <motion.section
        className="bg-slate-50 py-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 className="mb-12 text-center text-3xl font-bold" variants={fadeIn("up", "tween", 0.2, 1)}>
            Our Values
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeIn("up", "tween", 0.3 + index * 0.1, 1)}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                      <value.icon className="h-6 w-6 text-slate-700" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Team */}
      <motion.section
        className="py-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 className="mb-12 text-center text-3xl font-bold" variants={fadeIn("up", "tween", 0.2, 1)}>
            Meet Our Team
          </motion.h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "tween", 0.3 + index * 0.1, 1)}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="overflow-hidden rounded-lg border bg-card shadow-sm transition-all">
                  <div className="relative h-64 w-full">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-1 text-xl font-semibold">{member.name}</h3>
                    <p className="mb-3 text-sm font-medium text-muted-foreground">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Investors & Partners */}
      <motion.section
        className="bg-slate-50 py-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 className="mb-12 text-center text-3xl font-bold" variants={fadeIn("up", "tween", 0.2, 1)}>
            Our Investors & Partners
          </motion.h2>

          <motion.div className="grid gap-8 md:grid-cols-4" variants={fadeIn("up", "tween", 0.3, 1)}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="flex items-center justify-center p-6">
                <Image
                  src={`/placeholder.svg?height=80&width=160&text=Partner ${item}`}
                  alt={`Partner ${item}`}
                  width={160}
                  height={80}
                  className="opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="bg-slate-900 py-16 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Join Our Mission</h2>
          <p className="mx-auto mb-8 max-w-2xl text-slate-300">
            Be part of the real estate revolution. Whether you're an investor looking for opportunities or a developer
            seeking funding, RealTokens is here to help you succeed.
          </p>
          <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-200">
              Create Account
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Contact Us
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
