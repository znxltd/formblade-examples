# FormBlade Examples

Code examples for adding a contact form to any website using [FormBlade](https://formblade.com) — a form backend that handles submissions, sends notifications, and protects against spam.

## Quick Start

1. Sign up at [formblade.com](https://formblade.com/app/register) (no credit card needed)
2. Create a form — pick from 9 templates (contact, feedback, newsletter, booking, etc.)
3. Copy the widget snippet or HTML code
4. Paste into your website before `</body>`

## Examples

| Example | Description | Difficulty |
|---------|-------------|------------|
| [HTML](html/) | Basic contact form with spam protection | Beginner |
| [AJAX](ajax/) | Vanilla JS with JSON submit, no page reload | Beginner |
| [Widget](widget/) | Floating button with slide-in panel, emoji, triggers | Beginner |
| [React](react/) | React component with state and async submit | Intermediate |
| [Vue](vue/) | Vue 3 composition API form component | Intermediate |
| [Next.js](nextjs/) | Client-side and server action examples | Intermediate |
| [File Upload](file-upload/) | Form with file attachments | Intermediate |
| [WordPress](wordpress/) | Custom HTML block integration | Beginner |

## What is FormBlade?

FormBlade handles contact form submissions so you don't need a backend server. Point your HTML `<form>` action at a FormBlade endpoint URL and every submission is:

- Delivered to your **email**, **Telegram**, **Slack**, **Discord**, or **Teams**
- Stored in a searchable **dashboard** with export
- Checked for **spam** (honeypot, captcha, JS verification)
- Optionally written to **Google Sheets**
- Optionally pushed via **webhooks** to any URL (signed JSON payloads)

### Widget embed (one line)

```html
<script src="https://formblade.com/widget.js"
  data-form="YOUR_ENDPOINT_ID"
  data-label="Contact us"
  data-color="#6366f1"></script>
```

Features: animated emoji, auto-open triggers (time/scroll/exit intent), notification dot, show-once, hide after submit, referrer tracking, keep session, mobile-friendly.

### Personal plan includes

- 300 submissions/month
- 5 forms
- 9 form templates + visual designer with 6 themes
- Email, Telegram, Slack, Discord, Teams notifications (50 integrations/mo)
- Spam protection (honeypot, math, hCaptcha)
- File uploads (1 MB per file, 100 MB storage)
- Embeddable widget with emoji + triggers
- REST API (read-only)
- CSV export
- GDPR/CCPA compliance controls
- Country + device detection
- 90-day submission archive

No credit card. No trial period.

## Links

- **Homepage:** [formblade.com](https://formblade.com)
- **Documentation:** [formblade.com/docs](https://formblade.com/docs)
- **Getting started:** [formblade.com/docs/getting-started](https://formblade.com/docs/getting-started)
- **Widget guide:** [formblade.com/docs/widget](https://formblade.com/docs/widget)
- **API reference:** [formblade.com/docs/api](https://formblade.com/docs/api)
- **OpenAPI spec:** [formblade.com/api/openapi.json](https://formblade.com/api/openapi.json)
- **Platform guides:** [formblade.com/docs/platforms](https://formblade.com/docs/platforms)
- **Pricing:** [formblade.com/pricing](https://formblade.com/pricing)

## License

MIT
