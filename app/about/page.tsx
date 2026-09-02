import React from 'react'
import PageBanner from '../components/common/PageBanner'

export default function page() {
  return (
    <div>
      <PageBanner title="About Us" breadcrumbs={[{ label: 'Home / About Us' }]} />
        
    </div>
  )
}
