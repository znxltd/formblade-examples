# Form Widget Examples

Embeddable form widgets that add a floating button to any website. One `<script>` tag — no coding needed.

## Examples

- **[popup.html](popup.html)** — basic widget with slide-in panel
- **[slide-in.html](slide-in.html)** — emoji button + auto-open after 5 seconds
- **[corner-tab.html](corner-tab.html)** — notification dot + hide after submission

## Usage

```html
<script src="https://formblade.com/widget.js"
  data-form="YOUR_ENDPOINT_ID"
  data-label="Contact us"
  data-color="#6366f1"></script>
```

Paste before `</body>` on your website. Replace `YOUR_ENDPOINT_ID` with your form's endpoint ID from the dashboard.

## Options

| Attribute | Default | Description |
|---|---|---|
| `data-form` | *required* | Your form's endpoint ID |
| `data-label` | "Contact Us" | Button text |
| `data-color` | #6366f1 | Button color |
| `data-emoji` | — | Animated emoji before label (e.g. `👋`) |
| `data-emoji-animation` | "bounce" | `bounce`, `wave`, `pulse`, `tada` |
| `data-open` | "click" | Trigger: `click`, `time`, `scroll`, `exit` |
| `data-open-value` | 3000 | For `time`: ms. For `scroll`: percentage |
| `data-show-once` | "false" | Hide after visitor closes |
| `data-hide-after-submit` | "false" | Hide permanently after submission |
| `data-dot` | "false" | Pulsing red notification dot |
| `data-branding` | "false" | "Powered by FormBlade" footer |

## Features

- **Keep session** — form progress preserved when closing/reopening
- **Referrer tracking** — records which page the visitor was on
- **Auto-close** — closes 3 seconds after successful submission
- **SEO backlink** — button is an `<a>` tag crawlers can index
- **Mobile-friendly** — panel adapts to any screen size

## Docs

Full widget documentation: https://formblade.com/docs/widget
