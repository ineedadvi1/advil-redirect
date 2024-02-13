JavaScript
<script>
  const redirectForm = document.getElementById('redirect-form');
  const urlInput = document.getElementById('url-input');

  redirectForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const url = urlInput.value.trim();

    // Basic sanitization (remove leading/trailing spaces)
    const sanitizedUrl = url.trim();

    // Use window.location.href for user-friendly redirection
    window.location.href = sanitizedUrl;
  });
</script>
