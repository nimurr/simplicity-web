import React from 'react'
import ContactUsPage from '../components/others/ContactUsPage'
import PageBanner from '../components/common/PageBanner'

export default function page() {
  return (
    <div>
        <PageBanner title="Contact Us" breadcrumbs={[{ label: 'Home / Contact Us' }]} />
        <ContactUsPage />
    </div>
  )
}
