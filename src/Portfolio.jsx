import { Element } from 'react-scroll'
import Navbar from './Navbar'
import AnimatedSection from './AnimatedSection'
import Carousel from './Carousel'
import Footer from './Footer'
import { projects, certificates, experiences } from './data'
import { Button } from "./Components/Ui/button"
import { Card, CardContent } from "./Components/Ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./Components/Ui/avtar"
import { Input } from "./Components/Ui/input"
import { Textarea } from "./Components/Ui/textarea"
import { Instagram, Linkedin, Github, Mail, ArrowDown, Phone, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import  Image  from './Assets/boy.png'
import { useEffect, useState } from 'react'
import Mca from './Assets/mca.png'
import Mcbu from './Assets/mcbu.png'
import Uni from './Assets/uni.png'

export default function Portfolio() {

  const titles = ["Web Developer", "App Developer", "Video Editor"];
  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
      setCurrentTitle(titles[index]);
    }, 1500); // Change every 2 seconds
    return () => clearInterval(interval);
  }, [index, titles]);

  return (
    <div className="min-h-screen text-gray-900 transition-colors duration-300 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 dark:text-gray-100">
      <Navbar />

      <main className="container px-6 py-12 mx-auto">
        <Element name="home">
          <AnimatedSection id="home">
            <div className="flex flex-col-reverse items-center justify-between mb-20 md:flex-row">
              <div className=" md:w-1/2">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-8 text-4xl font-bold md:text-6xl"
                >
                  I'm a <motion.span
                      key={currentTitle}
                      initial={{ opacity: 0, scale: 0.8, color: "#000000" }}
                      animate={{ opacity: 1, scale: 1, color: "#3b82f6" }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                        scale: { type: "spring", stiffness: 200 },
                        color: { duration: 1.5, ease: "easeInOut" },
                      }}
                      className="text-blue-500"
                    >
                      {currentTitle}
                    </motion.span>
                </motion.h1>
                <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.4 }}
  className="mb-8 text-lg italic font-[italic] leading-relaxed"
>
  I fuse creativity and technology to develop stunning{' '}
  <span className="font-bold text-teal-500 underline">Websites</span> and{' '}
  <span className="font-bold text-teal-500 underline">Applications</span>. 
  From seamless front-end experiences to powerful back-end solutions, 
  I transform ideas into engaging digital platforms. Let’s create something extraordinary together.
</motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex mb-12 space-x-4"
                >
                  <Button >Hire Me</Button>
                  <a href="https://drive.google.com/file/d/1FlLa9PYI3lkt7AJYXyEW6zPU1LhWFVVP/view?usp=drivesdk" className='flex items-center justify-center px-5 py-1 font-medium bg-white rounded-lg text-zinc-900'>Resume</a>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex space-x-8"
                >
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
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8 md:w-1/2 md:mb-0"
              >
                <img src={Image} alt="Prayansh Jain" className="" />
              </motion.div>
            </div>
          </AnimatedSection>
        </Element>

        <Element name="about">
          <AnimatedSection id="about">
            <h2 className="mb-10 text-3xl font-bold text-center">About Me</h2>
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-2xl font-semibold">My Introduction</h3>
                <p className="text-lg italic font-[italic]">As a dedicated MCA student at Oriental College of Technology in Bhopal, I specialize in the MERN stack and am passionate about both design and development. I am eager to explore new learning opportunities that will enhance my skills and allow me to contribute to innovative projects. I welcome collaboration and am committed to growing in the dynamic field of technology..</p>
              </div>
              <div className="grid gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="mb-3 text-xl font-semibold">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      {['React + vite','Redux','React Native', 'Tailwind CSS', 'JavaScript','HTML','CSS', 'Bootstrap', ].map((skill) => (
                        <span key={skill} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{skill}</span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="mb-3 text-xl font-semibold">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      {['NodeJS', 'Express Js', 'C, C++', 'Socket.IO'].map((skill) => (
                        <span key={skill} className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{skill}</span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="mb-3 text-xl font-semibold">Devloper tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {['GitHub', 'Gitbash', 'Postman', 'Figma'].map((skill) => (
                        <span key={skill} className="bg-teal-600 text-teal-300 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-teal-300 dark:text-teal-800">{skill}</span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="mb-3 text-xl font-semibold">Database</h4>
                    <div className="flex flex-wrap gap-2">
                      {['MySQL', 'MongoDB'].map((skill) => (
                        <span key={skill} className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">{skill}</span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
              </div>
            </div>
          </AnimatedSection>
        </Element>

        <Element name="projects">
          <AnimatedSection id="projects">
            <h2 className="mb-10 text-3xl font-bold text-center">Projects</h2>
            <Carousel items={projects} />
          </AnimatedSection>
        </Element>

        <Element name="certificates">
          <AnimatedSection id="certificates">
            <h2 className="mb-10 text-3xl font-bold text-center">Certificates</h2>
            <Carousel items={certificates} />
          </AnimatedSection>
        </Element>

        <Element name="experience">
          <AnimatedSection id="experience">
            <h2 className="mb-10 text-3xl font-bold text-center">Experience</h2>
            <Carousel items={experiences} />
          </AnimatedSection>
        </Element>

        <Element name="education">
          <AnimatedSection id="education">
            <h2 className="mb-10 text-3xl font-bold text-center">Education</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card>
                  <CardContent className="p-6">
                    <Avatar className="w-24 h-24 mb-4">
                      <AvatarImage src={Mca} alt="MCA" />
                      <AvatarFallback>MCA</AvatarFallback>
                    </Avatar>
                    <h3 className="mb-2 text-xl font-semibold">MCA <span className='font-light'>(2023-2025)</span></h3>
                    <p>Oriental Institute of Science and Technology, Bhopal</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card>
                  <CardContent className="p-6">
                    <Avatar className="w-24 h-24 mb-4">
                      <AvatarImage src={Mcbu} alt="BSC(CS)" />
                      <AvatarFallback>BSC</AvatarFallback>
                    </Avatar>
                    <h3 className="mb-2 text-xl font-semibold">BSC(CS) <span className='font-light'>(2019-2022)</span></h3>
                    <p>Maharaja Chhatrasal University Chhatarpur</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card>
                  <CardContent className="p-6">
                    <Avatar className="w-24 h-24 mb-4">
                      <AvatarImage src={Uni} alt="MERN" />
                      <AvatarFallback>MERN</AvatarFallback>
                    </Avatar>
                    <h3 className="mb-2 text-xl font-semibold">MERN Stack <span className='font-light'>(2022--2023)</span></h3>
                    <p>Universal Informatics Bhawarkua Indore</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </AnimatedSection>
        </Element>

        <Element name="contact" className='h-[66vh]'>
          <AnimatedSection id="contact">
            <h2 className="mb-2 text-3xl font-bold text-center">Get in touch</h2>
            <p className="mb-10 text-center">Do you have any questions?</p>
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="flex items-center mb-5 text-2xl font-semibold">
                      Find me <ArrowDown className="ml-2" />
                    </h3>
                    <p className="flex items-center mb-3">
                      <Mail className="mr-2" /> Email: prayanshjain023@gmail.com
                    </p>
                    <p className="flex items-center">
                      <Phone className="mr-2" /> Tel: +91 7869843789
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card>
                  <CardContent className="p-6">
                    <form className="space-y-4">
                      <Input placeholder="Name" />
                      <Input type="email" placeholder="Email" />
                      <Textarea placeholder="Message" />
                      <Button className="w-full">
                        Send <Send className="ml-2" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </AnimatedSection>
        </Element>
      </main>

      <Footer />
    </div>
  )
}