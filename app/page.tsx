"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Building2, ChevronDown, Coins, Shield, Users } from 'lucide-react'

import { Button } from "@/components/ui/button"
import FeaturedProperties from "@/components/featured-properties"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function HomePage() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  const scrollToContent = () => {
    const contentSection = document.getElementById("featured")
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="relative bg-[#f8f7f4] dark:bg-gray-900">
      {/* Navbar - transparent on home page */}
      <Navbar transparent={true} />
      
      {/* Hero Section */}
      <div ref={targetRef} className="relative h-screen w-full overflow-hidden">
        <motion.div style={{ opacity, scale, y }} className="absolute inset-0 h-full w-full">
          <Image
            src="/images/cityscape.jpg?height=1080&width=1920&text=Real+Estate+Tokenization"
            alt="Real Estate Tokenization"
            fill
            priority
            className="object-cover"
          />
          <div className="hero-overlay" />
        </motion.div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold tracking-wide md:text-6xl lg:text-7xl"
          >
            RealTokens
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 max-w-xl text-lg font-light tracking-wide md:text-xl"
          >
            Invest in premium real estate properties through blockchain technology
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <Button
              asChild
              className="rounded-none border border-white bg-transparent px-8 py-3 text-sm uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
            >
              <Link href="/properties">Explore Properties</Link>
            </Button>
            <Button
              asChild
              className="rounded-none border border-white bg-white px-8 py-3 text-sm uppercase tracking-widest text-black transition-colors hover:bg-transparent hover:text-white"
            >
              <Link href="/signup">Create Account</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={scrollToContent}
        >
          <ChevronDown className="h-10 w-10 animate-bounce text-white" />
        </motion.div>
      </div>

      {/* Featured Properties Section */}
      <section id="featured" className="section-padding">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold text-[#3c3c3c] dark:text-white md:text-4xl">Featured Properties</h2>
            <div className="mt-2 mx-auto h-px w-24 bg-[#9b9b8c]"></div>
            <p className="mt-8 text-lg leading-relaxed text-[#5c5c5c] dark:text-gray-300">
              Discover and invest in tokenized real estate properties from around the world
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-16"
          >
            <FeaturedProperties />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button
              asChild
              className="rounded-none border border-[#9b9b8c] bg-transparent px-8 py-3 text-sm uppercase tracking-widest text-[#3c3c3c] dark:text-white transition-colors hover:bg-[#9b9b8c] hover:text-white"
            >
              <Link href="/properties">
                View All Properties
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#f0efe9] dark:bg-gray-800 section-padding">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold text-[#3c3c3c] dark:text-white md:text-4xl">How It Works</h2>
            <div className="mt-2 mx-auto h-px w-24 bg-[#9b9b8c]"></div>
            <p className="mt-8 text-lg leading-relaxed text-[#5c5c5c] dark:text-gray-300">
              RealTokens makes real estate investing accessible to everyone through blockchain technology and
              tokenization
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-16"
          >
            <HowItWorks />
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold text-[#3c3c3c] dark:text-white md:text-4xl">Benefits of Tokenization</h2>
            <div className="mt-2 mx-auto h-px w-24 bg-[#9b9b8c]"></div>
            <p className="mt-8 text-lg leading-relaxed text-[#5c5c5c] dark:text-gray-300">
              Discover the advantages of investing in tokenized real estate properties
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-16 grid gap-8 md:grid-cols-3"
          >
            <div className="flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#e8e6e1] dark:bg-gray-700">
                <Coins className="h-8 w-8 text-[#9b9b8c]" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-[#3c3c3c] dark:text-white">Fractional Ownership</h3>
              <p className="mt-4 text-[#5c5c5c] dark:text-gray-300">
                Invest in high-value properties with as little as $100, making real estate accessible to everyone.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#e8e6e1] dark:bg-gray-700">
                <Building2 className="h-8 w-8 text-[#9b9b8c]" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-[#3c3c3c] dark:text-white">Portfolio Diversification</h3>
              <p className="mt-4 text-[#5c5c5c] dark:text-gray-300">
                Spread your investment across multiple properties and locations to minimize risk.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#e8e6e1] dark:bg-gray-700">
                <Shield className="h-8 w-8 text-[#9b9b8c]" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-[#3c3c3c] dark:text-white">Blockchain Security</h3>
              <p className="mt-4 text-[#5c5c5c] dark:text-gray-300">
                All transactions and ownership records are stored on the blockchain, ensuring transparency and security.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#f0efe9] dark:bg-gray-800 section-padding">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold text-[#3c3c3c] dark:text-white md:text-4xl">What Our Investors Say</h2>
            <div className="mt-2 mx-auto h-px w-24 bg-[#9b9b8c]"></div>
            <p className="mt-8 text-lg leading-relaxed text-[#5c5c5c] dark:text-gray-300">
              Hear from our community of investors about their experience with RealTokens
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-16"
          >
            <Testimonials />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#3c3c3c] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold md:text-4xl"
          >
            Ready to Start Your Investment Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-2xl text-lg text-white/80"
          >
            Join thousands of investors who are already diversifying their portfolios with tokenized real estate.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10 flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <Button
              asChild
              className="rounded-none border border-white bg-white px-8 py-3 text-sm uppercase tracking-widest text-[#3c3c3c] transition-colors hover:bg-transparent hover:text-white"
            >
              <Link href="/signup">Create Account</Link>
            </Button>
            <Button
              asChild
              className="rounded-none border border-white bg-transparent px-8 py-3 text-sm uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-[#3c3c3c]"
            >
              <Link href="/properties">Browse Properties</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold text-[#3c3c3c] dark:text-white md:text-4xl">Who We Serve</h2>
            <div className="mt-2 mx-auto h-px w-24 bg-[#9b9b8c]"></div>
            <p className="mt-8 text-lg leading-relaxed text-[#5c5c5c] dark:text-gray-300">
              RealTokens provides solutions for both investors and property developers
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-16 grid gap-8 md:grid-cols-2"
          >
            <div className="group overflow-hidden rounded-lg border border-[#e8e6e1] dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e8e6e1] dark:bg-gray-700">
                <Users className="h-8 w-8 text-[#9b9b8c]" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#3c3c3c] dark:text-white">For Investors</h3>
              <p className="mt-4 text-[#5c5c5c] dark:text-gray-300">
                Access premium real estate investments with low entry barriers. Diversify your portfolio with fractional
                ownership in high-quality properties worldwide.
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-[#9b9b8c]"></span>
                  <span className="text-[#5c5c5c] dark:text-gray-300">Start investing with as little as $100</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-[#9b9b8c]"></span>
                  <span className="text-[#5c5c5c] dark:text-gray-300">Receive regular distributions from rental income</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-[#9b9b8c]"></span>
                  <span className="text-[#5c5c5c] dark:text-gray-300">Trade tokens on secondary markets for liquidity</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button
                  asChild
                  className="rounded-none border border-[#9b9b8c] bg-transparent px-6 py-2 text-sm uppercase tracking-widest text-[#3c3c3c] dark:text-white transition-colors hover:bg-[#9b9b8c] hover:text-white"
                >
                  <Link href="/login?type=investor">Investor Login</Link>
                </Button>
              </div>
            </div>

            <div className="group overflow-hidden rounded-lg border border-[#e8e6e1] dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e8e6e1] dark:bg-gray-700">
                <Building2 className="h-8 w-8 text-[#9b9b8c]" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#3c3c3c] dark:text-white">For Builders</h3>
              <p className="mt-4 text-[#5c5c5c] dark:text-gray-300">
                Unlock new funding opportunities for your real estate projects through tokenization. Raise capital
                faster, reach more investors, and streamline your development process.
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-[#9b9b8c]"></span>
                  <span className="text-[#5c5c5c] dark:text-gray-300">Access global pool of investors</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-[#9b9b8c]"></span>
                  <span className="text-[#5c5c5c] dark:text-gray-300">Simplified property listing and token issuance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-[#9b9b8c]"></span>
                  <span className="text-[#5c5c5c] dark:text-gray-300">Flexible funding options based on your needs</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button
                  asChild
                  className="rounded-none border border-[#9b9b8c] bg-transparent px-6 py-2 text-sm uppercase tracking-widest text-[#3c3c3c] dark:text-white transition-colors hover:bg-[#9b9b8c] hover:text-white"
                >
                  <Link href="/login?type=builder">Builder Login</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
