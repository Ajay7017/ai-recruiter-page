import React from 'react'
import Head from 'next/head'
import Header from './components/Header'
import Herosection from './components/Herosection'
import Footer from './components/Footer'
import AboutSection from './components/Aboutsection'
import TestimonialsSection from './components/Testimonialsection'
import PricingSection from './components/Pricingsection'
import FeaturesSection from './components/FeaturesSection'
import PriceComparison from './components/PriceComparison'
import ContactSection from './components/ContactSection'
import HowItWorksSection from './components/HowItWorksSection'
import FaqSection from './components/FaqSection'
import CtaSection from './components/CtaSection'
import HeroSectionAnimation from './components/HeroSectionAnimation'

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Recruiter – Hire Smarter with AI</title>
      </Head>
      <header>
        <Header />
      </header>
      <main className ="pt-20 = 80px">
        {/* Hero comes first – for initial attention */}
        <Herosection />
        <HeroSectionAnimation />
        {/* How It Works – educate right after hero */}
        <HowItWorksSection />
        {/* About – brief insight into what & why */}
        <AboutSection />
        {/* Features – showcase value after the intro */}
        <FeaturesSection />
        {/* Testimonials – add social proof */}
        <TestimonialsSection />
        {/* Pricing & comparison – show value & clarity */}
        <PricingSection />
        <PriceComparison />
        {/* FAQs – handle objections before call to action */}
        <FaqSection />
        {/* CTA – strong conversion hook */}
        <CtaSection />
        {/* Contact – final touch */}
        <ContactSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}