import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, ExternalLink, Linkedin } from 'lucide-react'
import { certifications } from '../data/certifications'

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="certifications" ref={ref} className="py-20 px-4 lg:px-12 bg-dark-2/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Achievements & Certifications</h2>
          <div className="section-line" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
              className="glass-card-hover p-5"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Award size={16} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-text-primary text-sm font-medium hover:text-primary transition-colors flex items-start gap-1 leading-snug"
                    >
                      <span>{cert.title}</span>
                      <ExternalLink size={11} className="flex-shrink-0 mt-0.5 opacity-60" />
                    </a>
                  ) : (
                    <p className="text-text-primary text-sm font-medium leading-snug">{cert.title}</p>
                  )}
                  <p className="text-text-secondary text-xs mt-1">{cert.issuer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="https://www.linkedin.com/in/juhil-zalavadiya-07/details/certifications/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 glass-card text-text-primary text-sm font-medium hover:border-primary/30 hover:text-primary transition-all duration-200 rounded-full"
          >
            <Linkedin size={16} />
            View All Certifications on LinkedIn
            <ExternalLink size={14} className="opacity-60" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
