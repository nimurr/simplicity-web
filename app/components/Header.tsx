'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Image from 'next/image'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Clients', href: '/clients' },
  { label: 'Contact', href: '/contact' },
]

const HEADER_OFFSET = 100 // px to leave visible above the target section

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll-spy: watch each section and mark the active one
  useEffect(() => {
    const sectionIds = navItems
      .filter((item) => item.href.startsWith('#'))
      .map((item) => item.href.replace('#', ''))
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: `-${HEADER_OFFSET}px 0px -60% 0px`,
        threshold: 0,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const target = document.getElementById(targetId)

    if (target) {
      const top =
        target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
      window.scrollTo({ top, behavior: 'smooth' })
      window.history.pushState(null, '', href)
      setActiveSection(targetId)
    }

    setMobileOpen(false)
  }

  const isNavItemActive = (href: string) => {
    if (href.startsWith('#')) {
      return activeSection === href.replace('#', '')
    }
    if (href === '/') {
      return pathname === '/'
    }
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <header
      className={`fixed  left-0 right-0 z-50 transition-all duration-300 ease-in-out 
       
          `
      }
    >
      <div className="mx-auto bg-white px-[2%] py-3 flex items-center justify-between relative">
        {/* Logo */}
        <Link
          href="/"
          className={`font-bold tracking-tight transition-all duration-300 ${scrolled ? 'text-lg' : 'text-xl'
            } text-primary flex items-center gap-2`}
        >
          <Image
            src="/Images/logo/header_logo-removebg-preview.png"
            alt="AnonymtNorskNr"
            width={250}
            height={150}
            className="h-16 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems
            .filter((item) => item.label)
            .map((item) => {
              const isActive = isNavItemActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={` font-medium  duration-200 ${isActive ? 'text-primary' : 'text-secondary hover:text-primary'
                    }`}
                >
                  {item.label}
                </Link>
              )
            })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity duration-200"
          >
            Let’s Talk
            <ArrowUpRight size={18} strokeWidth={2} />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-secondary z-50"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <div
          className={`md:hidden absolute left-0 right-0 top-full mt-3 transition-all duration-300 ease-in-out origin-top ${mobileOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
            }`}
        >
          <nav className="flex flex-col gap-4 px-5 py-6  backdrop-blur-md rounded-2xl shadow-lg">
            {navItems
              .filter((item) => item.label)
              .map((item) => {
                const isActive = isNavItemActive(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    // onClick={(e) => handleNavClick(e, item.href)}
                    className={` font-medium transition-colors duration-200 ${isActive ? 'text-primary' : 'text-secondary hover:text-primary'
                      }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity duration-200"
            >
              Let’s Talk
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}