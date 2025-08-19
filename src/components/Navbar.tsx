'use client'
import { useEffect, useState } from 'react'

const sections = ['home', 'about', 'projects', 'skills', 'education', 'contact']

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -20% 0px',
      }
    )

    const targets = sections.map((id) => document.getElementById(id)).filter(Boolean)
    targets.forEach((section) => observer.observe(section!))

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-purple-700">Pardhavi</h1>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          {sections.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`capitalize transition-colors duration-300 ${
                  activeSection === item
                    ? 'text-purple-600 font-semibold'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
                aria-current={activeSection === item ? 'page' : undefined}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
