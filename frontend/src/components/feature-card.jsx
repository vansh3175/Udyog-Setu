import { ReactNode } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Card className="p-6 h-full border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white">
        <div className="rounded-full bg-blue-50 w-14 h-14 flex items-center justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </Card>
    </motion.div>
  )
}

export default FeatureCard
