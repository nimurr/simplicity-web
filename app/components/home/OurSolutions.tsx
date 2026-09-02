import { UserCog, BarChart3, Target, Lightbulb, Landmark, Maximize2, ArrowUpRight } from 'lucide-react'

const solutions = [
  {
    number: '01',
    icon: UserCog,
    title: 'Business Transformation',
    description: 'Strategy, operating models and organizational transformation',
  },
  {
    number: '02',
    icon: BarChart3,
    title: 'Business Analytics',
    description: 'Turning business data into practical and actionable insights.',
  },
  {
    number: '03',
    icon: Target,
    title: 'Strategic Planning',
    description: 'Building strategies that respond to changing markets and business challenges.',
  },
  {
    number: '04',
    icon: Lightbulb,
    title: 'Digital Transformation',
    description: 'Rethinking workflows, technology and how organizations create value.',
  },
  {
    number: '05',
    icon: Landmark,
    title: 'Finance Transformation',
    description: 'Helping finance organizations improve performance and operational efficiency.',
  },
  {
    number: '06',
    icon: Maximize2,
    title: 'Scalable Operations',
    description: 'Creating scalable and flexible approaches to service delivery.',
  },
]

export default function OurSolutions() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span className="inline-block rounded-lg bg-primary px-4 py-1.5 text-sm font-medium text-white">
            Our Solutions
          </span>
          <h2 className="mt-5 max-w-xl font-serif text-3xl leading-tight text-[#2a1a4a] sm:text-4xl">
            Solutions Designed Around Your Business
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map(({ number, icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-100 bg-[#fafafa] p-6"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <span className="font-serif text-3xl text-gray-200">{number}.</span>
              </div>

              <h3 className="mt-5 text-lg font-semibold text-[#1a1a1a]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {description}
              </p>

              <button className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary/90">
                Get Started
                <ArrowUpRight size={14} strokeWidth={2} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}