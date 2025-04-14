

import { motion } from "framer-motion"

const partners = [
  { name: "Ministry of Commerce", logo: "/placeholder.svg?height=60&width=180" },
  { name: "Industrial Development Board", logo: "/placeholder.svg?height=60&width=180" },
  { name: "Export Promotion Council", logo: "/placeholder.svg?height=60&width=180" },
  { name: "Trade Commission", logo: "/placeholder.svg?height=60&width=180" },
  { name: "Economic Development Authority", logo: "/placeholder.svg?height=60&width=180" },
  { name: "Investment Promotion Agency", logo: "/placeholder.svg?height=60&width=180" },
]

const PartnersSection = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center"
          >
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full flex items-center justify-center h-24">
              <img src={partner.logo || "/placeholder.svg"} alt={partner.name} className="max-h-12" />
            </div>
            <p className="mt-3 text-gray-600 text-sm text-center">{partner.name}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-600">
          Want to partner with us?{" "}
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Contact our partnership team
          </a>
        </p>
      </motion.div>
    </div>
  )
}

export default PartnersSection
