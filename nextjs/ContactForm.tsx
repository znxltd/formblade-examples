'use client';

import { useState, FormEvent } from 'react';

const FORM_URL = 'https://formblade.com/f/contact';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch(FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) e.currentTarget.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') return <p>Thank you! Your message has been sent.</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" rows={4} required />
      <input name="_fb_hp" type="text" style={{ display: 'none' }} tabIndex={-1} />
      <button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send'}
      </button>
      {status === 'error' && <p style={{ color: 'red' }}>Something went wrong.</p>}
    </form>
  );
}
