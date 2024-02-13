const redirectForm = document.getElementById('redirect-form');
const urlInput = document.getElementById('url-input');

redirectForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const url = urlInput.value.trim();

    // Implement a robust URL validation using a regular expression
    const regexp = /^(https?:\/\/)?www\.\w+\.[\w\-]{2,4}(\/\/[\w\-\.]+\*)*(?:[^\w\-_\.]+\w+$|(\?|&)[^ ]*)$/;
    if (!regexp.test(url)) {
        alert('Invalid URL. Please enter a valid URL starting with "http://" or "https://".');
        return;
    }

    // Sanitize the URL to prevent potential redirection vulnerabilities
    const sanitizedUrl = sanitizeUrl(url); // Define the sanitizeUrl function below

    // Use window.location.href instead of window.location.replace
    // to allow users to navigate back using browser history
    window.location.href = sanitizedUrl;
});

// Your sanitizeUrl function implementation should go here:
function sanitizeUrl(url) {
    // Implement URL sanitization logic here, potentially using
    // libraries like DOMPurify to remove dangerous components
    // and ensure the destination URL is within a trusted whitelist.
    // Refer to GitHub's security documentation for best practices:
    // https://docs.github.com/en/pages/guides/security
    console.error('URL sanitization logic is not implemented. Define and return the sanitized URL in this function.');
    return url; // Placeholder, replace with sanitized URL
}
