import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

export default function AnimatedSection({ children, id }) {
  const controls = useAnimation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible')
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById(id)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [controls, id])

  return (
    <motion.section
      id={id}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      className="mb-20"
    >
      {children}
    </motion.section>
  )
}