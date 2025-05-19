"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Maximize, X } from "lucide-react"

const floorPlans = [
  {
    name: "First Floor",
    image: "/placeholder.svg?height=800&width=1200&text=First+Floor+Plan",
    details: {
      area: "2,500 sq ft",
      rooms: "Living Room, Dining Room, Kitchen, Library, Powder Room",
    },
  },
  {
    name: "Second Floor",
    image: "/placeholder.svg?height=800&width=1200&text=Second+Floor+Plan",
    details: {
      area: "2,200 sq ft",
      rooms: "Master Suite, 2 Bedrooms, 2 Bathrooms, Laundry Room",
    },
  },
  {
    name: "Basement",
    image: "/placeholder.svg?height=800&width=1200&text=Basement+Floor+Plan",
    details: {
      area: "1,800 sq ft",
      rooms: "Home Theater, Wine Cellar, Gym, Full Bathroom, Storage",
    },
  },
]

export default function FloorPlanViewer() {
  const [activePlan, setActivePlan] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handlePlanChange = (index: number) => {
    setActivePlan(index)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
        <div className="mb-8 flex flex-row space-x-4 md:mb-0 md:w-1/4 md:flex-col md:space-x-0 md:space-y-4">
          {floorPlans.map((plan, index) => (
            <button
              key={index}
              onClick={() => handlePlanChange(index)}
              className={`rounded-md px-4 py-3 text-left transition-colors ${
                activePlan === index ? "bg-[#9b9b8c] text-white" : "bg-white text-[#3c3c3c] hover:bg-[#e8e6e1]"
              }`}
            >
              <h3 className="font-serif text-lg">{plan.name}</h3>
              <p className="mt-1 text-sm">{plan.details.area}</p>
            </button>
          ))}
        </div>

        <div className="relative md:w-3/4">
          <div className="relative overflow-hidden rounded-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePlan}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={floorPlans[activePlan].image || "/placeholder.svg"}
                  alt={`${floorPlans[activePlan].name} Floor Plan`}
                  width={1200}
                  height={800}
                  className="w-full"
                />
              </motion.div>
            </AnimatePresence>

            <button
              onClick={toggleFullscreen}
              className="absolute bottom-4 right-4 rounded-full bg-white p-2 text-[#3c3c3c] shadow-md transition-colors hover:bg-[#e8e6e1]"
              aria-label="View fullscreen"
            >
              <Maximize className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-6">
            <h3 className="font-serif text-xl text-[#3c3c3c]">{floorPlans[activePlan].name}</h3>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="font-sans text-sm font-medium text-[#9b9b8c]">Area</p>
                <p className="mt-1 font-sans text-[#5c5c5c]">{floorPlans[activePlan].details.area}</p>
              </div>
              <div>
                <p className="font-sans text-sm font-medium text-[#9b9b8c]">Rooms</p>
                <p className="mt-1 font-sans text-[#5c5c5c]">{floorPlans[activePlan].details.rooms}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center space-x-4">
            <button
              onClick={() => handlePlanChange((activePlan - 1 + floorPlans.length) % floorPlans.length)}
              className="rounded-full border border-[#9b9b8c] p-2 text-[#9b9b8c] transition-colors hover:bg-[#9b9b8c] hover:text-white"
              aria-label="Previous floor plan"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => handlePlanChange((activePlan + 1) % floorPlans.length)}
              className="rounded-full border border-[#9b9b8c] p-2 text-[#9b9b8c] transition-colors hover:bg-[#9b9b8c] hover:text-white"
              aria-label="Next floor plan"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          >
            <button
              className="absolute right-4 top-4 text-white"
              onClick={toggleFullscreen}
              aria-label="Close fullscreen"
            >
              <X className="h-8 w-8" />
            </button>

            <div className="max-h-[90vh] max-w-6xl">
              <Image
                src={floorPlans[activePlan].image || "/placeholder.svg"}
                alt={`${floorPlans[activePlan].name} Floor Plan`}
                width={1200}
                height={800}
                className="max-h-[90vh] w-auto"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
