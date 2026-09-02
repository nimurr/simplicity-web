import AboutSimplicity from "./components/home/AboutSimplicity";
import ClientFeedback from "./components/home/ClientFeedback";
import ContactUs from "./components/home/ContactUs";
import Hero from "./components/home/Hero";
import OurPartners from "./components/home/OurPartners";
import OurSolutions from "./components/home/OurSolutions";
import WhatWeOffer from "./components/home/WhatWeOffer";
import WhySimplicity from "./components/home/WhySimplicity";


export default function Home() {
  return (
    <div className="min-h-[100vh] ">
      <Hero />
      <WhatWeOffer />
      <AboutSimplicity />
      <div className="h-2 border-b-2 border-dashed border-secondary"></div>
      <OurPartners />
      <WhySimplicity />
      <OurSolutions />
      <ClientFeedback />
      <ContactUs />
    </div>
  );
}
