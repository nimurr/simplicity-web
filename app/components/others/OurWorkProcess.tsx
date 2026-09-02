


const steps = [
    {
        number: '01',
        title: 'Discovery & Understanding',
        description:
            'We start by learning about your business, goals, challenges and market to gain',
    },
    {
        number: '02',
        title: 'Research & Analysis',
        description:
            'Our team analyzes data, processes, and competitors to identity opportunities',
    },
    {
        number: '03',
        title: 'Strategy Development',
        description:
            'We create a tailored actionable strategy aligned with your objective & growth plans.',
    },
]

export default function OurWorkProcess() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center">
                    <span className="inline-block rounded-lg bg-primary px-4 py-1.5 text-sm font-medium text-white">
                        Our Work Process
                    </span>
                    <h2 className="mt-5 max-w-lg font-serif text-3xl leading-tight text-[#2a1a4a] sm:text-4xl">
                        How We Deliver Business Consulting Solutions
                    </h2>
                </div>

                {/* Cards */}
                <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
                    {steps.map(({ number, title, description }) => (
                        <div key={number} className="relative rounded-2xl bg-[#f4f4f6] p-6 pb-14">
                            <h3 className="text-lg font-semibold text-[#2a1a4a]">{title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-gray-600">
                                {description}
                            </p>

                            {/* Number badge, protruding below the card, centered */}
                            <div className="absolute -bottom-9 left-1/2 flex h-[72px] w-[72px] -translate-x-1/2 items-center justify-center rounded-full border-[6px] border-white bg-[#f4f4f6] shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
                                <span className="font-serif text-2xl text-primary">{number}</span>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Progress timeline */}
                <div className="relative mt-10 h-6">
                    {/* Dashed line */}
                    <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 border-t-2 border-dashed border-primary/40" />

                    {/* End dots */}
                    <span className="absolute left-0 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
                    <span className="absolute right-0 top-1/2 h-2.5 w-2.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />

                    {/* Step dots, aligned under each card's number badge */}
                    {steps.map((step, i) => {
                        const positions = ['16.6667%', '50%', '83.3333%']
                        return (
                            <span
                                key={step.number}
                                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                                style={{ left: positions[i] }}
                            >
                                {/* Vertical tick connecting the dot to the timeline */}
                                <span className="absolute -top-3 left-1/2 h-3 w-px -translate-x-1/2 bg-primary/40" />
                                <span className="block h-2.5 w-2.5 rounded-full bg-primary" />
                            </span>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}