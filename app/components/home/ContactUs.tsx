'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export default function ContactUs() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                {/* Header */}
                <span className="inline-block rounded-lg bg-primary px-4 py-1.5 text-sm font-medium text-white">
                    Contact Us
                </span>
                <h2 className="mt-5 max-w-md font-serif text-3xl leading-tight text-[#2a1a4a] sm:text-4xl">
                    Let&apos;s Build Your Success Together
                </h2>

                <div className="mt-12 grid grid-cols-1 items-center gap-5 lg:grid-cols-2">
                    {/* Form */}
                    <form className="rounded-2xl bg-[#f4f4f6] p-6 sm:p-8">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <input
                                type="text"
                                placeholder="Name.."
                                className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#2a1a4a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40"
                            />
                            <input
                                type="email"
                                placeholder="Email.."
                                className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#2a1a4a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40"
                            />
                            <input
                                type="tel"
                                placeholder="Phone.."
                                className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#2a1a4a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40"
                            />
                            <select
                                defaultValue=""
                                className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                            >
                                <option value="" disabled>
                                    Select Option..
                                </option>
                                <option value="consulting">Enterprise Consulting</option>
                                <option value="transformation">Business Transformation</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <textarea
                            placeholder="Message.."
                            rows={6}
                            className="mt-4 w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#2a1a4a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40"
                        />

                        <button
                            type="submit"
                            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
                        >
                            Submit Now
                            <ArrowUpRight size={16} strokeWidth={2} />
                        </button>
                    </form>

                    <div className="relative mx-auto w-full">
                        <Image
                            src="/Images/Home/contact-form.png"
                            alt="Contact Us"
                            width={500}
                            height={375}
                            className="h-auto w-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}