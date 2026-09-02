
import Image from 'next/image'
import { Users, Puzzle, Globe2 } from 'lucide-react'

const offerings = [
    {
        number: '01',
        icon: Users,
        title: 'Human Capital',
        description:
            'Helping organizations strengthen talent, leadership, organizational change, and workforce strategies.',
        image: '/Images/Home/what-we-offer-2.png',
        imagePosition: 'right-bottom' as const,
        supportIconsImage: '/Images/Home/sp-1.png',
    },
    {
        number: '02',
        icon: Puzzle,
        title: 'Strategy & Operations',
        description:
            'Turning complex business challenges into practical strategies and executable plans.',
        image: '/Images/Home/what-we-offer-1.png',
        imagePosition: 'top' as const,
        supportIconsImage: '/Images/Home/sp-2.png',
    },
    {
        number: '03',
        icon: Globe2,
        title: 'AI & Enterprise Transformation',
        description:
            'Enterprise Platform Migrations, including SAP RISE and Oracle Cloud, plus Agentic AI Governance and Digital Asset Deployment.',
        image: '/Images/Home/what-we-offer-3.png',
        imagePosition: 'left-bottom' as const,
        supportIconsImage: '/Images/Home/sp-3.png',
    },
]

export default function WhatWeOffer() {
    return (
        <section className="bg-[#f4f4f6] py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                {/* Header */}
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <span className="inline-block rounded-lg bg-primary px-4 py-1.5 text-sm font-medium text-white">
                            What We Offer
                        </span>
                        <h2 className="mt-5 max-w-lg font-serif text-3xl leading-tight text-[#2a1a4a] sm:text-4xl">
                            Enterprise Solutions Built for Meaningful Transformation
                        </h2>
                    </div>
                    <p className="max-w-sm text-sm text-gray-500 sm:text-base">
                        We combine strategy, technology and organizational expertise to
                        help businesses operate smarter and move forward with confidence.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {offerings.map(({ number, icon: Icon, title, description, image, imagePosition, supportIconsImage }, i) => (
                        <div
                            key={title}
                            className={`relative overflow-hidden h-96 rounded-2xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] ${i === 1 ? 'md:-mt-10' : ''
                                }`}
                        >
                            {imagePosition === 'top' && (
                                <div className="relative h-40 w-full">
                                    <Image src={image} alt={title} fill className="object-cover" />
                                </div>
                            )}

                            <div className="relative px-6 pb-16 pt-6">
                                <h3 className="font-serif text-lg text-[#2a1a4a]">{title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                                    {description}
                                </p>
                            </div>

                            <span
                                className={`absolute bottom-6 font-serif text-4xl text-gray-200 ${imagePosition === 'left-bottom' ? 'right-6' : 'left-6'
                                    }`}
                            >
                                {number}.
                            </span>

                            {imagePosition === 'right-bottom' && (
                                <div className="absolute -bottom-20 right-0 h-[300px] w-[250px]">
                                    <Image src={image} alt={title} fill className="object-fill" />
                                </div>
                            )}

                            {imagePosition === 'left-bottom' && (
                                <div className="absolute -bottom-20 left-0 h-[300px] w-[250px]">
                                    <Image src={image} alt={title} fill className="object-fill" />
                                </div>
                            )}

                            {/* Support icon badge — sits on the image/card boundary */}
                            <div
                                className={`absolute z-20 h-20 w-20 ${imagePosition === 'top'
                                    ? 'left-1/2 top-24 -translate-x-1/2'
                                    : imagePosition === 'left-bottom'
                                        ? 'bottom-20 left-1/5 -translate-x-1/4'
                                        : 'bottom-20 right-1/5 -translate-x-1/4'
                                    }`}
                            >
                                <Image
                                    src={supportIconsImage}
                                    alt={`${title} icon`}
                                    fill
                                    className="object-contain drop-shadow-md"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}