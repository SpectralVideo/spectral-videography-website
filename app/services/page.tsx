import Link from 'next/link';

function RealEstateIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 32 32" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 14L16 4l12 10v14H20v-7h-8v7H4V14z" />
    </svg>
  );
}
function ContractorIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 32 32" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="20" width="28" height="8" rx="1" />
      <path d="M6 20V12M26 20V12M11 20V16M21 20V16M16 20V14" />
      <path d="M2 12h28" />
      <path d="M6 12L16 4l10 8" />
    </svg>
  );
}
function SportingIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 32 32" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="12" />
      <path d="M16 4 A12 12 0 0 1 28 16" />
      <path d="M4 16 A12 12 0 0 1 16 4" />
      <path d="M8 8l4 8-4 8M24 8l-4 8 4 8" />
    </svg>
  );
}
function EventsIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 32 32" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 2l3.09 6.26L26 9.27l-5 4.87 1.18 6.88L16 18l-6.18 3.02L11 14.14 6 9.27l6.91-1.01L16 2z" />
      <path d="M16 22v8M10 28h12" />
    </svg>
  );
}

const services = [
  {
    icon: <RealEstateIcon />,
    name: 'Real Estate',
    headline: 'Properties worth seeing.',
    description: 'Aerial walkthroughs that close faster. We deliver editorial-quality drone footage that sells the lifestyle, not just the property. Perfect for luxury listings, new developments, and agents who want footage that stands out.',
    deliverables: ['Property walkthrough reel', 'Listing stills (aerial)', 'Neighborhood context footage', 'Interior-to-exterior transitions'],
  },
  {
    icon: <ContractorIcon />,
    name: 'Contractors',
    headline: 'See the full scope.',
    description: 'Progress documentation from above. FAA-certified site documentation for contractors, developers, and project managers. Systematic, scheduled, and delivered in formats your team and clients can actually use.',
    deliverables: ['Monthly milestone documentation', 'Pre-pour aerial survey', 'Phase completion records', 'Client progress reports'],
  },
  {
    icon: <SportingIcon />,
    name: 'Sporting',
    headline: 'Every play. Every angle.',
    description: "Broadcast-quality aerial coverage for teams, facilities, and events. The kinetic energy of Nimbetics' cinematic approach translates directly to athletic content — reels that feel like highlights, not documentation.",
    deliverables: ['Athlete reel coverage', 'Facility showcase', 'Game and event aerial', 'Training camp documentation'],
  },
  {
    icon: <EventsIcon />,
    name: 'Events',
    headline: "Moments that don't repeat.",
    description: 'Cinematic event coverage from the air. Weddings, galas, corporate ceremonies — we capture the full scene from a perspective no ground-based camera can reach. Premium aerial storytelling for moments that matter.',
    deliverables: ['Full event aerial coverage', 'Ceremony and reception', 'Venue showcase reel', 'Same-week delivery available'],
  },
];

export default function ServicesPage() {
  return (
    <main style={{ backgroundColor: 'var(--color-charcoal)', paddingTop: '72px' }}>
      {/* Page header */}
      <section style={{ padding: '80px 40px 80px', maxWidth: '1280px', margin: '0 auto' }}>
        <p className="section-label" style={{ marginBottom: '12px' }}>Services</p>
        <h1
          className="font-display"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 800, color: '#FAFAFA' }}
        >
          What we do.
        </h1>
        <p style={{ marginTop: '16px', fontSize: '16px', color: 'rgba(245,240,232,0.7)', fontFamily: 'var(--font-body)', maxWidth: '480px', lineHeight: 1.6 }}>
          Four verticals. One standard — cinematic aerial production that earns its rate.
        </p>
      </section>

      {/* Services list */}
      <section style={{ padding: '0 40px 120px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {services.map((s) => (
            <div
              key={s.name}
              className="service-card"
              style={{
                backgroundColor: 'var(--color-charcoal-mid)',
                padding: '64px 56px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '64px',
                alignItems: 'start',
              }}
            >
              <div>
                <div style={{ marginBottom: '24px' }}>{s.icon}</div>
                <p className="section-label" style={{ marginBottom: '8px' }}>{s.name}</p>
                <h2
                  className="font-display"
                  style={{ fontSize: '32px', fontWeight: 700, color: '#FAFAFA', lineHeight: 1.2, marginBottom: '20px' }}
                >
                  {s.headline}
                </h2>
                <p style={{ fontSize: '16px', color: 'rgba(245,240,232,0.8)', fontFamily: 'var(--font-body)', lineHeight: 1.7 }}>
                  {s.description}
                </p>
              </div>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.4)', marginBottom: '20px', fontFamily: 'var(--font-body)' }}>
                  Deliverables
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {s.deliverables.map((d) => (
                    <li
                      key={d}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px 0',
                        borderBottom: '1px solid rgba(245,240,232,0.08)',
                        fontSize: '15px',
                        color: 'rgba(245,240,232,0.85)',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--color-gold)', flexShrink: 0 }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section style={{ backgroundColor: 'var(--color-gold)', padding: '80px 40px', textAlign: 'center' }}>
        <h2
          className="font-display"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: 'var(--color-charcoal)', marginBottom: '16px' }}
        >
          Ready to get started?
        </h2>
        <p style={{ fontSize: '16px', color: 'rgba(28,28,30,0.75)', fontFamily: 'var(--font-body)', marginBottom: '40px' }}>
          Charlotte and surrounding area. FAA Part 107 certified.
        </p>
        <Link href="/contact" className="btn-charcoal">Get in touch</Link>
      </section>
    </main>
  );
}
