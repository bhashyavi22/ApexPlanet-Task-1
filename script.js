// ===================== JAVASCRIPT INTERACTIVITY (Step 3) =====================

const btn = document.getElementById('alertBtn');
const message = document.getElementById('message');

btn.addEventListener('click', function () {
  alert('Hello! You just triggered a JavaScript event. 🎉');
  message.textContent = 'Nice click! The alert was triggered successfully.';
});
