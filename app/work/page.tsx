import ApertureMark from '@/components/ApertureMark';

const categories = ['All', 'Real Estate', 'Contractors', 'Sporting', 'Events'];

const reels = [
  { label: 'Real Estate', title: 'Highland Park Estate', desc: 'Charlotte luxury property — aerial walkthrough and listing reel', col: 'span 2' },
  { label: 'Events', title: 'Corporate Gala 2025', desc: 'Full aerial coverage from 400ft', col: 'span 1' },
  { label: 'Contractors', title: 'Midtown Development', desc: 'Monthly progress documentation', col: 'span 1' },
  { label: 'Sporting', title: 'Panthers Training Facility', desc: 'Athletic complex survey and facility reel', col: 'span 2' },
  { label: 'Real Estate', title: 'Lake Norman Waterfront', desc: 'Luxury lakefront property showcase', col: 'span 1' },
  { label: 'Events', title: 'Charity Gala — Charlotte', desc: 'Evening aerial coverage', col: 'span 1' },
  { label: 'Contractors', title: 'Industrial Expansion Phase 2', desc: 'Quarterly milestone documentation', col: 'span 2' },
];

export default function WorkPage() {
  return (
    <main style={{ backgroundColor: 'var(--color-charcoal)', paddingTop: '72px' }}>
      {/* Page header */}
      <section style={{ padding: '80px 40px 60px', maxWidth: '1280px', margin: '0 auto' }}>
        <p className="section-label" style={{ marginBottom: '12px' }}>Portfolio</p>
        <h1
          className="font-display"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 800, color: '#FAFAFA', letterSpacing: '0.02em' }}
        >
          Motion from above.
        </h1>
        <p
          style={{
            marginTop: '16px',
            fontSize: '16px',
            color: 'rgba(245,240,232,0.7)',
            fontFamily: 'var(--font-body)',
            maxWidth: '480px',
            lineHeight: 1.6,
          }}
        >
          Every reel produced with cinematic intent — real locations, real flight, no stock footage.
        </p>
      </section>

      {/* Filter bar */}
      <section style={{ padding: '0 40px 56px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {categories.map((cat, i) => (
            <button
              key={cat}
              style={{
                padding: '8px 20px',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                border: '1px solid',
                borderColor: i === 0 ? 'var(--color-gold)' : 'rgba(245,240,232,0.2)',
                color: i === 0 ? 'var(--color-gold)' : 'rgba(245,240,232,0.6)',
                background: 'transparent',
                borderRadius: '2px',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                transition: 'all 0.2s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Reel grid */}
      <section style={{ padding: '0 40px 120px', maxWidth: '1280px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
          }}
        >
          {reels.map((reel) => (
            <div
              key={reel.title}
              className="card-hover"
              style={{
                backgroundColor: 'var(--color-charcoal-mid)',
                borderRadius: '2px',
                overflow: 'hidden',
                cursor: 'pointer',
                gridColumn: reel.col,
              }}
            >
              {/* Video still placeholder */}
              <div
                style={{
                  width: '100%',
                  paddingBottom: reel.col === 'span 2' ? '38%' : '70%',
                  position: 'relative',
                  background: 'linear-gradient(135deg, #161618 0%, #222224 50%, #1a1a1c 100%)',
                }}
              >
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ApertureMark size={36} color="rgba(201,168,76,0.2)" />
                </div>
                {/* Play button overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.2s ease',
                  }}
                  className="play-overlay"
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    border: '1px solid var(--color-gold)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                      <path d="M1 1l12 7-12 7V1z" fill="#C9A84C" />
                    </svg>
                  </div>
                </div>
              </div>
              <div style={{ padding: '16px 20px 20px' }}>
                <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '4px', fontFamily: 'var(--font-body)' }}>{reel.label}</p>
                <p style={{ fontSize: '15px', fontWeight: 500, color: '#FAFAFA', fontFamily: 'var(--font-body)', marginBottom: '4px' }}>{reel.title}</p>
                <p style={{ fontSize: '13px', color: 'rgba(245,240,232,0.65)', fontFamily: 'var(--font-body)' }}>{reel.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
