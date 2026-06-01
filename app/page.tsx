import Link from 'next/link';
import ApertureMark from '@/components/ApertureMark';
import SocialLinks from '@/components/SocialLinks';

// Service icons (stroke, geometric, gold)
function RealEstateIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 14L16 4l12 10v14H20v-7h-8v7H4V14z" />
    </svg>
  );
}
function ContractorIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="20" width="28" height="8" rx="1" />
      <path d="M6 20V12M26 20V12M11 20V16M21 20V16M16 20V14" />
      <path d="M2 12h28" />
      <path d="M6 12L16 4l10 8" />
    </svg>
  );
}
function SportingIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="12" />
      <path d="M16 4 A12 12 0 0 1 28 16" />
      <path d="M4 16 A12 12 0 0 1 16 4" />
      <path d="M8 8l4 8-4 8M24 8l-4 8 4 8" />
    </svg>
  );
}
function EventsIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 2l3.09 6.26L26 9.27l-5 4.87 1.18 6.88L16 18l-6.18 3.02L11 14.14 6 9.27l6.91-1.01L16 2z" />
      <path d="M16 22v8M10 28h12" />
    </svg>
  );
}

const services = [
  {
    icon: <RealEstateIcon />,
    vertical: 'Real Estate',
    headline: 'Properties worth seeing.',
    body: 'Aerial walkthroughs that close faster.',
  },
  {
    icon: <ContractorIcon />,
    vertical: 'Contractors',
    headline: 'See the full scope.',
    body: 'Progress documentation from above.',
  },
  {
    icon: <SportingIcon />,
    vertical: 'Sporting',
    headline: 'Every play. Every angle.',
    body: 'Broadcast-quality coverage for teams and events.',
  },
  {
    icon: <EventsIcon />,
    vertical: 'Events',
    headline: "Moments that don't repeat.",
    body: 'Cinematic event coverage from the air.',
  },
];

const portfolioItems = [
  {
    label: 'Real Estate',
    title: 'Highland Park Listing',
    description: 'Luxury property aerial walkthrough — Charlotte, NC',
    span: 'col-span-2',
    aspect: 'aspect-video',
  },
  {
    label: 'Events',
    title: 'Corporate Gala',
    description: 'Full-event aerial coverage from above',
    span: 'col-span-1',
    aspect: 'aspect-square',
  },
  {
    label: 'Contractors',
    title: 'Development Progress',
    description: 'Monthly milestone documentation',
    span: 'col-span-1',
    aspect: 'aspect-square',
  },
  {
    label: 'Sporting',
    title: 'Training Facility',
    description: 'Athletic complex aerial survey',
    span: 'col-span-2',
    aspect: 'aspect-video',
  },
];

export default function Home() {
  return (
    <main style={{ backgroundColor: 'var(--color-charcoal)' }}>

      {/* ── Section 1: Hero ── */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          minHeight: '600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          backgroundColor: '#0e0e0f',
        }}
      >
        {/* Placeholder aerial background — replaced with real video */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(160deg, #0a0a0c 0%, #1a1714 40%, #0c0d0e 100%)',
            opacity: 0.98,
          }}
        />
        {/* Subtle gold horizon line */}
        <div
          style={{
            position: 'absolute',
            top: '58%',
            left: '5%',
            right: '5%',
            height: '1px',
            backgroundColor: 'rgba(201,168,76,0.12)',
          }}
        />

        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(28,28,30,0.55)',
          }}
        />

        {/* Hero content */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            maxWidth: '800px',
            padding: '0 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <ApertureMark size={80} color="#C9A84C" />
          <h1
            className="font-display"
            style={{
              marginTop: '24px',
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 800,
              letterSpacing: '0.12em',
              color: '#FAFAFA',
              textTransform: 'uppercase',
              lineHeight: 1.05,
            }}
          >
            NIMBETICS
          </h1>
          <p
            className="font-accent"
            style={{
              marginTop: '16px',
              fontSize: '20px',
              fontStyle: 'italic',
              color: '#F5F0E8',
              letterSpacing: '0.02em',
            }}
          >
            Capture what others can&apos;t reach.
          </p>
          <Link
            href="/work"
            className="btn-gold-outline"
            style={{ marginTop: '48px' }}
          >
            View Our Work
          </Link>
        </div>

        {/* Bottom gold rule divider */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '1px',
            backgroundColor: 'rgba(201,168,76,0.3)',
          }}
        />
      </section>

      {/* ── Section 2: Credibility Bar ── */}
      <section
        style={{
          backgroundColor: 'var(--color-charcoal-mid)',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 24px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {['FAA Part 107 Certified', 'Charlotte, NC Based', 'Real Estate · Contractors · Sporting · Events'].map((item, i) => (
            <>
              {i > 0 && (
                <span
                  key={`dot-${i}`}
                  style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-gold)',
                    flexShrink: 0,
                  }}
                />
              )}
              <span
                key={item}
                style={{
                  color: '#FAFAFA',
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                {item}
              </span>
            </>
          ))}
        </div>
      </section>

      {/* ── Section 3: Portfolio Teaser ── */}
      <section
        style={{
          padding: '120px 0',
          backgroundColor: 'var(--color-charcoal)',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ marginBottom: '48px' }}>
            <p className="section-label" style={{ marginBottom: '8px' }}>Work</p>
            <h2
              className="font-display"
              style={{ fontSize: '48px', fontWeight: 700, color: '#FAFAFA', lineHeight: 1.1 }}
            >
              Motion from above.
            </h2>
          </div>

          {/* 3-col asymmetric grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
            }}
            className="portfolio-grid"
          >
            {portfolioItems.map((item) => (
              <div
                key={item.title}
                className="card-hover"
                style={{
                  backgroundColor: 'var(--color-charcoal-mid)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  gridColumn: item.span === 'col-span-2' ? 'span 2' : 'span 1',
                }}
              >
                {/* Thumbnail placeholder */}
                <div
                  style={{
                    width: '100%',
                    paddingBottom: item.span === 'col-span-2' ? '35%' : '75%',
                    position: 'relative',
                    background: 'linear-gradient(135deg, #1a1a1c 0%, #252527 50%, #1c1c1e 100%)',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ApertureMark size={40} color="rgba(201,168,76,0.25)" />
                  </div>
                </div>
                <div style={{ padding: '20px 24px 24px' }}>
                  <p
                    style={{
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--color-gold)',
                      marginBottom: '6px',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'rgba(245,240,232,0.85)',
                      fontFamily: 'var(--font-body)',
                      marginBottom: '12px',
                    }}
                  >
                    {item.description}
                  </p>
                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: 500,
                      color: 'var(--color-gold)',
                      fontFamily: 'var(--font-body)',
                      borderBottom: '1px solid var(--color-gold)',
                      paddingBottom: '1px',
                    }}
                  >
                    Watch
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link
              href="/work"
              style={{
                fontSize: '15px',
                fontWeight: 500,
                color: 'var(--color-gold)',
                fontFamily: 'var(--font-body)',
                textDecoration: 'none',
                letterSpacing: '0.02em',
              }}
            >
              See full portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 4: Services ── */}
      <section
        style={{
          padding: '100px 0',
          backgroundColor: 'var(--color-charcoal-mid)',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ marginBottom: '56px', textAlign: 'center' }}>
            <p className="section-label" style={{ marginBottom: '8px' }}>Services</p>
            <h2
              className="font-display"
              style={{ fontSize: '40px', fontWeight: 700, color: '#FAFAFA' }}
            >
              What we do.
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2px',
            }}
            className="services-grid"
          >
            {services.map((s) => (
              <div
                key={s.vertical}
                className="service-card"
                style={{
                  padding: '48px 40px',
                  backgroundColor: 'var(--color-charcoal)',
                  cursor: 'default',
                }}
              >
                <div style={{ marginBottom: '20px' }}>{s.icon}</div>
                <h3
                  className="font-display"
                  style={{
                    fontSize: '28px',
                    fontWeight: 700,
                    color: '#FAFAFA',
                    marginBottom: '12px',
                    lineHeight: 1.2,
                  }}
                >
                  {s.headline}
                </h3>
                <p
                  style={{
                    fontSize: '15px',
                    color: 'rgba(245,240,232,0.8)',
                    fontFamily: 'var(--font-body)',
                    lineHeight: 1.6,
                  }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Showreel Full-Bleed ── */}
      <section
        style={{
          width: '100%',
          height: '100vh',
          position: 'relative',
          backgroundColor: '#080809',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Dark gradient bg — replace with video */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(200deg, #050506 0%, #12100e 60%, #060607 100%)',
          }}
        />
        {/* Pulsing gold rule — CTA invitation */}
        <div
          className="pulsing-rule"
          style={{
            width: '60px',
            height: '1px',
            backgroundColor: 'var(--color-gold)',
            position: 'relative',
            zIndex: 2,
          }}
        />
      </section>

      {/* ── Section 6: About Teaser ── */}
      <section
        style={{
          padding: '120px 0',
          backgroundColor: 'var(--color-charcoal)',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 40px',
            display: 'grid',
            gridTemplateColumns: '60% 40%',
            gap: '64px',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Left: text */}
          <div>
            <p className="section-label" style={{ marginBottom: '16px' }}>About</p>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(28px, 3.5vw, 40px)',
                fontWeight: 700,
                color: '#FAFAFA',
                lineHeight: 1.2,
                marginBottom: '24px',
              }}
            >
              Certified. Precise. Always in service of the frame.
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: 'rgba(245,240,232,0.85)',
                fontFamily: 'var(--font-body)',
                lineHeight: 1.7,
                marginBottom: '16px',
              }}
            >
              Nimbetics is a Charlotte-based aerial cinematography studio delivering cinematic-grade drone footage for real estate, construction, sport, and events. Every project is approached with production-house discipline — deliberate framing, purposeful movement, outputs that speak for themselves.
            </p>
            <p
              style={{
                fontSize: '16px',
                color: 'rgba(245,240,232,0.85)',
                fontFamily: 'var(--font-body)',
                lineHeight: 1.7,
                marginBottom: '32px',
              }}
            >
              FAA Part 107 certified. Fully insured. Operating throughout the greater Charlotte area and beyond.
            </p>
            <Link
              href="/about"
              style={{
                fontSize: '15px',
                fontWeight: 500,
                color: 'var(--color-gold)',
                fontFamily: 'var(--font-body)',
                textDecoration: 'none',
              }}
            >
              Our story →
            </Link>
          </div>

          {/* Right: gold-framed image placeholder */}
          <div
            style={{
              position: 'relative',
              aspectRatio: '4/5',
              backgroundColor: 'var(--color-charcoal-mid)',
            }}
          >
            {/* 4px gold frame with 12px inset */}
            <div
              style={{
                position: 'absolute',
                inset: '12px',
                border: '4px solid var(--color-gold)',
                zIndex: 2,
                pointerEvents: 'none',
              }}
            />
            {/* Image placeholder */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, #1c1c1e 0%, #2a2a2c 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ApertureMark size={60} color="rgba(201,168,76,0.3)" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: CTA Band ── */}
      <section
        style={{
          backgroundColor: 'var(--color-gold)',
          padding: '80px 40px',
          textAlign: 'center',
        }}
      >
        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 800,
            color: 'var(--color-charcoal)',
            lineHeight: 1.15,
            marginBottom: '16px',
          }}
        >
          Ready to see your project from above?
        </h2>
        <p
          style={{
            fontSize: '16px',
            color: 'rgba(28,28,30,0.75)',
            fontFamily: 'var(--font-body)',
            marginBottom: '40px',
          }}
        >
          Charlotte and surrounding area. FAA Part 107 certified.
        </p>
        <Link href="/contact" className="btn-charcoal">
          Get in touch
        </Link>
      </section>

      {/* ── Section 8: Footer ── */}
      <footer
        style={{
          backgroundColor: 'var(--color-charcoal)',
          padding: '64px 40px 32px',
        }}
      >
        {/* Top gold rule */}
        <div style={{ height: '1px', backgroundColor: 'rgba(201,168,76,0.2)', marginBottom: '56px' }} />

        {/* 4-col footer grid */}
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '40px',
          }}
          className="footer-grid"
        >
          {/* Col 1: Logo + tagline */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <ApertureMark size={28} color="#C9A84C" />
              <span
                className="font-display"
                style={{ color: '#FAFAFA', fontSize: '14px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}
              >
                NIMBETICS
              </span>
            </div>
            <p
              className="font-accent"
              style={{ fontSize: '13px', fontStyle: 'italic', color: 'var(--color-cream)', lineHeight: 1.5 }}
            >
              Capture what others can&apos;t reach.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.4)', marginBottom: '16px', fontFamily: 'var(--font-body)' }}>Navigation</p>
            {[['/', 'Home'], ['/work', 'Work'], ['/services', 'Services'], ['/about', 'About'], ['/contact', 'Contact']].map(([href, label]) => (
              <Link key={href} href={href} className="footer-link">{label}</Link>
            ))}
          </div>

          {/* Col 3: Verticals */}
          <div>
            <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.4)', marginBottom: '16px', fontFamily: 'var(--font-body)' }}>Verticals</p>
            {['Real Estate', 'Contractors', 'Sporting', 'Events'].map((v) => (
              <Link key={v} href="/services" className="footer-link">{v}</Link>
            ))}
          </div>

          {/* Col 4: Contact + Social */}
          <div>
            <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.4)', marginBottom: '16px', fontFamily: 'var(--font-body)' }}>Contact</p>
            <p className="footer-link" style={{ cursor: 'default' }}>Charlotte, NC</p>
            <a href="mailto:hello@nimbetics.com" className="footer-link">hello@nimbetics.com</a>
            <SocialLinks />
          </div>
        </div>

        {/* Legal bar */}
        <div
          style={{
            maxWidth: '1280px',
            margin: '48px auto 0',
            paddingTop: '24px',
            borderTop: '1px solid rgba(201,168,76,0.15)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <p style={{ fontSize: '11px', color: 'rgba(245,240,232,0.4)', fontFamily: 'var(--font-body)' }}>
            © 2026 Nimbetics LLC. All rights reserved.
          </p>
          <p style={{ fontSize: '11px', color: 'rgba(245,240,232,0.4)', fontFamily: 'var(--font-body)' }}>
            FAA Part 107 Certified
          </p>
        </div>
      </footer>
    </main>
  );
}
