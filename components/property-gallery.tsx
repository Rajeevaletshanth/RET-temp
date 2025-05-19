"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const galleryImages = [
  {
    src: "/placeholder.svg?height=800&width=1200&text=Interior+Living+Space",
    alt: "Luxury Living Room",
    caption: "Spacious living area with floor-to-ceiling windows",
  },
  {
    src: "/placeholder.svg?height=800&width=1200&text=Kitchen+Area",
    alt: "Gourmet Kitchen",
    caption: "Chef's kitchen with premium appliances and marble countertops",
  },
  {
    src: "/placeholder.svg?height=800&width=1200&text=Master+Bedroom",
    alt: "Master Bedroom",
    caption: "Serene master suite with panoramic views",
  },
  {
    src: "/placeholder.svg?height=800&width=1200&text=Bathroom",
    alt: "Luxury Bathroom",
    caption: "Spa-inspired bathroom with freestanding tub",
  },
  {
    src: "/placeholder.svg?height=800&width=1200&text=Outdoor+Space",
    alt: "Outdoor Terrace",
    caption: "Private terrace with infinity pool and lounge area",
  },
  {
    src: "/placeholder.svg?height=800&width=1200&text=Home+Office",
    alt: "Home Office",
    caption: "Elegant home office with built-in shelving",
  },
]

export default function PropertyGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "next" | "prev") => {
    if (selectedImage === null) return

    if (direction === "next") {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    } else {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="group cursor-pointer overflow-hidden rounded-lg"
            onClick={() => openLightbox(index)}
          >
            <div className="relative h-64 w-full overflow-hidden md:h-72 lg:h-80">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-20"></div>
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-lg text-[#3c3c3c]">{image.alt}</h3>
              <p className="mt-1 font-sans text-sm text-[#5c5c5c]">{image.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          >
            <button
              className="absolute right-4 top-4 text-white"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X className="h-8 w-8" />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
              onClick={() => navigateImage("prev")}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-10 w-10" />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
              onClick={() => navigateImage("next")}
              aria-label="Next image"
            >
              <ChevronRight className="h-10 w-10" />
            </button>

            <div className="relative max-h-[80vh] max-w-4xl">
              <Image
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].alt}
                width={1200}
                height={800}
                className="max-h-[80vh] w-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
                <h3 className="font-serif text-xl">{galleryImages[selectedImage].alt}</h3>
                <p className="mt-1 font-sans text-sm">{galleryImages[selectedImage].caption}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
