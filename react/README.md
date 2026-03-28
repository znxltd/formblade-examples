# React Contact Form

A React component that submits to FormBlade with loading state and error handling.

## Usage

```jsx
import ContactForm from './ContactForm';

function App() {
  return <ContactForm />;
}
```

Replace `your-form-id` in `ContactForm.jsx` with your FormBlade endpoint ID.

## Features

- Async submit with loading state
- Success message replaces the form
- Error handling with retry
- Honeypot spam protection
- No dependencies beyond React
