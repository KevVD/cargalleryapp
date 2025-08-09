"use client"

import type React from "react"

import Image from "next/image"
import type { Car } from "@/lib/carData"
import { MapPin, DollarSign } from "lucide-react"

interface CarCardProps {
  car: Car
  onClick: () => void
  onRequestViewing: () => void
}

export default function CarCard({ car, onClick, onRequestViewing }: CarCardProps) {
  const handleRequestViewing = (e: React.MouseEvent) => {
    e.stopPropagation()
    onRequestViewing()
  }

  return (
    <div
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      {/* Main Image */}
      <div className="relative h-48 w-full">
        <Image
          src={car.images.front || "/placeholder.svg"}
          alt={`${car.brand} ${car.model} - Front view`}
          fill
          className="object-cover"
        />
      </div>

      {/* Car Details */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {car.brand} {car.model}
        </h3>

        <div className="flex items-center text-green-600 mb-2">
          <DollarSign className="h-5 w-5 mr-1" />
          <span className="text-lg font-bold">{car.price.toLocaleString()}</span>
        </div>

        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{car.location}</span>
        </div>

        {/* Thumbnail Images */}
        <div className="grid grid-cols-4 gap-1 mb-4">
          {Object.entries(car.images).map(([view, src]) => (
            <div key={view} className="relative h-12 w-full">
              <Image
                src={src || "/placeholder.svg"}
                alt={`${car.brand} ${car.model} - ${view} view`}
                fill
                className="object-cover rounded"
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleRequestViewing}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
        >
          Request Viewing
        </button>
      </div>
    </div>
  )
}
