'use client'

import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Have Question ?',
    value: 'Free +880 (123) 456 789',
    href: 'tel:+8801234456789',
  },
  {
    icon: Mail,
    label: 'Write Email',
    value: 'support@rovix.com',
    href: 'mailto:support@rovix.com',
  },
  {
    icon: MapPin,
    label: 'Our Location',
    value: '123 Fifth Avenue, New York',
    href: 'https://maps.google.com/?q=123+Fifth+Avenue,+New+York',
  },
]

export default function ContactUsPage() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span className="inline-block rounded-lg bg-primary px-4 py-1.5 text-sm font-medium text-white">
            Contact Us
          </span>
          <h2 className="mt-5 max-w-lg font-serif text-3xl leading-tight text-[#2a1a4a] sm:text-4xl">
            Let&apos;s Discuss How We Can Help You Succeed
          </h2>
        </div>

        {/* Map + Form */}
        <div className="mt-16 grid grid-cols-1 gap-6 rounded-2xl bg-[#f4f4f6] p-3 lg:grid-cols-2">
          {/* Map */}
          <div className="min-h-[420px] overflow-hidden rounded-xl">
            <iframe
              title="Office location map"
              src="https://www.google.com/maps?q=123+Fifth+Avenue,+New+York&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 420 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full grayscale-[15%]"
            />
          </div>

          {/* Form */}
          <form className="p-3 sm:p-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#2a1a4a]">
                  Your Name*
                </label>
                <input
                  type="text"
                  placeholder="Name.."
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#2a1a4a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#2a1a4a]">
                  Your Email*
                </label>
                <input
                  type="email"
                  placeholder="Email.."
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#2a1a4a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#2a1a4a]">
                  Phone No*
                </label>
                <input
                  type="tel"
                  placeholder="Phone.."
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#2a1a4a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#2a1a4a]">
                  Choose a Option*
                </label>
                <select
                  defaultValue=""
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                  <option value="" disabled>
                    Select Option..
                  </option>
                  <option value="consulting">Enterprise Consulting</option>
                  <option value="transformation">Business Transformation</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block text-sm font-medium text-[#2a1a4a]">
                Write Message*
              </label>
              <textarea
                placeholder="Message.."
                rows={6}
                className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#2a1a4a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            <button
              type="submit"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
            >
              Submit Now
              <ArrowUpRight size={16} strokeWidth={2} />
            </button>
          </form>
        </div>

        {/* Info strip */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {contactInfo.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-4 rounded-xl bg-[#f4f4f6] px-5 py-5 transition-colors hover:bg-[#eeeef0]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                <Icon size={18} strokeWidth={2} />
              </span>
              <span>
                <span className="block text-xs text-gray-400">{label}</span>
                <span className="block text-sm font-semibold text-[#2a1a4a]">
                  {value}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}