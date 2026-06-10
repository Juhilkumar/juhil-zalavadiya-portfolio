import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'

type Filter = 'all' | 'major' | 'mini'

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('all')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  const filters: { key: Filter; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'major', label: 'Major Projects' },
    { key: 'mini', label: 'Mini Projects' },
  ]

  return (
    <section id="projects" ref={ref} className="py-20 px-4 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Projects</h2>
          <div className="section-line" />
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {filters.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === key
                  ? 'bg-primary text-dark'
                  : 'glass-card text-text-secondary hover:text-text-primary hover:border-primary/30'
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="group relative glass-card overflow-hidden"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-dark text-sm font-medium rounded-full hover:bg-primary/90 transition-colors"
                  >
                    <Github size={14} />
                    View Code
                  </a>
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-text-primary font-semibold text-sm mb-1">{project.title}</h4>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-text-secondary capitalize">{project.category} project</span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-text-secondary hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="https://github.com/Juhilkumar"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 glass-card text-text-primary text-sm font-medium hover:border-primary/30 hover:text-primary transition-all duration-200 rounded-full"
          >
            <Github size={16} />
            View All Projects on GitHub
            <ExternalLink size={14} className="opacity-60" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
