import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-16 lg:pt-0 overflow-hidden"
    >
      {/* Background orbs */}
      <div className="orb w-96 h-96 bg-primary top-1/4 -left-32" />
      <div className="orb w-80 h-80 bg-secondary bottom-1/4 -right-24" />
      <div className="orb w-64 h-64 bg-blue-500 top-3/4 left-1/4" style={{ opacity: 0.08 }} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(100,255,218,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(100,255,218,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Welcome to my portfolio
          </p>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-text-primary">Juhil</span>{' '}
          <span className="gradient-text">Zalavadiya</span>
        </motion.h1>

        <motion.div
          className="text-xl md:text-2xl text-text-secondary mb-8 h-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="text-text-secondary">I'm a </span>
          <TypeAnimation
            sequence={[
              'Software Developer', 2000,
              'Full Stack Developer', 2000,
              'Backend Engineer', 2000,
              'Frontend Engineer', 2000,
              'Multimedia Content Creator', 2000,
            ]}
            wrapper="span"
            speed={50}
            deletionSpeed={60}
            repeat={Infinity}
            className="text-primary font-medium"
          />
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="mailto:juhil.zalavadiya.it@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-dark font-semibold text-sm hover:bg-primary/90 transition-all duration-200 hover:scale-105"
          >
            <Mail size={16} />
            Get in Touch
          </a>
          <a
            href="https://github.com/Juhilkumar"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full glass-card text-text-primary text-sm font-medium hover:border-primary/30 transition-all duration-200 hover:scale-105"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/juhilzalavadiya/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full glass-card text-text-primary text-sm font-medium hover:border-primary/30 transition-all duration-200 hover:scale-105"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </motion.div>

        <motion.div
          className="flex justify-center gap-6 text-text-secondary text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { number: '5+', label: 'Years Experience' },
            { number: '7+', label: 'Projects Built' },
            { number: '10+', label: 'Certifications' },
          ].map(({ number, label }) => (
            <div key={label} className="glass-card px-4 py-3 text-center min-w-[100px]">
              <div className="text-2xl font-bold text-primary">{number}</div>
              <div className="text-xs text-text-secondary mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-secondary animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  )
}
