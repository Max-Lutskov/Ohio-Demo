<script setup lang="ts">
import { site } from '~/site.config'

const description = 'Employee-owned trucking company in Columbus, Ohio. Dry van, refrigerated, FTL, LTL, warehousing and cross docking since 2013. Now hiring CDL-A drivers.'

useSeoMeta({
  title: `${site.name} | Dry Van & Reefer Trucking in Columbus, OH`,
  description,
  ogTitle: site.name,
  ogDescription: description,
  ogImage: asset('/img/truck-1280.webp'),
  ogType: 'website',
})

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: site.name,
      description,
      foundingDate: String(site.founded),
      telephone: '+1-888-308-8997',
      email: site.email,
      image: asset('/img/truck-1280.webp'),
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        postalCode: site.address.zip,
        addressCountry: 'US',
      },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '17:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '14:00' },
      ],
      sameAs: [site.social.facebook, site.social.twitter],
    }),
  }],
})
</script>

<template>
  <DemoBar />
  <SiteHeader />
  <main>
    <HeroSection />
    <ServicesSection />
    <SafetySection />
    <TeamSection />
    <QuoteSection />
    <DriversSection />
    <ContactSection />
  </main>
  <MobileCta />
</template>
