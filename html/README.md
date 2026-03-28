# HTML Contact Form

A basic HTML contact form that submits to FormBlade.

## Usage

1. Replace `your-form-id` in the form action with your FormBlade endpoint ID
2. Open `index.html` in a browser or add it to your website
3. Submissions arrive in your email and FormBlade dashboard

## Features

- Name, email, and message fields
- Honeypot spam protection (hidden field)
- Styled with minimal CSS
- Works on any website — just paste the HTML

## Customisation

- Add more fields: `<input name="phone">`, `<select name="topic">`, etc.
- Change the redirect after submission: add `<input type="hidden" name="_redirect" value="https://yoursite.com/thanks">`
- Style with your own CSS — FormBlade only cares about the `action` URL and field `name` attributes
