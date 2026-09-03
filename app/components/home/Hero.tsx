import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative flex min-h-[70vh] md:min-h-[90vh] w-full items-center overflow-hidden top-20">
      {/* Background image */}
      <Image
        src="/Images/Home/Hero_banner.png"
        alt="Enterprise consultant leading a discussion"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark base for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c1120]/85 via-[#0c1120]/50 to-[#0c1120]/10" />

      {/* Primary-color light wash on top, for brand tint */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 via-transparent to-primary/80 mix-blend-overlay" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="inline-block rounded-lg border border-primary/50 px-4 py-1.5 text-sm text-primary">
            Enterprise Consulting
          </span>

          <h1 className="mt-6 font-serif text-4xl leading-[1.15] text-foreground sm:text-5xl lg:text-6xl">
            Making Your Enterprise Run Simply
          </h1>

          <p className="mt-5 max-w-md text-base text-muted sm:text-lg">
            Orchestrating high-performance enterprise platforms, AI agent
            governance, and end-to-end digital transformation.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 rounded-lg cursor-pointer bg-primary px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-primary/90">
            Explore Our Solutions
            <ArrowUpRight size={18} strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  )
}