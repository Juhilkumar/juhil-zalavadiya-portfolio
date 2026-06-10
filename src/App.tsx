import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop'

const sections = ['hero', 'about', 'resume', 'projects', 'certifications', 'contact']

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.3 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <div className="flex min-h-screen bg-dark font-sans">
      <Header
        activeSection={activeSection}
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />

      {mobileNavOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          onClick={() => setMobileNavOpen(false)}
        />
      )}

      <main className="flex-1 lg:ml-[280px] overflow-x-hidden">
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <BackToTop />
    </div>
  )
}
