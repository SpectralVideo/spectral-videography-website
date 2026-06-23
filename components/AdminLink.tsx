'use client';

import Link from 'next/link';

export default function AdminLink() {
  return (
    <Link
      href="/admin"
      style={{ fontSize: '11px', color: 'rgba(245,240,232,0.25)', fontFamily: 'var(--font-body)', textDecoration: 'none', letterSpacing: '0.05em' }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(201,168,76,0.6)'; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(245,240,232,0.25)'; }}
    >
      Admin
    </Link>
  );
}
