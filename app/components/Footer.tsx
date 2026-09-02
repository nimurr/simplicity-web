'use client'
import React from 'react'
import { Phone, Mail, MapPin, ChevronsRight, Send } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Clients', href: '#clients' },
    { label: 'Contacts', href: '#contact' },
]

const privacyLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'State Privacy Rights', href: '/state-privacy-rights' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
    { label: 'Do Not call Policy', href: '/do-not-call-policy' },
    { label: 'SMS Privacy Policy', href: '/sms-privacy-policy' },
]

const socials = [
    {
        label: 'Facebook',
        href: 'https://facebook.com',
        svg: (
            <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" />
        ),
    },
    {
        label: 'Instagram',
        href: 'https://instagram.com',
        svg: (
            <path d="M12 2c2.7 0 3.1 0 4.1.1 1.1 0 1.8.2 2.3.4a4.6 4.6 0 0 1 1.7 1.1 4.6 4.6 0 0 1 1.1 1.7c.2.5.4 1.2.4 2.3.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c0 1.1-.2 1.8-.4 2.3a4.6 4.6 0 0 1-1.1 1.7 4.6 4.6 0 0 1-1.7 1.1c-.5.2-1.2.4-2.3.4-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1.1 0-1.8-.2-2.3-.4a4.6 4.6 0 0 1-1.7-1.1 4.6 4.6 0 0 1-1.1-1.7c-.2-.5-.4-1.2-.4-2.3C2 15.1 2 14.7 2 12s0-3.1.1-4.1c0-1.1.2-1.8.4-2.3a4.6 4.6 0 0 1 1.1-1.7A4.6 4.6 0 0 1 5.3 2.8c.5-.2 1.2-.4 2.3-.4C8.6 2 9 2 12 2zm0 1.8c-2.6 0-3 0-4 .1-.9 0-1.4.2-1.7.3-.4.1-.7.3-1 .7-.4.3-.6.6-.7 1-.1.3-.3.8-.3 1.7-.1 1-.1 1.4-.1 4s0 3 .1 4c0 .9.2 1.4.3 1.7.1.4.3.7.7 1 .3.4.6.6 1 .7.3.1.8.3 1.7.3 1 .1 1.4.1 4 .1s3 0 4-.1c.9 0 1.4-.2 1.7-.3.4-.1.7-.3 1-.7.4-.3.6-.6.7-1 .1-.3.3-.8.3-1.7.1-1 .1-1.4.1-4s0-3-.1-4c0-.9-.2-1.4-.3-1.7a1.9 1.9 0 0 0-.7-1 1.9 1.9 0 0 0-1-.7c-.3-.1-.8-.3-1.7-.3-1-.1-1.4-.1-4-.1zm0 3.5a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4zm0 1.8a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8zm5.9-2a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z" />
        ),
    },
    {
        label: 'X',
        href: 'https://x.com',
        svg: (
            <path d="M13.6 10.6 20.9 2h-1.7l-6.3 7.5L7.9 2H2l7.6 11L2 22h1.7l6.7-8 5.4 8H22l-8.4-11.4zm-2.4 2.8-.8-1.1L4.3 3.3h2.7l5 7 .8 1.1 6.4 9.2h-2.7l-5.3-7.2z" />
        ),
    },
    {
        label: 'LinkedIn',
        href: 'https://linkedin.com',
        svg: (
            <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V9h3v10zM6.5 7.7A1.7 1.7 0 1 1 6.5 4.3a1.7 1.7 0 0 1 0 3.4zM20 19h-3v-5.4c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V19h-3V9h2.9v1.4h.1a3.1 3.1 0 0 1 2.8-1.6c3 0 3.6 2 3.6 4.6V19z" />
        ),
    },
]
export default function Footer() {
    return (
        <div className="bg-[#262626]">
            <footer className="relative container mx-auto w-full pt-16 sm:pt-20 overflow-hidden">
               
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-14">
                        {/* Brand */}
                        <div className="flex flex-col gap-4">
                            <Link href="/" className="flex flex-col items-start gap-2">
                                <Image
                                    src="/Images/logo/footer_logo.png"
                                    alt="Simplicity"
                                    width={200}
                                    height={200}
                                    className="rounded-full"
                                />
                                
                            </Link>
                            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                                Making your enterprise run simply.
                                <br />
                                Helping Organizations simplify strategy, technology &amp;
                                transformation.
                            </p>
                            <div className="flex items-center gap-3 mt-1">
                                {socials.map(({ svg, href, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        aria-label={label}
                                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-gray-300 transition-colors hover:bg-primary hover:text-white"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}>
                                            {svg}
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick links */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-sm font-semibold text-white tracking-wide">
                                Quick links
                            </h4>
                            <ul className="flex flex-col gap-3">
                                {quickLinks.map((link) => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                                        >
                                            <ChevronsRight size={14} className="text-gray-500" />
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Privacy & Legal */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-sm font-semibold text-white tracking-wide">
                                Privacy &amp; Legal
                            </h4>
                            <ul className="flex flex-col gap-3">
                                {privacyLinks.map((link) => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                                        >
                                            <ChevronsRight size={14} className="text-gray-500" />
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-sm font-semibold text-white tracking-wide">
                                Contact
                            </h4>
                            <ul className="flex flex-col gap-3">
                                <li>
                                    <a
                                        href="tel:9012799391"
                                        className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                                    >
                                        <Phone size={16} className="text-primary shrink-0" />
                                        901-279-9391
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:tdickson@simplicitybytracyinc.com"
                                        className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                                    >
                                        <Mail size={16} className="text-primary shrink-0" />
                                        tdickson@simplicitybytracyinc.com
                                    </a>
                                </li>
                                <li className="flex items-start gap-2.5 text-sm text-gray-400">
                                    <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                                    <span>
                                        608 S 17th St
                                        <br />
                                        West Memphis, AR 72301
                                    </span>
                                </li>
                            </ul>

                            {/* Subscribe */}
                            <div className="flex items-stretch mt-1 rounded-lg bg-white/5 overflow-hidden pr-1">
                                <span className="flex items-center rounded-lg bg-primary px-4 text-xs font-semibold text-white">
                                    Subscribe
                                </span>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 bg-transparent px-3 py-2 text-gray-300 placeholder:text-gray-500 focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    aria-label="Submit"
                                    className="flex items-center justify-center px-2 text-gray-400 hover:text-primary transition-colors"
                                >
                                    <Send size={14} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px w-full bg-white/[0.06]" />

                    {/* Bottom bar */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6">
                        <p className="text-xs text-gray-500 text-center sm:text-left">
                            © 2026 <span className="font-semibold text-gray-300">Simplicity by TracyINC</span>. All Rights Reserved.
                        </p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                            <a href="#career" className="hover:text-primary transition-colors">Career</a>
                            <span className="text-gray-700">/</span>
                            <a href="#privacy-policy" className="hover:text-primary transition-colors">Privacy & Policy</a>
                            <span className="text-gray-700">/</span>
                            <a href="#faqs" className="hover:text-primary transition-colors">FAQs</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}