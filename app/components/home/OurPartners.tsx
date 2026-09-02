import Image from 'next/image'

const certifications = [
  { name: 'NIST', src: '/Images/Home/partners/1.png' },
  { name: 'Lean Six Sigma', src: '/Images/Home/partners/2.png' },
  { name: 'CSM', src: '/Images/Home/partners/3.png' },
  { name: 'ITIL 4 Foundation', src: '/Images/Home/partners/4.png' },
  { name: 'Google', src: '/Images/Home/partners/5.png' },
  { name: 'AWS', src: '/Images/Home/partners/6.png' },
]

export default function OurPartners() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading with side rules */}
        <div className="flex items-center gap-6">
          <span className="h-px flex-1 bg-gray-200" />
          <h3 className="whitespace-nowrap text-sm font-bold tracking-wide text-[#2a1a4a]">
            Framework, Standards &amp; Certifications
          </h3>
          <span className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Logo row */}
        <div className="mt-10 grid grid-cols-3 items-center gap-x-8 gap-y-10 sm:grid-cols-6">
          {certifications.map(({ name, src }) => (
            <div
              key={name}
              className="relative mx-auto h-12 w-full max-w-[140px] grayscale transition-all duration-200 hover:grayscale-0"
            >
              <Image
                src={src}
                alt={name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}