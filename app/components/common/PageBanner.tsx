import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

type BreadcrumbItem = {
    label: string
    href?: string // omit href on the last (current) item
}

interface PageBannerProps {
    title: string
    breadcrumbs: BreadcrumbItem[]
    image?: string
}

export default function PageBanner({
    title,
    breadcrumbs,
    image = '/Images/others/section-header-bg.jpg',
}: PageBannerProps) {
    return (
        <section className="relative flex h-[280px] w-full items-center justify-center overflow-hidden sm:h-[40vh] mt-14">
            {/* Background image */}
            <Image
                src={image}
                alt={title}
                fill
                priority
                className="object-cover object-center"
            />

            {/* Color overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/60 via-[#000000]/60 to-[#000000]/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2a1a4a]/60 via-primary/60 to-[#2a1a4a]/60" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-6">
                <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl">
                    {title}
                </h1>

                <div className="mt-5 flex items-center gap-1.5 rounded-lg bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-sm">
                    {breadcrumbs.map((crumb, i) => (
                        <span key={crumb.label} className="flex items-center gap-1.5">
                            {crumb.href ? (
                                <Link href={crumb.href} className="hover:text-primary transition-colors">
                                    {crumb.label}
                                </Link>
                            ) : (
                                <span className="text-white/80">{crumb.label}</span>
                            )}
                            {i < breadcrumbs.length - 1 && (
                                <ChevronRight size={14} className="text-white/50" />
                            )}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}