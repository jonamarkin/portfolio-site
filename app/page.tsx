"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone, Code, Database, Cloud, Cpu, Network, Server, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skills = [
    { category: "Languages", items: ["Java", "Python", "JavaScript", "TypeScript", "Golang", "SQL"] },
    { category: "Frameworks", items: ["Spring Boot", "React", "Vue", "Flutter", "Node.js", "PyTorch"] },
    { category: "Cloud & DevOps", items: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "Apache Kafka"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "Oracle", "Firebase"] },
  ]

  const experiences = [
    {
      title: "HPC-Cloud Researcher & Engineer",
      company: "University of Pisa",
      period: "Oct 2024 - Present",
      highlights: [
        "Architected distributed computing systems on 32-node HPC clusters",
        "Achieved 85% parallel efficiency in multi-node environments",
        "Reduced inter-node latency by 40% and improved throughput by 60%",
      ],
    },
    // {
    //   title: "Backend Developer",
    //   company: "Slightly Techie Network",
    //   period: "Mar 2023 - Present",
    //   highlights: [
    //     "Built event-driven architecture processing 10,000+ messages/second",
    //     "Managed 4+ microservices across 3 environments with 99.5% uptime",
    //     "Implemented robust point allocation system serving 500+ users",
    //   ],
    // },
    {
      title: "Software Engineer",
      company: "Union Systems Global",
      period: "Jun 2019 - Dec 2023",
      highlights: [
        "Built secure mobile banking platform handling 1000+ users/month",
        "Implemented AES encryption reducing security breaches by 50%",
        "Optimized backend services improving processing time by 20%",
      ],
    },
  ]

  const projects = [
    {
      title: "Feature Flag System",
      description: "Production-grade feature flag system using Clean Architecture and DDD principles",
      tech: ["Java Spring Boot", "PostgreSQL", "Redis", "Docker"],
      highlights: ["Sub-10ms flag evaluation", "10,000+ requests/second", "95%+ test coverage"],
    },
    {
      title: "Event-Driven Microservices",
      description: "Scalable microservices ecosystem with service discovery and API gateway patterns",
      tech: ["Java Spring Boot", "RabbitMQ", "TestContainers"],
      highlights: ["99.9% service availability", "Circuit breaker patterns", "Fault tolerance"],
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm border-b border-gray-800 z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold animate-fade-in">Jonathan Markin</div>
            <div className="hidden md:flex space-x-8">
              {["about", "experience", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-blue-400 transition-all duration-300 relative ${
                    activeSection === section ? "text-blue-400" : "text-white"
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 animate-slide-in"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-blue-400"
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gray-800 mx-auto mb-6 overflow-hidden group hover:scale-110 transition-transform duration-300">
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl sm:text-4xl font-bold group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                JM
              </div>
            </div>
            <p className="text-gray-400 mb-2 animate-fade-in-delay-1">Hi, I'm Jonathan 👋</p>
          </div>

          <h1
            className={`text-4xl sm:text-5xl md:text-7xl font-bold mb-8 leading-tight transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Building <span className="text-blue-400 hover:text-blue-300 transition-colors duration-300">scalable</span>
            <br />
            systems,{" "}
            <span className="text-purple-400 hover:text-purple-300 transition-colors duration-300">distributed</span>
            <br />
            <span className="text-gray-400">architecture.</span>
          </h1>

          <p
            className={`text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            IT Architect specializing in high-performance computing, distributed systems, and cloud-native
            architectures. Passionate about building robust, scalable solutions.
          </p>

          <div
            className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Link href="mailto:jonamarkin@gmail.com">
              <Button
                variant="outline"
                className="bg-transparent border-gray-600 text-white hover:bg-gray-800 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
            </Link>
            <Link href="https://github.com/jonamarkin" target="_blank">
              <Button
                variant="outline"
                className="bg-transparent border-gray-600 text-white hover:bg-gray-800 hover:border-purple-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-105"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/jonamarkin" target="_blank">
              <Button
                variant="outline"
                className="bg-transparent border-gray-600 text-white hover:bg-gray-800 hover:border-blue-500 hover:text-blue-500 transition-all duration-300 transform hover:scale-105"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </Link>
          </div>

          {/* Tech Stack Icons */}
          <div
            className={`flex flex-wrap justify-center gap-4 sm:gap-8 opacity-60 transition-all duration-1000 delay-800 ${isVisible ? "opacity-60 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {[
              { icon: Server, label: "Microservices" },
              { icon: Cloud, label: "Cloud Native" },
              { icon: Cpu, label: "HPC" },
              { icon: Network, label: "Distributed Systems" },
              { icon: Database, label: "Big Data" },
            ].map(({ icon: Icon, label }, index) => (
              <div
                key={label}
                className={`flex items-center gap-2 hover:opacity-100 transition-all duration-300 animate-fade-in-delay-${index + 1}`}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 hover:text-blue-400 transition-colors duration-300" />
                <span className="text-xs sm:text-sm">{label}</span>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-16 animate-fade-in-on-scroll">
            Collaborate with <span className="text-blue-400">technologies</span> and{" "}
            <span className="text-purple-400">frameworks</span> to
            <br className="hidden sm:block" />
            create <span className="text-gray-400">impactful solutions.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {skills.map((skillGroup, index) => (
              <Card
                key={index}
                className={`bg-black border-gray-800 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 animate-slide-up-delay-${index + 1}`}
              >
                <CardHeader>
                  <CardTitle className="text-white text-lg">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-gray-800 text-gray-300 hover:bg-blue-900/30 hover:text-blue-300 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-16 animate-fade-in-on-scroll">Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className={`bg-gray-900/50 border-gray-800 hover:border-gray-600 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/10 animate-slide-up-delay-${index + 1}`}
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                    <div>
                      <CardTitle className="text-white text-lg sm:text-xl hover:text-blue-400 transition-colors duration-300">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-blue-400 text-base sm:text-lg">{exp.company}</CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-gray-600 text-gray-300 w-fit hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
                    >
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="text-gray-300 flex items-start group">
                        <span className="text-blue-400 mr-2 group-hover:text-blue-300 transition-colors duration-300">
                          •
                        </span>
                        <span className="group-hover:text-white transition-colors duration-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-16 animate-fade-in-on-scroll">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`bg-black border-gray-800 hover:border-gray-600 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/10 group animate-slide-up-delay-${index + 1}`}
              >
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2 group-hover:text-green-400 transition-colors duration-300">
                    <Code className="w-5 h-5 text-blue-400 group-hover:text-green-400 transition-colors duration-300" />
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-gray-800 text-gray-300 hover:bg-green-900/30 hover:text-green-300 transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-sm text-gray-400 flex items-start group/item">
                          <span className="text-green-400 mr-2 group-hover/item:text-green-300 transition-colors duration-300">
                            ✓
                          </span>
                          <span className="group-hover/item:text-gray-300 transition-colors duration-300">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 animate-fade-in-on-scroll">
            Tell me about your
            <br />
            <span className="text-blue-400 hover:text-blue-300 transition-colors duration-300">next project</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 mb-12 animate-fade-in-on-scroll">
            Let's discuss how we can build scalable, high-performance solutions together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-on-scroll">
            <Link href="mailto:jonamarkin@gmail.com">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </Link>
            <Link href="tel:+393286870969">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-gray-600 text-white hover:bg-gray-800 hover:border-purple-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Me
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0 text-sm sm:text-base">
            © {new Date().getFullYear()} Jonathan Ato Markin. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="https://github.com/jonamarkin"
              target="_blank"
              className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/jonamarkin"
              target="_blank"
              className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:jonamarkin@gmail.com"
              className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
