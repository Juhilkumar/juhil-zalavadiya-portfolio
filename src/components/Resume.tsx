import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Briefcase, GraduationCap } from 'lucide-react'
import { workExperience, education } from '../data/resume'

export default function Resume() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="resume" ref={ref} className="py-20 px-4 lg:px-12 bg-dark-2/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Resume</h2>
          <div className="section-line" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Work Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2 mb-6"
            >
              <Briefcase size={20} className="text-primary" />
              <h3 className="text-text-primary font-semibold text-lg">Work Experience</h3>
            </motion.div>

            <div className="space-y-4">
              {workExperience.map((job, i) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                  className="glass-card-hover p-5 border-l-2 border-primary/40"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="text-text-primary font-semibold text-sm">
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-primary transition-colors inline-flex items-center gap-1"
                      >
                        {job.company}
                        <ExternalLink size={12} className="opacity-60" />
                      </a>
                    </h4>
                  </div>
                  <p className="text-primary text-xs font-medium mb-2">{job.role}</p>
                  <p className="text-text-secondary text-xs leading-relaxed">{job.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2 mb-6"
            >
              <GraduationCap size={20} className="text-secondary" />
              <h3 className="text-text-primary font-semibold text-lg">Education</h3>
            </motion.div>

            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                  className="glass-card-hover p-5 border-l-2 border-secondary/40"
                >
                  <h4 className="text-text-primary font-semibold text-sm mb-1">
                    <a
                      href={edu.url}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-secondary transition-colors inline-flex items-center gap-1"
                    >
                      {edu.institution}
                      <ExternalLink size={12} className="opacity-60" />
                    </a>
                  </h4>
                  <div className="flex gap-3 text-xs text-text-secondary mb-2">
                    <span>{edu.period}</span>
                    <span>·</span>
                    <span>{edu.location}</span>
                  </div>
                  <p className="text-text-secondary text-xs mb-1">{edu.degree}</p>
                  <p className="text-secondary text-xs font-medium italic">{edu.field}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
