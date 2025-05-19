"use client"

import { motion } from "framer-motion"
import { Building2, Coins, FileText, Landmark, Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { fadeIn, staggerContainer } from "@/lib/motion-variants"

export default function HowItWorksPage() {
  const steps = [
    {
      title: "Create an Account",
      description: "Sign up and complete the KYC/AML verification process to get started.",
      icon: FileText,
    },
    {
      title: "Connect Your Wallet",
      description: "Link your Web3 wallet to enable blockchain transactions.",
      icon: Wallet,
    },
    {
      title: "Browse Properties",
      description: "Explore our curated selection of tokenized real estate opportunities.",
      icon: Building2,
    },
    {
      title: "Purchase Tokens",
      description: "Invest in property tokens representing fractional ownership.",
      icon: Coins,
    },
    {
      title: "Manage Your Portfolio",
      description: "Track performance, receive distributions, and trade tokens on the secondary market.",
      icon: Landmark,
    },
  ]

  const benefits = [
    {
      title: "Fractional Ownership",
      description: "Invest in high-value properties with as little as $100.",
    },
    {
      title: "Liquidity",
      description: "Trade your tokens on secondary markets without lengthy real estate transactions.",
    },
    {
      title: "Diversification",
      description: "Spread your investment across multiple properties and locations.",
    },
    {
      title: "Passive Income",
      description: "Receive regular distributions from rental income and property appreciation.",
    },
    {
      title: "Transparency",
      description: "All transactions and ownership records are stored on the blockchain.",
    },
    {
      title: "Lower Fees",
      description: "Eliminate intermediaries and reduce traditional real estate transaction costs.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold">How It Works</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          RealTokens makes real estate investing accessible to everyone through blockchain technology and tokenization.
          Learn how our platform works and start your investment journey today.
        </p>
      </motion.div>

      {/* How It Works Steps */}
      <motion.div
        className="mb-24"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.h2 className="mb-12 text-center text-3xl font-bold" variants={fadeIn("up", "tween", 0.2, 1)}>
          The Investment Process
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-slate-200 md:block" />

          {/* Steps */}
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
                variants={fadeIn(index % 2 === 0 ? "right" : "left", "tween", 0.2 + index * 0.1, 1)}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <step.icon className="h-8 w-8" />
                </div>

                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Benefits */}
      <motion.div
        className="mb-24"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.h2 className="mb-12 text-center text-3xl font-bold" variants={fadeIn("up", "tween", 0.2, 1)}>
          Benefits of Tokenized Real Estate
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={fadeIn("up", "tween", 0.2 + index * 0.1, 1)}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        className="mb-24"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.h2 className="mb-12 text-center text-3xl font-bold" variants={fadeIn("up", "tween", 0.2, 1)}>
          Frequently Asked Questions
        </motion.h2>

        <div className="mx-auto max-w-3xl space-y-6">
          {[
            {
              question: "What is real estate tokenization?",
              answer:
                "Real estate tokenization is the process of converting ownership rights of a property into digital tokens on a blockchain. Each token represents a fractional ownership stake in the underlying asset.",
            },
            {
              question: "How do I earn returns on my investment?",
              answer:
                "Investors can earn returns in two ways: through regular distributions of rental income (similar to dividends) and through capital appreciation when the property value increases or when selling tokens on the secondary market.",
            },
            {
              question: "Is my investment secure?",
              answer:
                "Yes. All property ownership is legally structured through regulated entities, and the tokenization process is secured by blockchain technology. Additionally, all properties undergo thorough due diligence and valuation by our team of experts.",
            },
            {
              question: "What are the minimum investment amounts?",
              answer:
                "The minimum investment varies by property but typically starts at $100, allowing investors to build a diversified portfolio with minimal capital.",
            },
            {
              question: "How is the property managed?",
              answer:
                "Each property is managed by professional property management companies that handle day-to-day operations, tenant relations, maintenance, and financial reporting.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              className="rounded-lg border p-6"
              variants={fadeIn("up", "tween", 0.2 + index * 0.1, 1)}
            >
              <h3 className="mb-2 text-lg font-semibold">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="rounded-xl bg-slate-900 p-12 text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-4 text-3xl font-bold">Ready to Start Investing?</h2>
        <p className="mx-auto mb-8 max-w-2xl">
          Join thousands of investors who are already diversifying their portfolios with tokenized real estate.
        </p>
        <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-200">
            Create Account
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
            Browse Properties
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
