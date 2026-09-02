import React from 'react'
import PageBanner from '../components/common/PageBanner'
import OurSolutions from '../components/home/OurSolutions'
import WhySimplicity from '../components/home/WhySimplicity'
import ContactUs from '../components/home/ContactUs'
import OurWorkProcess from '../components/others/OurWorkProcess'

export default function page() {
    return (
        <div>
            <PageBanner title="Solutions" breadcrumbs={[{ label: 'Home / Solutions' }]} />
            <OurSolutions />
            <OurWorkProcess />
            <WhySimplicity />
            <ContactUs />
        </div>
    )
}
