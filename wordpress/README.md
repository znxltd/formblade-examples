# WordPress Contact Form

Add a FormBlade contact form to WordPress without any plugin.

## Method 1: Custom HTML Block (easiest)

1. Edit the page where you want the form
2. Click **+** → search "HTML" → add a **Custom HTML** block
3. Paste this code:

```html
<form action="https://formblade.com/f/contact" method="POST">
  <p><label>Name<br><input type="text" name="name" required style="width:100%;padding:8px"></label></p>
  <p><label>Email<br><input type="email" name="email" required style="width:100%;padding:8px"></label></p>
  <p><label>Message<br><textarea name="message" rows="4" required style="width:100%;padding:8px"></textarea></label></p>
  <input type="text" name="_fb_hp" style="display:none" tabindex="-1">
  <p><button type="submit" style="padding:10px 20px;background:#6366f1;color:#fff;border:none;border-radius:6px;cursor:pointer">Send</button></p>
</form>
```

4. Replace `contact` with your FormBlade endpoint ID
5. Publish

## Method 2: Widget (floating button)

1. Go to **Appearance** → **Theme Editor** (or **Customize** → **Additional CSS/JS**)
2. Find `footer.php` or use a "Header/Footer Scripts" plugin
3. Paste the widget script before `</body>`:

```html
<script>
(function() {
  var FORM_URL = "https://formblade.com/f/contact";
  var btn = document.createElement("button");
  btn.textContent = "Contact Us";
  btn.style.cssText = "position:fixed;bottom:24px;right:24px;z-index:9998;padding:12px 24px;border:none;border-radius:50px;cursor:pointer;font-size:15px;font-weight:600;color:#fff;background:#6366f1;box-shadow:0 4px 12px rgba(0,0,0,0.15);";
  document.body.appendChild(btn);
  btn.onclick = function() { window.open(FORM_URL, '_blank'); };
})();
</script>
```

## Why no plugin?

FormBlade works with plain HTML. No WordPress plugin needed — just paste the code. This means:
- No plugin updates to manage
- No compatibility issues
- No performance overhead
- Works with any theme
