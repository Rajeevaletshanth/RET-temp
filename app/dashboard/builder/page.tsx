"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/lib/auth"
import { ArrowUpRight, Building, DollarSign, Plus, Users } from 'lucide-react'
import Link from "next/link"

// Mock data - in a real app, this would come from your API
const mockProperties = [
  {
    id: 1,
    name: "Skyline Apartments",
    location: "San Francisco, CA",
    fundingGoal: 2500000,
    fundingRaised: 1750000,
    investorCount: 42,
    status: "active",
    completionDate: "2025-06-30",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Riverside Complex",
    location: "Austin, TX",
    fundingGoal: 1800000,
    fundingRaised: 1800000,
    investorCount: 36,
    status: "funded",
    completionDate: "2024-12-15",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Urban Heights",
    location: "New York, NY",
    fundingGoal: 3200000,
    fundingRaised: 960000,
    investorCount: 18,
    status: "active",
    completionDate: "2025-09-20",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function BuilderDashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("properties");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-blue-500">Active Funding</Badge>;
      case "funded":
        return <Badge className="bg-green-500">Fully Funded</Badge>;
      case "completed":
        return <Badge className="bg-purple-500">Completed</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  const totalFundingGoal = mockProperties.reduce((sum, prop) => sum + prop.fundingGoal, 0);
  const totalFundingRaised = mockProperties.reduce((sum, prop) => sum + prop.fundingRaised, 0);
  const totalInvestors = mockProperties.reduce((sum, prop) => sum + prop.investorCount, 0);

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
              Welcome back, {user?.name || "Builder"}
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Manage your property development projects
            </p>
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
                    <Building className="mr-2 h-5 w-5" />
                    Properties
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{mockProperties.length}</div>
                  <p className="text-gray-300 text-sm mt-1">Active development projects</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-white/10 backdrop-blur-sm border-0 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-lg">
                    <DollarSign className="mr-2 h-5 w-5" />
                    Total Funding
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">${totalFundingRaised.toLocaleString()}</div>
                  <p className="text-gray-300 text-sm mt-1">
                    of ${totalFundingGoal.toLocaleString()} goal
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-white/10 backdrop-blur-sm border-0 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-lg">
                    <Users className="mr-2 h-5 w-5" />
                    Total Investors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{totalInvestors}</div>
                  <p className="text-gray-300 text-sm mt-1">Across all properties</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-foreground">Your Properties</h2>
          <Button asChild>
            <Link href="/add-property">
              <Plus className="mr-2 h-4 w-4" /> Add New Property
            </Link>
          </Button>
        </div>

        <Tabs defaultValue="properties" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="properties">All Properties</TabsTrigger>
            <TabsTrigger value="active">Active Funding</TabsTrigger>
            <TabsTrigger value="funded">Fully Funded</TabsTrigger>
          </TabsList>
          
          <TabsContent value="properties">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {mockProperties.map((property) => (
                <motion.div key={property.id} variants={itemVariants}>
                  <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={property.image || "/placeholder.svg"}
                        alt={property.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-4 right-4">
                        {getStatusBadge(property.status)}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>{property.name}</CardTitle>
                      <CardDescription>{property.location}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Funding Goal</span>
                            <span className="font-medium">${property.fundingGoal.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Raised</span>
                            <span className="font-medium">${property.fundingRaised.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Investors</span>
                            <span className="font-medium">{property.investorCount}</span>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Funding Progress</span>
                            <span className="font-medium">
                              {Math.round((property.fundingRaised / property.fundingGoal) * 100)}%
                            </span>
                          </div>
                          <Progress 
                            value={(property.fundingRaised / property.fundingGoal) * 100} 
                            className="h-2" 
                          />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t bg-muted/20">
                      <Link href={`/properties/${property.id}/manage`} className="w-full">
                        <Button variant="ghost" className="w-full justify-between">
                          Manage Property
                          <ArrowUpRight size={16} />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="active">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {mockProperties
                .filter((property) => property.status === "active")
                .map((property) => (
                  <motion.div key={property.id} variants={itemVariants}>
                    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      {/* Same card content as above */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={property.image || "/placeholder.svg"}
                          alt={property.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute top-4 right-4">
                          {getStatusBadge(property.status)}
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle>{property.name}</CardTitle>
                        <CardDescription>{property.location}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-muted-foreground">Funding Goal</span>
                              <span className="font-medium">${property.fundingGoal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-muted-foreground">Raised</span>
                              <span className="font-medium">${property.fundingRaised.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Investors</span>
                              <span className="font-medium">{property.investorCount}</span>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-muted-foreground">Funding Progress</span>
                              <span className="font-medium">
                                {Math.round((property.fundingRaised / property.fundingGoal) * 100)}%
                              </span>
                            </div>
                            <Progress 
                              value={(property.fundingRaised / property.fundingGoal) * 100} 
                              className="h-2" 
                            />
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t bg-muted/20">
                        <Link href={`/properties/${property.id}/manage`} className="w-full">
                          <Button variant="ghost" className="w-full justify-between">
                            Manage Property
                            <ArrowUpRight size={16} />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="funded">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {mockProperties
                .filter((property) => property.status === "funded")
                .map((property) => (
                  <motion.div key={property.id} variants={itemVariants}>
                    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      {/* Same card content as above */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={property.image || "/placeholder.svg"}
                          alt={property.name}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute top-4 right-4">
                          {getStatusBadge(property.status)}
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle>{property.name}</CardTitle>
                        <CardDescription>{property.location}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-muted-foreground">Funding Goal</span>
                              <span className="font-medium">${property.fundingGoal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-muted-foreground">Raised</span>
                              <span className="font-medium">${property.fundingRaised.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Investors</span>
                              <span className="font-medium">{property.investorCount}</span>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-muted-foreground">Funding Progress</span>
                              <span className="font-medium">
                                {Math.round((property.fundingRaised / property.fundingGoal) * 100)}%
                              </span>
                            </div>
                            <Progress 
                              value={(property.fundingRaised / property.fundingGoal) * 100} 
                              className="h-2" 
                            />
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="border-t bg-muted/20">
                        <Link href={`/properties/${property.id}/manage`} className="w-full">
                          <Button variant="ghost" className="w-full justify-between">
                            Manage Property
                            <ArrowUpRight size={16} />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
