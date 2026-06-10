import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Mail, Phone, Github, Linkedin } from 'lucide-react'

const contactItems = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Canada 🇨🇦',
    href: null as string | null,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'juhil.zalavadiya.it@gmail.com',
    href: 'mailto:juhil.zalavadiya.it@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (902)-989-7734',
    href: 'tel:+19029897734',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" ref={ref} className="py-20 px-4 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Contact</h2>
          <div className="section-line" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-text-primary text-xl font-semibold">Let's Work Together</h3>
            <p className="text-text-secondary leading-relaxed text-sm">
              I'm currently open to new opportunities. Whether you have a project, a question,
              or just want to say hello — my inbox is always open!
            </p>

            <div className="space-y-3 pt-2">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="glass-card p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-text-secondary text-xs">{label}</p>
                    {href ? (
                      <a href={href} className="text-text-primary text-sm font-medium hover:text-primary transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-text-primary text-sm font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 text-center"
          >
            <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary/30 mx-auto mb-4">
              <img src="/assets/img/dp-img.png" alt="Juhil" className="w-full h-full object-cover" />
            </div>
            <h4 className="text-text-primary font-semibold mb-1">Juhil Zalavadiya</h4>
            <p className="text-text-secondary text-sm mb-6">Full Stack Software Developer</p>

            <div className="flex justify-center gap-3">
              <a
                href="https://www.linkedin.com/in/juhilzalavadiya/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#0A66C2]/20 border border-[#0A66C2]/30 text-[#0A66C2] rounded-xl text-sm font-medium hover:bg-[#0A66C2]/30 transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href="https://github.com/Juhilkumar"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 glass-card text-text-primary rounded-xl text-sm font-medium hover:border-primary/30 hover:text-primary transition-all"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-text-secondary text-sm">
            © 2024 Juhil Zalavadiya · Built with React, Vite & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </section>
  )
}
