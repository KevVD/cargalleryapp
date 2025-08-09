"use client"

import { useState } from "react"
import Image from "next/image"
import type { Car } from "@/lib/carData"
import { X, MapPin, DollarSign, ChevronLeft, ChevronRight } from "lucide-react"

interface CarModalProps {
  car: Car
  onClose: () => void
  onRequestViewing: () => void
}

export default function CarModal({ car, onClose, onRequestViewing }: CarModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const imageEntries = Object.entries(car.images)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imageEntries.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + imageEntries.length) % imageEntries.length)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">
            {car.brand} {car.model}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Image Gallery */}
          <div className="relative mb-6">
            <div className="relative h-80 w-full mb-4">
              <Image
                src={imageEntries[currentImageIndex][1] || "/placeholder.svg"}
                alt={`${car.brand} ${car.model} - ${imageEntries[currentImageIndex][0]} view`}
                fill
                className="object-cover rounded-lg"
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="grid grid-cols-4 gap-2">
              {imageEntries.map(([view, src], index) => (
                <button
                  key={view}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative h-20 w-full rounded-md overflow-hidden ${
                    index === currentImageIndex ? "ring-2 ring-blue-500" : ""
                  }`}
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`${car.brand} ${car.model} - ${view} view`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <span className="text-white text-xs font-medium capitalize">{view}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Car Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Vehicle Details</h3>
              <div className="space-y-3">
                <div className="flex items-center text-green-600">
                  <DollarSign className="h-5 w-5 mr-2" />
                  <span className="text-xl font-bold">{car.price.toLocaleString()}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{car.location}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Description</h3>
              <p className="text-gray-600 leading-relaxed">{car.description}</p>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={onRequestViewing}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-200"
            >
              Request Viewing
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
