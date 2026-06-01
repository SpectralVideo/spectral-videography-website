import Link from 'next/link';
import ApertureMark from '@/components/ApertureMark';

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: 'var(--color-charcoal)', paddingTop: '72px' }}>
      {/* Hero */}
      <section
        style={{
          padding: '80px 40px 100px',
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
        className="about-hero-grid"
      >
        <div>
          <p className="section-label" style={{ marginBottom: '16px' }}>About Nimbetics</p>
          <h1
            className="font-display"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, color: '#FAFAFA', lineHeight: 1.15, marginBottom: '24px' }}
          >
            Certified. Precise. Always in service of the frame.
          </h1>
          <p style={{ fontSize: '17px', color: 'rgba(245,240,232,0.85)', fontFamily: 'var(--font-body)', lineHeight: 1.75, marginBottom: '16px' }}>
            Nimbetics is a Charlotte-based aerial cinematography studio. We exist at the convergence of atmosphere and precision — the cloud&apos;s cinematic halo, the kinetic energy of flight.
          </p>
          <p style={{ fontSize: '17px', color: 'rgba(245,240,232,0.85)', fontFamily: 'var(--font-body)', lineHeight: 1.75, marginBottom: '16px' }}>
            Every project is approached with the craft of a film production: deliberate framing, purposeful movement, outputs that look like they cost more than they did. We are the drone partner clients call when they want the work to speak for itself.
          </p>
          <p style={{ fontSize: '17px', color: 'rgba(245,240,232,0.85)', fontFamily: 'var(--font-body)', lineHeight: 1.75 }}>
            FAA Part 107 certified. Fully insured. Operating throughout Charlotte and the surrounding region.
          </p>
        </div>

        {/* Gold-framed image */}
        <div style={{ position: 'relative', aspectRatio: '4/5' }}>
          <div style={{ position: 'absolute', inset: '12px', border: '4px solid var(--color-gold)', zIndex: 2, pointerEvents: 'none' }} />
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
            <ApertureMark size={70} color="rgba(201,168,76,0.3)" />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ height: '1px', backgroundColor: 'rgba(201,168,76,0.15)', maxWidth: '1280px', margin: '0 auto 0', padding: '0 40px' }}>
        <div style={{ height: '1px', backgroundColor: 'rgba(201,168,76,0.15)' }} />
      </div>

      {/* Values */}
      <section style={{ padding: '100px 40px', maxWidth: '1280px', margin: '0 auto' }}>
        <p className="section-label" style={{ marginBottom: '40px' }}>Our approach</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }} className="values-grid">
          {[
            { title: 'Cinematic by default', body: 'We treat every project with the craft of a film production. No utilitarian passes. Every flight is a composition.' },
            { title: 'Certified and accountable', body: 'FAA Part 107 certified. Fully insured. We operate within regulatory compliance so clients never have to worry.' },
            { title: 'Never a rental service', body: "We are not a tech vendor or a hobbyist operation. We're aerial storytellers — and the story always comes first." },
          ].map((v) => (
            <div key={v.title}>
              <div style={{ width: '32px', height: '1px', backgroundColor: 'var(--color-gold)', marginBottom: '20px' }} />
              <h3
                className="font-display"
                style={{ fontSize: '20px', fontWeight: 700, color: '#FAFAFA', marginBottom: '12px', lineHeight: 1.3 }}
              >
                {v.title}
              </h3>
              <p style={{ fontSize: '15px', color: 'rgba(245,240,232,0.75)', fontFamily: 'var(--font-body)', lineHeight: 1.7 }}>
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAA badge section */}
      <section style={{ backgroundColor: 'var(--color-charcoal-mid)', padding: '80px 40px' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <ApertureMark size={56} color="#C9A84C" />
          <p
            className="font-accent"
            style={{ marginTop: '24px', fontSize: '22px', fontStyle: 'italic', color: 'var(--color-cream)', lineHeight: 1.5 }}
          >
            &ldquo;We never let the technology overshadow the story.&rdquo;
          </p>
          <p style={{ marginTop: '24px', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.8)', fontFamily: 'var(--font-body)' }}>
            FAA Part 107 Certified · Charlotte, NC
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--color-gold)', padding: '80px 40px', textAlign: 'center' }}>
        <h2
          className="font-display"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: 'var(--color-charcoal)', marginBottom: '16px' }}
        >
          Let&apos;s make something worth watching.
        </h2>
        <Link href="/contact" className="btn-charcoal" style={{ marginTop: '8px' }}>Get in touch</Link>
      </section>
    </main>
  );
}
