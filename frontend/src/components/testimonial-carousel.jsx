

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechManufacture Inc.",
    content:
      "ZoneAdvisor helped us find the perfect tax-free zone for our electronics manufacturing plant. The recommendations were spot-on, and we've seen a 30% reduction in operational costs.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Operations Director, Global Logistics Ltd.",
    content:
      "We were expanding our distribution network and needed strategic locations with tax benefits. ZoneAdvisor's platform provided detailed comparisons that made our decision process much easier and more informed.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Founder, Sustainable Energy Solutions",
    content:
      "The AI-powered recommendations matched our renewable energy manufacturing facility with zones that offered both tax incentives and green energy subsidies. Couldn't have found these specialized zones without ZoneAdvisor.",
    image: "/placeholder.svg?height=80&width=80",
  },
]

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <Card className="p-8 md:p-12 border-none shadow-xl bg-white">
            <Quote className="h-12 w-12 text-blue-100 mb-6" />

            <p className="text-lg md:text-xl text-gray-700 italic mb-8">"{testimonials[current].content}"</p>

            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img
                  src={testimonials[current].image || "/placeholder.svg"}
                  alt={testimonials[current].name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="font-bold text-gray-800">{testimonials[current].name}</h4>
                <p className="text-gray-600">{testimonials[current].role}</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center mt-8 gap-2">
        <Button variant="outline" size="icon" onClick={prev} className="rounded-full">
          <ChevronLeft className="h-5 w-5" />
        </Button>

        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            onClick={() => {
              setAutoplay(false)
              setCurrent(index)
            }}
            className={`w-3 h-3 p-0 rounded-full ${index === current ? "bg-blue-600" : "bg-gray-300"}`}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </Button>
        ))}

        <Button variant="outline" size="icon" onClick={next} className="rounded-full">
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

export default TestimonialCarousel
