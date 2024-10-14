import { Link } from 'react-scroll'
import { Button } from "./Components/Ui/button"
import { Instagram, Linkedin, Github, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-8 text-white bg-gray-800">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
        <ul className="hidden mb-10 md:flex md:mb-0">
  <li className="mr-6"><Link to="home" smooth={true} duration={500} className="transition-colors cursor-pointer hover:text-blue-500">Home</Link></li>
  <li className="mr-6"><Link to="about" smooth={true} duration={500} className="transition-colors cursor-pointer hover:text-blue-500">About</Link></li>
  <li className="mr-6"><Link to="projects" smooth={true} duration={500} className="transition-colors cursor-pointer hover:text-blue-500">Projects</Link></li>
  <li className="mr-6"><Link to="certificates" smooth={true} duration={500} className="transition-colors cursor-pointer hover:text-blue-500">Certificates</Link></li>
  <li className="mr-6"><Link to="experience" smooth={true} duration={500} className="transition-colors cursor-pointer hover:text-blue-500">Experience</Link></li>
  <li><Link to="contact" smooth={true} duration={500} className="transition-colors cursor-pointer hover:text-blue-500">Contact</Link></li>
</ul>

          <div className="flex space-x-6">
            <a href="https://www.instagram.com/nish.jn" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon"><Instagram /></Button>
            </a>
            <a href="https://www.linkedin.com/in/prayansh-jain" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon"><Linkedin /></Button>
            </a>
            <a href="https://github.com/prayanshjain023" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon"><Github /></Button>
            </a>
            <a href="mailto:prayanshjain023@gmail.com">
              <Button variant="ghost" size="icon"><Mail /></Button>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}