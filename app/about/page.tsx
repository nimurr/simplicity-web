import React from 'react'
import PageBanner from '../components/common/PageBanner'
import AboutSimplicity from '../components/home/AboutSimplicity'
import OurPartners from '../components/home/OurPartners'
import WhatWeOffer from '../components/home/WhatWeOffer'
import ContactUs from '../components/home/ContactUs'
import OurWorkProcess from '../components/others/OurWorkProcess'

export default function page() {
  return (
    <div>
      <PageBanner title="About Us" breadcrumbs={[{ label: 'Home / About Us' }]} />
      <AboutSimplicity />
      <OurPartners />
      <WhatWeOffer />
      <OurWorkProcess />
      <ContactUs />
    </div>
  )
}
