# Next.js Contact Form

A Next.js client component that submits to FormBlade. Works with App Router (Next.js 13+).

## Usage

```tsx
import ContactForm from './ContactForm';

export default function Page() {
  return <ContactForm />;
}
```

## Notes

- Uses `'use client'` directive for client-side form handling
- TypeScript with proper types
- Works with both App Router and Pages Router
- The `X-Requested-With` header ensures FormBlade returns JSON
