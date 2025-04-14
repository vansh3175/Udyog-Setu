

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Building2, CheckCircle, ChevronRight, Globe, MapPin, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import MapVisualization from "@/components/map-visualization"
import FeatureCard from "@/components/feature-card"
import TestimonialCarousel from "@/components/testimonial-carousel"
import PartnersSection from "@/components/partners-section"
import { cn } from "@/lib/utils"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen ">
      {/* Navbar */}
      <nav
        className={cn(
          "fixed top-0 w-full z-50 p-3 transition-all duration-300",
          scrolled ? "bg-white bg-opacity-90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5",
        )}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-xl text-gray-800">Udyog-Setu</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#schemes" className="text-gray-700 hover:text-blue-600 transition-colors">
              Govt Schemes
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact Us
            </a>
          </div>

          <Button className="bg-blue-600 hover:bg-blue-700 transition-all transform hover:scale-105">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={ref} className="relative min-h-screen p-3 flex items-center overflow-hidden">
        {/* Dynamic background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-100 z-0">
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute rounded-full bg-blue-400/10"
                initial={{
                  x: Math.random() * 100 + "%",
                  y: Math.random() * 100 + "%",
                  scale: Math.random() * 0.5 + 0.5,
                }}
                animate={{
                  x: [
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%",
                  ],
                  y: [
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%",
                  ],
                }}
                transition={{
                  duration: Math.random() * 20 + 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                style={{
                  width: Math.random() * 300 + 50,
                  height: Math.random() * 300 + 50,
                  opacity: Math.random() * 0.3 + 0.1,
                }}
              />
            ))}
          </div>

          {/* Geometric patterns */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#3B82F6" strokeWidth="0.2" />
                </pattern>
                <radialGradient id="radial" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
              <circle cx="50" cy="50" r="50" fill="url(#radial)" />
            </svg>
          </div>

          {/* Floating elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={`float-${i}`}
                className="absolute rounded-full border border-blue-200 opacity-20"
                initial={{
                  x: Math.random() * 100 + "%",
                  y: Math.random() * 100 + "%",
                  scale: Math.random() * 0.5 + 0.5,
                }}
                animate={{
                  y: ["-10%", "110%"],
                }}
                transition={{
                  duration: Math.random() * 20 + 15,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  delay: Math.random() * 10,
                }}
                style={{
                  width: Math.random() * 100 + 50,
                  height: Math.random() * 100 + 50,
                }}
              />
            ))}
          </div>
        </div>

        <motion.div style={{ opacity, scale }} className="container mx-auto grid md:grid-cols-2 gap-12 px-4 pt-24 z-10">
          <div className="flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Find the Best{" "}
                <span className="text-blue-600 relative">
                  Tax-Free Zone
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-1 bg-blue-400/50 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </span>{" "}
                for Your Industry
              </h1>
              <p className="text-lg text-gray-600 mt-6">
                Smart recommendations based on your factory needs and government policies. Optimize your business
                location with our AI-powered platform.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full shadow-lg transition-all transform hover:scale-105 text-lg group">
                  🚀 Get Started
                  <motion.span
                    className="absolute inset-0 rounded-full bg-blue-500/50"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
                  />
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 rounded-full transition-all text-lg"
                >
                  Learn More <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                    >
                      {i}
                    </motion.div>
                  ))}
                </div>
                <motion.p
                  className="text-gray-600"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.3 }}
                >
                  <span className="font-bold text-blue-600">1,200+</span> businesses found their ideal zone
                </motion.p>
              </div>
            </motion.div>
          </div>

          <div className="flex items-center justify-center">
            <MapVisualization />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <p className="text-gray-500 text-sm">Scroll to explore</p>
            <ArrowDown className="h-5 w-5 text-blue-600" />
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">How It Works</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Our intelligent platform analyzes your business requirements and matches them with the best tax-free
                zones available.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Settings className="h-10 w-10 text-blue-600" />,
                title: "Enter Factory Requirements",
                description:
                  "Tell us about your industry, size, investment, and specific needs for your manufacturing facility.",
              },
              {
                icon: <Building2 className="h-10 w-10 text-blue-600" />,
                title: "AI Analyzes Your Needs",
                description:
                  "Our advanced algorithms process your requirements against hundreds of tax-free zones and government policies.",
              },
              {
                icon: <MapPin className="h-10 w-10 text-blue-600" />,
                title: "Get Smart Zone Recommendations",
                description:
                  "Receive personalized recommendations ranked by suitability, tax benefits, and infrastructure quality.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-8 h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-white to-blue-50">
                  <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full shadow-lg transition-all transform hover:scale-105 text-lg">
              Try It Now
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-r from-blue-50 via-white to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose Udyog-Setu</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Our platform offers unique advantages to help you make the best decision for your business location.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Globe className="h-8 w-8 text-blue-600" />}
              title="Comprehensive Database"
              description="Access information on over 500+ tax-free zones across 50+ countries worldwide."
            />
            <FeatureCard
              icon={<CheckCircle className="h-8 w-8 text-blue-600" />}
              title="Policy Compliance"
              description="Stay updated with the latest government regulations and compliance requirements."
            />
            <FeatureCard
              icon={<Settings className="h-8 w-8 text-blue-600" />}
              title="Custom Filters"
              description="Filter zones by infrastructure, connectivity, labor availability, and more."
            />
            <FeatureCard
              icon={<Building2 className="h-8 w-8 text-blue-600" />}
              title="Industry-Specific Insights"
              description="Get recommendations tailored to your specific industry requirements and standards."
            />
            <FeatureCard
              icon={<MapPin className="h-8 w-8 text-blue-600" />}
              title="Location Analytics"
              description="Compare different zones with detailed analytics on costs, benefits, and ROI."
            />
            <FeatureCard
              icon={<Globe className="h-8 w-8 text-blue-600" />}
              title="Expert Support"
              description="Connect with our experts for personalized guidance on zone selection."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What Our Clients Say</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Hear from businesses that have successfully established operations in tax-free zones using our platform.
              </p>
            </motion.div>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Partners Section */}
      <section id="schemes" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Government Collaborations</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                We work with government agencies worldwide to provide accurate and up-to-date information.
              </p>
            </motion.div>
          </div>

          <PartnersSection />
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Ideal Tax-Free Zone?</h2>
              <p className="text-xl opacity-90 mb-10">
                Join thousands of businesses that have optimized their operations with our smart recommendations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 rounded-full shadow-lg transition-all transform hover:scale-105 text-lg">
                  🚀 Get Started Now
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-blue-700 px-8 py-6 rounded-full transition-all text-lg"
                >
                  Schedule a Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Globe className="h-6 w-6 text-blue-400" />
                <span className="font-bold text-xl text-white">Udyog-Setu</span>
              </div>
              <p className="text-gray-400 mb-6">
                Smart recommendations for tax-free zones based on your business requirements.
              </p>
              <div className="flex gap-4">
                {["twitter", "facebook", "linkedin", "github"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-white text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {["Home", "About Us", "Features", "Pricing", "Contact"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white text-lg mb-6">Resources</h3>
              <ul className="space-y-3">
                {["Blog", "Case Studies", "Webinars", "Documentation", "Support"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white text-lg mb-6">Contact Us</h3>
              <ul className="space-y-3 text-gray-400">
                <li>1234 Business Avenue</li>
                <li>New York, NY 10001</li>
                <li>contact@Udyog-Setu.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Udyog-Setu. All rights reserved.</p>
            <div className="mt-2 flex justify-center gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
