import { Menu, X, Github, Linkedin, Home, FileText, Code2, Award, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface HeaderProps {
  activeSection: string
  mobileNavOpen: boolean
  setMobileNavOpen: (open: boolean) => void
}

const navItems = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'resume', label: 'Resume', icon: FileText },
  { id: 'projects', label: 'Projects', icon: Code2 },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'contact', label: 'Contact', icon: Mail },
]

export default function Header({ activeSection, mobileNavOpen, setMobileNavOpen }: HeaderProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileNavOpen(false)
  }

  const SidebarContent = () => (
    <div className="flex flex-col h-full py-8 px-6">
      <div className="flex flex-col items-center mb-10">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-primary/30 ring-offset-2 ring-offset-dark">
            <img
              src="/assets/img/dp-img.png"
              alt="Juhil Zalavadiya"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-full animate-glow pointer-events-none" />
        </div>
        <h1 className="text-lg font-bold text-text-primary text-center leading-tight">
          Juhil Zalavadiya
        </h1>
        <p className="text-text-secondary text-xs mt-1">Full Stack Developer</p>
        <div className="flex gap-3 mt-4">
          <a
            href="https://www.linkedin.com/in/juhilzalavadiya/"
            target="_blank"
            rel="noreferrer"
            className="p-2 glass-card text-text-secondary hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://github.com/Juhilkumar"
            target="_blank"
            rel="noreferrer"
            className="p-2 glass-card text-text-secondary hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
        </div>
      </div>

      <nav className="flex-1">
        <ul className="space-y-1">
          {navItems.map(({ id, label, icon: Icon }) => {
            const isActive = activeSection === id
            return (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary/10 text-primary border border-primary/20'
                      : 'text-text-secondary hover:bg-white/5 hover:text-text-primary'
                  }`}
                >
                  <Icon size={16} />
                  {label}
                  {isActive && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="mt-auto pt-6 border-t border-white/5">
        <p className="text-xs text-text-secondary text-center">
          © 2024 Juhil Zalavadiya
        </p>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-full w-[280px] flex-col bg-dark-2/80 backdrop-blur-xl border-r border-white/5 z-40">
        <SidebarContent />
      </aside>

      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-dark-2/90 backdrop-blur-xl border-b border-white/5">
        <span className="text-text-primary font-semibold text-sm">Juhil Zalavadiya</span>
        <button
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="p-2 text-text-secondary hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {mobileNavOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-72 bg-dark-2/95 backdrop-blur-xl border-r border-white/5 z-40 lg:hidden"
          >
            <SidebarContent />
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}
