import Image from 'next/image'
import { Lightbulb, BarChart3, Users, Laptop2 } from 'lucide-react'

const purpleCards = [
    {
        icon: Lightbulb,
        title: 'Business-Focused Solutions',
        description: "Strategies aligned with each organization's priorities and challenges.",
        position: 'top-10 left-6 lg:left-24',
    },
    {
        icon: BarChart3,
        title: 'Insight-Driven Decisions',
        description: 'Using analytics and industry insight to support smarter decision-making.',
        position: 'bottom-8 left-2 lg:left-16',
    },
]

const darkCards = [
    {
        icon: Users,
        title: 'Enterprise Perspective',
        description: 'Connecting people, processes, technology and business strategy.',
        position: 'top-0 right-6 lg:right-48',
    },
    {
        icon: Laptop2,
        title: 'Execution-Oriented Approach',
        description: 'Moving beyond recommendations toward practical implementation and results',
        position: 'bottom-32 right-2 lg:right-32',
    },
]

export default function WhySimplicity() {
    return (
        <section className="relative overflow-hidden py-24">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#ee7873] via-[#8a4a5e] to-[#381F4B]" />

            {/* Background image, bottom-center, behind content */}
            <div className="absolute inset-x-0 bottom-0 z-0 h-[420px] w-full sm:h-[500px]">
                <Image
                    src="/Images/Home/why-simplicity-bg.png"
                    alt="Chess pieces on a board"
                    fill
                    className="object-contain object-bottom "
                />
            </div>

            {/* Gradient wash on top of the image, for legibility */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#ee7873]/80 via-[#8a4a5e]/40 to-[#381F4B]/85" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
                {/* Header */}
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div>
                        <span className="inline-block rounded-lg bg-primary px-4 py-1.5 text-sm font-medium text-white">
                            Why Simplicity?
                        </span>
                        <h2 className="mt-5 max-w-lg font-serif text-3xl leading-tight text-white sm:text-4xl">
                            Strategy Made Clear. Transformation Made Practical.
                        </h2>
                    </div>
                    <p className="max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
                        Clients choose us for our strategic clarity, disciplined
                        execution, &amp; commitment to results. We act as long-term
                        partners, helping organizations unlock new opportunities,
                        strengthen performance, &amp; stay ahead in a competitive market.
                    </p>
                </div>

                {/* Floating cards over the arch */}
                <div className="relative mt-16 h-auto sm:h-[460px] space-y-5">
                    {purpleCards.map(({ icon: Icon, title, description, position }) => (
                        <div
                            key={title}
                            className={`sm:absolute w-full sm:w-64 rounded-xl bg-gradient-to-r from-[#c8686c] to-[#381F4B] p-5  ${position}`}
                        >
                            <div className="flex items-start justify-between gap-3">
                                <h3 className="text-base font-semibold text-white">{title}</h3>
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                                    <Icon size={20} strokeWidth={1.75} />
                                </span>
                            </div>
                            <p className="mt-3 text-sm leading-relaxed text-white/70">
                                {description}
                            </p>
                        </div>
                    ))}

                    {darkCards.map(({ icon: Icon, title, description, position }) => (
                        <div
                            key={title}
                            className={`sm:absolute w-full sm:w-64 rounded-xl p-5 bg-gradient-to-r from-[#ee7873] to-[#5c3455] ${position}`}
                        >
                            <div className="flex items-center gap-3">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2a1a4a] text-white">
                                    <Icon size={20} strokeWidth={1.75} />
                                </span>
                                <h3 className="text-base font-semibold text-white">{title}</h3>
                            </div>
                            <p className="mt-3 text-sm leading-relaxed text-white/70">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}