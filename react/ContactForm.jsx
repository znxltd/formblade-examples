import { useState } from 'react';

const FORM_URL = 'https://formblade.com/f/contact';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const data = Object.fromEntries(new FormData(e.target));

    try {
      const res = await fetch(FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return <p>Thank you! Your message has been sent.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" rows={4} required />

      {/* Honeypot */}
      <input name="_fb_hp" type="text" style={{ display: 'none' }} tabIndex={-1} />

      <button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send'}
      </button>

      {status === 'error' && <p style={{ color: 'red' }}>Something went wrong. Please try again.</p>}
    </form>
  );
}
