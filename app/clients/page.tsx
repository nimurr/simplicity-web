import React from 'react'
import ClientFeedback from '../components/home/ClientFeedback'
import PageBanner from '../components/common/PageBanner'
import OurClients from '../components/home/OurClients'

export default function page() {
  return (
    <div className=' '>
      <PageBanner title="Clients" breadcrumbs={[{ label: 'Home / Clients' }]} />

      <div className='min-h-[40vh] py-10 md:py-20 '>
        <div className='flex items-center justify-center'>
          <div className=" px-6 lg:px-10">
            <span className="block w-36 text-center mx-auto rounded-lg bg-primary px-4 py-1.5 text-sm font-medium text-white">
              Why Simplicity?
            </span>
            <h2 className="mt-5 max-w-lg text-center font-serif text-3xl leading-tight text-secondary sm:text-4xl">
              Strategy Made Clear. Transformation Made Practical.
            </h2>
          </div>
        </div>
        <OurClients />
      </div>
      <ClientFeedback />
    </div>
  )
}
