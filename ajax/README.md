# AJAX Contact Form

Submit a contact form without page reload using vanilla JavaScript and `fetch`.

## Usage

1. Replace `your-form-id` with your FormBlade endpoint ID
2. The form submits as JSON — no page redirect
3. Shows a success/error message inline

## How it works

- Intercepts the form submit event
- Sends data as JSON with `Content-Type: application/json`
- `X-Requested-With: XMLHttpRequest` header tells FormBlade to return JSON instead of HTML
- On success, shows a thank-you message and resets the form
