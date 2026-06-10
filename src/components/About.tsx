import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const techStack = [
  'Java', 'Spring Boot', 'React.js', 'Node.js',
  'TypeScript', 'PostgreSQL', 'MongoDB', 'Docker',
  'Kubernetes', 'AWS', 'Selenium', 'Jenkins',
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-20 px-4 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="section-title">About</h2>
        <div className="section-line" />

        <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-2 inline-block">
              <img
                src="/assets/img/profile-img.jpg"
                alt="Juhil Zalavadiya"
                className="rounded-xl w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-xl border border-primary/20 pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-5"
          >
            <p className="text-text-secondary leading-relaxed">
              I'm Juhil Zalavadiya, a computer science graduate with a passion for web development.
              I hold a Bachelor's in IT Engineering from Gujarat Technological University and a Master's
              in Applied Computer Science from Dalhousie University. Throughout my professional journey
              at companies like Outlier, Upwork, Verafin Solutions, and Global Relay, I have honed my
              skills in creating user-friendly web applications, specializing in software development. 👨🏻‍💻
            </p>
            <p className="text-text-secondary leading-relaxed">
              I am well-versed in Java, Spring Boot, React.js, Node.js, TypeScript, PostgresSQL, and
              MongoDB, with expertise in Selenium and Cucumber testing. Additionally, I demonstrate
              mastery in Design Patterns, SOLID principles, Clean Coding, Refactoring Techniques, and
              cloud technologies. 🛠️
            </p>
            <p className="text-text-secondary leading-relaxed">
              I approach every project with a drive for excellence, delivering innovative solutions.
              With a solid foundation and a passion for learning, I'm excited to contribute to
              groundbreaking projects that make a positive impact. Feel free to explore my portfolio
              and get in touch for potential collaborations. ☕️
            </p>

            <div className="pt-2">
              <p className="text-text-primary text-sm font-semibold mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full glass-card text-primary border border-primary/20 hover:bg-primary/10 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
