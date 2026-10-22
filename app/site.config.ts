// All demo content lives here — swap this file to re-skin the template for another carrier.
export const site = {
  name: 'Ohio Transit Company',
  short: 'OTC',
  tagline: 'Employee-owned trucking out of Columbus, Ohio',
  founded: 2013,
  phone: '(888) 308-8997',
  phoneHref: 'tel:+18883088997',
  email: 'info@ohiotransitcompany.com',
  address: { street: '50 Kingston Ave', city: 'Columbus', region: 'OH', zip: '43207' },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=50+Kingston+Ave+Columbus+OH+43207',
  hours: [
    { days: 'Mon – Fri', time: '8:00 AM – 5:00 PM' },
    { days: 'Saturday', time: '9:00 AM – 2:00 PM' },
    { days: 'Sunday', time: 'Closed' },
  ],
  social: {
    facebook: 'https://www.facebook.com/Ohiotransitcompany/',
    twitter: 'https://twitter.com/inc_ohio',
  },
  stats: [
    { value: '2013', label: 'Hauling since' },
    { value: '~200', label: 'Trucks & trailers' },
    { value: '549', label: 'Shippers served' },
    { value: '4×', label: 'Fleet inspections a year' },
  ],
  services: [
    { icon: 'van', title: 'Dry Van', text: 'Closed, sealed and locked trailers that keep freight safe from weather and theft. Ideal for anything that isn’t temperature-sensitive.' },
    { icon: 'snow', title: 'Refrigerated (Reefer)', text: 'Sealed, temperature-controlled trailers for produce, frozen and perishable loads — the freight OTC was built on.' },
    { icon: 'truck', title: 'Full Truckload', text: 'Dedicated capacity for one or more full loads, matched to the right equipment for the job.' },
    { icon: 'boxes', title: 'Less Than Truckload', text: 'Ship partial loads without paying for the whole trailer, with the same tracking and service.' },
    { icon: 'warehouse', title: 'Warehousing', text: 'Secure storage in Columbus for freight you need to hold now and ship later.' },
    { icon: 'swap', title: 'Cross Docking', text: 'Transfer freight between inbound and outbound trailers fast, with minimal dwell time.' },
  ],
  freight: ['Produce', 'Frozen foods', 'Refrigerated goods', 'Dry goods', 'Food packaging', 'Fragile items'],
  safety: [
    { title: 'Daily', text: 'Pre-trip and post-trip inspection on every run.' },
    { title: 'Quarterly', text: 'Scheduled maintenance across the whole fleet.' },
    { title: 'Every September', text: 'Full-fleet check — every unit, down to every tire — before winter roads.' },
    { title: 'Yearly', text: 'Annual safety inspection on top of everything above.' },
  ],
  clients: ['Amazon', 'XPO Logistics', 'C.H. Robinson', 'UPS', 'USPS', 'Sanson Produce', 'Triple T Transport', 'EBX Logistics'],
  team: [
    { name: 'Guled Nur', role: 'Director of Operations', since: 2013, quote: 'I have been fortunate to be part of the growth as a company. I have never dealt with a company that stresses integrity, customer service, and a team atmosphere like OTC.' },
    { name: 'Raage Hassan', role: 'Amazon Operations Manager', since: 2015, quote: 'I never dealt with a company that emphasizes cooperation, support, and empowerment the way OTC does.' },
    { name: 'Hamza Mohamed', role: 'Chief Operating Officer', quote: 'OTC treats all its staff and owner-operators as if they are family. That is hard to come by in this industry.' },
  ],
  equipment: ['Dry van', 'Reefer', 'Flatbed', 'LTL / partial', 'Not sure yet'],
} as const
