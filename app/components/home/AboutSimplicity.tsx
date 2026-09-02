import Image from 'next/image'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'

const checklist = [
    'Clear direction for complex business challenges.',
    'Technology-Driven Transformation',
    'Practical solutions designed around modern enterprise needs.',
    'Turning strategy and insights into actionable business outcomes',
]

export default function AboutSimplicity() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 md:grid-cols-2 lg:px-10">
                {/* Left: image composition */}
                <div className="relative mx-auto w-full">
                    <Image
                        src="/Images/Home/about-simplicity.png"
                        alt="About Simplicity"
                        width={500}
                        height={500}
                        className="w-full"
                    />
                </div>

                {/* Right: content */}
                <div>
                    <span className="inline-block rounded-lg bg-primary px-4 py-1.5 text-sm font-medium text-white">
                        About Simplicity
                    </span>

                    <h2 className="mt-5 font-serif text-3xl leading-tight text-[#2a1a4a] sm:text-4xl">
                        Making Complex Business Challenges Simpler
                    </h2>

                    <p className="mt-5 text-sm leading-relaxed text-gray-500 sm:text-base">
                        Simplicity by Tracy INC helps organizations transform the way
                        they operate, make decisions and use technology. We bring
                        together strategy, business transformation, analytics and
                        enterprise technology to create practical solutions focused on
                        measurable business outcomes.
                    </p>

                    <ul className="mt-6 space-y-3">
                        {checklist.map((item) => (
                            <li key={item} className="flex items-start gap-2.5">
                                <CheckCircle2
                                    size={18}
                                    strokeWidth={2}
                                    className="mt-0.5 shrink-0 text-primary"
                                />
                                <span className="text-sm font-medium text-[#2a1a4a] sm:text-base">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <button className="mt-8 inline-flex items-center gap-2 rounded-lg cursor-pointer bg-primary px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-primary/90">
                        Explore Our Solutions
                        <ArrowUpRight size={18} strokeWidth={2} />
                    </button>
                </div>
            </div>
        </section>
    )
}