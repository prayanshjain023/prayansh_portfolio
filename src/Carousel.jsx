import { useState, useEffect } from 'react'
import { Button } from "./Components/Ui/button"
import { Card, CardContent } from "./Components/Ui/card"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000) // Auto-advance every 5 seconds
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full min-h-[55vh]">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <Card className="h-full">
            <CardContent className="flex flex-col justify-between h-full p-6">
              <h3 className="mb-2 text-2xl font-semibold">{item.title}</h3>
              <p className="mb-4 text-sm">{item.description}</p>
              {item.image && (
                <img src={item.image} alt={item.title} className="object-cover w-full h-48 mb-4 rounded-md" />
              )}
              {item.link && (
                <Button variant="outline" asChild>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">View Details</a>
                </Button>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
      <Button variant="outline" size="icon" className="absolute transform -translate-y-1/2 top-1/2 left-2" onClick={prevSlide}>
        <ChevronLeft className="w-4 h-4" />
      </Button>
      <Button variant="outline" size="icon" className="absolute transform -translate-y-1/2 top-1/2 right-2" onClick={nextSlide}>
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  )
}