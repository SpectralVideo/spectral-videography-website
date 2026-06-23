'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { Session } from '@supabase/supabase-js';

interface Inquiry {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string | null;
  vertical: string | null;
  message: string;
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  backgroundColor: '#2D2D30',
  border: '1px solid rgba(245,240,232,0.15)',
  borderRadius: '2px',
  padding: '14px 16px',
  fontSize: '15px',
  color: '#FAFAFA',
  fontFamily: 'var(--font-body)',
  outline: 'none',
  transition: 'border-color 0.2s ease',
  boxSizing: 'border-box',
  WebkitAppearance: 'none',
  appearance: 'none',
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

export default function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!session) return;
    supabase
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data, error }) => {
        if (!error && data) {
          setInquiries(data as Inquiry[]);
        }
      });
  }, [session]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: loginEmail,
      password: loginPassword,
    });
    setLoginLoading(false);
    if (error) {
      setLoginError(error.message);
    }
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
  }

  function formatDate(iso: string) {
    return new Date(iso).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  }

  if (loading) {
    return (
      <main style={{ backgroundColor: 'var(--color-charcoal)', minHeight: '100vh', paddingTop: '72px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 40px', textAlign: 'center' }}>
          <p style={{ color: 'rgba(245,240,232,0.5)', fontFamily: 'var(--font-body)' }}>Loading...</p>
        </div>
      </main>
    );
  }

  if (!session) {
    return (
      <main style={{ backgroundColor: 'var(--color-charcoal)', minHeight: '100vh', paddingTop: '72px' }}>
        <div
          style={{
            maxWidth: '420px',
            margin: '80px auto',
            padding: '0 24px',
          }}
        >
          <p
            style={{
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(245,240,232,0.4)',
              fontFamily: 'var(--font-body)',
              marginBottom: '12px',
            }}
          >
            Admin
          </p>
          <h1
            className="font-display"
            style={{ fontSize: '28px', fontWeight: 800, color: '#FAFAFA', marginBottom: '32px' }}
          >
            Sign in
          </h1>

          <form
            onSubmit={handleLogin}
            style={{
              backgroundColor: 'var(--color-charcoal-mid)',
              border: '1px solid rgba(245,240,232,0.08)',
              borderRadius: '2px',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <div>
              <label htmlFor="admin-email" style={labelStyle}>Email</label>
              <input
                id="admin-email"
                type="email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="your@email.com"
                style={inputStyle}
                onFocus={(e) => { e.target.style.borderColor = 'var(--color-gold)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(245,240,232,0.15)'; }}
              />
            </div>
            <div>
              <label htmlFor="admin-password" style={labelStyle}>Password</label>
              <input
                id="admin-password"
                type="password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="••••••••"
                style={inputStyle}
                onFocus={(e) => { e.target.style.borderColor = 'var(--color-gold)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(245,240,232,0.15)'; }}
              />
            </div>

            {loginError && (
              <p style={{ fontSize: '14px', color: '#f87171', fontFamily: 'var(--font-body)', margin: 0 }}>
                {loginError}
              </p>
            )}

            <button
              type="submit"
              disabled={loginLoading}
              className="btn-gold-outline"
              style={{ padding: '14px 32px', fontSize: '14px', opacity: loginLoading ? 0.6 : 1, cursor: loginLoading ? 'default' : 'pointer' }}
            >
              {loginLoading ? 'Signing in…' : 'Sign in'}
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main style={{ backgroundColor: 'var(--color-charcoal)', minHeight: '100vh', paddingTop: '72px' }}>
      <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '60px 40px 120px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <p
              style={{
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(245,240,232,0.4)',
                fontFamily: 'var(--font-body)',
                marginBottom: '6px',
              }}
            >
              Admin
            </p>
            <h1
              className="font-display"
              style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#FAFAFA', margin: 0 }}
            >
              Inquiries
              <span
                style={{
                  marginLeft: '12px',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: 'rgba(245,240,232,0.4)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {inquiries.length} total
              </span>
            </h1>
          </div>
          <button
            onClick={handleSignOut}
            style={{
              backgroundColor: 'transparent',
              border: '1px solid rgba(245,240,232,0.2)',
              borderRadius: '2px',
              padding: '10px 24px',
              fontSize: '13px',
              color: 'rgba(245,240,232,0.6)',
              fontFamily: 'var(--font-body)',
              cursor: 'pointer',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.borderColor = 'rgba(245,240,232,0.5)';
              (e.target as HTMLButtonElement).style.color = '#FAFAFA';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.borderColor = 'rgba(245,240,232,0.2)';
              (e.target as HTMLButtonElement).style.color = 'rgba(245,240,232,0.6)';
            }}
          >
            Sign out
          </button>
        </div>

        {/* Table */}
        {inquiries.length === 0 ? (
          <div
            style={{
              backgroundColor: 'var(--color-charcoal-mid)',
              border: '1px solid rgba(245,240,232,0.08)',
              borderRadius: '2px',
              padding: '64px 40px',
              textAlign: 'center',
            }}
          >
            <p style={{ color: 'rgba(245,240,232,0.4)', fontFamily: 'var(--font-body)', fontSize: '15px' }}>
              No inquiries yet.
            </p>
          </div>
        ) : (
          <div style={{ overflowX: 'auto', borderRadius: '2px', border: '1px solid rgba(245,240,232,0.08)' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
              }}
            >
              <thead>
                <tr style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(245,240,232,0.1)' }}>
                  {['Date / Time', 'Name', 'Email', 'Phone', 'Project Type', 'Message'].map((col) => (
                    <th
                      key={col}
                      style={{
                        padding: '14px 20px',
                        textAlign: 'left',
                        fontSize: '11px',
                        fontWeight: 500,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'rgba(245,240,232,0.4)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {inquiries.map((inq, i) => (
                  <tr
                    key={inq.id}
                    style={{
                      backgroundColor: i % 2 === 0 ? 'var(--color-charcoal-mid)' : 'rgba(255,255,255,0.02)',
                      borderBottom: '1px solid rgba(245,240,232,0.06)',
                    }}
                  >
                    <td style={{ padding: '16px 20px', color: 'rgba(245,240,232,0.6)', whiteSpace: 'nowrap', verticalAlign: 'top' }}>
                      {formatDate(inq.created_at)}
                    </td>
                    <td style={{ padding: '16px 20px', color: '#FAFAFA', whiteSpace: 'nowrap', verticalAlign: 'top', fontWeight: 500 }}>
                      {inq.name}
                    </td>
                    <td style={{ padding: '16px 20px', verticalAlign: 'top' }}>
                      <a
                        href={`mailto:${inq.email}`}
                        style={{ color: 'var(--color-gold)', textDecoration: 'none', whiteSpace: 'nowrap' }}
                      >
                        {inq.email}
                      </a>
                    </td>
                    <td style={{ padding: '16px 20px', color: 'rgba(245,240,232,0.7)', whiteSpace: 'nowrap', verticalAlign: 'top' }}>
                      {inq.phone || <span style={{ color: 'rgba(245,240,232,0.25)' }}>—</span>}
                    </td>
                    <td style={{ padding: '16px 20px', color: 'rgba(245,240,232,0.7)', whiteSpace: 'nowrap', verticalAlign: 'top' }}>
                      {inq.vertical || <span style={{ color: 'rgba(245,240,232,0.25)' }}>—</span>}
                    </td>
                    <td
                      style={{
                        padding: '16px 20px',
                        color: 'rgba(245,240,232,0.85)',
                        verticalAlign: 'top',
                        maxWidth: '360px',
                        minWidth: '200px',
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-word',
                        lineHeight: 1.6,
                      }}
                    >
                      {inq.message}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}
