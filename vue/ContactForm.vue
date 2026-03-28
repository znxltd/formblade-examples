<script setup>
import { ref } from 'vue';

const FORM_URL = 'https://formblade.com/f/contact';

const name = ref('');
const email = ref('');
const message = ref('');
const status = ref('idle'); // idle | sending | success | error

async function submit() {
  status.value = 'sending';
  try {
    const res = await fetch(FORM_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
      body: JSON.stringify({ name: name.value, email: email.value, message: message.value }),
    });
    status.value = res.ok ? 'success' : 'error';
    if (res.ok) { name.value = ''; email.value = ''; message.value = ''; }
  } catch {
    status.value = 'error';
  }
}
</script>

<template>
  <div v-if="status === 'success'">
    <p>Thank you! Your message has been sent.</p>
  </div>
  <form v-else @submit.prevent="submit">
    <input v-model="name" placeholder="Name" required />
    <input v-model="email" type="email" placeholder="Email" required />
    <textarea v-model="message" placeholder="Message" rows="4" required />
    <button type="submit" :disabled="status === 'sending'">
      {{ status === 'sending' ? 'Sending...' : 'Send' }}
    </button>
    <p v-if="status === 'error'" style="color: red">Something went wrong. Please try again.</p>
  </form>
</template>
