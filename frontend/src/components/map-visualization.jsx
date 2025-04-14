"use client"

import { useState } from "react"
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"
import { motion } from "framer-motion"
import indiaTopoJson from "@/data/india-topojson.json"

const zones = [
  { name: "Kandla SEZ", state: "Gujarat", coordinates: [70.216, 22.490], color: "#3B82F6" },
  { name: "GIFT City", state: "Gujarat", coordinates: [72.683, 23.250], color: "#EC4899" },
  { name: "Jaipur SEZ", state: "Rajasthan", coordinates: [75.787, 26.912], color: "#F59E0B" },
  { name: "Noida SEZ", state: "Uttar Pradesh", coordinates: [77.391, 28.535], color: "#10B981" },
  { name: "Indore SEZ", state: "Madhya Pradesh", coordinates: [75.857, 22.719], color: "#8B5CF6" },
  { name: "SEEPZ Mumbai", state: "Maharashtra", coordinates: [72.877, 19.076], color: "#EF4444" },
  { name: "Cochin SEZ", state: "Kerala", coordinates: [76.267, 9.931], color: "#06B6D4" },
  { name: "Chennai SEZ", state: "Tamil Nadu", coordinates: [80.270, 13.082], color: "#84CC16" },
  { name: "Visakhapatnam SEZ", state: "Andhra Pradesh", coordinates: [83.218, 17.686], color: "#F97316" },
  { name: "Falta SEZ", state: "West Bengal", coordinates: [88.325, 22.338], color: "#6366F1" },
  { name: "Hyderabad SEZ", state: "Telangana", coordinates: [78.486, 17.385], color: "#14B8A6" },
  { name: "Surat SEZ", state: "Gujarat", coordinates: [72.831, 21.170], color: "#A855F7" },
]

const MapVisualization = () => {
  const [tooltipContent, setTooltipContent] = useState("")

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative w-full max-w-4xl h-[500px] mx-auto"
    >
      <div className="relative bg-white/30 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-blue-100">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 1000, center: [78.9629, 22.5937] }}
          style={{ width: "100%", height: "100%" }}
        >
          <Geographies geography={indiaTopoJson}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: { fill: "#E5E7EB", stroke: "#D1D5DB", strokeWidth: 0.5 },
                    hover: { fill: "#93C5FD", stroke: "#3B82F6", strokeWidth: 1 },
                    pressed: { fill: "#60A5FA", stroke: "#2563EB", strokeWidth: 1 },
                  }}
                />
              ))
            }
          </Geographies>
          {zones.map((zone, index) => (
            <Marker
              key={index}
              coordinates={zone.coordinates}
              onMouseEnter={() => setTooltipContent(`${zone.name}, ${zone.state}`)}
              onMouseLeave={() => setTooltipContent("")}
            >
              <circle r={6} fill={zone.color} stroke="#FFF" strokeWidth={2} />
              <text
                textAnchor="middle"
                y={-10}
                style={{ fontFamily: "Arial", fill: "#374151", fontSize: "10px" }}
              >
                {zone.name}
              </text>
            </Marker>
          ))}
        </ComposableMap>
        {tooltipContent && (
          <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm rounded-lg p-2 text-sm text-gray-700 shadow-md border border-blue-50">
            {tooltipContent}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default MapVisualization
