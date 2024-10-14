import { useState } from 'react'
import { Link } from 'react-scroll'
import { Button } from "./Components/Ui/button"
import { Moon, Sun, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './ThemeProvider'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDarkMode, toggleDarkMode } = useTheme()

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  }

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  }

  return (
    <nav className="sticky top-0 z-10 transition-colors duration-300 bg-white shadow-md dark:bg-gray-800">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto">
        <p className="text-xl font-bold">Prayansh</p>
        <div className="hidden space-x-10 md:flex">
          <Link to="home" smooth={true} duration={500} className="font-medium transition-colors cursor-pointer hover:text-blue-500">Home</Link>
          <Link to="about" smooth={true} duration={500} className="font-medium transition-colors cursor-pointer hover:text-blue-500">About</Link>
          <Link to="projects" smooth={true} duration={500} className="font-medium transition-colors cursor-pointer hover:text-blue-500">Projects</Link>
          <Link to="certificates" smooth={true} duration={500} className="font-medium transition-colors cursor-pointer hover:text-blue-500">Certificates</Link>
          <Link to="experience" smooth={true} duration={500} className="font-medium transition-colors cursor-pointer hover:text-blue-500">Experience</Link>
          <Link to="contact" smooth={true} duration={500} className="font-medium transition-colors cursor-pointer hover:text-blue-500">Contact</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="overflow-hidden md:hidden"
          >
            <motion.div className="px-4 py-2 bg-white dark:bg-gray-800">
              {["home", "about", "projects", "certificates", "experience", "contact"].map((item) => (
                <motion.div key={item} variants={menuItemVariants}>
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    className="block px-4 py-2 capitalize transition-colors duration-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}