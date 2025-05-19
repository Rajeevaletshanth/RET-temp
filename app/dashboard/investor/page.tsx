"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useAuth } from "@/lib/auth"
import { ArrowUpRight, Building, DollarSign, LineChart, PieChart, Wallet } from 'lucide-react'
import Link from "next/link"

// Mock data - in a real app, this would come from your API
const mockInvestments = [
  {
    id: 1,
    propertyName: "Skyline Apartments",
    location: "San Francisco, CA",
    investmentAmount: 25000,
    tokenCount: 250,
    currentValue: 27500,
    roi: 10,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    propertyName: "Riverside Complex",
    location: "Austin, TX",
    investmentAmount: 15000,
    tokenCount: 150,
    currentValue: 16200,
    roi: 8,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    propertyName: "Urban Heights",
    location: "New York, NY",
    investmentAmount: 30000,
    tokenCount: 300,
    currentValue: 33600,
    roi: 12,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function InvestorDashboard() {
  const { user } = useAuth()
  const [totalInvestment, setTotalInvestment] = useState(0)
  const [totalValue, setTotalValue] = useState(0)
  const [totalROI, setTotalROI] = useState(0)

  useEffect(() => {
    // Calculate totals
    const investment = mockInvestments.reduce((sum, inv) => sum + inv.investmentAmount, 0)
    const value = mockInvestments.reduce((sum, inv) => sum + inv.currentValue, 0)
    const roi = ((value - investment) / investment) * 100

    setTotalInvestment(investment)
    setTotalValue(value)
    setTotalROI(roi)
  }, [])

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
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Welcome back, {user?.name || "Investor"}
            </h1>
            <p className="text-xl text-gray-200 mb-8">Manage your real estate investment portfolio</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
          >
            <motion.div variants={itemVariants}>
              <Card className="bg-white/10 backdrop-blur-sm border-0 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-lg">
                    <DollarSign className="mr-2 h-5 w-5" />
                    Total Investment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">${totalInvestment.toLocaleString()}</div>
                  <p className="text-gray-300 text-sm mt-1">Across {mockInvestments.length} properties</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-white/10 backdrop-blur-sm border-0 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-lg">
                    <Wallet className="mr-2 h-5 w-5" />
                    Current Value
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">${totalValue.toLocaleString()}</div>
                  <p className="text-gray-300 text-sm mt-1">Updated today</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-white/10 backdrop-blur-sm border-0 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-lg">
                    <LineChart className="mr-2 h-5 w-5" />
                    Total ROI
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">+{totalROI.toFixed(2)}%</div>
                  <p className="text-gray-300 text-sm mt-1">Since initial investment</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="portfolio" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="portfolio">My Portfolio</TabsTrigger>
            <TabsTrigger value="market">Market</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
          </TabsList>

          <TabsContent value="portfolio">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {mockInvestments.map((investment) => (
                <motion.div key={investment.id} variants={itemVariants}>
                  <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={investment.image || "/placeholder.svg"}
                        alt={investment.propertyName}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{investment.propertyName}</CardTitle>
                      <CardDescription>{investment.location}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Investment</span>
                            <span className="font-medium">${investment.investmentAmount.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Current Value</span>
                            <span className="font-medium">${investment.currentValue.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">ROI</span>
                            <span className="font-medium text-green-600 dark:text-green-400">+{investment.roi}%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Tokens</span>
                            <span className="font-medium">{investment.tokenCount}</span>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Performance</span>
                            <span className="font-medium text-green-600 dark:text-green-400">Good</span>
                          </div>
                          <Progress value={70} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t bg-muted/20">
                      <Link href={`/properties/${investment.id}`} className="w-full">
                        <Button variant="ghost" className="w-full justify-between">
                          View Details
                          <ArrowUpRight size={16} />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="market">
            <div className="text-center py-12">
              <Building size={64} className="mx-auto text-muted-foreground mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-2">Explore New Properties</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Discover new investment opportunities in our marketplace
              </p>
              <Button asChild>
                <Link href="/properties">Browse Properties</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="transactions">
            <div className="text-center py-12">
              <PieChart size={64} className="mx-auto text-muted-foreground mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-2">Transaction History</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                View your complete transaction history and statements
              </p>
              <Button variant="outline">Download Statement</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
