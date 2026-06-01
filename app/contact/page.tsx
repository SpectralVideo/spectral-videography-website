'use client';

import { useState } from 'react';
import ApertureMark from '@/components/ApertureMark';

const verticals = ['Real Estate', 'Contractors', 'Sporting', 'Events', 'Other'];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    vertical: '',
    message: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production: POST to API route / form provider
    setSubmitted(true);
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: 'var(--color-charcoal-mid)',
    border: '1px solid rgba(245,240,232,0.15)',
    borderRadius: '2px',
    padding: '14px 16px',
    fontSize: '15px',
    color: '#FAFAFA',
    fontFamily: 'var(--font-body)',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    boxSizing: 'border-box',
  };
  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '11px',
    fontWeight: 500,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'rgba(245,240,232,0.5)',
    fontFamily: 'var(--font-body)',
    marginBottom: '8px',
  };

  return (
    <main style={{ backgroundColor: 'var(--color-charcoal)', paddingTop: '72px' }}>
      <section style={{ padding: '80px 40px 120px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }} className="contact-grid">

          {/* Left: info */}
          <div>
            <p className="section-label" style={{ marginBottom: '12px' }}>Contact</p>
            <h1
              className="font-display"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, color: '#FAFAFA', lineHeight: 1.15, marginBottom: '24px' }}
            >
              Let&apos;s talk about your project.
            </h1>
            <p style={{ fontSize: '16px', color: 'rgba(245,240,232,0.75)', fontFamily: 'var(--font-body)', lineHeight: 1.7, marginBottom: '48px' }}>
              Tell us about the project and we&apos;ll follow up within one business day. Charlotte area and beyond.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.4)', fontFamily: 'var(--font-body)', marginBottom: '6px' }}>Location</p>
                <p style={{ fontSize: '15px', color: 'rgba(245,240,232,0.85)', fontFamily: 'var(--font-body)' }}>Charlotte, NC · surrounding area</p>
              </div>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.4)', fontFamily: 'var(--font-body)', marginBottom: '6px' }}>Email</p>
                <a href="mailto:hello@nimbetics.com" style={{ fontSize: '15px', color: 'var(--color-gold)', fontFamily: 'var(--font-body)', textDecoration: 'none' }}>
                  hello@nimbetics.com
                </a>
              </div>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.4)', fontFamily: 'var(--font-body)', marginBottom: '6px' }}>Certification</p>
                <p style={{ fontSize: '15px', color: 'rgba(245,240,232,0.85)', fontFamily: 'var(--font-body)' }}>FAA Part 107 Certified</p>
              </div>
            </div>

            <div style={{ marginTop: '56px' }}>
              <ApertureMark size={40} color="rgba(201,168,76,0.4)" />
            </div>
          </div>

          {/* Right: form */}
          <div>
            {submitted ? (
              <div
                style={{
                  backgroundColor: 'var(--color-charcoal-mid)',
                  padding: '64px 48px',
                  borderRadius: '2px',
                  textAlign: 'center',
                  border: '1px solid rgba(201,168,76,0.3)',
                }}
              >
                <ApertureMark size={48} color="#C9A84C" />
                <h2
                  className="font-display"
                  style={{ fontSize: '28px', fontWeight: 700, color: '#FAFAFA', marginTop: '24px', marginBottom: '12px' }}
                >
                  Message received.
                </h2>
                <p style={{ fontSize: '15px', color: 'rgba(245,240,232,0.75)', fontFamily: 'var(--font-body)', lineHeight: 1.6 }}>
                  We&apos;ll follow up within one business day to discuss your project.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label htmlFor="name" style={labelStyle}>Name</label>
                    <input
                      id="name" name="name" type="text" required
                      value={form.name} onChange={handleChange}
                      placeholder="Your name"
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = 'var(--color-gold)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(245,240,232,0.15)'; }}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" style={labelStyle}>Phone</label>
                    <input
                      id="phone" name="phone" type="tel"
                      value={form.phone} onChange={handleChange}
                      placeholder="Optional"
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = 'var(--color-gold)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(245,240,232,0.15)'; }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" style={labelStyle}>Email</label>
                  <input
                    id="email" name="email" type="email" required
                    value={form.email} onChange={handleChange}
                    placeholder="your@email.com"
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--color-gold)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(245,240,232,0.15)'; }}
                  />
                </div>

                <div>
                  <label htmlFor="vertical" style={labelStyle}>Project type</label>
                  <select
                    id="vertical" name="vertical"
                    value={form.vertical} onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--color-gold)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(245,240,232,0.15)'; }}
                  >
                    <option value="" style={{ backgroundColor: 'var(--color-charcoal-mid)' }}>Select a vertical…</option>
                    {verticals.map((v) => (
                      <option key={v} value={v} style={{ backgroundColor: 'var(--color-charcoal-mid)' }}>{v}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" style={labelStyle}>Project details</label>
                  <textarea
                    id="message" name="message" rows={5} required
                    value={form.message} onChange={handleChange}
                    placeholder="Tell us about your project — location, timeline, scope…"
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--color-gold)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(245,240,232,0.15)'; }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold-outline"
                  style={{ alignSelf: 'flex-start', padding: '14px 40px', fontSize: '14px' }}
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
