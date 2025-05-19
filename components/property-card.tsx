"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

// interface PropertyCardProps {
//   property: {
//     id: string
//     title: string
//     location: string
//     tokenPrice: number
//     totalTokens?: number
//     soldTokens?: number
//     imageUrl?: string
//   }
// }

export default function PropertyCard({ property }: any) {
  const percentSold =
    property.totalTokens && property.soldTokens ? Math.round((property.soldTokens / property.totalTokens) * 100) : 0

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="relative h-48 w-full overflow-hidden">
        <Image src={property.imageUrl || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="mb-1 text-xl font-semibold">{property.title}</h3>
        <div className="mb-3 flex items-center text-sm text-gray-600 dark:text-gray-400">
          <MapPin className="mr-1 h-4 w-4" />
          {property.location}
        </div>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Price per token</p>
            <p className="text-lg font-bold text-blue-600 dark:text-blue-400">${property.tokenPrice}</p>
          </div>
          {property.totalTokens && property.soldTokens && (
            <div className="text-right">
              <p className="text-sm text-gray-600 dark:text-gray-400">Tokens sold</p>
              <p className="text-lg font-bold">{percentSold}%</p>
            </div>
          )}
        </div>
        {property.totalTokens && property.soldTokens && (
          <div className="mb-4 space-y-1">
            <Progress value={percentSold} className="h-2 bg-gray-200 dark:bg-gray-700" />
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {property.soldTokens.toLocaleString()} / {property.totalTokens.toLocaleString()} tokens sold
            </p>
          </div>
        )}
        <div className="flex justify-between">
          <Button
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            asChild
          >
            <Link href={`/properties/${property.id}`}>View Details</Link>
          </Button>
          <Button className="bg-blue-600 text-white hover:bg-blue-700">Invest</Button>
        </div>
      </div>
    </div>
  )
}
