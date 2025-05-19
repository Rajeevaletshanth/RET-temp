"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Building2, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PropertyCard from "@/components/property-card"
import { fadeIn, staggerContainer } from "@/lib/motion-variants"

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Sample properties data
  const properties = [
    {
      id: "1",
      title: "Luxury Apartment Complex",
      location: "Miami, FL",
      tokenPrice: 100,
      totalTokens: 1000,
      soldTokens: 650,
      imageUrl: "/placeholder.svg?height=300&width=400",
      type: "residential",
    },
    {
      id: "2",
      title: "Commercial Office Building",
      location: "New York, NY",
      tokenPrice: 250,
      totalTokens: 2000,
      soldTokens: 1200,
      imageUrl: "/placeholder.svg?height=300&width=400",
      type: "commercial",
    },
    {
      id: "3",
      title: "Residential Development",
      location: "Austin, TX",
      tokenPrice: 75,
      totalTokens: 5000,
      soldTokens: 2500,
      imageUrl: "/placeholder.svg?height=300&width=400",
      type: "residential",
    },
    {
      id: "4",
      title: "Retail Shopping Center",
      location: "Los Angeles, CA",
      tokenPrice: 150,
      totalTokens: 3000,
      soldTokens: 900,
      imageUrl: "/placeholder.svg?height=300&width=400",
      type: "retail",
    },
    {
      id: "5",
      title: "Industrial Warehouse",
      location: "Chicago, IL",
      tokenPrice: 120,
      totalTokens: 4000,
      soldTokens: 1500,
      imageUrl: "/placeholder.svg?height=300&width=400",
      type: "industrial",
    },
    {
      id: "6",
      title: "Mixed-Use Development",
      location: "Seattle, WA",
      tokenPrice: 200,
      totalTokens: 2500,
      soldTokens: 1800,
      imageUrl: "/placeholder.svg?height=300&width=400",
      type: "mixed",
    },
    {
      id: "7",
      title: "Luxury Condominiums",
      location: "San Francisco, CA",
      tokenPrice: 300,
      totalTokens: 1500,
      soldTokens: 750,
      imageUrl: "/placeholder.svg?height=300&width=400",
      type: "residential",
    },
    {
      id: "8",
      title: "Office Park",
      location: "Dallas, TX",
      tokenPrice: 180,
      totalTokens: 3500,
      soldTokens: 2100,
      imageUrl: "/placeholder.svg?height=300&width=400",
      type: "commercial",
    },
  ]

  // Filter properties based on search query
  const filteredProperties = properties.filter(
    (property) =>
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold">Explore Properties</h1>
        <p className="mt-4 text-muted-foreground">
          Discover and invest in tokenized real estate properties from around the world
        </p>
      </motion.div>

      <motion.div
        className="mb-8 rounded-lg border bg-card p-6 shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="grid gap-4 md:grid-cols-4">
          <div className="relative md:col-span-2">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by property name or location"
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="residential">Residential</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="retail">Retail</SelectItem>
                <SelectItem value="industrial">Industrial</SelectItem>
                <SelectItem value="mixed">Mixed Use</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="funding">Funding Progress</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </motion.div>

      <Tabs defaultValue="all" className="mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TabsList className="grid w-full grid-cols-6 md:w-auto">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="residential">Residential</TabsTrigger>
            <TabsTrigger value="commercial">Commercial</TabsTrigger>
            <TabsTrigger value="retail">Retail</TabsTrigger>
            <TabsTrigger value="industrial">Industrial</TabsTrigger>
            <TabsTrigger value="mixed">Mixed Use</TabsTrigger>
          </TabsList>
        </motion.div>

        <TabsContent value="all" className="mt-6">
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {filteredProperties.map((property, index) => (
              <motion.div key={property.id} variants={fadeIn("up", "tween", 0.1 * index, 0.5)}>
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>

        {["residential", "commercial", "retail", "industrial", "mixed"].map((type) => (
          <TabsContent key={type} value={type} className="mt-6">
            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              {filteredProperties
                .filter((property) => property.type === type)
                .map((property, index) => (
                  <motion.div key={property.id} variants={fadeIn("up", "tween", 0.1 * index, 0.5)}>
                    <PropertyCard property={property} />
                  </motion.div>
                ))}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>

      {filteredProperties.length === 0 && (
        <motion.div
          className="flex flex-col items-center justify-center py-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Building2 className="mb-4 h-16 w-16 text-muted-foreground" />
          <h3 className="text-xl font-semibold">No properties found</h3>
          <p className="mt-2 text-muted-foreground">
            Try adjusting your search or filters to find what you're looking for
          </p>
          <Button className="mt-4" onClick={() => setSearchQuery("")}>
            Clear Search
          </Button>
        </motion.div>
      )}

      {filteredProperties.length > 0 && (
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button variant="outline">Load More Properties</Button>
        </motion.div>
      )}
    </div>
  )
}
