import React from 'react'
import ClientFeedback from '../components/home/ClientFeedback'
import PageBanner from '../components/common/PageBanner'

export default function page() {
  return (
    <div className=' '>
      <PageBanner title="Clients" breadcrumbs={[{ label: 'Home / Clients' }]} />

      <div className='min-h-[40vh] flex items-center justify-center'>
        <h2 className='text-primary text-3xl font-semibold'>Comming soon !!</h2>
      </div>
      <ClientFeedback />
    </div>
  )
}
