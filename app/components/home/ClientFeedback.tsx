'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Quote, Star } from 'lucide-react'

const testimonials = [
    {
        rating: '4.5 out of 5',
        quote:
            'Streamlined legacy enterprise operations across 12 business units, reducing execution bottlenecks by 30% while maintaining NIST compliance.',
        highlight: '30% Reduction in Execution Bottlenecks',
        name: 'Jonathan William',
        role: 'Business Analyst',
        avatar: '/Images/Home/user-avt-1.png',
    },
    {
        rating: '4.5 out of 5',
        quote:
            'Modernized complex SAP RISE and Oracle Cloud environments, connecting workflows across departments with a scalable foundation for growth.',
        highlight: 'Enterprise Platform Modernization',
        name: 'Emily Carter',
        role: 'Founder & CEO',
        avatar: '/Images/Home/user-avt-1.png',
    },
    {
        rating: '5 out of 5',
        quote:
            'Turned a scattered set of data sources into a single source of truth, giving leadership real-time visibility into performance.',
        highlight: 'Unified Business Analytics',
        name: 'Priya Nandan',
        role: 'VP of Operations',
        avatar: '/Images/Home/user-avt-1.png',
    },
]

const orbitAvatars = [
    { src: '/Images/Home/avatars/orbit-1.jpg', className: 'left-2 top-6', ring: 'ring-amber-400' },
    { src: '/Images/Home/avatars/orbit-2.jpg', className: 'right-0 top-24', ring: 'ring-primary' },
    { src: '/Images/Home/avatars/orbit-3.jpg', className: 'left-0 bottom-6', ring: 'ring-sky-300' },
]

export default function ClientFeedback() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="bg-[#f4f4f6] py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center">
                    <span className="inline-block rounded-lg bg-primary px-4 py-1.5 text-sm font-medium text-white">
                        Clients Feedback
                    </span>
                    <h2 className="mt-5 max-w-lg font-serif text-3xl leading-tight text-[#2a1a4a] sm:text-4xl">
                        Client Experiences That Speak for Themselves
                    </h2>
                </div>

                <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1fr]">
                    {/* Left: portrait with orbiting avatars */}
                    <div className="relative mx-auto ">
                        <Image
                            src="/Images/Home/client-feedback.png"
                            alt="Client portrait"
                            width={500}
                            height={500}
                        />

                    </div>

                    {/* Right: carousel */}
                    <div>
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-700 ease-in-out"
                                style={{ transform: `translateX(-${index * 70}%)` }}
                            >
                                {testimonials.map((t) => (
                                    <div key={t.name} className="w-[85%] shrink-0 px-1.5 sm:w-[70%] sm:px-2">
                                        <div className="rounded-2xl bg-white p-6">
                                            <div className="flex items-start justify-between">
                                                <span className="text-sm text-gray-400">{t.rating}</span>
                                                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
                                                    <Quote size={16} fill="white" strokeWidth={0} />
                                                </span>
                                            </div>

                                            <div className="mt-4 rounded-xl bg-[#f4f4f6] p-4">
                                                <p className="text-sm font-medium text-[#2a1a4a]">
                                                    {t.highlight}
                                                </p>
                                                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                                                    {t.quote}
                                                </p>
                                            </div>

                                            <div className="mt-4 flex items-center gap-3 rounded-xl bg-[#2a1a4a] p-3">
                                                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg">
                                                    <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                                                </div>
                                                <div>
                                                    <p className="text-xs text-white/60">{t.role}</p>
                                                    <p className="text-sm font-semibold text-white">{t.name}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Dot indicators, no arrows */}
                        <div className="mt-6 flex items-center justify-start gap-2">
                            {testimonials.map((t, i) => (
                                <button
                                    key={t.name}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                    onClick={() => setIndex(i)}
                                    className={`h-2.5 rounded-full transition-all duration-300 ${i === index ? 'w-6 bg-primary' : 'w-2.5 bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}