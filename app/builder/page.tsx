"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Building2, CheckCircle2, FileText, Landmark, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { fadeIn, staggerContainer } from "@/lib/motion-variants"

export default function BuilderPage() {
  const benefits = [
    {
      title: "Access to Capital",
      description: "Raise funds from a global pool of investors without traditional financing constraints.",
      icon: Landmark,
    },
    {
      title: "Streamlined Process",
      description: "Simplified property listing and token issuance through our intuitive platform.",
      icon: FileText,
    },
    {
      title: "Broader Investor Base",
      description: "Reach thousands of investors interested in real estate opportunities.",
      icon: Users,
    },
    {
      title: "Flexible Funding",
      description: "Tokenize entire properties or specific portions based on your funding needs.",
      icon: Building2,
    },
  ]

  const testimonials = [
    {
      quote:
        "RealTokens helped us raise capital for our Miami development in record time. The platform's reach and efficiency exceeded our expectations.",
      author: "Sarah Johnson",
      role: "CEO, Miami Development Co.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The tokenization process was seamless, and we were able to attract investors from around the world. This is the future of real estate development financing.",
      author: "Michael Chen",
      role: "Founder, Urban Living Properties",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "As a mid-sized developer, traditional financing was always a challenge. RealTokens has completely transformed how we fund our projects.",
      author: "David Rodriguez",
      role: "Director, Skyline Developments",
      image: "/placeholder.svg?height=80&width=80",
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
            For Real Estate Developers & Builders
          </motion.h1>
          <motion.p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300" variants={fadeIn("up", "tween", 0.4, 1)}>
            Unlock new funding opportunities for your real estate projects through tokenization. Raise capital faster,
            reach more investors, and streamline your development process.
          </motion.p>
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
            variants={fadeIn("up", "tween", 0.6, 1)}
          >
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-200">
              Apply as a Builder
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <motion.section
        className="py-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 className="mb-12 text-center text-3xl font-bold" variants={fadeIn("up", "tween", 0.2, 1)}>
            Benefits for Builders
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md"
                variants={fadeIn("up", "tween", 0.3 + index * 0.1, 1)}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                  <benefit.icon className="h-6 w-6 text-slate-700" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        className="bg-slate-50 py-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 className="mb-12 text-center text-3xl font-bold" variants={fadeIn("up", "tween", 0.2, 1)}>
            How It Works for Builders
          </motion.h2>

          <Tabs defaultValue="apply" className="mx-auto max-w-4xl">
            <motion.div className="mb-8 flex justify-center" variants={fadeIn("up", "tween", 0.3, 1)}>
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="apply">Apply</TabsTrigger>
                <TabsTrigger value="list">List</TabsTrigger>
                <TabsTrigger value="fund">Fund</TabsTrigger>
              </TabsList>
            </motion.div>

            <TabsContent value="apply">
              <motion.div className="grid gap-8 md:grid-cols-2" variants={fadeIn("right", "tween", 0.4, 1)}>
                <div className="flex flex-col justify-center">
                  <h3 className="mb-4 text-2xl font-semibold">1. Apply as a Builder</h3>
                  <p className="mb-4 text-muted-foreground">
                    Submit your application with details about your company, track record, and the types of projects you
                    develop. Our team will review your application and schedule a consultation to discuss your needs.
                  </p>
                  <ul className="mb-6 space-y-2">
                    {[
                      "Complete builder application form",
                      "Provide company documentation",
                      "Share previous project portfolio",
                      "Verify developer credentials",
                      "Schedule onboarding call",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-fit">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Apply as a Builder"
                    width={400}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="list">
              <motion.div className="grid gap-8 md:grid-cols-2" variants={fadeIn("right", "tween", 0.4, 1)}>
                <div className="flex flex-col justify-center">
                  <h3 className="mb-4 text-2xl font-semibold">2. List Your Property</h3>
                  <p className="mb-4 text-muted-foreground">
                    Once approved, you can list your property on our platform. Provide detailed information, financial
                    projections, and set your funding goals. Our team will help structure the token offering for maximum
                    appeal.
                  </p>
                  <ul className="mb-6 space-y-2">
                    {[
                      "Submit property details and documentation",
                      "Work with our team on token structure",
                      "Set funding goals and timeline",
                      "Prepare marketing materials",
                      "Complete legal compliance review",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-fit">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="List Your Property"
                    width={400}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="fund">
              <motion.div className="grid gap-8 md:grid-cols-2" variants={fadeIn("right", "tween", 0.4, 1)}>
                <div className="flex flex-col justify-center">
                  <h3 className="mb-4 text-2xl font-semibold">3. Fund Your Project</h3>
                  <p className="mb-4 text-muted-foreground">
                    Launch your property token offering to our network of investors. Track funding progress in real-time
                    and receive funds as investment milestones are reached. Our platform handles all token issuance and
                    distribution.
                  </p>
                  <ul className="mb-6 space-y-2">
                    {[
                      "Launch token offering to investors",
                      "Monitor funding progress in real-time",
                      "Receive funds based on agreed milestones",
                      "Provide regular updates to investors",
                      "Complete project with ongoing support",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-fit">
                    View Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Fund Your Project"
                    width={400}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="py-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 className="mb-12 text-center text-3xl font-bold" variants={fadeIn("up", "tween", 0.2, 1)}>
            What Builders Say
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="rounded-lg border bg-card p-6 shadow-sm"
                variants={fadeIn("up", "tween", 0.3 + index * 0.1, 1)}
              >
                <div className="mb-4 text-lg italic text-muted-foreground">"{testimonial.quote}"</div>
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
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
          <h2 className="mb-4 text-3xl font-bold">Ready to Tokenize Your Property?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-slate-300">
            Join leading developers who are already using RealTokens to fund their projects. Apply today and
            revolutionize how you finance your real estate developments.
          </p>
          <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-200">
              Apply as a Builder
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
