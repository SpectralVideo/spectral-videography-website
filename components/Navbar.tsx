'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ApertureMark from './ApertureMark';

const navLinks = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '72px',
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 40px',
          backgroundColor: scrolled ? 'rgba(28,28,30,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease',
        }}
      >
        {/* Left: Logo lockup */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <ApertureMark size={32} color="#C9A84C" />
          <span
            className="font-display"
            style={{
              color: '#FAFAFA',
              fontSize: '15px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            NIMBETICS
          </span>
        </Link>

        {/* Center: Nav links (desktop) */}
        <nav style={{ display: 'flex', gap: '40px' }} className="hidden md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: CTA button (desktop) + hamburger (mobile) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link href="/contact" className="btn-gold-outline hidden md:inline-block" style={{ padding: '8px 20px', fontSize: '13px' }}>
            Get in touch
          </Link>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '1.5px',
                backgroundColor: '#FAFAFA',
                transition: 'transform 0.2s ease, opacity 0.2s ease',
                transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '1.5px',
                backgroundColor: '#FAFAFA',
                opacity: menuOpen ? 0 : 1,
                transition: 'opacity 0.2s ease',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '1.5px',
                backgroundColor: '#FAFAFA',
                transition: 'transform 0.2s ease',
                transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen overlay */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 49,
            backgroundColor: 'var(--color-charcoal)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0',
          }}
        >
          {navLinks.map((link, i) => (
            <div key={link.href} style={{ width: '100%', textAlign: 'center' }}>
              {i > 0 && (
                <div style={{ width: '60px', height: '1px', backgroundColor: 'var(--color-gold)', margin: '0 auto' }} />
              )}
              <Link
                href={link.href}
                className="font-display"
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '32px 0',
                  fontSize: '36px',
                  fontWeight: 700,
                  color: 'var(--color-white)',
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'var(--color-gold)'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'var(--color-white)'; }}
              >
                {link.label}
              </Link>
            </div>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn-gold-outline"
            style={{ marginTop: '40px' }}
          >
            Get in touch
          </Link>
        </div>
      )}
    </>
  );
}
